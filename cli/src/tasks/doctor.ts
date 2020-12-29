import { pathExists, readJSON, unlink } from '@ionic/utils-fs';
import { dirname, resolve } from 'path';

import { doctorAndroid } from '../android/doctor';
import c from '../colors';
import { selectPlatforms } from '../common';
import { CONFIG_FILE_NAME_TS, writeConfig } from '../config';
import type { Config } from '../definitions';
import { doctorIOS } from '../ios/doctor';
import { logPrompt, output } from '../log';
import { emoji as _e } from '../util/emoji';
import { resolveNode } from '../util/node';
import { getCommandOutput } from '../util/subprocess';

export async function doctorCommand(
  config: Config,
  selectedPlatformName: string,
): Promise<void> {
  output.write(
    `${_e('💊', '')}   ${c.strong('Capacitor Doctor')}  ${_e('💊', '')} \n\n`,
  );

  await doctorCore(config);

  const platforms = await selectPlatforms(config, selectedPlatformName);
  await Promise.all(
    platforms.map(platformName => {
      return doctor(config, platformName);
    }),
  );
}

export async function doctorCore(config: Config): Promise<void> {
  if (
    config.app.extConfigType === 'json' &&
    (await pathExists(config.app.extConfigFilePath))
  ) {
    const answers = await logPrompt(
      `${c.strong(
        `Switch to a ${CONFIG_FILE_NAME_TS} file for your configuration?`,
      )}\n` +
        `It looks like you're using a ${c.strong(
          config.app.extConfigName,
        )} file. As of Capacitor 3, you can use a TypeScript configuration file, which allows for autocomplete in your editor and dynamic configuration values.`,
      {
        type: 'confirm',
        name: 'confirm',
        message: 'Switch to TS configuration?',
        initial: true,
      },
    );

    if (answers.confirm) {
      const newExtConfigFilePath = resolve(
        dirname(config.app.extConfigFilePath),
        CONFIG_FILE_NAME_TS,
      );

      await writeConfig(config.app.extConfig, newExtConfigFilePath);
      await unlink(config.app.extConfigFilePath);
    }

    output.write('\n');
  }

  const [
    cliVersion,
    coreVersion,
    androidVersion,
    iosVersion,
  ] = await Promise.all([
    getCommandOutput('npm', ['info', '@capacitor/cli', 'version']),
    getCommandOutput('npm', ['info', '@capacitor/core', 'version']),
    getCommandOutput('npm', ['info', '@capacitor/android', 'version']),
    getCommandOutput('npm', ['info', '@capacitor/ios', 'version']),
  ]);

  output.write(
    `${c.strong('Latest Dependencies:')}\n\n` +
      `  @capacitor/cli: ${c.weak(cliVersion ?? 'unknown')}\n` +
      `  @capacitor/core: ${c.weak(coreVersion ?? 'unknown')}\n` +
      `  @capacitor/android: ${c.weak(androidVersion ?? 'unknown')}\n` +
      `  @capacitor/ios: ${c.weak(iosVersion ?? 'unknown')}\n\n` +
      `${c.strong('Installed Dependencies:')}\n\n`,
  );

  await printInstalledPackages(config);

  output.write('\n');
}

async function printInstalledPackages(config: Config) {
  const packageNames = [
    '@capacitor/cli',
    '@capacitor/core',
    '@capacitor/android',
    '@capacitor/ios',
  ];
  await Promise.all(
    packageNames.map(async packageName => {
      const packagePath = resolveNode(
        config.app.rootDir,
        packageName,
        'package.json',
      );
      await printPackageVersion(packageName, packagePath);
    }),
  );
}

async function printPackageVersion(
  packageName: string,
  packagePath: string | null,
) {
  let version;
  if (packagePath) {
    version = (await readJSON(packagePath)).version;
  }
  output.write(`  ${packageName}: ${c.weak(version || 'not installed')}\n`);
}

export async function doctor(
  config: Config,
  platformName: string,
): Promise<void> {
  if (platformName === config.ios.name) {
    await doctorIOS(config);
  } else if (platformName === config.android.name) {
    await doctorAndroid(config);
  } else if (platformName === config.web.name) {
    return Promise.resolve();
  } else {
    throw `Platform ${platformName} is not valid.`;
  }
}
