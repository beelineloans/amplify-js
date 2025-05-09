# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 2.2.0 (2025-05-09)

### Features

- add host to config, use in connect, subscribe, publish ([e20c614](https://github.com/aws-amplify/amplify-js/commit/e20c6145632494532580007645c87e0b8e6c31e9))

# 2.1.0 (2025-05-09)

### Bug Fixes

- Add upkeep to platform/framework caches ([#11505](https://github.com/aws-amplify/amplify-js/issues/11505)) ([03aa356](https://github.com/aws-amplify/amplify-js/commit/03aa3560e921f08717594bdf679b62501bc6de77))
- address feedbacks ([2d6eecf](https://github.com/aws-amplify/amplify-js/commit/2d6eecfa4763a6cfb6aeaabedd49a530c6420dcd))
- **auth:** correct unknownError typo ([#12634](https://github.com/aws-amplify/amplify-js/issues/12634)) ([f33cd0a](https://github.com/aws-amplify/amplify-js/commit/f33cd0aadc5d2dcb836b716dd5b0b8e5c440ffaf))
- Await network call on identifyUser APIs ([c280817](https://github.com/aws-amplify/amplify-js/commit/c280817e03a5e6ff95b32667d799eac717d4cbb4))
- **core:** add URL polyfill for signer in react native ([#11362](https://github.com/aws-amplify/amplify-js/issues/11362)) ([720ac60](https://github.com/aws-amplify/amplify-js/commit/720ac606dede7d243f3d5ce08395fc6387a6f35d))
- **core:** bundle react-native-url-polyfill to unblock jest test failure ([#11422](https://github.com/aws-amplify/amplify-js/issues/11422)) ([8137ee7](https://github.com/aws-amplify/amplify-js/commit/8137ee79ef2121ceaa6dfa1d9ce675370b38e26b))
- **deps:** fix more implicit deps and add linting ([#14137](https://github.com/aws-amplify/amplify-js/issues/14137)) ([22ca811](https://github.com/aws-amplify/amplify-js/commit/22ca811743f6729d3a00dd71726ff6b5afb44b53))
- **deps:** update AWS SDK clients with fast-xml-parser dependency ([#11181](https://github.com/aws-amplify/amplify-js/issues/11181)) ([a05e1dd](https://github.com/aws-amplify/amplify-js/commit/a05e1dd9da7fb7a65f1ad1c78886e095e21a5c5a))
- export missing output type ([#12434](https://github.com/aws-amplify/amplify-js/issues/12434)) ([9717d77](https://github.com/aws-amplify/amplify-js/commit/9717d7742a77ac2e56bdbd690d40f95f0067d8ab))
- **inapp:** make the correct isBrowser check ([#12319](https://github.com/aws-amplify/amplify-js/issues/12319)) ([5739b67](https://github.com/aws-amplify/amplify-js/commit/5739b677ac38319c3ecf6fe356ae492fbd8ce7e9))
- **inapp:** remove implemented todos and add clearMessages API ([#12405](https://github.com/aws-amplify/amplify-js/issues/12405)) ([ef40632](https://github.com/aws-amplify/amplify-js/commit/ef4063250bf2fa484a1ec3cade10d34ea39318c8))
- **inApp:** typo in error message ([#12938](https://github.com/aws-amplify/amplify-js/issues/12938)) ([ee77a41](https://github.com/aws-amplify/amplify-js/commit/ee77a41761829244861c562de3d52c9a1f7eaebc))
- **message overrides:** extract message content with Platform-Specific Overrides ([#12917](https://github.com/aws-amplify/amplify-js/issues/12917)) ([cb91437](https://github.com/aws-amplify/amplify-js/commit/cb914374263262c84c6337dddca1f17fb7dd204a))
- **notifications:** Add babel plugins to devDependencies ([#11414](https://github.com/aws-amplify/amplify-js/issues/11414)) ([a009ce8](https://github.com/aws-amplify/amplify-js/commit/a009ce8afe52ca1f2e070cf40b8eb581132b6fdd))
- **notifications:** add notifications as dependency to aws-amplify ([#12199](https://github.com/aws-amplify/amplify-js/issues/12199)) ([9743838](https://github.com/aws-amplify/amplify-js/commit/97438380688e1a4f87a7bb5b97b2612e6d718459))
- **notifications:** Duplicate types from optional packages ([#12446](https://github.com/aws-amplify/amplify-js/issues/12446)) ([#12452](https://github.com/aws-amplify/amplify-js/issues/12452)) ([6a1a0cb](https://github.com/aws-amplify/amplify-js/commit/6a1a0cb52001fb1ce6182b6a728fa515585b9b3a))
- **notifications:** Fix double registration issue ([#11155](https://github.com/aws-amplify/amplify-js/issues/11155)) ([772b561](https://github.com/aws-amplify/amplify-js/commit/772b561d2d6c6aed57aa9464c34a4d87da3f85d2))
- **notifications:** Fix permissions type ([#11237](https://github.com/aws-amplify/amplify-js/issues/11237)) ([7fe7d4e](https://github.com/aws-amplify/amplify-js/commit/7fe7d4ea9f638547cc7199cf8d02ac561d8bd7b1))
- **notifications:** Fix typing for onTokenReceived ([#11147](https://github.com/aws-amplify/amplify-js/issues/11147)) ([173fb37](https://github.com/aws-amplify/amplify-js/commit/173fb3752908221930a0b7363a54bdb3609eaf3f))
- **notifications:** Surface missing native module error ([#11208](https://github.com/aws-amplify/amplify-js/issues/11208)) ([c3d2738](https://github.com/aws-amplify/amplify-js/commit/c3d2738e6c684b177b63095daa0ff20bf384fa05))
- refactor to avoid importing from current index ([#12636](https://github.com/aws-amplify/amplify-js/issues/12636)) ([a353e0d](https://github.com/aws-amplify/amplify-js/commit/a353e0d777a1ca5e57aa4b2cda48d147ee1d4803))
- remove all existence of serviceOptions ([#12240](https://github.com/aws-amplify/amplify-js/issues/12240)) ([923fae0](https://github.com/aws-amplify/amplify-js/commit/923fae03496b835cbd4bd49d10f13744e175b080))
- Rollback the manual major version changes and change release command to increment the major versions ([#10638](https://github.com/aws-amplify/amplify-js/issues/10638)) ([660e5d9](https://github.com/aws-amplify/amplify-js/commit/660e5d9e7f18c514dc3c88322a1df6b5d5a5e796))
- Run ts coverage check with test ([#11047](https://github.com/aws-amplify/amplify-js/issues/11047)) ([430bedf](https://github.com/aws-amplify/amplify-js/commit/430bedfd0d0618bd0093b488233521356feef787))
- Standardize `cache` named export to preserve interoperability with RN ([#10546](https://github.com/aws-amplify/amplify-js/issues/10546)) ([20b096b](https://github.com/aws-amplify/amplify-js/commit/20b096b1a34e6a102d08dabcedb38772f3a6caf7))
- **storage:** Add getProperties user agent action ([#11501](https://github.com/aws-amplify/amplify-js/issues/11501)) ([019b5b1](https://github.com/aws-amplify/amplify-js/commit/019b5b1115bebc92f2c44bbf285d1d916cb08492))
- **storage:** custom client base64 encoded SSE-C headers ([#11567](https://github.com/aws-amplify/amplify-js/issues/11567)) ([ee19046](https://github.com/aws-amplify/amplify-js/commit/ee190460c01250b693c163f83be412abf3acc234))
- Update getAmplifyUserAgent to retain original interface ([#11535](https://github.com/aws-amplify/amplify-js/issues/11535)) ([dc84cc8](https://github.com/aws-amplify/amplify-js/commit/dc84cc8bfa7811b5f4f8ac2f7e5ea1b5edc54fe1))
- Wait for endpoint creation to identify user ([#13353](https://github.com/aws-amplify/amplify-js/issues/13353)) ([f17cdf0](https://github.com/aws-amplify/amplify-js/commit/f17cdf0077387ee275bea245632f1a9b88089e1e))

### Features

- add a typescript coverage report mechanism ([#10551](https://github.com/aws-amplify/amplify-js/issues/10551)) ([8e8df55](https://github.com/aws-amplify/amplify-js/commit/8e8df55b449f8bae2fe962fe282613d1b818cc5a)), closes [#10379](https://github.com/aws-amplify/amplify-js/issues/10379)
- **clients:** cognito identity client ([#11213](https://github.com/aws-amplify/amplify-js/issues/11213)) ([67e4017](https://github.com/aws-amplify/amplify-js/commit/67e40171385f02d0c9448fdc3e036d63e009ea34))
- **clients:** support CN partition by adding DNS suffix resolver ([#11311](https://github.com/aws-amplify/amplify-js/issues/11311)) ([9de2975](https://github.com/aws-amplify/amplify-js/commit/9de297519fdbaaf1e9b4ae98f12aed4137400222))
- **clients:** vendor TS types from pinpoint and cognito-identity clients ([#11393](https://github.com/aws-amplify/amplify-js/issues/11393)) ([9a8569a](https://github.com/aws-amplify/amplify-js/commit/9a8569ab98480ad96b53a7104366640c66343aa2))
- **core:** add amplifyUuid and amplifyUrl with builtin polyfill loader for RN ([a4ad9e0](https://github.com/aws-amplify/amplify-js/commit/a4ad9e09d6098a53f4530d9fa9112c81b409a605))
- **core:** API detection for 8 framework targets ([#11384](https://github.com/aws-amplify/amplify-js/issues/11384)) ([388f207](https://github.com/aws-amplify/amplify-js/commit/388f2074db0640f2d22aa7cd1a44d8eb8f2301d2))
- custom user agent core changes for UI handoff ([#11602](https://github.com/aws-amplify/amplify-js/issues/11602)) ([7365c34](https://github.com/aws-amplify/amplify-js/commit/7365c34b28015af199dbfdb3713cc26e096d1213))
- **inApp:** functional dispatchEvent & setConflictHandler APIs ([#12231](https://github.com/aws-amplify/amplify-js/issues/12231)) ([f5bcc3a](https://github.com/aws-amplify/amplify-js/commit/f5bcc3a082e5609b094c1508c434973165245472))
- **InApp:** functional identifyUser API ([#12159](https://github.com/aws-amplify/amplify-js/issues/12159)) ([b83333f](https://github.com/aws-amplify/amplify-js/commit/b83333f508c154badc4832aeaa8c5911e6716fba))
- **InApp:** functional syncMessages API ([#12145](https://github.com/aws-amplify/amplify-js/issues/12145)) ([a9c8854](https://github.com/aws-amplify/amplify-js/commit/a9c88541a8d6d406aeac93d3a45f2778017dd47b))
- **inapp:** initializeInAppMessaging API ([#12269](https://github.com/aws-amplify/amplify-js/issues/12269)) ([134f90a](https://github.com/aws-amplify/amplify-js/commit/134f90a0c6f34071b4508832ff40ee9ac3dd8afb))
- **inapp:** interaction events APIs ([#12242](https://github.com/aws-amplify/amplify-js/issues/12242)) ([62beb83](https://github.com/aws-amplify/amplify-js/commit/62beb836dc163d590b43b3319e255f8ceb0800ae))
- Integrate In-App with core session listener ([#12338](https://github.com/aws-amplify/amplify-js/issues/12338)) ([22726bb](https://github.com/aws-amplify/amplify-js/commit/22726bb4c52c5533124a6181970d4c8e9c4be2de))
- **interactions:** adapt v6 api design ([#12285](https://github.com/aws-amplify/amplify-js/issues/12285)) ([76471b6](https://github.com/aws-amplify/amplify-js/commit/76471b6488efc37d7d0bdc1feb7fcbc97334ec7c))
- **notifications:** Add additional push APIs ([#12316](https://github.com/aws-amplify/amplify-js/issues/12316)) ([10e10b1](https://github.com/aws-amplify/amplify-js/commit/10e10b1244898bb06333865dd11ab49ed804eb05))
- **notifications:** Add badge count APIs ([#11037](https://github.com/aws-amplify/amplify-js/issues/11037)) ([9a58db9](https://github.com/aws-amplify/amplify-js/commit/9a58db97a91c8429e150ada8c03d650a9f3ddb77))
- **notifications:** Add getPermissionStatus API ([#10979](https://github.com/aws-amplify/amplify-js/issues/10979)) ([80f86a7](https://github.com/aws-amplify/amplify-js/commit/80f86a79b96c23f0c21ba3ae7f611f3904d59437))
- **notifications:** Add init API ([#11067](https://github.com/aws-amplify/amplify-js/issues/11067)) ([fbdc1d5](https://github.com/aws-amplify/amplify-js/commit/fbdc1d519ce3521432011369328beaf17b281fc6))
- **notifications:** Add Notifications-level identifyUser ([#11010](https://github.com/aws-amplify/amplify-js/issues/11010)) ([8325cc7](https://github.com/aws-amplify/amplify-js/commit/8325cc72d4eaeb60b973fee2b979960d9daf9857))
- **notifications:** Add Push Notification ([#10972](https://github.com/aws-amplify/amplify-js/issues/10972)) ([97acab6](https://github.com/aws-amplify/amplify-js/commit/97acab69c6452c860af1f45fbcfda8fd80c26ca3))
- **notifications:** Refactor push notification to be functional ([#12305](https://github.com/aws-amplify/amplify-js/issues/12305)) ([8eb24ad](https://github.com/aws-amplify/amplify-js/commit/8eb24add53c0dc188d7331a9c49cd01073bbc1f5)), closes [#12301](https://github.com/aws-amplify/amplify-js/issues/12301) [#12292](https://github.com/aws-amplify/amplify-js/issues/12292) [#12276](https://github.com/aws-amplify/amplify-js/issues/12276) [#12294](https://github.com/aws-amplify/amplify-js/issues/12294) [#12310](https://github.com/aws-amplify/amplify-js/issues/12310) [#12304](https://github.com/aws-amplify/amplify-js/issues/12304)
- **notifications:** setup package structure and update V6 import paths ([#12079](https://github.com/aws-amplify/amplify-js/issues/12079)) ([798707b](https://github.com/aws-amplify/amplify-js/commit/798707bba042301d4318291127d25e40cd6bcaac))
- **repo:** set up rollup to emit esm and cjs artifacts ([#12522](https://github.com/aws-amplify/amplify-js/issues/12522)) ([903a012](https://github.com/aws-amplify/amplify-js/commit/903a0123e51f69ff3476b6b15aa89a73b750f9dc))
- **s3:** omit double encoding of path for S3 when signing ([#11538](https://github.com/aws-amplify/amplify-js/issues/11538)) ([d46d2d1](https://github.com/aws-amplify/amplify-js/commit/d46d2d1d4263e3b8bcfc03af473d7445af12e5b7))
- Upgrade TypeDoc & rebuild our API documentation ([#13012](https://github.com/aws-amplify/amplify-js/issues/13012)) ([1509592](https://github.com/aws-amplify/amplify-js/commit/1509592c017aa3e63d6c2d3a5c683f9356fb6a75))

### Reverts

- Revert "chore(release): Publish [skip release]" ([241fa11](https://github.com/aws-amplify/amplify-js/commit/241fa1105e177d9e4afe59c40ee92656b87ae542))
- Revert "chore(release): Publish" (#13027) ([f6f4f42](https://github.com/aws-amplify/amplify-js/commit/f6f4f42befa04ed3c1502fa0adf17c6700abfddf)), closes [#13027](https://github.com/aws-amplify/amplify-js/issues/13027)
- Revert "chore(repo): use typescript 5.0.2 across workspace" (#12941) ([dc04ba1](https://github.com/aws-amplify/amplify-js/commit/dc04ba18604291d9618a681e7ec4cdb801a355c8)), closes [#12941](https://github.com/aws-amplify/amplify-js/issues/12941)
- Revert "chore: Upgrade Prettier (#12582)" (#12600) ([cd937f5](https://github.com/aws-amplify/amplify-js/commit/cd937f56bef5f90a4b42638776656faf746c48aa)), closes [#12582](https://github.com/aws-amplify/amplify-js/issues/12582) [#12600](https://github.com/aws-amplify/amplify-js/issues/12600)
- Revert "feat: custom user agent Geo changes for UI handoff (#11632)" ([ba2ae71](https://github.com/aws-amplify/amplify-js/commit/ba2ae7183b096fac71e5d4ef9a5c160d11202841)), closes [#11632](https://github.com/aws-amplify/amplify-js/issues/11632)
- Revert "feat: custom user agent InAppMessaging changes for UI handoff (#11639)" ([2f0b16b](https://github.com/aws-amplify/amplify-js/commit/2f0b16bd15fea1a46a723d1ebfda00d3de2b56b0)), closes [#11639](https://github.com/aws-amplify/amplify-js/issues/11639)

## [2.0.80](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.79...@aws-amplify/notifications@2.0.80) (2025-04-28)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.79](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.78...@aws-amplify/notifications@2.0.79) (2025-04-21)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.78](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.77...@aws-amplify/notifications@2.0.78) (2025-04-09)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.77](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.76...@aws-amplify/notifications@2.0.77) (2025-03-28)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.76](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.75...@aws-amplify/notifications@2.0.76) (2025-03-25)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.75](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.74...@aws-amplify/notifications@2.0.75) (2025-03-21)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.74](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.73...@aws-amplify/notifications@2.0.74) (2025-03-14)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.73](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.72...@aws-amplify/notifications@2.0.73) (2025-03-07)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.72](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.71...@aws-amplify/notifications@2.0.72) (2025-03-05)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.71](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.70...@aws-amplify/notifications@2.0.71) (2025-02-27)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.70](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.69...@aws-amplify/notifications@2.0.70) (2025-02-20)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.69](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.68...@aws-amplify/notifications@2.0.69) (2025-02-12)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.68](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.67...@aws-amplify/notifications@2.0.68) (2025-02-04)

### Bug Fixes

- **deps:** fix more implicit deps and add linting ([#14137](https://github.com/aws-amplify/amplify-js/issues/14137)) ([22ca811](https://github.com/aws-amplify/amplify-js/commit/22ca811743f6729d3a00dd71726ff6b5afb44b53))

## [2.0.67](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.66...@aws-amplify/notifications@2.0.67) (2025-01-24)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.66](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.65...@aws-amplify/notifications@2.0.66) (2025-01-14)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.65](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.64...@aws-amplify/notifications@2.0.65) (2025-01-03)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.64](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.63...@aws-amplify/notifications@2.0.64) (2024-12-19)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.63](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.62...@aws-amplify/notifications@2.0.63) (2024-12-12)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.62](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.61...@aws-amplify/notifications@2.0.62) (2024-12-03)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.61](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.60...@aws-amplify/notifications@2.0.61) (2024-12-03)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.60](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.59...@aws-amplify/notifications@2.0.60) (2024-11-25)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.59](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.58...@aws-amplify/notifications@2.0.59) (2024-11-20)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.58](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.57...@aws-amplify/notifications@2.0.58) (2024-11-13)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.57](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.56...@aws-amplify/notifications@2.0.57) (2024-11-12)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.56](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.55...@aws-amplify/notifications@2.0.56) (2024-10-31)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.55](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.54...@aws-amplify/notifications@2.0.55) (2024-10-29)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.54](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.53...@aws-amplify/notifications@2.0.54) (2024-10-25)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.53](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.52...@aws-amplify/notifications@2.0.53) (2024-10-21)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.52](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.51...@aws-amplify/notifications@2.0.52) (2024-10-15)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.51](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.50...@aws-amplify/notifications@2.0.51) (2024-10-05)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.50](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.49...@aws-amplify/notifications@2.0.50) (2024-09-30)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.49](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.48...@aws-amplify/notifications@2.0.49) (2024-09-17)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.48](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.47...@aws-amplify/notifications@2.0.48) (2024-09-16)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.47](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.46...@aws-amplify/notifications@2.0.47) (2024-09-04)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.46](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.45...@aws-amplify/notifications@2.0.46) (2024-09-03)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.45](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.44...@aws-amplify/notifications@2.0.45) (2024-08-26)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.44](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.43...@aws-amplify/notifications@2.0.44) (2024-08-21)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.43](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.42...@aws-amplify/notifications@2.0.43) (2024-08-15)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.42](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.41...@aws-amplify/notifications@2.0.42) (2024-08-07)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.41](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.40...@aws-amplify/notifications@2.0.41) (2024-08-05)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.40](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.39...@aws-amplify/notifications@2.0.40) (2024-07-23)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.39](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.38...@aws-amplify/notifications@2.0.39) (2024-07-22)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.38](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.37...@aws-amplify/notifications@2.0.38) (2024-07-19)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.37](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.36...@aws-amplify/notifications@2.0.37) (2024-07-08)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.36](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.35...@aws-amplify/notifications@2.0.36) (2024-06-24)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.35](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.34...@aws-amplify/notifications@2.0.35) (2024-06-07)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.34](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.33...@aws-amplify/notifications@2.0.34) (2024-06-04)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.33](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.32...@aws-amplify/notifications@2.0.33) (2024-05-23)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.32](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.31...@aws-amplify/notifications@2.0.32) (2024-05-23)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.31](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.30...@aws-amplify/notifications@2.0.31) (2024-05-13)

### Bug Fixes

- Wait for endpoint creation to identify user ([#13353](https://github.com/aws-amplify/amplify-js/issues/13353)) ([f17cdf0](https://github.com/aws-amplify/amplify-js/commit/f17cdf0077387ee275bea245632f1a9b88089e1e))

## [2.0.30](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.29...@aws-amplify/notifications@2.0.30) (2024-05-07)

### Bug Fixes

- Await network call on identifyUser APIs ([c280817](https://github.com/aws-amplify/amplify-js/commit/c280817e03a5e6ff95b32667d799eac717d4cbb4))

## [2.0.29](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.28...@aws-amplify/notifications@2.0.29) (2024-04-29)

**Note:** Version bump only for package @aws-amplify/notifications

## [2.0.28](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@2.0.27...@aws-amplify/notifications@2.0.28) (2024-04-22)

### Bug Fixes

- **message overrides:** extract message content with Platform-Specific Overrides ([#12917](https://github.com/aws-amplify/amplify-js/issues/12917)) ([cb91437](https://github.com/aws-amplify/amplify-js/commit/cb914374263262c84c6337dddca1f17fb7dd204a))

## 2.0.27 (2024-04-02)

**Note:** Version bump only for package @aws-amplify/notifications

## 2.0.26 (2024-04-01)

**Note:** Version bump only for package @aws-amplify/notifications

## 2.0.25 (2024-03-30)

**Note:** Version bump only for package @aws-amplify/notifications

## 2.0.24 (2024-03-29)

**Note:** Version bump only for package @aws-amplify/notifications

## 2.0.23 (2024-03-25)

**Note:** Version bump only for package @aws-amplify/notifications

## 2.0.22 (2024-03-25)

**Note:** Version bump only for package @aws-amplify/notifications

## 2.0.21 (2024-03-19)

**Note:** Version bump only for package @aws-amplify/notifications

## 2.0.20 (2024-03-11)

**Note:** Version bump only for package @aws-amplify/notifications

## 2.0.19 (2024-03-05)

**Note:** Version bump only for package @aws-amplify/notifications

## 2.0.18 (2024-02-27)

**Note:** Version bump only for package @aws-amplify/notifications

## 2.0.17 (2024-02-19)

### Reverts

- Revert "chore(release): Publish" (#13027) ([f6f4f42](https://github.com/aws-amplify/amplify-js/commit/f6f4f42befa04ed3c1502fa0adf17c6700abfddf)), closes [#13027](https://github.com/aws-amplify/amplify-js/issues/13027)

## 2.0.16 (2024-02-09)

**Note:** Version bump only for package @aws-amplify/notifications

## 2.0.15 (2024-02-06)

**Note:** Version bump only for package @aws-amplify/notifications

## 2.0.14 (2024-02-01)

**Note:** Version bump only for package @aws-amplify/notifications

## 2.0.13 (2024-01-22)

**Note:** Version bump only for package @aws-amplify/notifications

## 2.0.12 (2024-01-12)

**Note:** Version bump only for package @aws-amplify/notifications

## 2.0.11 (2024-01-10)

**Note:** Version bump only for package @aws-amplify/notifications

## 2.0.10 (2024-01-04)

**Note:** Version bump only for package @aws-amplify/notifications

## 2.0.9 (2023-12-22)

**Note:** Version bump only for package @aws-amplify/notifications

## 2.0.8 (2023-12-18)

**Note:** Version bump only for package @aws-amplify/notifications

## 2.0.7 (2023-12-12)

**Note:** Version bump only for package @aws-amplify/notifications

## 2.0.6 (2023-12-05)

**Note:** Version bump only for package @aws-amplify/notifications

## 2.0.5 (2023-11-22)

**Note:** Version bump only for package @aws-amplify/notifications

## 2.0.4 (2023-11-20)

**Note:** Version bump only for package @aws-amplify/notifications

## 2.0.3 (2023-11-16)

**Note:** Version bump only for package @aws-amplify/notifications

## 2.0.2 (2023-11-13)

**Note:** Version bump only for package @aws-amplify/notifications

## 1.6.4 (2023-08-23)

**Note:** Version bump only for package @aws-amplify/notifications

## 1.6.3 (2023-08-22)

**Note:** Version bump only for package @aws-amplify/notifications

## 1.6.2 (2023-08-17)

**Note:** Version bump only for package @aws-amplify/notifications

## 1.6.1 (2023-08-10)

**Note:** Version bump only for package @aws-amplify/notifications

# [1.6.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.5.0...@aws-amplify/notifications@1.6.0) (2023-07-31)

### Features

- custom user agent Geo changes for UI handoff ([#11632](https://github.com/aws-amplify/amplify-js/issues/11632)) ([01bfa8f](https://github.com/aws-amplify/amplify-js/commit/01bfa8f692737bd14422f7dc2eae11ed00c19048))
- custom user agent InAppMessaging changes for UI handoff ([#11639](https://github.com/aws-amplify/amplify-js/issues/11639)) ([4d389da](https://github.com/aws-amplify/amplify-js/commit/4d389da22c9f39d5a5d7cd6df9116327a9d6a04e))

# [1.5.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.4.0...@aws-amplify/notifications@1.5.0) (2023-07-20)

### Features

- custom user agent core changes for UI handoff ([#11602](https://github.com/aws-amplify/amplify-js/issues/11602)) ([7365c34](https://github.com/aws-amplify/amplify-js/commit/7365c34b28015af199dbfdb3713cc26e096d1213))

# [1.4.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.3.2...@aws-amplify/notifications@1.4.0) (2023-07-13)

### Bug Fixes

- **storage:** custom client base64 encoded SSE-C headers ([#11567](https://github.com/aws-amplify/amplify-js/issues/11567)) ([ee19046](https://github.com/aws-amplify/amplify-js/commit/ee190460c01250b693c163f83be412abf3acc234))

### Features

- **s3:** omit double encoding of path for S3 when signing ([#11538](https://github.com/aws-amplify/amplify-js/issues/11538)) ([d46d2d1](https://github.com/aws-amplify/amplify-js/commit/d46d2d1d4263e3b8bcfc03af473d7445af12e5b7))

## [1.3.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.3.1...@aws-amplify/notifications@1.3.2) (2023-06-28)

**Note:** Version bump only for package @aws-amplify/notifications

## [1.3.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.3.0...@aws-amplify/notifications@1.3.1) (2023-06-21)

### Bug Fixes

- Update getAmplifyUserAgent to retain original interface ([#11535](https://github.com/aws-amplify/amplify-js/issues/11535)) ([dc84cc8](https://github.com/aws-amplify/amplify-js/commit/dc84cc8bfa7811b5f4f8ac2f7e5ea1b5edc54fe1))

# [1.3.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.2.0...@aws-amplify/notifications@1.3.0) (2023-06-20)

### Bug Fixes

- Add upkeep to platform/framework caches ([#11505](https://github.com/aws-amplify/amplify-js/issues/11505)) ([03aa356](https://github.com/aws-amplify/amplify-js/commit/03aa3560e921f08717594bdf679b62501bc6de77))
- **storage:** Add getProperties user agent action ([#11501](https://github.com/aws-amplify/amplify-js/issues/11501)) ([019b5b1](https://github.com/aws-amplify/amplify-js/commit/019b5b1115bebc92f2c44bbf285d1d916cb08492))

### Features

- **core:** API detection for 8 framework targets ([#11384](https://github.com/aws-amplify/amplify-js/issues/11384)) ([388f207](https://github.com/aws-amplify/amplify-js/commit/388f2074db0640f2d22aa7cd1a44d8eb8f2301d2))

# [1.2.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.1.7...@aws-amplify/notifications@1.2.0) (2023-06-05)

### Bug Fixes

- address feedbacks ([2d6eecf](https://github.com/aws-amplify/amplify-js/commit/2d6eecfa4763a6cfb6aeaabedd49a530c6420dcd))

### Features

- **clients:** cognito identity client ([#11213](https://github.com/aws-amplify/amplify-js/issues/11213)) ([67e4017](https://github.com/aws-amplify/amplify-js/commit/67e40171385f02d0c9448fdc3e036d63e009ea34))
- **clients:** support CN partition by adding DNS suffix resolver ([#11311](https://github.com/aws-amplify/amplify-js/issues/11311)) ([9de2975](https://github.com/aws-amplify/amplify-js/commit/9de297519fdbaaf1e9b4ae98f12aed4137400222))
- **clients:** vendor TS types from pinpoint and cognito-identity clients ([#11393](https://github.com/aws-amplify/amplify-js/issues/11393)) ([9a8569a](https://github.com/aws-amplify/amplify-js/commit/9a8569ab98480ad96b53a7104366640c66343aa2))

## [1.1.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.1.6...@aws-amplify/notifications@1.1.7) (2023-05-27)

### Bug Fixes

- **core:** bundle react-native-url-polyfill to unblock jest test failure ([#11422](https://github.com/aws-amplify/amplify-js/issues/11422)) ([8137ee7](https://github.com/aws-amplify/amplify-js/commit/8137ee79ef2121ceaa6dfa1d9ce675370b38e26b))
- **notifications:** Add babel plugins to devDependencies ([#11414](https://github.com/aws-amplify/amplify-js/issues/11414)) ([a009ce8](https://github.com/aws-amplify/amplify-js/commit/a009ce8afe52ca1f2e070cf40b8eb581132b6fdd))

## [1.1.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.1.5...@aws-amplify/notifications@1.1.6) (2023-05-12)

### Bug Fixes

- **core:** add URL polyfill for signer in react native ([#11362](https://github.com/aws-amplify/amplify-js/issues/11362)) ([720ac60](https://github.com/aws-amplify/amplify-js/commit/720ac606dede7d243f3d5ce08395fc6387a6f35d))

## [1.1.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.1.4...@aws-amplify/notifications@1.1.5) (2023-05-04)

**Note:** Version bump only for package @aws-amplify/notifications

## [1.1.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.1.3...@aws-amplify/notifications@1.1.4) (2023-04-27)

**Note:** Version bump only for package @aws-amplify/notifications

## [1.1.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.1.2...@aws-amplify/notifications@1.1.3) (2023-04-20)

**Note:** Version bump only for package @aws-amplify/notifications

## [1.1.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.1.1...@aws-amplify/notifications@1.1.2) (2023-04-18)

**Note:** Version bump only for package @aws-amplify/notifications

## [1.1.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.1.0...@aws-amplify/notifications@1.1.1) (2023-04-13)

### Bug Fixes

- **notifications:** Fix permissions type ([#11237](https://github.com/aws-amplify/amplify-js/issues/11237)) ([7fe7d4e](https://github.com/aws-amplify/amplify-js/commit/7fe7d4ea9f638547cc7199cf8d02ac561d8bd7b1))

# [1.1.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.0.25...@aws-amplify/notifications@1.1.0) (2023-04-12)

### Bug Fixes

- **notifications:** Fix double registration issue ([#11155](https://github.com/aws-amplify/amplify-js/issues/11155)) ([772b561](https://github.com/aws-amplify/amplify-js/commit/772b561d2d6c6aed57aa9464c34a4d87da3f85d2))
- **notifications:** Fix typing for onTokenReceived ([#11147](https://github.com/aws-amplify/amplify-js/issues/11147)) ([173fb37](https://github.com/aws-amplify/amplify-js/commit/173fb3752908221930a0b7363a54bdb3609eaf3f))
- **notifications:** Surface missing native module error ([#11208](https://github.com/aws-amplify/amplify-js/issues/11208)) ([c3d2738](https://github.com/aws-amplify/amplify-js/commit/c3d2738e6c684b177b63095daa0ff20bf384fa05))

### Features

- **notifications:** Add badge count APIs ([#11037](https://github.com/aws-amplify/amplify-js/issues/11037)) ([9a58db9](https://github.com/aws-amplify/amplify-js/commit/9a58db97a91c8429e150ada8c03d650a9f3ddb77))
- **notifications:** Add getPermissionStatus API ([#10979](https://github.com/aws-amplify/amplify-js/issues/10979)) ([80f86a7](https://github.com/aws-amplify/amplify-js/commit/80f86a79b96c23f0c21ba3ae7f611f3904d59437))
- **notifications:** Add init API ([#11067](https://github.com/aws-amplify/amplify-js/issues/11067)) ([fbdc1d5](https://github.com/aws-amplify/amplify-js/commit/fbdc1d519ce3521432011369328beaf17b281fc6))
- **notifications:** Add Notifications-level identifyUser ([#11010](https://github.com/aws-amplify/amplify-js/issues/11010)) ([8325cc7](https://github.com/aws-amplify/amplify-js/commit/8325cc72d4eaeb60b973fee2b979960d9daf9857))
- **notifications:** Add Push Notification ([#10972](https://github.com/aws-amplify/amplify-js/issues/10972)) ([97acab6](https://github.com/aws-amplify/amplify-js/commit/97acab69c6452c860af1f45fbcfda8fd80c26ca3))

## [1.0.25](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.0.24...@aws-amplify/notifications@1.0.25) (2023-04-06)

**Note:** Version bump only for package @aws-amplify/notifications

## [1.0.24](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.0.23...@aws-amplify/notifications@1.0.24) (2023-04-04)

### Bug Fixes

- **deps:** update AWS SDK clients with fast-xml-parser dependency ([#11181](https://github.com/aws-amplify/amplify-js/issues/11181)) ([a05e1dd](https://github.com/aws-amplify/amplify-js/commit/a05e1dd9da7fb7a65f1ad1c78886e095e21a5c5a))

## [1.0.23](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.0.22...@aws-amplify/notifications@1.0.23) (2023-03-30)

**Note:** Version bump only for package @aws-amplify/notifications

## [1.0.22](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.0.21...@aws-amplify/notifications@1.0.22) (2023-03-23)

**Note:** Version bump only for package @aws-amplify/notifications

## [1.0.21](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.0.20...@aws-amplify/notifications@1.0.21) (2023-03-21)

**Note:** Version bump only for package @aws-amplify/notifications

## [1.0.20](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.0.19...@aws-amplify/notifications@1.0.20) (2023-03-16)

**Note:** Version bump only for package @aws-amplify/notifications

## [1.0.19](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.0.18...@aws-amplify/notifications@1.0.19) (2023-03-13)

### Bug Fixes

- Run ts coverage check with test ([#11047](https://github.com/aws-amplify/amplify-js/issues/11047)) ([430bedf](https://github.com/aws-amplify/amplify-js/commit/430bedfd0d0618bd0093b488233521356feef787))

## [1.0.18](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.0.17...@aws-amplify/notifications@1.0.18) (2023-03-08)

**Note:** Version bump only for package @aws-amplify/notifications

## [1.0.17](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.0.16...@aws-amplify/notifications@1.0.17) (2023-03-06)

**Note:** Version bump only for package @aws-amplify/notifications

## [1.0.16](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.0.15...@aws-amplify/notifications@1.0.16) (2023-02-24)

**Note:** Version bump only for package @aws-amplify/notifications

## [1.0.15](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.0.14...@aws-amplify/notifications@1.0.15) (2023-02-16)

**Note:** Version bump only for package @aws-amplify/notifications

## [1.0.14](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.0.13...@aws-amplify/notifications@1.0.14) (2023-02-09)

**Note:** Version bump only for package @aws-amplify/notifications

## [1.0.13](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.0.12...@aws-amplify/notifications@1.0.13) (2023-02-08)

**Note:** Version bump only for package @aws-amplify/notifications

## [1.0.12](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.0.11...@aws-amplify/notifications@1.0.12) (2023-01-30)

**Note:** Version bump only for package @aws-amplify/notifications

## [1.0.11](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.0.10...@aws-amplify/notifications@1.0.11) (2023-01-19)

**Note:** Version bump only for package @aws-amplify/notifications

## [1.0.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.0.9...@aws-amplify/notifications@1.0.10) (2023-01-13)

**Note:** Version bump only for package @aws-amplify/notifications

## [1.0.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.0.8...@aws-amplify/notifications@1.0.9) (2023-01-10)

**Note:** Version bump only for package @aws-amplify/notifications

## [1.0.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.0.7...@aws-amplify/notifications@1.0.8) (2022-12-27)

**Note:** Version bump only for package @aws-amplify/notifications

## [1.0.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.0.6...@aws-amplify/notifications@1.0.7) (2022-12-16)

**Note:** Version bump only for package @aws-amplify/notifications

## [1.0.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.0.5...@aws-amplify/notifications@1.0.6) (2022-12-15)

**Note:** Version bump only for package @aws-amplify/notifications

## [1.0.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.0.4...@aws-amplify/notifications@1.0.5) (2022-12-06)

**Note:** Version bump only for package @aws-amplify/notifications

## [1.0.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.0.3...@aws-amplify/notifications@1.0.4) (2022-11-23)

**Note:** Version bump only for package @aws-amplify/notifications

## [1.0.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.0.2...@aws-amplify/notifications@1.0.3) (2022-11-19)

**Note:** Version bump only for package @aws-amplify/notifications

## [1.0.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.0.1...@aws-amplify/notifications@1.0.2) (2022-11-16)

**Note:** Version bump only for package @aws-amplify/notifications

## [1.0.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/notifications@1.0.0...@aws-amplify/notifications@1.0.1) (2022-11-11)

**Note:** Version bump only for package @aws-amplify/notifications

# 1.0.0 (2022-11-09)

### Features

- First release of the `notifications` category ([#10430](https://github.com/aws-amplify/amplify-js/pull/10430))
