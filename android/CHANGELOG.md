# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.0.0-alpha.12](https://github.com/ionic-team/capacitor/compare/3.0.0-alpha.11...3.0.0-alpha.12) (2021-01-08)


### Features

* **android:** switch to new callback-style permission requests ([#4033](https://github.com/ionic-team/capacitor/issues/4033)) ([cc459de](https://github.com/ionic-team/capacitor/commit/cc459de7fc070c0227e066f3e8b92062728ab45d))





# [3.0.0-alpha.11](https://github.com/ionic-team/capacitor/compare/3.0.0-alpha.10...3.0.0-alpha.11) (2020-12-26)


### Features

* **android:** expose CapConfig.loadDefault(), deprecate v2 constructor ([#3964](https://github.com/ionic-team/capacitor/issues/3964)) ([94ae977](https://github.com/ionic-team/capacitor/commit/94ae9774d2467fa7ba0336e7183f6d28cae45908))





# [3.0.0-alpha.10](https://github.com/ionic-team/capacitor/compare/3.0.0-alpha.9...3.0.0-alpha.10) (2020-12-15)


### Bug Fixes

* **android:** include lint.xml for downstream lint tasks ([efa72f3](https://github.com/ionic-team/capacitor/commit/efa72f38c5f64d3b91cc4c4c7d4d87ab38219893))





# [3.0.0-alpha.9](https://github.com/ionic-team/capacitor/compare/3.0.0-alpha.8...3.0.0-alpha.9) (2020-12-15)


### Bug Fixes

* **android:** include lint-baseline.xml for downstream lint tasks ([20ccaa0](https://github.com/ionic-team/capacitor/commit/20ccaa0311dcf8468019325ad976156d92ed0202))





# [3.0.0-alpha.8](https://github.com/ionic-team/capacitor/compare/3.0.0-alpha.7...3.0.0-alpha.8) (2020-12-15)


### Bug Fixes

* **Android:** Use plugin's getPermissionStates() to support overriding ([#3939](https://github.com/ionic-team/capacitor/issues/3939)) ([855a607](https://github.com/ionic-team/capacitor/commit/855a60711bcf6cff3215a36fac7e5314a2c4d159))


### Features

* **android:** add onConfigurationChanged() activity lifecycle hook ([#3936](https://github.com/ionic-team/capacitor/issues/3936)) ([29e9e2c](https://github.com/ionic-team/capacitor/commit/29e9e2c5c30f23eb3ea2e88b1427eed0636e8125))
* **android:** Add WebColor utility for parsing color ([#3947](https://github.com/ionic-team/capacitor/issues/3947)) ([3746404](https://github.com/ionic-team/capacitor/commit/3746404240459ca9ea8175f2bb241d80746e8328))
* **Android:** Refactoring configuration ([#3778](https://github.com/ionic-team/capacitor/issues/3778)) ([9820a30](https://github.com/ionic-team/capacitor/commit/9820a30688f0a774eced1676f1927cacde53301f))



# [3.0.0-alpha.7](https://github.com/ionic-team/capacitor/compare/3.0.0-alpha.6...3.0.0-alpha.7) (2020-12-02)


### Bug Fixes

* **android:** dont release calls that are manually saved, eg listeners/watchers ([#3857](https://github.com/ionic-team/capacitor/issues/3857)) ([f1c8fe9](https://github.com/ionic-team/capacitor/commit/f1c8fe9e039d25eff2122fe915f17e84477427eb))
* **android:** fixed breaking change to `handleOnActivityResult` ([#3888](https://github.com/ionic-team/capacitor/issues/3888)) ([5fd60e6](https://github.com/ionic-team/capacitor/commit/5fd60e607b79b46cec08c6af1674305b1199d0a4))
* **android:** resolve undefined for both checkPermissions and requestPermissions by default ([#3855](https://github.com/ionic-team/capacitor/issues/3855)) ([383f62b](https://github.com/ionic-team/capacitor/commit/383f62b2b6531c579aac469e29b7c1c0c1f7540f))


### Features

* automatically import Android plugins ([#3788](https://github.com/ionic-team/capacitor/issues/3788)) ([aa1e1c6](https://github.com/ionic-team/capacitor/commit/aa1e1c604e260cc8babb0e7f5230f692bdcf6f09))
* **android:** Add handlePermissions function for plugins to call ([#3768](https://github.com/ionic-team/capacitor/issues/3768)) ([3a7e282](https://github.com/ionic-team/capacitor/commit/3a7e282a7515784dd343bbf1e3d52e0299bac887))
* **android:** modified plugin annotation format for multi-permissions and empty (auto-grant) ([#3822](https://github.com/ionic-team/capacitor/issues/3822)) ([1b5a3bd](https://github.com/ionic-team/capacitor/commit/1b5a3bdeb1b35612cf04e58bdf2fca68a0832a14))



# [3.0.0-alpha.6](https://github.com/ionic-team/capacitor/compare/3.0.0-alpha.5...3.0.0-alpha.6) (2020-10-30)


### Bug Fixes

* **android:** avoid crash on input file capture ([#3715](https://github.com/ionic-team/capacitor/issues/3715)) ([f502a99](https://github.com/ionic-team/capacitor/commit/f502a9964e28012980d636014043e86e918031d7))


### Features

* improve permissions ([eec61a6](https://github.com/ionic-team/capacitor/commit/eec61a6d8d8edfe94aea1a361787d1e6c736e20d))
* unified errors and error codes ([#3673](https://github.com/ionic-team/capacitor/issues/3673)) ([f9e0803](https://github.com/ionic-team/capacitor/commit/f9e08038aa88f7453e8235f380d2767a12a7a073))





# [3.0.0-alpha.5](https://github.com/ionic-team/capacitor/compare/3.0.0-alpha.4...3.0.0-alpha.5) (2020-10-06)

**Note:** Version bump only for package @capacitor/android



# [3.0.0-alpha.4](https://github.com/ionic-team/capacitor/compare/3.0.0-alpha.3...3.0.0-alpha.4) (2020-09-23)

**Note:** Version bump only for package @capacitor/android



# [3.0.0-alpha.3](https://github.com/ionic-team/capacitor/compare/3.0.0-alpha.2...3.0.0-alpha.3) (2020-09-15)


**Note:** Version bump only for package @capacitor/android



# [3.0.0-alpha.2](https://github.com/ionic-team/capacitor/compare/3.0.0-alpha.1...3.0.0-alpha.2) (2020-08-31)

**Note:** Version bump only for package @capacitor/android




# [3.0.0-alpha.1](https://github.com/ionic-team/capacitor/compare/2.4.0...3.0.0-alpha.1) (2020-08-21)



# [3.0.0-alpha.0](https://github.com/ionic-team/capacitor/compare/2.3.0...3.0.0-alpha.0) (2020-07-23)


### Features

* **android:** add custom plugins to BridgeFragment ([#3280](https://github.com/ionic-team/capacitor/issues/3280)) ([d131a5f](https://github.com/ionic-team/capacitor/commit/d131a5fed2b9ae29b6952397ec2f81104545b749))
