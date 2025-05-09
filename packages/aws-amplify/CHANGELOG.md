# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 6.15.0 (2025-05-09)

### Features

- add host to config, use in connect, subscribe, publish ([e20c614](https://github.com/aws-amplify/amplify-js/commit/e20c6145632494532580007645c87e0b8e6c31e9))

# 6.15.0 (2025-05-09)

### Bug Fixes

- [#4311](https://github.com/aws-amplify/amplify-js/issues/4311) Update main entry field to point to CJS builds instead of webpack bundles ([#4678](https://github.com/aws-amplify/amplify-js/issues/4678)) ([54fbdf4](https://github.com/aws-amplify/amplify-js/commit/54fbdf4b1393567735fb7b5f4144db273f1a5f6a))
- **@aws-amplify/datastore:** DataStore regression with AsyncStorage ([#6712](https://github.com/aws-amplify/amplify-js/issues/6712)) ([7059556](https://github.com/aws-amplify/amplify-js/commit/7059556f693b4a52143ecaa9934a14f7195caee8))
- **@aws-amplify/datastore:** export SortDirection and syncExpression from aws-amplify ([#7104](https://github.com/aws-amplify/amplify-js/issues/7104)) ([8b3183f](https://github.com/aws-amplify/amplify-js/commit/8b3183f4d2ec7289044e2b6700e3ff4df3f98ce4))
- **adapter-nextjs:** create jwt verifier once ([#13825](https://github.com/aws-amplify/amplify-js/issues/13825)) ([88f9eef](https://github.com/aws-amplify/amplify-js/commit/88f9eef11f143663da4a5abbff1098b3a1dd704a))
- **analytics:** add kinesis module export in package aws-amplify ([ac5fee6](https://github.com/aws-amplify/amplify-js/commit/ac5fee6ddc177e623ddd681f493ecb960122f78b))
- **api-graphql:** custom types support ([#12750](https://github.com/aws-amplify/amplify-js/issues/12750)) ([7d95fa1](https://github.com/aws-amplify/amplify-js/commit/7d95fa1c2cfdeef75e71a235dbfc616b44773d75))
- **api-graphql:** deep multi-level selectionSet resolution ([#12701](https://github.com/aws-amplify/amplify-js/issues/12701)) ([4a3a756](https://github.com/aws-amplify/amplify-js/commit/4a3a756ddd24ae0f19b7d4749bd91f1d97c6d942))
- **api-graphql:** events url pattern; non-retryable error handling ([#13970](https://github.com/aws-amplify/amplify-js/issues/13970)) ([e0fdeb7](https://github.com/aws-amplify/amplify-js/commit/e0fdeb7bcbb24822607267b08b2919af5e73f2db))
- **api-graphql:** generate client.models has no properties ([#12935](https://github.com/aws-amplify/amplify-js/issues/12935)) ([5e30055](https://github.com/aws-amplify/amplify-js/commit/5e30055971598cb4972a5c913af906e86c16cd3f))
- **api-graphql:** incorrect list sk arg type ([#13249](https://github.com/aws-amplify/amplify-js/issues/13249)) ([f37faeb](https://github.com/aws-amplify/amplify-js/commit/f37faebacddeed66ce5bc1d7f78b8d1d46aecb17))
- **api-graphql:** update error handling ([#13177](https://github.com/aws-amplify/amplify-js/issues/13177)) ([d4a48f1](https://github.com/aws-amplify/amplify-js/commit/d4a48f1ace550bf478ebbfa41bca8b83d7dd52e4))
- **api:** issue 12756 by exporting CONNECTION_STATE_CHANGE as a value ([#12757](https://github.com/aws-amplify/amplify-js/issues/12757)) ([bedbdbd](https://github.com/aws-amplify/amplify-js/commit/bedbdbdca2cba466bcce3a06942dd644a5ee08dd))
- **API:** query string for non signed requests ([#801](https://github.com/aws-amplify/amplify-js/issues/801)) ([6746368](https://github.com/aws-amplify/amplify-js/commit/6746368507361e7e69c6a5bc627ca92f49971956))
- **auth:** dispatch signInWithRedirect error ([#12653](https://github.com/aws-amplify/amplify-js/issues/12653)) ([271546d](https://github.com/aws-amplify/amplify-js/commit/271546de73cbbc8958ccd107a30bd5465ed01740))
- **auth:** improve error handling while refreshing auth tokens ([#12802](https://github.com/aws-amplify/amplify-js/issues/12802)) ([d0911f5](https://github.com/aws-amplify/amplify-js/commit/d0911f5f9108f224627491738c2eb7461af0639c))
- **auth:** Setting Store Tokens should only clear tokens that no longer have a value ([#13584](https://github.com/aws-amplify/amplify-js/issues/13584)) ([3606482](https://github.com/aws-amplify/amplify-js/commit/3606482c980766466f2c3f27bd4887c550897c26))
- **auth:** use base64Encoder instead of smithy base64 tool ([9af9114](https://github.com/aws-amplify/amplify-js/commit/9af91141e5fb0ed459aa95916124432124be9407))
- **auth:** vend the helpful types for custom providers ([#12497](https://github.com/aws-amplify/amplify-js/issues/12497)) ([875e28a](https://github.com/aws-amplify/amplify-js/commit/875e28aeca78b65cc391d82226eba58910978866))
- **aws-amplify:** add DataStore export ([#5421](https://github.com/aws-amplify/amplify-js/issues/5421)) ([7cab470](https://github.com/aws-amplify/amplify-js/commit/7cab47085520534327f30b531d3fb0400cc07dac))
- **aws-amplify:** cookie store is not used for identity store in SSR ([#14326](https://github.com/aws-amplify/amplify-js/issues/14326)) ([42f6332](https://github.com/aws-amplify/amplify-js/commit/42f6332678b8c1670becf5fa5ce98daeb602ed9f))
- **aws-amplify:** createKeyValueStorageFromCookieStorageAdapter misses default path and secure values ([#13508](https://github.com/aws-amplify/amplify-js/issues/13508)) ([60a559f](https://github.com/aws-amplify/amplify-js/commit/60a559f612e092c76e1499f93547248312db46f2))
- **aws-amplify:** delete unused AmazonAIPredictionsProvider import ([#4629](https://github.com/aws-amplify/amplify-js/issues/4629)) ([8781ce4](https://github.com/aws-amplify/amplify-js/commit/8781ce4b5139a9b55f39f59bb31e204bdbb2c8bc))
- **aws-amplify:** destroyAmplifyServerContext may not be called ([#12608](https://github.com/aws-amplify/amplify-js/issues/12608)) ([4ac6d53](https://github.com/aws-amplify/amplify-js/commit/4ac6d538b29cb2ad5109e41b5b4df80e5e05e2cb))
- **aws-amplify:** export AnalyticsProvider ([#8936](https://github.com/aws-amplify/amplify-js/issues/8936)) ([41664c3](https://github.com/aws-amplify/amplify-js/commit/41664c36d7cd7249ddcdf421490d6501c4248f3c))
- **aws-amplify:** Fix missing ServiceWorker export ([acbf754](https://github.com/aws-amplify/amplify-js/commit/acbf754d373f99052652a8711a06bccb1d5d1ff5))
- **aws-amplify:** Fix remove side effect ([#10611](https://github.com/aws-amplify/amplify-js/issues/10611)) ([f8162de](https://github.com/aws-amplify/amplify-js/commit/f8162de66e40f523e4481ce5bfcd3ca7ba80cc09))
- **aws-amplify:** manual version bumps for lerna issue ([9ce5a72](https://github.com/aws-amplify/amplify-js/commit/9ce5a720a659ee01857feadc12f169fdc1c8cbaa))
- **aws-amplify:** preserve default auth providers with repetitive calls of configure ([#12478](https://github.com/aws-amplify/amplify-js/issues/12478)) ([aaa7e98](https://github.com/aws-amplify/amplify-js/commit/aaa7e9841a804f88fbf6fbc95ede8117ae198508))
- **aws-amplify:** server export path ([#12210](https://github.com/aws-amplify/amplify-js/issues/12210)) ([f92387f](https://github.com/aws-amplify/amplify-js/commit/f92387f5a7bb7bc8d041b685b5b49e6c6e56cdd9))
- **aws-amplify:** set correct expires value to the client cookie store ([fad9e6d](https://github.com/aws-amplify/amplify-js/commit/fad9e6d32c4cd82f3179ae0c0f8584ded2736ecd))
- build, test issues ([31820a3](https://github.com/aws-amplify/amplify-js/commit/31820a35719a50695ecc0a92b282af9f27b34e28))
- bump package versions ([#13254](https://github.com/aws-amplify/amplify-js/issues/13254)) ([aa490b9](https://github.com/aws-amplify/amplify-js/commit/aa490b9bcbd2a442d9726937cfa59ef8b7859306))
- bumping version for deploying on unstable tag ([#1706](https://github.com/aws-amplify/amplify-js/issues/1706)) ([b5d6468](https://github.com/aws-amplify/amplify-js/commit/b5d646875cf0121ca0bfac7897cde0852ca0a65f))
- **cache:** export correct module for RN ([#4786](https://github.com/aws-amplify/amplify-js/issues/4786)) ([a15730c](https://github.com/aws-amplify/amplify-js/commit/a15730cc50692d9d31a0f586c3544b3dcdbea659))
- **core:** Always set login methods when parsing Gen2 config files ([#13315](https://github.com/aws-amplify/amplify-js/issues/13315)) ([f65cae2](https://github.com/aws-amplify/amplify-js/commit/f65cae2c0e288bec0d43fd1826dd224b4aa30a69))
- **core:** amplify configure with storage path type issue ([#14088](https://github.com/aws-amplify/amplify-js/issues/14088)) ([0ecded1](https://github.com/aws-amplify/amplify-js/commit/0ecded15a4d1318fe10b16dbe534a111a12bdc21))
- **core:** Check for storage initialization errors ([#13938](https://github.com/aws-amplify/amplify-js/issues/13938)) ([0f50917](https://github.com/aws-amplify/amplify-js/commit/0f5091780046b9556b98300c29fb970a0358bd70))
- **core:** make AmplifyOutputs category types as unknown ([#14153](https://github.com/aws-amplify/amplify-js/issues/14153)) ([5dbfbf3](https://github.com/aws-amplify/amplify-js/commit/5dbfbf3f83799b7691fa4d51a61726326a22f1e5))
- Correct auth exports ([#11778](https://github.com/aws-amplify/amplify-js/issues/11778)) ([6229fdd](https://github.com/aws-amplify/amplify-js/commit/6229fdd6d1ebeb8162308939ba4975723936a611))
- **data:** fix subpath when using React Native ([#13102](https://github.com/aws-amplify/amplify-js/issues/13102)) ([#13106](https://github.com/aws-amplify/amplify-js/issues/13106)) ([79e32a9](https://github.com/aws-amplify/amplify-js/commit/79e32a909d7065651bc6e0f8831ad78acc605848))
- **data:** tests for error response fix ([#13279](https://github.com/aws-amplify/amplify-js/issues/13279)) ([1aef1ee](https://github.com/aws-amplify/amplify-js/commit/1aef1ee0e65d1489e4d86d19a6d017f852f3bafd))
- Fix SSR & AmplifyOutput types when using Gen2 configuration files ([#13247](https://github.com/aws-amplify/amplify-js/issues/13247)) ([f797dc5](https://github.com/aws-amplify/amplify-js/commit/f797dc539f57a55a325b227d8205813b122d7789))
- **geo:** fix geo export from umbrella package ([#12108](https://github.com/aws-amplify/amplify-js/issues/12108)) ([5636df6](https://github.com/aws-amplify/amplify-js/commit/5636df640accf4db12dd2c2b3d56e3e230da7968))
- **inapp:** remove implemented todos and add clearMessages API ([#12405](https://github.com/aws-amplify/amplify-js/issues/12405)) ([ef40632](https://github.com/aws-amplify/amplify-js/commit/ef4063250bf2fa484a1ec3cade10d34ea39318c8))
- increase bundle size ([9a91250](https://github.com/aws-amplify/amplify-js/commit/9a912501af7d36364d125504882c211db83bfec6))
- **integration tests:** CircleCI workflows and Cypress integration testing ([#1071](https://github.com/aws-amplify/amplify-js/issues/1071)) ([bfa4776](https://github.com/aws-amplify/amplify-js/commit/bfa477662591bbd7a92bbb8486778924589e4adb))
- **interactions:** check fulfilled state to trigger onComplete callback ([#1122](https://github.com/aws-amplify/amplify-js/issues/1122)) ([c24b1f1](https://github.com/aws-amplify/amplify-js/commit/c24b1f1c2408702a47cc7fb7bfb4911c4fe40f13))
- **notifications:** add notifications as dependency to aws-amplify ([#12199](https://github.com/aws-amplify/amplify-js/issues/12199)) ([9743838](https://github.com/aws-amplify/amplify-js/commit/97438380688e1a4f87a7bb5b97b2612e6d718459))
- preserve ssr context when using DataStore ([#10088](https://github.com/aws-amplify/amplify-js/issues/10088)) ([a10d920](https://github.com/aws-amplify/amplify-js/commit/a10d920f7fb6199539fb8d9cec2cb4426dbfd47b))
- Prevent overwriting with fallbacks when updating endpoint ([#13330](https://github.com/aws-amplify/amplify-js/issues/13330)) ([d7b837e](https://github.com/aws-amplify/amplify-js/commit/d7b837edba0dff209fb4a596fcb4531ce0a66e21))
- **pushnotification:** revert change in pr 952 ([b8d167c](https://github.com/aws-amplify/amplify-js/commit/b8d167c6ba61c9d658890814e46aa0d9416e9091))
- Re-add notifications to aws-amplify deps ([#10541](https://github.com/aws-amplify/amplify-js/issues/10541)) ([488118e](https://github.com/aws-amplify/amplify-js/commit/488118e281573783dfa627ead1c879da8f2cda68))
- Recreate Analytics clients when credentials change ([#12789](https://github.com/aws-amplify/amplify-js/issues/12789)) ([1bcbae4](https://github.com/aws-amplify/amplify-js/commit/1bcbae432d054ef6b19d8086375f040e6edbfccf))
- **repo:** \*\*/package.json files glob broke size-limit dual-publish ([923f5b1](https://github.com/aws-amplify/amplify-js/commit/923f5b16caf00ecc90987bd1eb7742d5ba5a98fd))
- Restore `tslib` dependencies for v5 ([#10512](https://github.com/aws-amplify/amplify-js/issues/10512)) ([b631360](https://github.com/aws-amplify/amplify-js/commit/b6313600557e822f76ddaee8d571d17aa534874c))
- Rollback the manual major version changes and change release command to increment the major versions ([#10638](https://github.com/aws-amplify/amplify-js/issues/10638)) ([660e5d9](https://github.com/aws-amplify/amplify-js/commit/660e5d9e7f18c514dc3c88322a1df6b5d5a5e796))
- Run ts coverage check with test ([#11047](https://github.com/aws-amplify/amplify-js/issues/11047)) ([430bedf](https://github.com/aws-amplify/amplify-js/commit/430bedfd0d0618bd0093b488233521356feef787))
- **ssr-adapter:** refreshToken may return the same tokens across requests ([#13387](https://github.com/aws-amplify/amplify-js/issues/13387)) ([2e5e2f1](https://github.com/aws-amplify/amplify-js/commit/2e5e2f1ab49edfd4c5f4abbf2391633da29bd476))
- Standardize `cache` named export to preserve interoperability with RN ([#10546](https://github.com/aws-amplify/amplify-js/issues/10546)) ([20b096b](https://github.com/aws-amplify/amplify-js/commit/20b096b1a34e6a102d08dabcedb38772f3a6caf7))
- **storage|aws-amplify:** export server apis from the subpaths ([#11910](https://github.com/aws-amplify/amplify-js/issues/11910)) ([23fa46a](https://github.com/aws-amplify/amplify-js/commit/23fa46a9c714273449861baf12bfa6a2ebd1ce9e))
- **storage:** address actionable TODOs ([#12414](https://github.com/aws-amplify/amplify-js/issues/12414)) ([20e9a79](https://github.com/aws-amplify/amplify-js/commit/20e9a799c8260f61a4b4d7d637b67f5d0e427322))
- **Storage:** allowing to set an empty value as prefix for the S3 Key ([#931](https://github.com/aws-amplify/amplify-js/issues/931)) ([240e50b](https://github.com/aws-amplify/amplify-js/commit/240e50b61f50eaf3712bfbc088d1b096360b401c))
- Support tracking multiple inflight OAuth promise resolvers ([#12482](https://github.com/aws-amplify/amplify-js/issues/12482)) ([ad5c83e](https://github.com/aws-amplify/amplify-js/commit/ad5c83e05e2c32c9f23ff61a8f10395148f5757e))
- Type error in I18n utility. ([#12146](https://github.com/aws-amplify/amplify-js/issues/12146)) ([ebb44c7](https://github.com/aws-amplify/amplify-js/commit/ebb44c73db27d39dd5a5de10e2de793c6991ea48))
- Update initSingleton logic to handle multiple configure calls in… ([#12546](https://github.com/aws-amplify/amplify-js/issues/12546)) ([ff85fa5](https://github.com/aws-amplify/amplify-js/commit/ff85fa5cc651f6033b50fca24be568cd9ad8feb0))
- update parseAWSExports to return the expected shape of userAttributes ([#12654](https://github.com/aws-amplify/amplify-js/issues/12654)) ([3340588](https://github.com/aws-amplify/amplify-js/commit/3340588687df5dcfa08ae71e4807d054c9e9f13f))

### Features

- **@aws-amplify/datastore:** add query sorting ([#6785](https://github.com/aws-amplify/amplify-js/issues/6785)) ([d9c2f5e](https://github.com/aws-amplify/amplify-js/commit/d9c2f5efbd5ad5dd97e441d7f453f8358f615199))
- **@aws-amplify/datastore:** Add SSR support for DataStore ([#6726](https://github.com/aws-amplify/amplify-js/issues/6726)) ([e56aba6](https://github.com/aws-amplify/amplify-js/commit/e56aba642acc7eb3482f0e69454a530409d1b3ac))
- **@aws-amplify/datastore:** DataStore - Multi-Auth ([#8008](https://github.com/aws-amplify/amplify-js/issues/8008)) ([dedd564](https://github.com/aws-amplify/amplify-js/commit/dedd5641dfcfce209433088fe9570874cd810997))
- **@aws-amplify/datastore:** Make DataStore available in aws-amplify… ([#5202](https://github.com/aws-amplify/amplify-js/issues/5202)) ([c9c020d](https://github.com/aws-amplify/amplify-js/commit/c9c020d6d13c5678ce15c738f7eaebec39e2b48a))
- add a typescript coverage report mechanism ([#10551](https://github.com/aws-amplify/amplify-js/issues/10551)) ([8e8df55](https://github.com/aws-amplify/amplify-js/commit/8e8df55b449f8bae2fe962fe282613d1b818cc5a)), closes [#10379](https://github.com/aws-amplify/amplify-js/issues/10379)
- add data-schema client ([#12552](https://github.com/aws-amplify/amplify-js/issues/12552)) ([922eb86](https://github.com/aws-amplify/amplify-js/commit/922eb86d030a6b50d05da2191a6d6c8f3b40dcdd))
- add gen2 path parameter to getProperties and getUrl ([#13144](https://github.com/aws-amplify/amplify-js/issues/13144)) ([6456588](https://github.com/aws-amplify/amplify-js/commit/6456588bae501f92233ace4a6698d14db1f3557a))
- add host to config, use in connect, subscribe, publish ([cb412e5](https://github.com/aws-amplify/amplify-js/commit/cb412e55356d9ae11130c817ce24c0769aca4fdc))
- Add ServiceWorker utility class ([#831](https://github.com/aws-amplify/amplify-js/issues/831)) ([2fd46e3](https://github.com/aws-amplify/amplify-js/commit/2fd46e314df11b2f6d13d646a092581cfff363e2))
- Added `enable` & `disable` Analytics APIs ([#12136](https://github.com/aws-amplify/amplify-js/issues/12136)) ([b16e062](https://github.com/aws-amplify/amplify-js/commit/b16e062ae175b1a27df3b8e6ae089b4f59141af5))
- Added additional Auth config fields & ability to override Cognito endpoint. ([#12236](https://github.com/aws-amplify/amplify-js/issues/12236)) ([6060984](https://github.com/aws-amplify/amplify-js/commit/606098437021ff03363009094dd79f84fe96f1dc))
- Added internal APIs for setting custom User Agent state ([#12249](https://github.com/aws-amplify/amplify-js/issues/12249)) ([db28490](https://github.com/aws-amplify/amplify-js/commit/db28490b9977e61be452863673fb2ca26cb0c7ac))
- Added Prettier formatting ([4dfd9aa](https://github.com/aws-amplify/amplify-js/commit/4dfd9aa9ab900307c9d17c68448a6ca4aa08fd5a))
- **analtics:** add flushEvents for service provider Pinpoint ([#12183](https://github.com/aws-amplify/amplify-js/issues/12183)) ([3e7c526](https://github.com/aws-amplify/amplify-js/commit/3e7c5261ae31645ebb203d3ecf1b0247403c7846))
- **analytics:** Add analytics provider for AWS Firehose ([#2823](https://github.com/aws-amplify/amplify-js/issues/2823)) ([29103ae](https://github.com/aws-amplify/amplify-js/commit/29103ae0b2d76dba66e3dc856d77c4c2ffb0e687))
- **analytics:** add flushEvents API for service provider KDF ([#12174](https://github.com/aws-amplify/amplify-js/issues/12174)) ([7391121](https://github.com/aws-amplify/amplify-js/commit/73911217a2a1eae5b94a7947fe02c1298a33099b))
- **analytics:** add flushEvents API for service provider KDS ([#12173](https://github.com/aws-amplify/amplify-js/issues/12173)) ([c291da3](https://github.com/aws-amplify/amplify-js/commit/c291da3a1f39df1565f007bab1cb90873e06c7e9))
- **analytics:** add flushEvents API for service provider Personalize ([#12181](https://github.com/aws-amplify/amplify-js/issues/12181)) ([8447b3f](https://github.com/aws-amplify/amplify-js/commit/8447b3f255178bb3a3f5824fd964c8797dfe1942))
- **analytics:** add record API for Analytics service provider Personalize ([#12151](https://github.com/aws-amplify/amplify-js/issues/12151)) ([a2c4621](https://github.com/aws-amplify/amplify-js/commit/a2c4621c7c2871f757de1c11fd22428047a9ab8a))
- **analytics:** add record api for kinesis service provider ([#12099](https://github.com/aws-amplify/amplify-js/issues/12099)) ([21f0bac](https://github.com/aws-amplify/amplify-js/commit/21f0bac721435e483cfc14ddae10c183319d04b4))
- **analytics:** add record API for service provider kinesis firehose ([#12148](https://github.com/aws-amplify/amplify-js/issues/12148)) ([ad0ce0c](https://github.com/aws-amplify/amplify-js/commit/ad0ce0c1b2c1f659e36de2c417910f87926424a6))
- **api-graphql:** add `.enums` property to the GQL client ([#12980](https://github.com/aws-amplify/amplify-js/issues/12980)) ([5c56101](https://github.com/aws-amplify/amplify-js/commit/5c561018aedcff314e68b3dd385fe9bd9ff93150))
- **api-graphql:** add model index query support ([#12967](https://github.com/aws-amplify/amplify-js/issues/12967)) ([0d398a4](https://github.com/aws-amplify/amplify-js/commit/0d398a4dd5ee01fb8d7a723b6410bb481168fa41))
- **api-graphql:** pass authToken via subprotocol ([#13727](https://github.com/aws-amplify/amplify-js/issues/13727)) ([ced891c](https://github.com/aws-amplify/amplify-js/commit/ced891c2e4f6b0f1fdeaf44ab80cae9d585b6d15))
- **api:** add custom endpoint support to API ([#14086](https://github.com/aws-amplify/amplify-js/issues/14086)) ([ca2e4b8](https://github.com/aws-amplify/amplify-js/commit/ca2e4b87a456dfe9a027e49bdcd912a2cba8e59d))
- **api:** expose HTTP response from API errors ([#12835](https://github.com/aws-amplify/amplify-js/issues/12835)) ([38c1d56](https://github.com/aws-amplify/amplify-js/commit/38c1d56973c6318fc63ce0bdba888c2b0136d083))
- **api:** REST API handlers ([#12172](https://github.com/aws-amplify/amplify-js/issues/12172)) ([8d0489f](https://github.com/aws-amplify/amplify-js/commit/8d0489f0fafad9eb26fc4bd6be97ba13aa345448))
- **auth:** add `customOAuthState` missing hub event ([#12090](https://github.com/aws-amplify/amplify-js/issues/12090)) ([7dec0f1](https://github.com/aws-amplify/amplify-js/commit/7dec0f1d3cb6bfb3a934c5c36b38c1eead445cc6))
- **auth:** add a default deviceName when remembering device ([#13022](https://github.com/aws-amplify/amplify-js/issues/13022)) ([5f34186](https://github.com/aws-amplify/amplify-js/commit/5f3418678a06ac43ed8bf700649703c1cf280eeb))
- **auth:** add auto sign-in support ([#12229](https://github.com/aws-amplify/amplify-js/issues/12229)) ([22c5e12](https://github.com/aws-amplify/amplify-js/commit/22c5e12042acfb9706fe06b5050658152206596a)), closes [#12153](https://github.com/aws-amplify/amplify-js/issues/12153)
- **auth:** add ConfirmDevice API ([#12107](https://github.com/aws-amplify/amplify-js/issues/12107)) ([7c9467d](https://github.com/aws-amplify/amplify-js/commit/7c9467d3c586d36535994cfd5b205f1cd767e6d8))
- **auth:** add deleteUser API ([#12141](https://github.com/aws-amplify/amplify-js/issues/12141)) ([773e382](https://github.com/aws-amplify/amplify-js/commit/773e38212361c1f18283847c21ba13c4711a25ae)), closes [#11953](https://github.com/aws-amplify/amplify-js/issues/11953)
- **auth:** add deleteUserAttributes API ([#12128](https://github.com/aws-amplify/amplify-js/issues/12128)) ([aae63ba](https://github.com/aws-amplify/amplify-js/commit/aae63badb8b6fd658c463b603491af4c933377cd))
- **auth:** add fetchDevices api ([#12171](https://github.com/aws-amplify/amplify-js/issues/12171)) ([c4c4db8](https://github.com/aws-amplify/amplify-js/commit/c4c4db8f88f6f9c68b8f54b5197cad1957949e98))
- **auth:** add rememberDevice API ([#12160](https://github.com/aws-amplify/amplify-js/issues/12160)) ([8e82cb7](https://github.com/aws-amplify/amplify-js/commit/8e82cb74b3c1a25eb84b14a112139564e08fc449))
- **auth:** add sendUserAttributeVerificationCode api ([#12100](https://github.com/aws-amplify/amplify-js/issues/12100)) ([a1f612f](https://github.com/aws-amplify/amplify-js/commit/a1f612fd19d9db746ef15e869a5bb739bae85817))
- **auth:** add support for Email MFA ([#13945](https://github.com/aws-amplify/amplify-js/issues/13945)) ([42db720](https://github.com/aws-amplify/amplify-js/commit/42db720ac46d8c1bbd307cd21924b934e7b1b270)), closes [#13720](https://github.com/aws-amplify/amplify-js/issues/13720) [#13745](https://github.com/aws-amplify/amplify-js/issues/13745)
- **auth:** add updateUserAttribute API ([#12106](https://github.com/aws-amplify/amplify-js/issues/12106)) ([b5f8c65](https://github.com/aws-amplify/amplify-js/commit/b5f8c65add0e91d183ee603078f6d1832ebe22fe))
- **auth:** credentials provider ([#11660](https://github.com/aws-amplify/amplify-js/issues/11660)) ([6a58dbe](https://github.com/aws-amplify/amplify-js/commit/6a58dbe96cc3303c2eb5cbe52ce7fa1c25d6e621))
- **auth:** Enable resumable SignIn ([#13483](https://github.com/aws-amplify/amplify-js/issues/13483)) ([f3421f1](https://github.com/aws-amplify/amplify-js/commit/f3421f190da7473c30b5688c281935645488c663))
- **auth:** Enable resumable SignIn ([#13855](https://github.com/aws-amplify/amplify-js/issues/13855)) ([#14074](https://github.com/aws-amplify/amplify-js/issues/14074)) ([fe315be](https://github.com/aws-amplify/amplify-js/commit/fe315be4da6d814f2b802cf1acbb00513ca238ac))
- **auth:** handles DEVICE_SRP_AUTH challengeName ([#12140](https://github.com/aws-amplify/amplify-js/issues/12140)) ([a622fec](https://github.com/aws-amplify/amplify-js/commit/a622fec25a90e0126528f60af7c7a4189965a0ba))
- **auth:** HostedUI oidc signout ([#13512](https://github.com/aws-amplify/amplify-js/issues/13512)) ([e8fb997](https://github.com/aws-amplify/amplify-js/commit/e8fb9973f8e3e3490619416a778ec1460cafaf9a)), closes [#13712](https://github.com/aws-amplify/amplify-js/issues/13712) [#13736](https://github.com/aws-amplify/amplify-js/issues/13736)
- **auth:** passwordless ([#14032](https://github.com/aws-amplify/amplify-js/issues/14032)) ([68c7f6f](https://github.com/aws-amplify/amplify-js/commit/68c7f6fbaa903ac8e45035bc25a71321a6240aec)), closes [#1](https://github.com/aws-amplify/amplify-js/issues/1) [#3](https://github.com/aws-amplify/amplify-js/issues/3) [#6](https://github.com/aws-amplify/amplify-js/issues/6) [#8](https://github.com/aws-amplify/amplify-js/issues/8) [#2](https://github.com/aws-amplify/amplify-js/issues/2) [#11](https://github.com/aws-amplify/amplify-js/issues/11) [#7](https://github.com/aws-amplify/amplify-js/issues/7) [#14](https://github.com/aws-amplify/amplify-js/issues/14) [#15](https://github.com/aws-amplify/amplify-js/issues/15) [#16](https://github.com/aws-amplify/amplify-js/issues/16) [#18](https://github.com/aws-amplify/amplify-js/issues/18) [#17](https://github.com/aws-amplify/amplify-js/issues/17) [#19](https://github.com/aws-amplify/amplify-js/issues/19) [#22](https://github.com/aws-amplify/amplify-js/issues/22)
- **auth:** proactive token refresh ([#14076](https://github.com/aws-amplify/amplify-js/issues/14076)) ([b818753](https://github.com/aws-amplify/amplify-js/commit/b8187536ab3633e6a390ea38b9e8434b23293380))
- **auth:** set auth config to the auth providers instead of relying the singleton ([4143e97](https://github.com/aws-amplify/amplify-js/commit/4143e97e567364bc3cd72c6bc15f73db93985dc1))
- **auth:** standalone enable oauth listener for MPAs ([#12731](https://github.com/aws-amplify/amplify-js/issues/12731)) ([94d1fb2](https://github.com/aws-amplify/amplify-js/commit/94d1fb2c91a539d336e24c3fe86881422cce0474))
- **auth:** standalone enable oauth listener for MPAs ([#12768](https://github.com/aws-amplify/amplify-js/issues/12768)) ([ef15561](https://github.com/aws-amplify/amplify-js/commit/ef15561d92e370d046152da7dc763063a6ad5b76)), closes [#12753](https://github.com/aws-amplify/amplify-js/issues/12753)
- **aws-amplify-react-native:** Add withOAuth HOC for Cognito Hosted UI ([#2665](https://github.com/aws-amplify/amplify-js/issues/2665)) ([ac4d232](https://github.com/aws-amplify/amplify-js/commit/ac4d232a8ada0fd4f2e19c2e7196a8937dc63e0e))
- **aws-amplify:** add adapter core ([b9024ef](https://github.com/aws-amplify/amplify-js/commit/b9024ef72cd838c62a1d172ef669e7b4a35721b8))
- **aws-amplify:** Bump the aws-amplify minor version ([#11327](https://github.com/aws-amplify/amplify-js/issues/11327)) ([d53501e](https://github.com/aws-amplify/amplify-js/commit/d53501ec542258611546d030e24e7d29854b103a))
- **aws-amplify:** Commit for bumping minor version of aws-amplify ([#11222](https://github.com/aws-amplify/amplify-js/issues/11222)) ([4c955d4](https://github.com/aws-amplify/amplify-js/commit/4c955d44a52d04044ca7b98f0507517bd40b96d2))
- **aws-amplify:** make Amplify.configure accept both new and legacy config objects ([46a5c82](https://github.com/aws-amplify/amplify-js/commit/46a5c82056f9a64a3ef44104f2c656ccdf4768f2))
- **aws-amplify:** pull `Geo` through the main `aws-amplify` package ([#8669](https://github.com/aws-amplify/amplify-js/issues/8669)) ([8d72d8a](https://github.com/aws-amplify/amplify-js/commit/8d72d8aa63080d6307af5f4500c3e07194bfd4fb))
- **aws-amplify:** set auth config in the adapter factory functions ([0f51120](https://github.com/aws-amplify/amplify-js/commit/0f51120a2bffeaaef1953f7f4328832390fb9520))
- change JS target to ES2020 ([#12365](https://github.com/aws-amplify/amplify-js/issues/12365)) ([381b201](https://github.com/aws-amplify/amplify-js/commit/381b2010afb0ca72d392307d4da64af3ca146d6f))
- core/cloudwatch-logging ([#8588](https://github.com/aws-amplify/amplify-js/issues/8588)) ([6f28c7e](https://github.com/aws-amplify/amplify-js/commit/6f28c7e94ae8d41b37490292ff3547505100c6b2))
- **core:** add storage mechanisms ([#11676](https://github.com/aws-amplify/amplify-js/issues/11676)) ([cd2a952](https://github.com/aws-amplify/amplify-js/commit/cd2a952a0d0496002a01a8954f34da51a540f19d))
- **core:** expose ssr flag for Amplify.configure() ([602f4e6](https://github.com/aws-amplify/amplify-js/commit/602f4e62f3cab90a77d768d4dcae9fd89ad51239))
- custom queries and mutations ([#13029](https://github.com/aws-amplify/amplify-js/issues/13029)) ([7e4eff3](https://github.com/aws-amplify/amplify-js/commit/7e4eff3be3ec25520332330461ca2cefbf7bdbb7))
- **data:** add GraphQL API V6 support for custom headers, non-Appsync endpoints, and custom domains; add / update tests ([#12185](https://github.com/aws-amplify/amplify-js/issues/12185)) ([6d5afce](https://github.com/aws-amplify/amplify-js/commit/6d5afce390687e925438d6d208a18c84e61399a9))
- **data:** events client ([#13923](https://github.com/aws-amplify/amplify-js/issues/13923)) ([847fb51](https://github.com/aws-amplify/amplify-js/commit/847fb51acee1ee8585503625a6f73d67265217d0))
- enable watch mode for builds ([#4358](https://github.com/aws-amplify/amplify-js/issues/4358)) ([055e530](https://github.com/aws-amplify/amplify-js/commit/055e5308efc308ae6beee78f8963bb2f812e1f85))
- **inApp:** functional dispatchEvent & setConflictHandler APIs ([#12231](https://github.com/aws-amplify/amplify-js/issues/12231)) ([f5bcc3a](https://github.com/aws-amplify/amplify-js/commit/f5bcc3a082e5609b094c1508c434973165245472))
- **InApp:** functional identifyUser API ([#12159](https://github.com/aws-amplify/amplify-js/issues/12159)) ([b83333f](https://github.com/aws-amplify/amplify-js/commit/b83333f508c154badc4832aeaa8c5911e6716fba))
- **inapp:** initializeInAppMessaging API ([#12269](https://github.com/aws-amplify/amplify-js/issues/12269)) ([134f90a](https://github.com/aws-amplify/amplify-js/commit/134f90a0c6f34071b4508832ff40ee9ac3dd8afb))
- **inapp:** interaction events APIs ([#12242](https://github.com/aws-amplify/amplify-js/issues/12242)) ([62beb83](https://github.com/aws-amplify/amplify-js/commit/62beb836dc163d590b43b3319e255f8ceb0800ae))
- Integrated ServiceWorker with v6 ([#12261](https://github.com/aws-amplify/amplify-js/issues/12261)) ([8f3ba99](https://github.com/aws-amplify/amplify-js/commit/8f3ba99af092a9b517ccf84d05947a4e328b3248))
- **interactions:** adapt v6 api design ([#12285](https://github.com/aws-amplify/amplify-js/issues/12285)) ([76471b6](https://github.com/aws-amplify/amplify-js/commit/76471b6488efc37d7d0bdc1feb7fcbc97334ec7c))
- **interactions:** Interactions category ([#1042](https://github.com/aws-amplify/amplify-js/issues/1042)) ([befb336](https://github.com/aws-amplify/amplify-js/commit/befb33694f22db895dc54c5c52c1cbb0e54d707c))
- library observability improvements ([#14309](https://github.com/aws-amplify/amplify-js/issues/14309)) ([b383885](https://github.com/aws-amplify/amplify-js/commit/b3838851da3c5620d6c1ea7950d16d81b21e073f)), closes [#14230](https://github.com/aws-amplify/amplify-js/issues/14230) [#14237](https://github.com/aws-amplify/amplify-js/issues/14237) [#14259](https://github.com/aws-amplify/amplify-js/issues/14259) [#14251](https://github.com/aws-amplify/amplify-js/issues/14251) [#14296](https://github.com/aws-amplify/amplify-js/issues/14296)
- moved CloudLogger logic to ConsoleLogger ([93db90d](https://github.com/aws-amplify/amplify-js/commit/93db90d041c7ca697e5993003a4fb105a3821cbe))
- **notifications:** setup package structure and update V6 import paths ([#12079](https://github.com/aws-amplify/amplify-js/issues/12079)) ([798707b](https://github.com/aws-amplify/amplify-js/commit/798707bba042301d4318291127d25e40cd6bcaac))
- Pinpoint configureAutoTrack & tracker migration ([#12322](https://github.com/aws-amplify/amplify-js/issues/12322)) ([c5ca240](https://github.com/aws-amplify/amplify-js/commit/c5ca240faf6e94bdb4c709ff434253096879d573))
- Reintroduce & undeprecate I18n ([#12112](https://github.com/aws-amplify/amplify-js/issues/12112)) ([e9cb99a](https://github.com/aws-amplify/amplify-js/commit/e9cb99a45a7d18e2bc3a0f019b1090d2249cb603))
- **repo:** set up rollup to emit esm and cjs artifacts ([#12522](https://github.com/aws-amplify/amplify-js/issues/12522)) ([903a012](https://github.com/aws-amplify/amplify-js/commit/903a0123e51f69ff3476b6b15aa89a73b750f9dc))
- setup server subpath for core, auth and aws-amplify packages ([626de05](https://github.com/aws-amplify/amplify-js/commit/626de05cd81cdd8274f6631d0203082969cd2ed1))
- **SSR:** withSSRContext ([#6146](https://github.com/aws-amplify/amplify-js/issues/6146)) ([1cb1afd](https://github.com/aws-amplify/amplify-js/commit/1cb1afd1e56135908dceb2ef6403f0b3e78067fe))
- **storage:** add delimiter support to list API ([#13517](https://github.com/aws-amplify/amplify-js/issues/13517)) ([95ba49c](https://github.com/aws-amplify/amplify-js/commit/95ba49cae994876b15d1062ca1d9923fef909e03))
- **storage:** add path support to copy API ([#13104](https://github.com/aws-amplify/amplify-js/issues/13104)) ([3e6528d](https://github.com/aws-amplify/amplify-js/commit/3e6528d5fc40d2d985d38d97e2a0e8120a80728e))
- **storage:** add support for content disposition and content type in getUrl ([#13615](https://github.com/aws-amplify/amplify-js/issues/13615)) ([28434a6](https://github.com/aws-amplify/amplify-js/commit/28434a69d6956369ebd7b2ac4b67e0ec1bb14748))
- **storage:** expose the defaultPrefixResolver from storage/s3/utils subpath ([9eefbfb](https://github.com/aws-amplify/amplify-js/commit/9eefbfb440ae54f5073b7a1b006af650ca59bf61))
- **storage:** Integrity changes for storage browser ([#13909](https://github.com/aws-amplify/amplify-js/issues/13909)) ([ec7bf6f](https://github.com/aws-amplify/amplify-js/commit/ec7bf6ff2fb4af84425eca4f2d68c2bef7f49d03)), closes [#13478](https://github.com/aws-amplify/amplify-js/issues/13478) [#13474](https://github.com/aws-amplify/amplify-js/issues/13474)
- **storage:** list API to accept both prefix and path ([#13100](https://github.com/aws-amplify/amplify-js/issues/13100)) ([872a817](https://github.com/aws-amplify/amplify-js/commit/872a8171d4b30a8b751e08bd64170d074beb9739))
- **storage:** uploadData path parameter support ([#13099](https://github.com/aws-amplify/amplify-js/issues/13099)) ([68a88bb](https://github.com/aws-amplify/amplify-js/commit/68a88bb4be020e60e08bf7325edd8a55a03cd177))
- support server-side auth flows with Cognito managed login ([#14168](https://github.com/aws-amplify/amplify-js/issues/14168)) ([825d338](https://github.com/aws-amplify/amplify-js/commit/825d338021964a48ffab07d7b5961c5afa63a50e)), closes [#13788](https://github.com/aws-amplify/amplify-js/issues/13788) [#13801](https://github.com/aws-amplify/amplify-js/issues/13801) [#13827](https://github.com/aws-amplify/amplify-js/issues/13827) [#13839](https://github.com/aws-amplify/amplify-js/issues/13839) [#13840](https://github.com/aws-amplify/amplify-js/issues/13840) [#13841](https://github.com/aws-amplify/amplify-js/issues/13841) [#14103](https://github.com/aws-amplify/amplify-js/issues/14103) [#14112](https://github.com/aws-amplify/amplify-js/issues/14112) [#14114](https://github.com/aws-amplify/amplify-js/issues/14114) [#14115](https://github.com/aws-amplify/amplify-js/issues/14115) [#14119](https://github.com/aws-amplify/amplify-js/issues/14119) [#14125](https://github.com/aws-amplify/amplify-js/issues/14125) [#14116](https://github.com/aws-amplify/amplify-js/issues/14116) [#14134](https://github.com/aws-amplify/amplify-js/issues/14134) [#14132](https://github.com/aws-amplify/amplify-js/issues/14132) [#14141](https://github.com/aws-amplify/amplify-js/issues/14141) [#14152](https://github.com/aws-amplify/amplify-js/issues/14152) [#14169](https://github.com/aws-amplify/amplify-js/issues/14169)
- Upgrade TypeDoc & rebuild our API documentation ([#13012](https://github.com/aws-amplify/amplify-js/issues/13012)) ([1509592](https://github.com/aws-amplify/amplify-js/commit/1509592c017aa3e63d6c2d3a5c683f9356fb6a75))
- user agent enhancements - cross-category api>api-graphql>pubsub ([#11368](https://github.com/aws-amplify/amplify-js/issues/11368)) ([a88dda2](https://github.com/aws-amplify/amplify-js/commit/a88dda202919aa1d4dc2af48f33c3533d8626261))
- V6 api graphql ssr ([#12214](https://github.com/aws-amplify/amplify-js/issues/12214)) ([d4a8756](https://github.com/aws-amplify/amplify-js/commit/d4a8756ac7bc2fcc91e963ff86fd68e7610d3e73))

### Reverts

- Revert "feat(auth): Enable resumable SignIn" (#13855) ([b26e719](https://github.com/aws-amplify/amplify-js/commit/b26e7199d25cbc1821ff7c45b8ad78b5544b7a2f)), closes [#13855](https://github.com/aws-amplify/amplify-js/issues/13855) [#13483](https://github.com/aws-amplify/amplify-js/issues/13483)
- Revert "feat(core): resolve webcrypto from node:crypto for Node18 (#13599)" ([f8dbc95](https://github.com/aws-amplify/amplify-js/commit/f8dbc95964e541818fb79203fd286f445feee46d)), closes [#13599](https://github.com/aws-amplify/amplify-js/issues/13599)
- Revert "chore(release): Publish [skip release]" ([241fa11](https://github.com/aws-amplify/amplify-js/commit/241fa1105e177d9e4afe59c40ee92656b87ae542))
- Revert "chore(release): Publish" (#13027) ([f6f4f42](https://github.com/aws-amplify/amplify-js/commit/f6f4f42befa04ed3c1502fa0adf17c6700abfddf)), closes [#13027](https://github.com/aws-amplify/amplify-js/issues/13027)
- Revert "chore(repo): use typescript 5.0.2 across workspace" (#12941) ([dc04ba1](https://github.com/aws-amplify/amplify-js/commit/dc04ba18604291d9618a681e7ec4cdb801a355c8)), closes [#12941](https://github.com/aws-amplify/amplify-js/issues/12941)
- Revert "feat: capture DataStore and API metrics on cross-category auth calls (#11824)" ([166c6e1](https://github.com/aws-amplify/amplify-js/commit/166c6e142702751cb1462a06cccbebe6286fc7b4)), closes [#11824](https://github.com/aws-amplify/amplify-js/issues/11824)
- Revert "fix: adds InternalAuth to requiredModules for SSR (#11837)" ([d08ce50](https://github.com/aws-amplify/amplify-js/commit/d08ce50fe423275af6f8bf4f1e6a98bc18708b5b)), closes [#11837](https://github.com/aws-amplify/amplify-js/issues/11837)
- Revert "Publish" ([1319d31](https://github.com/aws-amplify/amplify-js/commit/1319d319b69717e76660fbfa6f1a845195c6d635))
- Revert "chore(release): Publish [ci skip]" ([9b03c49](https://github.com/aws-amplify/amplify-js/commit/9b03c49b0ba5eef09920017386c9fae139b6e0f9))
- **auth:** standalone enable oauth listener for MPAs ([#12753](https://github.com/aws-amplify/amplify-js/issues/12753)) ([0462761](https://github.com/aws-amplify/amplify-js/commit/04627618afe526dd776ee678b723ed6e697f440d)), closes [#12748](https://github.com/aws-amplify/amplify-js/issues/12748) [#12731](https://github.com/aws-amplify/amplify-js/issues/12731)

## [6.14.4](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.14.3...aws-amplify@6.14.4) (2025-04-28)

**Note:** Version bump only for package aws-amplify

## [6.14.3](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.14.2...aws-amplify@6.14.3) (2025-04-21)

**Note:** Version bump only for package aws-amplify

## [6.14.2](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.14.1...aws-amplify@6.14.2) (2025-04-09)

### Bug Fixes

- **aws-amplify:** cookie store is not used for identity store in SSR ([#14326](https://github.com/aws-amplify/amplify-js/issues/14326)) ([42f6332](https://github.com/aws-amplify/amplify-js/commit/42f6332678b8c1670becf5fa5ce98daeb602ed9f))

## [6.14.1](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.14.0...aws-amplify@6.14.1) (2025-03-28)

**Note:** Version bump only for package aws-amplify

# [6.14.0](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.13.6...aws-amplify@6.14.0) (2025-03-25)

### Features

- library observability improvements ([#14309](https://github.com/aws-amplify/amplify-js/issues/14309)) ([b383885](https://github.com/aws-amplify/amplify-js/commit/b3838851da3c5620d6c1ea7950d16d81b21e073f)), closes [#14230](https://github.com/aws-amplify/amplify-js/issues/14230) [#14237](https://github.com/aws-amplify/amplify-js/issues/14237) [#14259](https://github.com/aws-amplify/amplify-js/issues/14259) [#14251](https://github.com/aws-amplify/amplify-js/issues/14251) [#14296](https://github.com/aws-amplify/amplify-js/issues/14296)

## [6.13.6](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.13.5...aws-amplify@6.13.6) (2025-03-21)

**Note:** Version bump only for package aws-amplify

## [6.13.5](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.13.4...aws-amplify@6.13.5) (2025-03-14)

**Note:** Version bump only for package aws-amplify

## [6.13.4](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.13.3...aws-amplify@6.13.4) (2025-03-07)

**Note:** Version bump only for package aws-amplify

## [6.13.3](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.13.2...aws-amplify@6.13.3) (2025-03-05)

### Bug Fixes

- **core:** make AmplifyOutputs category types as unknown ([#14153](https://github.com/aws-amplify/amplify-js/issues/14153)) ([5dbfbf3](https://github.com/aws-amplify/amplify-js/commit/5dbfbf3f83799b7691fa4d51a61726326a22f1e5))

## [6.13.2](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.13.1...aws-amplify@6.13.2) (2025-02-27)

**Note:** Version bump only for package aws-amplify

## [6.13.1](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.13.0...aws-amplify@6.13.1) (2025-02-20)

**Note:** Version bump only for package aws-amplify

# [6.13.0](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.12.3...aws-amplify@6.13.0) (2025-02-12)

### Features

- support server-side auth flows with Cognito managed login ([#14168](https://github.com/aws-amplify/amplify-js/issues/14168)) ([825d338](https://github.com/aws-amplify/amplify-js/commit/825d338021964a48ffab07d7b5961c5afa63a50e)), closes [#13788](https://github.com/aws-amplify/amplify-js/issues/13788) [#13801](https://github.com/aws-amplify/amplify-js/issues/13801) [#13827](https://github.com/aws-amplify/amplify-js/issues/13827) [#13839](https://github.com/aws-amplify/amplify-js/issues/13839) [#13840](https://github.com/aws-amplify/amplify-js/issues/13840) [#13841](https://github.com/aws-amplify/amplify-js/issues/13841) [#14103](https://github.com/aws-amplify/amplify-js/issues/14103) [#14112](https://github.com/aws-amplify/amplify-js/issues/14112) [#14114](https://github.com/aws-amplify/amplify-js/issues/14114) [#14115](https://github.com/aws-amplify/amplify-js/issues/14115) [#14119](https://github.com/aws-amplify/amplify-js/issues/14119) [#14125](https://github.com/aws-amplify/amplify-js/issues/14125) [#14116](https://github.com/aws-amplify/amplify-js/issues/14116) [#14134](https://github.com/aws-amplify/amplify-js/issues/14134) [#14132](https://github.com/aws-amplify/amplify-js/issues/14132) [#14141](https://github.com/aws-amplify/amplify-js/issues/14141) [#14152](https://github.com/aws-amplify/amplify-js/issues/14152) [#14169](https://github.com/aws-amplify/amplify-js/issues/14169)

## [6.12.3](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.12.2...aws-amplify@6.12.3) (2025-02-04)

**Note:** Version bump only for package aws-amplify

## [6.12.2](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.12.1...aws-amplify@6.12.2) (2025-01-24)

### Bug Fixes

- **auth:** Setting Store Tokens should only clear tokens that no longer have a value ([#13584](https://github.com/aws-amplify/amplify-js/issues/13584)) ([3606482](https://github.com/aws-amplify/amplify-js/commit/3606482c980766466f2c3f27bd4887c550897c26))

## [6.12.1](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.12.0...aws-amplify@6.12.1) (2025-01-14)

**Note:** Version bump only for package aws-amplify

# [6.12.0](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.11.0...aws-amplify@6.12.0) (2025-01-03)

### Bug Fixes

- **core:** amplify configure with storage path type issue ([#14088](https://github.com/aws-amplify/amplify-js/issues/14088)) ([0ecded1](https://github.com/aws-amplify/amplify-js/commit/0ecded15a4d1318fe10b16dbe534a111a12bdc21))

### Features

- **api:** add custom endpoint support to API ([#14086](https://github.com/aws-amplify/amplify-js/issues/14086)) ([ca2e4b8](https://github.com/aws-amplify/amplify-js/commit/ca2e4b87a456dfe9a027e49bdcd912a2cba8e59d))
- **auth:** proactive token refresh ([#14076](https://github.com/aws-amplify/amplify-js/issues/14076)) ([b818753](https://github.com/aws-amplify/amplify-js/commit/b8187536ab3633e6a390ea38b9e8434b23293380))

# [6.11.0](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.10.3...aws-amplify@6.11.0) (2024-12-19)

### Bug Fixes

- **adapter-nextjs:** create jwt verifier once ([#13825](https://github.com/aws-amplify/amplify-js/issues/13825)) ([88f9eef](https://github.com/aws-amplify/amplify-js/commit/88f9eef11f143663da4a5abbff1098b3a1dd704a))

### Features

- **auth:** Enable resumable SignIn ([#13855](https://github.com/aws-amplify/amplify-js/issues/13855)) ([#14074](https://github.com/aws-amplify/amplify-js/issues/14074)) ([fe315be](https://github.com/aws-amplify/amplify-js/commit/fe315be4da6d814f2b802cf1acbb00513ca238ac))

## [6.10.3](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.10.2...aws-amplify@6.10.3) (2024-12-12)

**Note:** Version bump only for package aws-amplify

## [6.10.2](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.10.0...aws-amplify@6.10.2) (2024-12-03)

**Note:** Version bump only for package aws-amplify

## [6.10.1](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.10.0...aws-amplify@6.10.1) (2024-12-03)

**Note:** Version bump only for package aws-amplify

# [6.10.0](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.9.0...aws-amplify@6.10.0) (2024-11-25)

### Features

- **auth:** passwordless ([#14032](https://github.com/aws-amplify/amplify-js/issues/14032)) ([68c7f6f](https://github.com/aws-amplify/amplify-js/commit/68c7f6fbaa903ac8e45035bc25a71321a6240aec)), closes [#1](https://github.com/aws-amplify/amplify-js/issues/1) [#3](https://github.com/aws-amplify/amplify-js/issues/3) [#6](https://github.com/aws-amplify/amplify-js/issues/6) [#8](https://github.com/aws-amplify/amplify-js/issues/8) [#2](https://github.com/aws-amplify/amplify-js/issues/2) [#11](https://github.com/aws-amplify/amplify-js/issues/11) [#7](https://github.com/aws-amplify/amplify-js/issues/7) [#14](https://github.com/aws-amplify/amplify-js/issues/14) [#15](https://github.com/aws-amplify/amplify-js/issues/15) [#16](https://github.com/aws-amplify/amplify-js/issues/16) [#18](https://github.com/aws-amplify/amplify-js/issues/18) [#17](https://github.com/aws-amplify/amplify-js/issues/17) [#19](https://github.com/aws-amplify/amplify-js/issues/19) [#22](https://github.com/aws-amplify/amplify-js/issues/22)

# [6.9.0](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.8.2...aws-amplify@6.9.0) (2024-11-20)

### Features

- **storage:** Integrity changes for storage browser ([#13909](https://github.com/aws-amplify/amplify-js/issues/13909)) ([ec7bf6f](https://github.com/aws-amplify/amplify-js/commit/ec7bf6ff2fb4af84425eca4f2d68c2bef7f49d03)), closes [#13478](https://github.com/aws-amplify/amplify-js/issues/13478) [#13474](https://github.com/aws-amplify/amplify-js/issues/13474)

## [6.8.2](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.8.1...aws-amplify@6.8.2) (2024-11-13)

**Note:** Version bump only for package aws-amplify

## [6.8.1](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.8.0...aws-amplify@6.8.1) (2024-11-12)

### Bug Fixes

- **core:** Check for storage initialization errors ([#13938](https://github.com/aws-amplify/amplify-js/issues/13938)) ([0f50917](https://github.com/aws-amplify/amplify-js/commit/0f5091780046b9556b98300c29fb970a0358bd70))

# [6.8.0](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.7.0...aws-amplify@6.8.0) (2024-10-31)

### Features

- **auth:** add support for Email MFA ([#13945](https://github.com/aws-amplify/amplify-js/issues/13945)) ([42db720](https://github.com/aws-amplify/amplify-js/commit/42db720ac46d8c1bbd307cd21924b934e7b1b270)), closes [#13720](https://github.com/aws-amplify/amplify-js/issues/13720) [#13745](https://github.com/aws-amplify/amplify-js/issues/13745)

# [6.7.0](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.6.7...aws-amplify@6.7.0) (2024-10-29)

### Bug Fixes

- **api-graphql:** events url pattern; non-retryable error handling ([#13970](https://github.com/aws-amplify/amplify-js/issues/13970)) ([e0fdeb7](https://github.com/aws-amplify/amplify-js/commit/e0fdeb7bcbb24822607267b08b2919af5e73f2db))

### Features

- **data:** events client ([#13923](https://github.com/aws-amplify/amplify-js/issues/13923)) ([847fb51](https://github.com/aws-amplify/amplify-js/commit/847fb51acee1ee8585503625a6f73d67265217d0))

## [6.6.7](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.6.6...aws-amplify@6.6.7) (2024-10-25)

**Note:** Version bump only for package aws-amplify

## [6.6.6](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.6.5...aws-amplify@6.6.6) (2024-10-21)

**Note:** Version bump only for package aws-amplify

## [6.6.5](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.6.4...aws-amplify@6.6.5) (2024-10-15)

**Note:** Version bump only for package aws-amplify

## [6.6.4](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.6.3...aws-amplify@6.6.4) (2024-10-05)

**Note:** Version bump only for package aws-amplify

## [6.6.3](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.6.2...aws-amplify@6.6.3) (2024-09-30)

**Note:** Version bump only for package aws-amplify

## [6.6.2](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.6.1...aws-amplify@6.6.2) (2024-09-17)

**Note:** Version bump only for package aws-amplify

## [6.6.1](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.6.0...aws-amplify@6.6.1) (2024-09-16)

**Note:** Version bump only for package aws-amplify

# [6.6.0](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.5.4...aws-amplify@6.6.0) (2024-09-04)

### Features

- **api-graphql:** pass authToken via subprotocol ([#13727](https://github.com/aws-amplify/amplify-js/issues/13727)) ([ced891c](https://github.com/aws-amplify/amplify-js/commit/ced891c2e4f6b0f1fdeaf44ab80cae9d585b6d15))
- **auth:** HostedUI oidc signout ([#13512](https://github.com/aws-amplify/amplify-js/issues/13512)) ([e8fb997](https://github.com/aws-amplify/amplify-js/commit/e8fb9973f8e3e3490619416a778ec1460cafaf9a)), closes [#13712](https://github.com/aws-amplify/amplify-js/issues/13712) [#13736](https://github.com/aws-amplify/amplify-js/issues/13736)

## [6.5.4](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.5.3...aws-amplify@6.5.4) (2024-09-03)

**Note:** Version bump only for package aws-amplify

## [6.5.3](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.5.2...aws-amplify@6.5.3) (2024-08-26)

**Note:** Version bump only for package aws-amplify

## [6.5.2](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.5.1...aws-amplify@6.5.2) (2024-08-21)

**Note:** Version bump only for package aws-amplify

## [6.5.1](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.5.0...aws-amplify@6.5.1) (2024-08-15)

**Note:** Version bump only for package aws-amplify

# [6.5.0](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.4.4...aws-amplify@6.5.0) (2024-08-07)

### Features

- **storage:** add support for content disposition and content type in getUrl ([#13615](https://github.com/aws-amplify/amplify-js/issues/13615)) ([28434a6](https://github.com/aws-amplify/amplify-js/commit/28434a69d6956369ebd7b2ac4b67e0ec1bb14748))

## [6.4.4](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.4.3...aws-amplify@6.4.4) (2024-08-05)

**Note:** Version bump only for package aws-amplify

## [6.4.3](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.4.2...aws-amplify@6.4.3) (2024-07-23)

**Note:** Version bump only for package aws-amplify

## [6.4.2](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.4.1...aws-amplify@6.4.2) (2024-07-22)

### Bug Fixes

- **aws-amplify:** createKeyValueStorageFromCookieStorageAdapter misses default path and secure values ([#13508](https://github.com/aws-amplify/amplify-js/issues/13508)) ([60a559f](https://github.com/aws-amplify/amplify-js/commit/60a559f612e092c76e1499f93547248312db46f2))

## [6.4.1](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.4.0...aws-amplify@6.4.1) (2024-07-19)

**Note:** Version bump only for package aws-amplify

# [6.4.0](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.3.8...aws-amplify@6.4.0) (2024-07-08)

### Features

- **storage:** add delimiter support to list API ([#13517](https://github.com/aws-amplify/amplify-js/issues/13517)) ([95ba49c](https://github.com/aws-amplify/amplify-js/commit/95ba49cae994876b15d1062ca1d9923fef909e03))

## [6.3.8](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.3.7...aws-amplify@6.3.8) (2024-06-24)

**Note:** Version bump only for package aws-amplify

## [6.3.7](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.3.6...aws-amplify@6.3.7) (2024-06-18)

**Note:** Version bump only for package aws-amplify

## [6.3.6](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.3.5...aws-amplify@6.3.6) (2024-06-07)

**Note:** Version bump only for package aws-amplify

## [6.3.5](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.3.4...aws-amplify@6.3.5) (2024-06-04)

**Note:** Version bump only for package aws-amplify

## [6.3.4](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.3.3...aws-amplify@6.3.4) (2024-05-23)

**Note:** Version bump only for package aws-amplify

## [6.3.3](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.3.2...aws-amplify@6.3.3) (2024-05-23)

**Note:** Version bump only for package aws-amplify

## [6.3.2](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.3.1...aws-amplify@6.3.2) (2024-05-16)

### Bug Fixes

- **ssr-adapter:** refreshToken may return the same tokens across requests ([#13387](https://github.com/aws-amplify/amplify-js/issues/13387)) ([2e5e2f1](https://github.com/aws-amplify/amplify-js/commit/2e5e2f1ab49edfd4c5f4abbf2391633da29bd476))

## [6.3.1](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.3.0...aws-amplify@6.3.1) (2024-05-13)

### Bug Fixes

- Prevent overwriting with fallbacks when updating endpoint ([#13330](https://github.com/aws-amplify/amplify-js/issues/13330)) ([d7b837e](https://github.com/aws-amplify/amplify-js/commit/d7b837edba0dff209fb4a596fcb4531ce0a66e21))

# [6.3.0](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.2.0...aws-amplify@6.3.0) (2024-05-07)

### Bug Fixes

- **core:** Always set login methods when parsing Gen2 config files ([#13315](https://github.com/aws-amplify/amplify-js/issues/13315)) ([f65cae2](https://github.com/aws-amplify/amplify-js/commit/f65cae2c0e288bec0d43fd1826dd224b4aa30a69))

### Features

- **auth:** add a default deviceName when remembering device ([#13022](https://github.com/aws-amplify/amplify-js/issues/13022)) ([5f34186](https://github.com/aws-amplify/amplify-js/commit/5f3418678a06ac43ed8bf700649703c1cf280eeb))

# [6.2.0](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.1.4...aws-amplify@6.2.0) (2024-04-29)

### Bug Fixes

- Fix SSR & AmplifyOutput types when using Gen2 configuration files ([#13247](https://github.com/aws-amplify/amplify-js/issues/13247)) ([f797dc5](https://github.com/aws-amplify/amplify-js/commit/f797dc539f57a55a325b227d8205813b122d7789))

### Features

- add gen2 path parameter to getProperties and getUrl ([#13144](https://github.com/aws-amplify/amplify-js/issues/13144)) ([6456588](https://github.com/aws-amplify/amplify-js/commit/6456588bae501f92233ace4a6698d14db1f3557a))
- **storage:** add path support to copy API ([#13104](https://github.com/aws-amplify/amplify-js/issues/13104)) ([3e6528d](https://github.com/aws-amplify/amplify-js/commit/3e6528d5fc40d2d985d38d97e2a0e8120a80728e))
- **storage:** list API to accept both prefix and path ([#13100](https://github.com/aws-amplify/amplify-js/issues/13100)) ([872a817](https://github.com/aws-amplify/amplify-js/commit/872a8171d4b30a8b751e08bd64170d074beb9739))
- **storage:** uploadData path parameter support ([#13099](https://github.com/aws-amplify/amplify-js/issues/13099)) ([68a88bb](https://github.com/aws-amplify/amplify-js/commit/68a88bb4be020e60e08bf7325edd8a55a03cd177))

## [6.1.4](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.0.30...aws-amplify@6.1.4) (2024-04-26)

### Bug Fixes

- bump package versions ([#13254](https://github.com/aws-amplify/amplify-js/issues/13254)) ([aa490b9](https://github.com/aws-amplify/amplify-js/commit/aa490b9bcbd2a442d9726937cfa59ef8b7859306))
- **data:** tests for error response fix ([#13279](https://github.com/aws-amplify/amplify-js/issues/13279)) ([1aef1ee](https://github.com/aws-amplify/amplify-js/commit/1aef1ee0e65d1489e4d86d19a6d017f852f3bafd))

## [6.0.30](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.0.29...aws-amplify@6.0.30) (2024-04-24)

**Note:** Version bump only for package aws-amplify

## [6.0.29](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.0.28...aws-amplify@6.0.29) (2024-04-22)

### Bug Fixes

- **api-graphql:** incorrect list sk arg type ([#13249](https://github.com/aws-amplify/amplify-js/issues/13249)) ([f37faeb](https://github.com/aws-amplify/amplify-js/commit/f37faebacddeed66ce5bc1d7f78b8d1d46aecb17))

## [6.0.28](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@6.0.27...aws-amplify@6.0.28) (2024-04-09)

**Note:** Version bump only for package aws-amplify

## 6.0.27 (2024-04-02)

**Note:** Version bump only for package aws-amplify

## 6.0.26 (2024-04-01)

**Note:** Version bump only for package aws-amplify

## 6.0.25 (2024-03-30)

**Note:** Version bump only for package aws-amplify

## 6.0.24 (2024-03-29)

**Note:** Version bump only for package aws-amplify

## 6.0.23 (2024-03-25)

**Note:** Version bump only for package aws-amplify

## 6.0.22 (2024-03-25)

**Note:** Version bump only for package aws-amplify

## 6.0.21 (2024-03-19)

**Note:** Version bump only for package aws-amplify

## 6.0.20 (2024-03-11)

**Note:** Version bump only for package aws-amplify

## 6.0.19 (2024-03-05)

**Note:** Version bump only for package aws-amplify

## 6.0.18 (2024-02-27)

**Note:** Version bump only for package aws-amplify

## 6.0.17 (2024-02-19)

### Reverts

- Revert "chore(release): Publish" (#13027) ([f6f4f42](https://github.com/aws-amplify/amplify-js/commit/f6f4f42befa04ed3c1502fa0adf17c6700abfddf)), closes [#13027](https://github.com/aws-amplify/amplify-js/issues/13027)

## 6.0.16 (2024-02-09)

**Note:** Version bump only for package aws-amplify

## 6.0.15 (2024-02-06)

**Note:** Version bump only for package aws-amplify

## 6.0.14 (2024-02-01)

**Note:** Version bump only for package aws-amplify

## 6.0.13 (2024-01-22)

**Note:** Version bump only for package aws-amplify

## 6.0.12 (2024-01-12)

**Note:** Version bump only for package aws-amplify

## 6.0.11 (2024-01-10)

**Note:** Version bump only for package aws-amplify

## 6.0.10 (2024-01-04)

**Note:** Version bump only for package aws-amplify

## 6.0.9 (2023-12-22)

**Note:** Version bump only for package aws-amplify

## 6.0.8 (2023-12-18)

**Note:** Version bump only for package aws-amplify

## 6.0.7 (2023-12-12)

**Note:** Version bump only for package aws-amplify

## 6.0.6 (2023-12-05)

**Note:** Version bump only for package aws-amplify

## 6.0.5 (2023-11-22)

**Note:** Version bump only for package aws-amplify

## 6.0.4 (2023-11-20)

**Note:** Version bump only for package aws-amplify

## 6.0.3 (2023-11-16)

**Note:** Version bump only for package aws-amplify

## 6.0.2 (2023-11-13)

**Note:** Version bump only for package aws-amplify

## 5.3.10 (2023-08-23)

**Note:** Version bump only for package aws-amplify

## 5.3.9 (2023-08-22)

**Note:** Version bump only for package aws-amplify

## 5.3.8 (2023-08-17)

**Note:** Version bump only for package aws-amplify

## 5.3.7 (2023-08-10)

**Note:** Version bump only for package aws-amplify

## [5.3.6](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.3.5...aws-amplify@5.3.6) (2023-07-31)

**Note:** Version bump only for package aws-amplify

## [5.3.5](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.3.4...aws-amplify@5.3.5) (2023-07-20)

**Note:** Version bump only for package aws-amplify

## [5.3.4](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.3.3...aws-amplify@5.3.4) (2023-07-13)

**Note:** Version bump only for package aws-amplify

## [5.3.3](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.3.2...aws-amplify@5.3.3) (2023-06-28)

**Note:** Version bump only for package aws-amplify

## [5.3.2](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.3.1...aws-amplify@5.3.2) (2023-06-27)

**Note:** Version bump only for package aws-amplify

## [5.3.1](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.3.0...aws-amplify@5.3.1) (2023-06-21)

**Note:** Version bump only for package aws-amplify

# [5.3.0](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.2.7...aws-amplify@5.3.0) (2023-06-20)

### Features

- user agent enhancements - cross-category api>api-graphql>pubsub ([#11368](https://github.com/aws-amplify/amplify-js/issues/11368)) ([a88dda2](https://github.com/aws-amplify/amplify-js/commit/a88dda202919aa1d4dc2af48f33c3533d8626261))

## [5.2.7](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.2.6...aws-amplify@5.2.7) (2023-06-15)

**Note:** Version bump only for package aws-amplify

## [5.2.6](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.2.5...aws-amplify@5.2.6) (2023-06-14)

**Note:** Version bump only for package aws-amplify

## [5.2.5](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.2.4...aws-amplify@5.2.5) (2023-06-05)

**Note:** Version bump only for package aws-amplify

## [5.2.4](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.2.3...aws-amplify@5.2.4) (2023-05-27)

**Note:** Version bump only for package aws-amplify

## [5.2.3](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.2.2...aws-amplify@5.2.3) (2023-05-25)

**Note:** Version bump only for package aws-amplify

## [5.2.2](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.2.1...aws-amplify@5.2.2) (2023-05-18)

**Note:** Version bump only for package aws-amplify

## [5.2.1](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.2.0...aws-amplify@5.2.1) (2023-05-12)

**Note:** Version bump only for package aws-amplify

# [5.2.0](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.1.4...aws-amplify@5.2.0) (2023-05-04)

### Features

- **aws-amplify:** Bump the aws-amplify minor version ([#11327](https://github.com/aws-amplify/amplify-js/issues/11327)) ([d53501e](https://github.com/aws-amplify/amplify-js/commit/d53501ec542258611546d030e24e7d29854b103a))

## [5.1.4](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.1.3...aws-amplify@5.1.4) (2023-04-27)

**Note:** Version bump only for package aws-amplify

## [5.1.3](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.1.2...aws-amplify@5.1.3) (2023-04-20)

**Note:** Version bump only for package aws-amplify

## [5.1.2](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.1.1...aws-amplify@5.1.2) (2023-04-18)

**Note:** Version bump only for package aws-amplify

## [5.1.1](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.1.0...aws-amplify@5.1.1) (2023-04-13)

**Note:** Version bump only for package aws-amplify

# [5.1.0](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.0.25...aws-amplify@5.1.0) (2023-04-12)

### Features

- **aws-amplify:** Commit for bumping minor version of aws-amplify ([#11222](https://github.com/aws-amplify/amplify-js/issues/11222)) ([4c955d4](https://github.com/aws-amplify/amplify-js/commit/4c955d44a52d04044ca7b98f0507517bd40b96d2))

## [5.0.25](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.0.24...aws-amplify@5.0.25) (2023-04-06)

**Note:** Version bump only for package aws-amplify

## [5.0.24](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.0.23...aws-amplify@5.0.24) (2023-04-04)

**Note:** Version bump only for package aws-amplify

## [5.0.23](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.0.22...aws-amplify@5.0.23) (2023-03-30)

**Note:** Version bump only for package aws-amplify

## [5.0.22](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.0.21...aws-amplify@5.0.22) (2023-03-23)

**Note:** Version bump only for package aws-amplify

## [5.0.21](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.0.20...aws-amplify@5.0.21) (2023-03-21)

**Note:** Version bump only for package aws-amplify

## [5.0.20](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.0.19...aws-amplify@5.0.20) (2023-03-16)

**Note:** Version bump only for package aws-amplify

## [5.0.19](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.0.18...aws-amplify@5.0.19) (2023-03-13)

### Bug Fixes

- Run ts coverage check with test ([#11047](https://github.com/aws-amplify/amplify-js/issues/11047)) ([430bedf](https://github.com/aws-amplify/amplify-js/commit/430bedfd0d0618bd0093b488233521356feef787))

## [5.0.18](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.0.17...aws-amplify@5.0.18) (2023-03-08)

**Note:** Version bump only for package aws-amplify

## [5.0.17](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.0.16...aws-amplify@5.0.17) (2023-03-06)

**Note:** Version bump only for package aws-amplify

## [5.0.16](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.0.15...aws-amplify@5.0.16) (2023-02-24)

**Note:** Version bump only for package aws-amplify

## [5.0.15](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.0.14...aws-amplify@5.0.15) (2023-02-16)

**Note:** Version bump only for package aws-amplify

## [5.0.14](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.0.13...aws-amplify@5.0.14) (2023-02-09)

**Note:** Version bump only for package aws-amplify

## [5.0.13](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.0.12...aws-amplify@5.0.13) (2023-02-08)

**Note:** Version bump only for package aws-amplify

## [5.0.12](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.0.11...aws-amplify@5.0.12) (2023-01-30)

**Note:** Version bump only for package aws-amplify

## [5.0.11](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.0.10...aws-amplify@5.0.11) (2023-01-19)

**Note:** Version bump only for package aws-amplify

## [5.0.10](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.0.9...aws-amplify@5.0.10) (2023-01-13)

**Note:** Version bump only for package aws-amplify

## [5.0.9](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.0.8...aws-amplify@5.0.9) (2023-01-10)

**Note:** Version bump only for package aws-amplify

## [5.0.8](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.0.7...aws-amplify@5.0.8) (2022-12-27)

**Note:** Version bump only for package aws-amplify

## [5.0.7](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.0.6...aws-amplify@5.0.7) (2022-12-16)

**Note:** Version bump only for package aws-amplify

## [5.0.6](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.0.5...aws-amplify@5.0.6) (2022-12-15)

**Note:** Version bump only for package aws-amplify

## [5.0.5](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.0.4...aws-amplify@5.0.5) (2022-12-06)

**Note:** Version bump only for package aws-amplify

## [5.0.4](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.0.3...aws-amplify@5.0.4) (2022-11-23)

**Note:** Version bump only for package aws-amplify

## [5.0.3](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.0.2...aws-amplify@5.0.3) (2022-11-19)

**Note:** Version bump only for package aws-amplify

## [5.0.2](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.0.1...aws-amplify@5.0.2) (2022-11-16)

**Note:** Version bump only for package aws-amplify

## [5.0.1](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@5.0.0...aws-amplify@5.0.1) (2022-11-11)

**Note:** Version bump only for package aws-amplify

# [5.0.0](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.43...aws-amplify@5.0.0) (2022-11-09)

### Bug Fixes

- **aws-amplify:** Fix remove side effect ([#10611](https://github.com/aws-amplify/amplify-js/issues/10611)) ([f8162de](https://github.com/aws-amplify/amplify-js/commit/f8162de66e40f523e4481ce5bfcd3ca7ba80cc09))
- Re-add notifications to aws-amplify deps ([#10541](https://github.com/aws-amplify/amplify-js/issues/10541)) ([488118e](https://github.com/aws-amplify/amplify-js/commit/488118e281573783dfa627ead1c879da8f2cda68))
- Standardize `cache` named export to preserve interoperability with RN ([#10546](https://github.com/aws-amplify/amplify-js/issues/10546)) ([20b096b](https://github.com/aws-amplify/amplify-js/commit/20b096b1a34e6a102d08dabcedb38772f3a6caf7))

### Features

- Setup tslib & importHelpers to improve bundle size ([#10435](https://github.com/aws-amplify/amplify-js/pull/10435))
- Remove legacy UI packages ([#10433](https://github.com/aws-amplify/amplify-js/pull/10433))
- Remove miscellaneous deprecated exports & prototypes ([#10528](https://github.com/aws-amplify/amplify-js/pull/10528))
- Remove (most) default exports ([10461](https://github.com/aws-amplify/amplify-js/pull/10461))
- Remove deprecated UI package dependency ([#10604](https://github.com/aws-amplify/amplify-js/pull/10604))
- add a typescript coverage report mechanism ([#10551](https://github.com/aws-amplify/amplify-js/issues/10551)) ([8e8df55](https://github.com/aws-amplify/amplify-js/commit/8e8df55b449f8bae2fe962fe282613d1b818cc5a)), closes [#10379](https://github.com/aws-amplify/amplify-js/issues/10379)

## [4.3.42](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.41...aws-amplify@4.3.42) (2022-10-27)

**Note:** Version bump only for package aws-amplify

## [4.3.41](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.40...aws-amplify@4.3.41) (2022-10-26)

**Note:** Version bump only for package aws-amplify

## [4.3.40](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.39...aws-amplify@4.3.40) (2022-10-25)

**Note:** Version bump only for package aws-amplify

## [4.3.39](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.38...aws-amplify@4.3.39) (2022-10-14)

**Note:** Version bump only for package aws-amplify

## [4.3.38](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.37...aws-amplify@4.3.38) (2022-10-14)

**Note:** Version bump only for package aws-amplify

## [4.3.37](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.35...aws-amplify@4.3.37) (2022-09-30)

### Bug Fixes

- **cache:** use named import when exporting from aws-amplify ([#10305](https://github.com/aws-amplify/amplify-js/issues/10305)) ([1ad20b2](https://github.com/aws-amplify/amplify-js/commit/1ad20b2bcade74f197705b744d8af9bb5ab3ced4))

## [4.3.36](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.35...aws-amplify@4.3.36) (2022-09-20)

### Bug Fixes

- **cache:** use named import when exporting from aws-amplify ([#10305](https://github.com/aws-amplify/amplify-js/issues/10305)) ([019cf89](https://github.com/aws-amplify/amplify-js/commit/019cf890c5d10181c593db55e89ea9199a720c29))

## [4.3.35](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.34...aws-amplify@4.3.35) (2022-09-08)

**Note:** Version bump only for package aws-amplify

## [4.3.34](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.33...aws-amplify@4.3.34) (2022-09-01)

**Note:** Version bump only for package aws-amplify

## [4.3.33](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.32...aws-amplify@4.3.33) (2022-08-23)

**Note:** Version bump only for package aws-amplify

## [4.3.32](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.31...aws-amplify@4.3.32) (2022-08-18)

**Note:** Version bump only for package aws-amplify

## [4.3.31](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.30...aws-amplify@4.3.31) (2022-08-16)

**Note:** Version bump only for package aws-amplify

## [4.3.30](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.29...aws-amplify@4.3.30) (2022-08-01)

**Note:** Version bump only for package aws-amplify

## [4.3.29](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.28...aws-amplify@4.3.29) (2022-07-28)

**Note:** Version bump only for package aws-amplify

## [4.3.28](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.27...aws-amplify@4.3.28) (2022-07-21)

### Bug Fixes

- preserve ssr context when using DataStore ([#10088](https://github.com/aws-amplify/amplify-js/issues/10088)) ([a10d920](https://github.com/aws-amplify/amplify-js/commit/a10d920f7fb6199539fb8d9cec2cb4426dbfd47b))

## [4.3.27](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.26...aws-amplify@4.3.27) (2022-07-07)

**Note:** Version bump only for package aws-amplify

## [4.3.26](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.25...aws-amplify@4.3.26) (2022-06-18)

**Note:** Version bump only for package aws-amplify

## [4.3.25](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.24...aws-amplify@4.3.25) (2022-06-15)

**Note:** Version bump only for package aws-amplify

## [4.3.24](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.23...aws-amplify@4.3.24) (2022-05-24)

**Note:** Version bump only for package aws-amplify

## [4.3.23](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.22...aws-amplify@4.3.23) (2022-05-23)

**Note:** Version bump only for package aws-amplify

## [4.3.22](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.21...aws-amplify@4.3.22) (2022-05-12)

**Note:** Version bump only for package aws-amplify

## [4.3.21](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.20...aws-amplify@4.3.21) (2022-05-03)

**Note:** Version bump only for package aws-amplify

## [4.3.20](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.19...aws-amplify@4.3.20) (2022-04-14)

**Note:** Version bump only for package aws-amplify

## [4.3.19](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.18...aws-amplify@4.3.19) (2022-04-04)

**Note:** Version bump only for package aws-amplify

## [4.3.18](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.17...aws-amplify@4.3.18) (2022-03-28)

**Note:** Version bump only for package aws-amplify

## [4.3.17](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.16...aws-amplify@4.3.17) (2022-03-22)

**Note:** Version bump only for package aws-amplify

## [4.3.16](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.15...aws-amplify@4.3.16) (2022-03-10)

**Note:** Version bump only for package aws-amplify

## [4.3.15](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.14...aws-amplify@4.3.15) (2022-02-28)

**Note:** Version bump only for package aws-amplify

## [4.3.14](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.13...aws-amplify@4.3.14) (2022-02-03)

**Note:** Version bump only for package aws-amplify

## [4.3.13](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.12...aws-amplify@4.3.13) (2022-01-27)

**Note:** Version bump only for package aws-amplify

## [4.3.12](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.11...aws-amplify@4.3.12) (2022-01-07)

**Note:** Version bump only for package aws-amplify

## [4.3.11](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.10...aws-amplify@4.3.11) (2021-12-16)

**Note:** Version bump only for package aws-amplify

## [4.3.10](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.9...aws-amplify@4.3.10) (2021-12-03)

**Note:** Version bump only for package aws-amplify

## [4.3.9](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.8...aws-amplify@4.3.9) (2021-12-02)

**Note:** Version bump only for package aws-amplify

## [4.3.8](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.7...aws-amplify@4.3.8) (2021-11-18)

**Note:** Version bump only for package aws-amplify

## [4.3.7](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.6...aws-amplify@4.3.7) (2021-11-16)

**Note:** Version bump only for package aws-amplify

## [4.3.6](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.5...aws-amplify@4.3.6) (2021-11-12)

**Note:** Version bump only for package aws-amplify

## [4.3.5](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.4...aws-amplify@4.3.5) (2021-11-09)

**Note:** Version bump only for package aws-amplify

## [4.3.4](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.3...aws-amplify@4.3.4) (2021-10-28)

**Note:** Version bump only for package aws-amplify

## [4.3.3](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.2...aws-amplify@4.3.3) (2021-10-21)

**Note:** Version bump only for package aws-amplify

## [4.3.2](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.1...aws-amplify@4.3.2) (2021-10-07)

**Note:** Version bump only for package aws-amplify

## [4.3.1](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.3.0...aws-amplify@4.3.1) (2021-09-30)

**Note:** Version bump only for package aws-amplify

# [4.3.0](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.2.11...aws-amplify@4.3.0) (2021-09-24)

### Features

- **aws-amplify:** pull `Geo` through the main `aws-amplify` package ([#8669](https://github.com/aws-amplify/amplify-js/issues/8669)) ([8d72d8a](https://github.com/aws-amplify/amplify-js/commit/8d72d8aa63080d6307af5f4500c3e07194bfd4fb))

## [4.2.11](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.2.10...aws-amplify@4.2.11) (2021-09-22)

### Bug Fixes

- **aws-amplify:** export AnalyticsProvider ([#8936](https://github.com/aws-amplify/amplify-js/issues/8936)) ([41664c3](https://github.com/aws-amplify/amplify-js/commit/41664c36d7cd7249ddcdf421490d6501c4248f3c))

## [4.2.10](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.2.9...aws-amplify@4.2.10) (2021-09-17)

**Note:** Version bump only for package aws-amplify

## [4.2.9](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.2.8...aws-amplify@4.2.9) (2021-09-09)

**Note:** Version bump only for package aws-amplify

## [4.2.8](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.2.7...aws-amplify@4.2.8) (2021-09-07)

**Note:** Version bump only for package aws-amplify

## [4.2.7](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.2.6...aws-amplify@4.2.7) (2021-09-04)

**Note:** Version bump only for package aws-amplify

## [4.2.6](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.2.5...aws-amplify@4.2.6) (2021-09-02)

**Note:** Version bump only for package aws-amplify

## [4.2.5](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.2.4...aws-amplify@4.2.5) (2021-08-26)

**Note:** Version bump only for package aws-amplify

## [4.2.4](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.2.3...aws-amplify@4.2.4) (2021-08-19)

**Note:** Version bump only for package aws-amplify

## [4.2.3](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.2.2...aws-amplify@4.2.3) (2021-08-12)

**Note:** Version bump only for package aws-amplify

## [4.2.2](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.2.1...aws-amplify@4.2.2) (2021-07-28)

**Note:** Version bump only for package aws-amplify

## [4.2.1](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.2.0...aws-amplify@4.2.1) (2021-07-22)

**Note:** Version bump only for package aws-amplify

# [4.2.0](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.1.3...aws-amplify@4.2.0) (2021-07-16)

### Features

- core/cloudwatch-logging ([#8588](https://github.com/aws-amplify/amplify-js/issues/8588)) ([6f28c7e](https://github.com/aws-amplify/amplify-js/commit/6f28c7e94ae8d41b37490292ff3547505100c6b2))

## [4.1.3](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.1.2...aws-amplify@4.1.3) (2021-07-08)

**Note:** Version bump only for package aws-amplify

## [4.1.2](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.1.1...aws-amplify@4.1.2) (2021-06-24)

**Note:** Version bump only for package aws-amplify

## [4.1.1](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.1.0...aws-amplify@4.1.1) (2021-06-18)

**Note:** Version bump only for package aws-amplify

# [4.1.0](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.0.3...aws-amplify@4.1.0) (2021-06-10)

### Features

- moved CloudLogger logic to ConsoleLogger ([93db90d](https://github.com/aws-amplify/amplify-js/commit/93db90d041c7ca697e5993003a4fb105a3821cbe))

## [4.0.3](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@4.0.1...aws-amplify@4.0.3) (2021-05-26)

**Note:** Version bump only for package aws-amplify

## [4.0.1](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.4.0...aws-amplify@4.0.1) (2021-05-14)

**Note:** Version bump only for package aws-amplify

## [3.4.1](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.4.0...aws-amplify@3.4.1) (2021-05-11)

**Note:** Version bump only for package aws-amplify

# [3.4.0](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.3.27...aws-amplify@3.4.0) (2021-05-06)

### Features

- **@aws-amplify/datastore:** DataStore - Multi-Auth ([#8008](https://github.com/aws-amplify/amplify-js/issues/8008)) ([dedd564](https://github.com/aws-amplify/amplify-js/commit/dedd5641dfcfce209433088fe9570874cd810997))

## [3.3.27](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.3.26...aws-amplify@3.3.27) (2021-04-15)

**Note:** Version bump only for package aws-amplify

## [3.3.26](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.3.25...aws-amplify@3.3.26) (2021-03-25)

**Note:** Version bump only for package aws-amplify

## [3.3.25](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.3.24...aws-amplify@3.3.25) (2021-03-18)

**Note:** Version bump only for package aws-amplify

## [3.3.24](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.3.23...aws-amplify@3.3.24) (2021-03-12)

**Note:** Version bump only for package aws-amplify

## [3.3.23](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.3.22...aws-amplify@3.3.23) (2021-03-08)

**Note:** Version bump only for package aws-amplify

## [3.3.22](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.3.21...aws-amplify@3.3.22) (2021-03-03)

**Note:** Version bump only for package aws-amplify

## [3.3.21](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.3.20...aws-amplify@3.3.21) (2021-02-25)

**Note:** Version bump only for package aws-amplify

## [3.3.20](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.3.19...aws-amplify@3.3.20) (2021-02-18)

**Note:** Version bump only for package aws-amplify

## [3.3.19](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.3.18...aws-amplify@3.3.19) (2021-02-15)

**Note:** Version bump only for package aws-amplify

## [3.3.18](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.3.17...aws-amplify@3.3.18) (2021-02-09)

**Note:** Version bump only for package aws-amplify

## [3.3.17](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.3.16...aws-amplify@3.3.17) (2021-02-03)

**Note:** Version bump only for package aws-amplify

## [3.3.16](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.3.15...aws-amplify@3.3.16) (2021-02-01)

**Note:** Version bump only for package aws-amplify

## [3.3.15](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.3.14...aws-amplify@3.3.15) (2021-01-29)

**Note:** Version bump only for package aws-amplify

## [3.3.14](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.3.13...aws-amplify@3.3.14) (2021-01-07)

**Note:** Version bump only for package aws-amplify

## [3.3.13](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.3.12...aws-amplify@3.3.13) (2020-12-17)

**Note:** Version bump only for package aws-amplify

## [3.3.12](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.3.11...aws-amplify@3.3.12) (2020-12-10)

**Note:** Version bump only for package aws-amplify

## [3.3.11](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.3.10...aws-amplify@3.3.11) (2020-11-30)

**Note:** Version bump only for package aws-amplify

## [3.3.10](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.3.9...aws-amplify@3.3.10) (2020-11-23)

**Note:** Version bump only for package aws-amplify

## [3.3.9](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.3.8...aws-amplify@3.3.9) (2020-11-20)

**Note:** Version bump only for package aws-amplify

## [3.3.8](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.3.7...aws-amplify@3.3.8) (2020-11-13)

### Bug Fixes

- **@aws-amplify/datastore:** export SortDirection and syncExpression from aws-amplify ([#7104](https://github.com/aws-amplify/amplify-js/issues/7104)) ([8b3183f](https://github.com/aws-amplify/amplify-js/commit/8b3183f4d2ec7289044e2b6700e3ff4df3f98ce4))

## [3.3.7](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.3.6...aws-amplify@3.3.7) (2020-11-03)

**Note:** Version bump only for package aws-amplify

## [3.3.6](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.3.5...aws-amplify@3.3.6) (2020-10-31)

**Note:** Version bump only for package aws-amplify

## [3.3.5](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.3.4...aws-amplify@3.3.5) (2020-10-29)

**Note:** Version bump only for package aws-amplify

## [3.3.4](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.3.3...aws-amplify@3.3.4) (2020-10-15)

**Note:** Version bump only for package aws-amplify

## [3.3.3](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.3.2...aws-amplify@3.3.3) (2020-10-01)

**Note:** Version bump only for package aws-amplify

## [3.3.2](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.3.1...aws-amplify@3.3.2) (2020-09-25)

**Note:** Version bump only for package aws-amplify

## [3.3.1](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.3.0...aws-amplify@3.3.1) (2020-09-16)

**Note:** Version bump only for package aws-amplify

# [3.3.0](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.2.0...aws-amplify@3.3.0) (2020-09-15)

### Features

- **@aws-amplify/datastore:** add query sorting ([#6785](https://github.com/aws-amplify/amplify-js/issues/6785)) ([d9c2f5e](https://github.com/aws-amplify/amplify-js/commit/d9c2f5efbd5ad5dd97e441d7f453f8358f615199))

# [3.2.0](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.1.1...aws-amplify@3.2.0) (2020-09-10)

### Features

- **@aws-amplify/datastore:** Add SSR support for DataStore ([#6726](https://github.com/aws-amplify/amplify-js/issues/6726)) ([e56aba6](https://github.com/aws-amplify/amplify-js/commit/e56aba642acc7eb3482f0e69454a530409d1b3ac))

## [3.1.1](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.1.0...aws-amplify@3.1.1) (2020-09-03)

**Note:** Version bump only for package aws-amplify

# [3.1.0](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.0.25...aws-amplify@3.1.0) (2020-09-03)

### Bug Fixes

- **@aws-amplify/datastore:** DataStore regression with AsyncStorage ([#6712](https://github.com/aws-amplify/amplify-js/issues/6712)) ([7059556](https://github.com/aws-amplify/amplify-js/commit/7059556f693b4a52143ecaa9934a14f7195caee8))

### Features

- **SSR:** withSSRContext ([#6146](https://github.com/aws-amplify/amplify-js/issues/6146)) ([1cb1afd](https://github.com/aws-amplify/amplify-js/commit/1cb1afd1e56135908dceb2ef6403f0b3e78067fe))

## [3.0.25](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.0.24...aws-amplify@3.0.25) (2020-09-01)

**Note:** Version bump only for package aws-amplify

## [3.0.24](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.0.23...aws-amplify@3.0.24) (2020-08-19)

**Note:** Version bump only for package aws-amplify

## [3.0.23](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.0.22...aws-amplify@3.0.23) (2020-08-06)

**Note:** Version bump only for package aws-amplify

## [3.0.22](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.0.21...aws-amplify@3.0.22) (2020-07-27)

**Note:** Version bump only for package aws-amplify

## [3.0.21](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.0.20...aws-amplify@3.0.21) (2020-07-22)

**Note:** Version bump only for package aws-amplify

## [3.0.20](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.0.19...aws-amplify@3.0.20) (2020-07-09)

**Note:** Version bump only for package aws-amplify

## [3.0.19](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.0.18...aws-amplify@3.0.19) (2020-07-07)

**Note:** Version bump only for package aws-amplify

## [3.0.18](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.0.17...aws-amplify@3.0.18) (2020-06-18)

**Note:** Version bump only for package aws-amplify

## [3.0.17](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.0.16...aws-amplify@3.0.17) (2020-06-09)

**Note:** Version bump only for package aws-amplify

## [3.0.16](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.0.15...aws-amplify@3.0.16) (2020-06-04)

**Note:** Version bump only for package aws-amplify

## [3.0.15](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.0.14...aws-amplify@3.0.15) (2020-06-03)

**Note:** Version bump only for package aws-amplify

## [3.0.14](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.0.13...aws-amplify@3.0.14) (2020-06-02)

**Note:** Version bump only for package aws-amplify

## [3.0.13](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.0.12...aws-amplify@3.0.13) (2020-05-26)

**Note:** Version bump only for package aws-amplify

## [3.0.12](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.0.11...aws-amplify@3.0.12) (2020-05-22)

**Note:** Version bump only for package aws-amplify

## [3.0.11](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.0.10...aws-amplify@3.0.11) (2020-05-14)

**Note:** Version bump only for package aws-amplify

## [3.0.10](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.0.9...aws-amplify@3.0.10) (2020-04-30)

**Note:** Version bump only for package aws-amplify

## [3.0.9](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.0.8...aws-amplify@3.0.9) (2020-04-24)

### Bug Fixes

- **aws-amplify:** add DataStore export ([#5421](https://github.com/aws-amplify/amplify-js/issues/5421)) ([7cab470](https://github.com/aws-amplify/amplify-js/commit/7cab47085520534327f30b531d3fb0400cc07dac))

## [3.0.8](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.0.7...aws-amplify@3.0.8) (2020-04-14)

**Note:** Version bump only for package aws-amplify

## [3.0.7](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.0.6...aws-amplify@3.0.7) (2020-04-08)

**Note:** Version bump only for package aws-amplify

## [3.0.6](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.0.5...aws-amplify@3.0.6) (2020-04-07)

**Note:** Version bump only for package aws-amplify

## [3.0.5](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.0.4...aws-amplify@3.0.5) (2020-04-03)

**Note:** Version bump only for package aws-amplify

## [3.0.4](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.0.3...aws-amplify@3.0.4) (2020-04-02)

**Note:** Version bump only for package aws-amplify

## [3.0.3](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.0.2...aws-amplify@3.0.3) (2020-04-01)

**Note:** Version bump only for package aws-amplify

## [3.0.2](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@3.0.1...aws-amplify@3.0.2) (2020-04-01)

**Note:** Version bump only for package aws-amplify

## [3.0.1](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@2.3.0...aws-amplify@3.0.1) (2020-03-31)

### Reverts

- Revert "Publish" ([1319d31](https://github.com/aws-amplify/amplify-js/commit/1319d319b69717e76660fbfa6f1a845195c6d635))

# [2.3.0](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@2.2.7...aws-amplify@2.3.0) (2020-03-30)

### Features

- **@aws-amplify/datastore:** Make DataStore available in aws-amplify… ([#5202](https://github.com/aws-amplify/amplify-js/issues/5202)) ([c9c020d](https://github.com/aws-amplify/amplify-js/commit/c9c020d6d13c5678ce15c738f7eaebec39e2b48a))

## [2.2.7](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@2.2.6...aws-amplify@2.2.7) (2020-03-25)

**Note:** Version bump only for package aws-amplify

## [2.2.6](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@2.2.5...aws-amplify@2.2.6) (2020-02-28)

**Note:** Version bump only for package aws-amplify

## [2.2.5](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@2.2.4...aws-amplify@2.2.5) (2020-02-14)

**Note:** Version bump only for package aws-amplify

## [2.2.4](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@2.2.2...aws-amplify@2.2.4) (2020-02-07)

### Bug Fixes

- **cache:** export correct module for RN ([#4786](https://github.com/aws-amplify/amplify-js/issues/4786)) ([a15730c](https://github.com/aws-amplify/amplify-js/commit/a15730cc50692d9d31a0f586c3544b3dcdbea659))

## [2.2.2](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@2.2.1...aws-amplify@2.2.2) (2020-01-10)

### Bug Fixes

- **aws-amplify:** delete unused AmazonAIPredictionsProvider import ([#4629](https://github.com/aws-amplify/amplify-js/issues/4629)) ([8781ce4](https://github.com/aws-amplify/amplify-js/commit/8781ce4b5139a9b55f39f59bb31e204bdbb2c8bc))
- [#4311](https://github.com/aws-amplify/amplify-js/issues/4311) Update main entry field to point to CJS builds instead of webpack bundles ([#4678](https://github.com/aws-amplify/amplify-js/issues/4678)) ([54fbdf4](https://github.com/aws-amplify/amplify-js/commit/54fbdf4b1393567735fb7b5f4144db273f1a5f6a))

## [2.2.1](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@2.2.0...aws-amplify@2.2.1) (2019-12-18)

**Note:** Version bump only for package aws-amplify

# [2.2.0](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@2.1.0...aws-amplify@2.2.0) (2019-12-03)

### Features

- **analytics:** Add analytics provider for AWS Firehose ([#2823](https://github.com/aws-amplify/amplify-js/issues/2823)) ([29103ae](https://github.com/aws-amplify/amplify-js/commit/29103ae0b2d76dba66e3dc856d77c4c2ffb0e687))

# [2.1.0](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@1.2.4...aws-amplify@2.1.0) (2019-11-15)

### Features

- enable watch mode for builds ([#4358](https://github.com/aws-amplify/amplify-js/issues/4358)) ([055e530](https://github.com/aws-amplify/amplify-js/commit/055e5308efc308ae6beee78f8963bb2f812e1f85))

## [1.2.4](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@1.2.3...aws-amplify@1.2.4) (2019-10-29)

**Note:** Version bump only for package aws-amplify

## [1.2.3](https://github.com/aws-amplify/amplify-js/compare/aws-amplify@1.2.2...aws-amplify@1.2.3) (2019-10-23)

**Note:** Version bump only for package aws-amplify

## [1.2.2](https://github.com/aws/aws-amplify/compare/aws-amplify@1.2.0...aws-amplify@1.2.2) (2019-10-10)

**Note:** Version bump only for package aws-amplify

# [1.2.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.40...aws-amplify@1.2.0) (2019-10-10)

### Features

- Added Prettier formatting ([4dfd9aa](https://github.com/aws/aws-amplify/commit/4dfd9aa9ab900307c9d17c68448a6ca4aa08fd5a))

## [1.1.40](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.38...aws-amplify@1.1.40) (2019-09-13)

**Note:** Version bump only for package aws-amplify

## [1.1.38](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.37...aws-amplify@1.1.38) (2019-09-05)

**Note:** Version bump only for package aws-amplify

## [1.1.37](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.36...aws-amplify@1.1.37) (2019-09-04)

**Note:** Version bump only for package aws-amplify

## [1.1.36](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.35...aws-amplify@1.1.36) (2019-08-05)

**Note:** Version bump only for package aws-amplify

## [1.1.35](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.34...aws-amplify@1.1.35) (2019-08-01)

**Note:** Version bump only for package aws-amplify

## [1.1.34](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.33...aws-amplify@1.1.34) (2019-07-31)

**Note:** Version bump only for package aws-amplify

## [1.1.33](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.32...aws-amplify@1.1.33) (2019-07-30)

**Note:** Version bump only for package aws-amplify

## [1.1.32](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.30...aws-amplify@1.1.32) (2019-07-18)

**Note:** Version bump only for package aws-amplify

<a name="1.1.31-unstable.5"></a>

## [1.1.31-unstable.5](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.31-unstable.4...aws-amplify@1.1.31-unstable.5) (2019-07-12)

**Note:** Version bump only for package aws-amplify

<a name="1.1.31-unstable.4"></a>

## [1.1.31-unstable.4](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.31-unstable.3...aws-amplify@1.1.31-unstable.4) (2019-07-12)

**Note:** Version bump only for package aws-amplify

<a name="1.1.31-unstable.3"></a>

## [1.1.31-unstable.3](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.31-unstable.2...aws-amplify@1.1.31-unstable.3) (2019-07-12)

**Note:** Version bump only for package aws-amplify

<a name="1.1.31-unstable.2"></a>

## [1.1.31-unstable.2](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.31-unstable.0...aws-amplify@1.1.31-unstable.2) (2019-07-12)

**Note:** Version bump only for package aws-amplify

<a name="1.1.31-unstable.0"></a>

## [1.1.31-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.30...aws-amplify@1.1.31-unstable.0) (2019-07-10)

**Note:** Version bump only for package aws-amplify

<a name="1.1.30"></a>

## [1.1.30](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.30-unstable.2...aws-amplify@1.1.30) (2019-07-09)

**Note:** Version bump only for package aws-amplify

<a name="1.1.30-unstable.2"></a>

## [1.1.30-unstable.2](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.30-unstable.1...aws-amplify@1.1.30-unstable.2) (2019-07-09)

**Note:** Version bump only for package aws-amplify

<a name="1.1.30-unstable.1"></a>

## [1.1.30-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.30-unstable.0...aws-amplify@1.1.30-unstable.1) (2019-06-27)

**Note:** Version bump only for package aws-amplify

<a name="1.1.30-unstable.0"></a>

## [1.1.30-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.29...aws-amplify@1.1.30-unstable.0) (2019-06-18)

**Note:** Version bump only for package aws-amplify

<a name="1.1.29"></a>

## [1.1.29](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.29-unstable.6...aws-amplify@1.1.29) (2019-06-17)

**Note:** Version bump only for package aws-amplify

<a name="1.1.29-unstable.6"></a>

## [1.1.29-unstable.6](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.29-unstable.5...aws-amplify@1.1.29-unstable.6) (2019-06-17)

**Note:** Version bump only for package aws-amplify

<a name="1.1.29-unstable.5"></a>

## [1.1.29-unstable.5](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.29-unstable.4...aws-amplify@1.1.29-unstable.5) (2019-06-14)

**Note:** Version bump only for package aws-amplify

<a name="1.1.29-unstable.4"></a>

## [1.1.29-unstable.4](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.29-unstable.3...aws-amplify@1.1.29-unstable.4) (2019-06-13)

**Note:** Version bump only for package aws-amplify

<a name="1.1.29-unstable.3"></a>

## [1.1.29-unstable.3](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.29-unstable.2...aws-amplify@1.1.29-unstable.3) (2019-06-13)

**Note:** Version bump only for package aws-amplify

<a name="1.1.29-unstable.2"></a>

## [1.1.29-unstable.2](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.29-unstable.1...aws-amplify@1.1.29-unstable.2) (2019-06-03)

**Note:** Version bump only for package aws-amplify

<a name="1.1.29-unstable.1"></a>

## [1.1.29-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.28...aws-amplify@1.1.29-unstable.1) (2019-05-24)

### Bug Fixes

- **aws-amplify:** manual version bumps for lerna issue ([9ce5a72](https://github.com/aws/aws-amplify/commit/9ce5a72))

<a name="1.1.28"></a>

## [1.1.28](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.28-unstable.3...aws-amplify@1.1.28) (2019-05-14)

**Note:** Version bump only for package aws-amplify

<a name="1.1.28-unstable.3"></a>

## [1.1.28-unstable.3](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.28-unstable.2...aws-amplify@1.1.28-unstable.3) (2019-05-14)

**Note:** Version bump only for package aws-amplify

<a name="1.1.28-unstable.2"></a>

## [1.1.28-unstable.2](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.28-unstable.1...aws-amplify@1.1.28-unstable.2) (2019-05-13)

**Note:** Version bump only for package aws-amplify

<a name="1.1.28-unstable.1"></a>

## [1.1.28-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.28-unstable.0...aws-amplify@1.1.28-unstable.1) (2019-05-10)

**Note:** Version bump only for package aws-amplify

<a name="1.1.28-unstable.0"></a>

## [1.1.28-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.27...aws-amplify@1.1.28-unstable.0) (2019-05-09)

**Note:** Version bump only for package aws-amplify

<a name="1.1.27"></a>

## [1.1.27](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.27-unstable.12...aws-amplify@1.1.27) (2019-05-06)

**Note:** Version bump only for package aws-amplify

<a name="1.1.27-unstable.12"></a>

## [1.1.27-unstable.12](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.27-unstable.11...aws-amplify@1.1.27-unstable.12) (2019-05-06)

**Note:** Version bump only for package aws-amplify

<a name="1.1.27-unstable.11"></a>

## [1.1.27-unstable.11](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.27-unstable.10...aws-amplify@1.1.27-unstable.11) (2019-05-06)

**Note:** Version bump only for package aws-amplify

<a name="1.1.27-unstable.10"></a>

## [1.1.27-unstable.10](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.27-unstable.9...aws-amplify@1.1.27-unstable.10) (2019-04-26)

**Note:** Version bump only for package aws-amplify

<a name="1.1.27-unstable.9"></a>

## [1.1.27-unstable.9](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.27-unstable.8...aws-amplify@1.1.27-unstable.9) (2019-04-26)

**Note:** Version bump only for package aws-amplify

<a name="1.1.27-unstable.8"></a>

## [1.1.27-unstable.8](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.27-unstable.7...aws-amplify@1.1.27-unstable.8) (2019-04-24)

**Note:** Version bump only for package aws-amplify

<a name="1.1.27-unstable.7"></a>

## [1.1.27-unstable.7](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.27-unstable.6...aws-amplify@1.1.27-unstable.7) (2019-04-24)

**Note:** Version bump only for package aws-amplify

<a name="1.1.27-unstable.6"></a>

## [1.1.27-unstable.6](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.27-unstable.5...aws-amplify@1.1.27-unstable.6) (2019-04-22)

**Note:** Version bump only for package aws-amplify

<a name="1.1.27-unstable.5"></a>

## [1.1.27-unstable.5](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.27-unstable.4...aws-amplify@1.1.27-unstable.5) (2019-04-19)

**Note:** Version bump only for package aws-amplify

<a name="1.1.27-unstable.4"></a>

## [1.1.27-unstable.4](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.27-unstable.3...aws-amplify@1.1.27-unstable.4) (2019-04-17)

**Note:** Version bump only for package aws-amplify

<a name="1.1.27-unstable.3"></a>

## [1.1.27-unstable.3](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.27-unstable.2...aws-amplify@1.1.27-unstable.3) (2019-04-16)

**Note:** Version bump only for package aws-amplify

<a name="1.1.27-unstable.2"></a>

## [1.1.27-unstable.2](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.27-unstable.1...aws-amplify@1.1.27-unstable.2) (2019-04-15)

**Note:** Version bump only for package aws-amplify

<a name="1.1.27-unstable.1"></a>

## [1.1.27-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.27-unstable.0...aws-amplify@1.1.27-unstable.1) (2019-04-12)

**Note:** Version bump only for package aws-amplify

<a name="1.1.27-unstable.0"></a>

## [1.1.27-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.26...aws-amplify@1.1.27-unstable.0) (2019-04-12)

**Note:** Version bump only for package aws-amplify

<a name="1.1.26"></a>

## [1.1.26](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.26-unstable.0...aws-amplify@1.1.26) (2019-04-11)

**Note:** Version bump only for package aws-amplify

<a name="1.1.26-unstable.0"></a>

## [1.1.26-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.25...aws-amplify@1.1.26-unstable.0) (2019-04-10)

**Note:** Version bump only for package aws-amplify

<a name="1.1.25"></a>

## [1.1.25](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.25-unstable.2...aws-amplify@1.1.25) (2019-04-09)

**Note:** Version bump only for package aws-amplify

<a name="1.1.25-unstable.2"></a>

## [1.1.25-unstable.2](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.25-unstable.1...aws-amplify@1.1.25-unstable.2) (2019-04-08)

**Note:** Version bump only for package aws-amplify

<a name="1.1.25-unstable.1"></a>

## [1.1.25-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.25-unstable.0...aws-amplify@1.1.25-unstable.1) (2019-04-07)

**Note:** Version bump only for package aws-amplify

<a name="1.1.25-unstable.0"></a>

## [1.1.25-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.24...aws-amplify@1.1.25-unstable.0) (2019-04-05)

**Note:** Version bump only for package aws-amplify

<a name="1.1.24"></a>

## [1.1.24](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.24-unstable.1...aws-amplify@1.1.24) (2019-04-04)

**Note:** Version bump only for package aws-amplify

<a name="1.1.24-unstable.1"></a>

## [1.1.24-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.24-unstable.0...aws-amplify@1.1.24-unstable.1) (2019-04-04)

**Note:** Version bump only for package aws-amplify

<a name="1.1.24-unstable.0"></a>

## [1.1.24-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.23...aws-amplify@1.1.24-unstable.0) (2019-04-02)

**Note:** Version bump only for package aws-amplify

<a name="1.1.23"></a>

## [1.1.23](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.23-unstable.11...aws-amplify@1.1.23) (2019-03-28)

**Note:** Version bump only for package aws-amplify

<a name="1.1.23-unstable.11"></a>

## [1.1.23-unstable.11](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.23-unstable.10...aws-amplify@1.1.23-unstable.11) (2019-03-28)

**Note:** Version bump only for package aws-amplify

<a name="1.1.23-unstable.10"></a>

## [1.1.23-unstable.10](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.23-unstable.9...aws-amplify@1.1.23-unstable.10) (2019-03-25)

**Note:** Version bump only for package aws-amplify

<a name="1.1.23-unstable.9"></a>

## [1.1.23-unstable.9](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.23-unstable.8...aws-amplify@1.1.23-unstable.9) (2019-03-24)

**Note:** Version bump only for package aws-amplify

<a name="1.1.23-unstable.8"></a>

## [1.1.23-unstable.8](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.23-unstable.7...aws-amplify@1.1.23-unstable.8) (2019-03-22)

**Note:** Version bump only for package aws-amplify

<a name="1.1.23-unstable.7"></a>

## [1.1.23-unstable.7](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.23-unstable.6...aws-amplify@1.1.23-unstable.7) (2019-03-22)

**Note:** Version bump only for package aws-amplify

<a name="1.1.23-unstable.6"></a>

## [1.1.23-unstable.6](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.23-unstable.5...aws-amplify@1.1.23-unstable.6) (2019-03-21)

**Note:** Version bump only for package aws-amplify

<a name="1.1.23-unstable.5"></a>

## [1.1.23-unstable.5](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.23-unstable.4...aws-amplify@1.1.23-unstable.5) (2019-03-20)

**Note:** Version bump only for package aws-amplify

<a name="1.1.23-unstable.4"></a>

## [1.1.23-unstable.4](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.23-unstable.3...aws-amplify@1.1.23-unstable.4) (2019-03-19)

**Note:** Version bump only for package aws-amplify

<a name="1.1.23-unstable.3"></a>

## [1.1.23-unstable.3](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.23-unstable.2...aws-amplify@1.1.23-unstable.3) (2019-03-18)

**Note:** Version bump only for package aws-amplify

<a name="1.1.23-unstable.2"></a>

## [1.1.23-unstable.2](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.23-unstable.1...aws-amplify@1.1.23-unstable.2) (2019-03-08)

**Note:** Version bump only for package aws-amplify

<a name="1.1.23-unstable.1"></a>

## [1.1.23-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.23-unstable.0...aws-amplify@1.1.23-unstable.1) (2019-03-07)

**Note:** Version bump only for package aws-amplify

<a name="1.1.23-unstable.0"></a>

## [1.1.23-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.22...aws-amplify@1.1.23-unstable.0) (2019-03-07)

**Note:** Version bump only for package aws-amplify

<a name="1.1.22"></a>

## [1.1.22](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.22-unstable.3...aws-amplify@1.1.22) (2019-03-06)

**Note:** Version bump only for package aws-amplify

<a name="1.1.22-unstable.3"></a>

## [1.1.22-unstable.3](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.22-unstable.2...aws-amplify@1.1.22-unstable.3) (2019-03-06)

**Note:** Version bump only for package aws-amplify

<a name="1.1.22-unstable.2"></a>

## [1.1.22-unstable.2](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.22-unstable.1...aws-amplify@1.1.22-unstable.2) (2019-03-05)

**Note:** Version bump only for package aws-amplify

<a name="1.1.22-unstable.1"></a>

## [1.1.22-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.22-unstable.0...aws-amplify@1.1.22-unstable.1) (2019-03-04)

**Note:** Version bump only for package aws-amplify

<a name="1.1.22-unstable.0"></a>

## [1.1.22-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.21...aws-amplify@1.1.22-unstable.0) (2019-03-04)

**Note:** Version bump only for package aws-amplify

<a name="1.1.21"></a>

## [1.1.21](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.20...aws-amplify@1.1.21) (2019-03-04)

**Note:** Version bump only for package aws-amplify

<a name="1.1.20"></a>

## [1.1.20](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.20-unstable.15...aws-amplify@1.1.20) (2019-03-04)

**Note:** Version bump only for package aws-amplify

<a name="1.1.20-unstable.15"></a>

## [1.1.20-unstable.15](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.20-unstable.14...aws-amplify@1.1.20-unstable.15) (2019-03-04)

### Features

- **aws-amplify-react-native:** Add withOAuth HOC for Cognito Hosted UI ([#2665](https://github.com/aws/aws-amplify/issues/2665)) ([ac4d232](https://github.com/aws/aws-amplify/commit/ac4d232))

<a name="1.1.20-unstable.14"></a>

## [1.1.20-unstable.14](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.20-unstable.13...aws-amplify@1.1.20-unstable.14) (2019-03-04)

**Note:** Version bump only for package aws-amplify

<a name="1.1.20-unstable.13"></a>

## [1.1.20-unstable.13](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.20-unstable.12...aws-amplify@1.1.20-unstable.13) (2019-03-01)

**Note:** Version bump only for package aws-amplify

<a name="1.1.20-unstable.12"></a>

## [1.1.20-unstable.12](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.20-unstable.11...aws-amplify@1.1.20-unstable.12) (2019-02-28)

**Note:** Version bump only for package aws-amplify

<a name="1.1.20-unstable.11"></a>

## [1.1.20-unstable.11](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.20-unstable.10...aws-amplify@1.1.20-unstable.11) (2019-02-27)

**Note:** Version bump only for package aws-amplify

<a name="1.1.20-unstable.10"></a>

## [1.1.20-unstable.10](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.20-unstable.9...aws-amplify@1.1.20-unstable.10) (2019-02-27)

**Note:** Version bump only for package aws-amplify

<a name="1.1.20-unstable.9"></a>

## [1.1.20-unstable.9](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.20-unstable.8...aws-amplify@1.1.20-unstable.9) (2019-02-27)

**Note:** Version bump only for package aws-amplify

<a name="1.1.20-unstable.8"></a>

## [1.1.20-unstable.8](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.20-unstable.7...aws-amplify@1.1.20-unstable.8) (2019-02-20)

**Note:** Version bump only for package aws-amplify

<a name="1.1.20-unstable.7"></a>

## [1.1.20-unstable.7](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.20-unstable.6...aws-amplify@1.1.20-unstable.7) (2019-02-11)

**Note:** Version bump only for package aws-amplify

<a name="1.1.20-unstable.6"></a>

## [1.1.20-unstable.6](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.20-unstable.5...aws-amplify@1.1.20-unstable.6) (2019-01-22)

**Note:** Version bump only for package aws-amplify

<a name="1.1.20-unstable.5"></a>

## [1.1.20-unstable.5](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.20-unstable.4...aws-amplify@1.1.20-unstable.5) (2019-01-21)

**Note:** Version bump only for package aws-amplify

<a name="1.1.20-unstable.4"></a>

## [1.1.20-unstable.4](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.20-unstable.3...aws-amplify@1.1.20-unstable.4) (2019-01-21)

**Note:** Version bump only for package aws-amplify

<a name="1.1.20-unstable.3"></a>

## [1.1.20-unstable.3](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.20-unstable.2...aws-amplify@1.1.20-unstable.3) (2019-01-18)

**Note:** Version bump only for package aws-amplify

<a name="1.1.20-unstable.2"></a>

## [1.1.20-unstable.2](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.20-unstable.1...aws-amplify@1.1.20-unstable.2) (2019-01-10)

**Note:** Version bump only for package aws-amplify

<a name="1.1.20-unstable.1"></a>

## [1.1.20-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.20-unstable.0...aws-amplify@1.1.20-unstable.1) (2019-01-10)

**Note:** Version bump only for package aws-amplify

<a name="1.1.20-unstable.0"></a>

## [1.1.20-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.19...aws-amplify@1.1.20-unstable.0) (2019-01-10)

**Note:** Version bump only for package aws-amplify

<a name="1.1.19"></a>

## [1.1.19](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.19-unstable.0...aws-amplify@1.1.19) (2019-01-10)

**Note:** Version bump only for package aws-amplify

<a name="1.1.19-unstable.0"></a>

## [1.1.19-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.18...aws-amplify@1.1.19-unstable.0) (2018-12-26)

**Note:** Version bump only for package aws-amplify

<a name="1.1.18"></a>

## [1.1.18](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.18-unstable.5...aws-amplify@1.1.18) (2018-12-26)

**Note:** Version bump only for package aws-amplify

<a name="1.1.18-unstable.5"></a>

## [1.1.18-unstable.5](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.18-unstable.4...aws-amplify@1.1.18-unstable.5) (2018-12-24)

**Note:** Version bump only for package aws-amplify

<a name="1.1.18-unstable.4"></a>

## [1.1.18-unstable.4](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.18-unstable.3...aws-amplify@1.1.18-unstable.4) (2018-12-24)

**Note:** Version bump only for package aws-amplify

<a name="1.1.18-unstable.3"></a>

## [1.1.18-unstable.3](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.18-unstable.2...aws-amplify@1.1.18-unstable.3) (2018-12-22)

**Note:** Version bump only for package aws-amplify

<a name="1.1.18-unstable.2"></a>

## [1.1.18-unstable.2](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.18-unstable.1...aws-amplify@1.1.18-unstable.2) (2018-12-20)

**Note:** Version bump only for package aws-amplify

<a name="1.1.18-unstable.1"></a>

## [1.1.18-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.18-unstable.0...aws-amplify@1.1.18-unstable.1) (2018-12-19)

**Note:** Version bump only for package aws-amplify

<a name="1.1.18-unstable.0"></a>

## [1.1.18-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.17...aws-amplify@1.1.18-unstable.0) (2018-12-19)

**Note:** Version bump only for package aws-amplify

<a name="1.1.17"></a>

## [1.1.17](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.16-unstable.0...aws-amplify@1.1.17) (2018-12-15)

**Note:** Version bump only for package aws-amplify

<a name="1.1.16"></a>

## [1.1.16](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.15...aws-amplify@1.1.16) (2018-12-14)

<a name="1.1.16-unstable.0"></a>

## [1.1.16-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.15...aws-amplify@1.1.16-unstable.0) (2018-12-14)

**Note:** Version bump only for package aws-amplify

<a name="1.1.15"></a>

## [1.1.15](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.15-unstable.0...aws-amplify@1.1.15) (2018-12-14)

**Note:** Version bump only for package aws-amplify

<a name="1.1.15-unstable.0"></a>

## [1.1.15-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.14...aws-amplify@1.1.15-unstable.0) (2018-12-13)

**Note:** Version bump only for package aws-amplify

<a name="1.1.14"></a>

## [1.1.14](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.14-unstable.8...aws-amplify@1.1.14) (2018-12-13)

**Note:** Version bump only for package aws-amplify

<a name="1.1.14-unstable.8"></a>

## [1.1.14-unstable.8](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.14-unstable.7...aws-amplify@1.1.14-unstable.8) (2018-12-13)

**Note:** Version bump only for package aws-amplify

<a name="1.1.14-unstable.7"></a>

## [1.1.14-unstable.7](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.14-unstable.6...aws-amplify@1.1.14-unstable.7) (2018-12-13)

**Note:** Version bump only for package aws-amplify

<a name="1.1.14-unstable.6"></a>

## [1.1.14-unstable.6](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.14-unstable.5...aws-amplify@1.1.14-unstable.6) (2018-12-13)

**Note:** Version bump only for package aws-amplify

<a name="1.1.14-unstable.5"></a>

## [1.1.14-unstable.5](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.14-unstable.4...aws-amplify@1.1.14-unstable.5) (2018-12-13)

**Note:** Version bump only for package aws-amplify

<a name="1.1.14-unstable.4"></a>

## [1.1.14-unstable.4](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.14-unstable.3...aws-amplify@1.1.14-unstable.4) (2018-12-12)

**Note:** Version bump only for package aws-amplify

<a name="1.1.14-unstable.3"></a>

## [1.1.14-unstable.3](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.14-unstable.2...aws-amplify@1.1.14-unstable.3) (2018-12-10)

**Note:** Version bump only for package aws-amplify

<a name="1.1.14-unstable.2"></a>

## [1.1.14-unstable.2](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.14-unstable.1...aws-amplify@1.1.14-unstable.2) (2018-12-10)

**Note:** Version bump only for package aws-amplify

<a name="1.1.14-unstable.1"></a>

## [1.1.14-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.14-unstable.0...aws-amplify@1.1.14-unstable.1) (2018-12-07)

**Note:** Version bump only for package aws-amplify

<a name="1.1.14-unstable.0"></a>

## [1.1.14-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.13...aws-amplify@1.1.14-unstable.0) (2018-12-07)

**Note:** Version bump only for package aws-amplify

<a name="1.1.13"></a>

## [1.1.13](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.12...aws-amplify@1.1.13) (2018-12-07)

**Note:** Version bump only for package aws-amplify

<a name="1.1.13-unstable.1"></a>

## [1.1.13-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.13-unstable.0...aws-amplify@1.1.13-unstable.1) (2018-12-07)

**Note:** Version bump only for package aws-amplify

<a name="1.1.13-unstable.0"></a>

## [1.1.13-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.12...aws-amplify@1.1.13-unstable.0) (2018-12-06)

**Note:** Version bump only for package aws-amplify

<a name="1.1.12"></a>

## [1.1.12](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.11...aws-amplify@1.1.12) (2018-12-06)

**Note:** Version bump only for package aws-amplify

<a name="1.1.12-unstable.0"></a>

## [1.1.12-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.11...aws-amplify@1.1.12-unstable.0) (2018-12-05)

**Note:** Version bump only for package aws-amplify

<a name="1.1.11"></a>

## [1.1.11](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.11-unstable.15...aws-amplify@1.1.11) (2018-12-03)

**Note:** Version bump only for package aws-amplify

<a name="1.1.11-unstable.15"></a>

## [1.1.11-unstable.15](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.11-unstable.14...aws-amplify@1.1.11-unstable.15) (2018-12-03)

**Note:** Version bump only for package aws-amplify

<a name="1.1.11-unstable.14"></a>

## [1.1.11-unstable.14](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.11-unstable.13...aws-amplify@1.1.11-unstable.14) (2018-12-03)

**Note:** Version bump only for package aws-amplify

<a name="1.1.11-unstable.13"></a>

## [1.1.11-unstable.13](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.11-unstable.12...aws-amplify@1.1.11-unstable.13) (2018-11-29)

**Note:** Version bump only for package aws-amplify

<a name="1.1.11-unstable.12"></a>

## [1.1.11-unstable.12](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.11-unstable.11...aws-amplify@1.1.11-unstable.12) (2018-11-29)

**Note:** Version bump only for package aws-amplify

<a name="1.1.11-unstable.11"></a>

## [1.1.11-unstable.11](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.11-unstable.10...aws-amplify@1.1.11-unstable.11) (2018-11-27)

**Note:** Version bump only for package aws-amplify

<a name="1.1.11-unstable.10"></a>

## [1.1.11-unstable.10](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.11-unstable.9...aws-amplify@1.1.11-unstable.10) (2018-11-26)

**Note:** Version bump only for package aws-amplify

<a name="1.1.11-unstable.9"></a>

## [1.1.11-unstable.9](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.11-unstable.8...aws-amplify@1.1.11-unstable.9) (2018-11-23)

**Note:** Version bump only for package aws-amplify

<a name="1.1.11-unstable.8"></a>

## [1.1.11-unstable.8](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.11-unstable.7...aws-amplify@1.1.11-unstable.8) (2018-11-20)

**Note:** Version bump only for package aws-amplify

<a name="1.1.11-unstable.7"></a>

## [1.1.11-unstable.7](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.11-unstable.6...aws-amplify@1.1.11-unstable.7) (2018-11-19)

**Note:** Version bump only for package aws-amplify

<a name="1.1.11-unstable.6"></a>

## [1.1.11-unstable.6](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.11-unstable.5...aws-amplify@1.1.11-unstable.6) (2018-11-19)

**Note:** Version bump only for package aws-amplify

<a name="1.1.11-unstable.5"></a>

## [1.1.11-unstable.5](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.11-unstable.4...aws-amplify@1.1.11-unstable.5) (2018-11-19)

**Note:** Version bump only for package aws-amplify

<a name="1.1.11-unstable.4"></a>

## [1.1.11-unstable.4](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.11-unstable.3...aws-amplify@1.1.11-unstable.4) (2018-11-17)

**Note:** Version bump only for package aws-amplify

<a name="1.1.11-unstable.3"></a>

## [1.1.11-unstable.3](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.11-unstable.2...aws-amplify@1.1.11-unstable.3) (2018-11-16)

**Note:** Version bump only for package aws-amplify

<a name="1.1.11-unstable.2"></a>

## [1.1.11-unstable.2](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.11-unstable.1...aws-amplify@1.1.11-unstable.2) (2018-11-16)

**Note:** Version bump only for package aws-amplify

<a name="1.1.11-unstable.1"></a>

## [1.1.11-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.11-unstable.0...aws-amplify@1.1.11-unstable.1) (2018-11-15)

**Note:** Version bump only for package aws-amplify

<a name="1.1.11-unstable.0"></a>

## [1.1.11-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.10...aws-amplify@1.1.11-unstable.0) (2018-11-13)

**Note:** Version bump only for package aws-amplify

<a name="1.1.10"></a>

## [1.1.10](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.10-unstable.6...aws-amplify@1.1.10) (2018-11-12)

**Note:** Version bump only for package aws-amplify

<a name="1.1.10-unstable.6"></a>

## [1.1.10-unstable.6](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.10-unstable.5...aws-amplify@1.1.10-unstable.6) (2018-11-12)

**Note:** Version bump only for package aws-amplify

<a name="1.1.10-unstable.5"></a>

## [1.1.10-unstable.5](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.10-unstable.4...aws-amplify@1.1.10-unstable.5) (2018-11-10)

**Note:** Version bump only for package aws-amplify

<a name="1.1.10-unstable.4"></a>

## [1.1.10-unstable.4](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.10-unstable.3...aws-amplify@1.1.10-unstable.4) (2018-11-09)

**Note:** Version bump only for package aws-amplify

<a name="1.1.10-unstable.3"></a>

## [1.1.10-unstable.3](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.10-unstable.2...aws-amplify@1.1.10-unstable.3) (2018-11-09)

**Note:** Version bump only for package aws-amplify

<a name="1.1.10-unstable.2"></a>

## [1.1.10-unstable.2](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.10-unstable.1...aws-amplify@1.1.10-unstable.2) (2018-11-09)

**Note:** Version bump only for package aws-amplify

<a name="1.1.10-unstable.1"></a>

## [1.1.10-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.10-unstable.0...aws-amplify@1.1.10-unstable.1) (2018-11-06)

**Note:** Version bump only for package aws-amplify

<a name="1.1.10-unstable.0"></a>

## [1.1.10-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.9...aws-amplify@1.1.10-unstable.0) (2018-11-06)

**Note:** Version bump only for package aws-amplify

<a name="1.1.9"></a>

## [1.1.9](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.9-unstable.1...aws-amplify@1.1.9) (2018-11-01)

**Note:** Version bump only for package aws-amplify

<a name="1.1.9-unstable.1"></a>

## [1.1.9-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.9-unstable.0...aws-amplify@1.1.9-unstable.1) (2018-11-01)

**Note:** Version bump only for package aws-amplify

<a name="1.1.9-unstable.0"></a>

## [1.1.9-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.8...aws-amplify@1.1.9-unstable.0) (2018-10-30)

**Note:** Version bump only for package aws-amplify

<a name="1.1.8"></a>

## [1.1.8](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.8-unstable.3...aws-amplify@1.1.8) (2018-10-29)

**Note:** Version bump only for package aws-amplify

<a name="1.1.8-unstable.3"></a>

## [1.1.8-unstable.3](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.8-unstable.2...aws-amplify@1.1.8-unstable.3) (2018-10-29)

**Note:** Version bump only for package aws-amplify

<a name="1.1.8-unstable.2"></a>

## [1.1.8-unstable.2](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.8-unstable.1...aws-amplify@1.1.8-unstable.2) (2018-10-29)

**Note:** Version bump only for package aws-amplify

<a name="1.1.8-unstable.1"></a>

## [1.1.8-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.8-unstable.0...aws-amplify@1.1.8-unstable.1) (2018-10-18)

**Note:** Version bump only for package aws-amplify

<a name="1.1.8-unstable.0"></a>

## [1.1.8-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.7...aws-amplify@1.1.8-unstable.0) (2018-10-18)

**Note:** Version bump only for package aws-amplify

<a name="1.1.7"></a>

## [1.1.7](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.7-unstable.4...aws-amplify@1.1.7) (2018-10-17)

**Note:** Version bump only for package aws-amplify

<a name="1.1.7-unstable.4"></a>

## [1.1.7-unstable.4](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.7-unstable.3...aws-amplify@1.1.7-unstable.4) (2018-10-17)

**Note:** Version bump only for package aws-amplify

<a name="1.1.7-unstable.3"></a>

## [1.1.7-unstable.3](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.7-unstable.2...aws-amplify@1.1.7-unstable.3) (2018-10-16)

**Note:** Version bump only for package aws-amplify

<a name="1.1.7-unstable.2"></a>

## [1.1.7-unstable.2](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.7-unstable.1...aws-amplify@1.1.7-unstable.2) (2018-10-08)

**Note:** Version bump only for package aws-amplify

<a name="1.1.7-unstable.1"></a>

## [1.1.7-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.7-unstable.0...aws-amplify@1.1.7-unstable.1) (2018-10-05)

**Note:** Version bump only for package aws-amplify

<a name="1.1.7-unstable.0"></a>

## [1.1.7-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.6-unstable.2...aws-amplify@1.1.7-unstable.0) (2018-10-05)

**Note:** Version bump only for package aws-amplify

<a name="1.1.6"></a>

## [1.1.6](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.6-unstable.2...aws-amplify@1.1.6) (2018-10-04)

**Note:** Version bump only for package aws-amplify

<a name="1.1.6-unstable.2"></a>

## [1.1.6-unstable.2](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.6-unstable.1...aws-amplify@1.1.6-unstable.2) (2018-10-03)

**Note:** Version bump only for package aws-amplify

<a name="1.1.6-unstable.1"></a>

## [1.1.6-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.6-unstable.0...aws-amplify@1.1.6-unstable.1) (2018-10-03)

**Note:** Version bump only for package aws-amplify

<a name="1.1.6-unstable.0"></a>

## [1.1.6-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.5-unstable.6...aws-amplify@1.1.6-unstable.0) (2018-10-03)

**Note:** Version bump only for package aws-amplify

<a name="1.1.5"></a>

## [1.1.5](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.5-unstable.6...aws-amplify@1.1.5) (2018-10-03)

**Note:** Version bump only for package aws-amplify

<a name="1.1.5-unstable.6"></a>

## [1.1.5-unstable.6](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.5-unstable.5...aws-amplify@1.1.5-unstable.6) (2018-10-01)

**Note:** Version bump only for package aws-amplify

<a name="1.1.5-unstable.5"></a>

## [1.1.5-unstable.5](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.5-unstable.4...aws-amplify@1.1.5-unstable.5) (2018-10-01)

**Note:** Version bump only for package aws-amplify

<a name="1.1.5-unstable.4"></a>

## [1.1.5-unstable.4](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.5-unstable.3...aws-amplify@1.1.5-unstable.4) (2018-10-01)

**Note:** Version bump only for package aws-amplify

<a name="1.1.5-unstable.3"></a>

## [1.1.5-unstable.3](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.5-unstable.2...aws-amplify@1.1.5-unstable.3) (2018-09-28)

**Note:** Version bump only for package aws-amplify

<a name="1.1.5-unstable.2"></a>

## [1.1.5-unstable.2](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.5-unstable.1...aws-amplify@1.1.5-unstable.2) (2018-09-27)

**Note:** Version bump only for package aws-amplify

<a name="1.1.5-unstable.1"></a>

## [1.1.5-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.5-unstable.0...aws-amplify@1.1.5-unstable.1) (2018-09-27)

**Note:** Version bump only for package aws-amplify

<a name="1.1.5-unstable.0"></a>

## [1.1.5-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.4...aws-amplify@1.1.5-unstable.0) (2018-09-27)

**Note:** Version bump only for package aws-amplify

<a name="1.1.4"></a>

## [1.1.4](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.4-unstable.9...aws-amplify@1.1.4) (2018-09-27)

**Note:** Version bump only for package aws-amplify

<a name="1.1.4-unstable.9"></a>

## [1.1.4-unstable.9](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.4-unstable.8...aws-amplify@1.1.4-unstable.9) (2018-09-26)

**Note:** Version bump only for package aws-amplify

<a name="1.1.4-unstable.8"></a>

## [1.1.4-unstable.8](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.4-unstable.7...aws-amplify@1.1.4-unstable.8) (2018-09-26)

**Note:** Version bump only for package aws-amplify

<a name="1.1.4-unstable.7"></a>

## [1.1.4-unstable.7](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.4-unstable.6...aws-amplify@1.1.4-unstable.7) (2018-09-26)

**Note:** Version bump only for package aws-amplify

<a name="1.1.4-unstable.6"></a>

## [1.1.4-unstable.6](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.4-unstable.4...aws-amplify@1.1.4-unstable.6) (2018-09-26)

**Note:** Version bump only for package aws-amplify

<a name="1.1.4-unstable.5"></a>

## [1.1.4-unstable.5](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.4-unstable.4...aws-amplify@1.1.4-unstable.5) (2018-09-25)

**Note:** Version bump only for package aws-amplify

<a name="1.1.4-unstable.4"></a>

## [1.1.4-unstable.4](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.4-unstable.3...aws-amplify@1.1.4-unstable.4) (2018-09-25)

**Note:** Version bump only for package aws-amplify

<a name="1.1.4-unstable.3"></a>

## [1.1.4-unstable.3](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.4-unstable.2...aws-amplify@1.1.4-unstable.3) (2018-09-24)

**Note:** Version bump only for package aws-amplify

<a name="1.1.4-unstable.2"></a>

## [1.1.4-unstable.2](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.4-unstable.1...aws-amplify@1.1.4-unstable.2) (2018-09-22)

**Note:** Version bump only for package aws-amplify

<a name="1.1.4-unstable.1"></a>

## [1.1.4-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.4-unstable.0...aws-amplify@1.1.4-unstable.1) (2018-09-22)

**Note:** Version bump only for package aws-amplify

<a name="1.1.4-unstable.0"></a>

## [1.1.4-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.3...aws-amplify@1.1.4-unstable.0) (2018-09-22)

**Note:** Version bump only for package aws-amplify

<a name="1.1.3"></a>

## [1.1.3](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.3-unstable.0...aws-amplify@1.1.3) (2018-09-21)

**Note:** Version bump only for package aws-amplify

<a name="1.1.3-unstable.0"></a>

## [1.1.3-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.2-unstable.3...aws-amplify@1.1.3-unstable.0) (2018-09-21)

### Bug Fixes

- bumping version for deploying on unstable tag ([#1706](https://github.com/aws/aws-amplify/issues/1706)) ([b5d6468](https://github.com/aws/aws-amplify/commit/b5d6468))

<a name="1.1.2"></a>

## [1.1.2](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.1...aws-amplify@1.1.2) (2018-09-21)

**Note:** Version bump only for package aws-amplify

<a name="1.1.2-unstable.3"></a>

## [1.1.2-unstable.3](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.2-unstable.2...aws-amplify@1.1.2-unstable.3) (2018-09-20)

**Note:** Version bump only for package aws-amplify

<a name="1.1.2-unstable.2"></a>

## [1.1.2-unstable.2](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.2-unstable.1...aws-amplify@1.1.2-unstable.2) (2018-09-20)

**Note:** Version bump only for package aws-amplify

<a name="1.1.2-unstable.1"></a>

## [1.1.2-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.2-unstable.0...aws-amplify@1.1.2-unstable.1) (2018-09-17)

**Note:** Version bump only for package aws-amplify

<a name="1.1.2-unstable.0"></a>

## [1.1.2-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.1.1...aws-amplify@1.1.2-unstable.0) (2018-09-17)

**Note:** Version bump only for package aws-amplify

<a name="1.1.1"></a>

## [1.1.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.11...aws-amplify@1.1.1) (2018-09-17)

**Note:** Version bump only for package aws-amplify

<a name="1.0.11"></a>

## [1.0.11](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.10...aws-amplify@1.0.11) (2018-09-12)

**Note:** Version bump only for package aws-amplify

<a name="1.0.10"></a>

## [1.0.10](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.10-unstable.0...aws-amplify@1.0.10) (2018-09-09)

**Note:** Version bump only for package aws-amplify

<a name="1.0.10-unstable.0"></a>

## [1.0.10-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.9...aws-amplify@1.0.10-unstable.0) (2018-09-09)

**Note:** Version bump only for package aws-amplify

<a name="1.0.9"></a>

## [1.0.9](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.8...aws-amplify@1.0.9) (2018-09-09)

**Note:** Version bump only for package aws-amplify

<a name="1.0.9-unstable.1"></a>

## [1.0.9-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.8...aws-amplify@1.0.9-unstable.1) (2018-08-30)

**Note:** Version bump only for package aws-amplify

<a name="1.0.8"></a>

## [1.0.8](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.7-unstable.26...aws-amplify@1.0.8) (2018-08-28)

**Note:** Version bump only for package aws-amplify

<a name="1.0.7-unstable.26"></a>

## [1.0.7-unstable.26](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.7-unstable.25...aws-amplify@1.0.7-unstable.26) (2018-08-28)

**Note:** Version bump only for package aws-amplify

<a name="1.0.7-unstable.25"></a>

## [1.0.7-unstable.25](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.7-unstable.24...aws-amplify@1.0.7-unstable.25) (2018-08-27)

**Note:** Version bump only for package aws-amplify

<a name="1.0.7-unstable.24"></a>

## [1.0.7-unstable.24](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.7-unstable.23...aws-amplify@1.0.7-unstable.24) (2018-08-27)

**Note:** Version bump only for package aws-amplify

<a name="1.0.7-unstable.23"></a>

## [1.0.7-unstable.23](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.7-unstable.21...aws-amplify@1.0.7-unstable.23) (2018-08-27)

**Note:** Version bump only for package aws-amplify

<a name="1.0.7-unstable.22"></a>

## [1.0.7-unstable.22](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.7-unstable.21...aws-amplify@1.0.7-unstable.22) (2018-08-25)

**Note:** Version bump only for package aws-amplify

<a name="1.0.7-unstable.21"></a>

## [1.0.7-unstable.21](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.7-unstable.20...aws-amplify@1.0.7-unstable.21) (2018-08-24)

**Note:** Version bump only for package aws-amplify

<a name="1.0.7-unstable.20"></a>

## [1.0.7-unstable.20](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.7-unstable.19...aws-amplify@1.0.7-unstable.20) (2018-08-24)

**Note:** Version bump only for package aws-amplify

<a name="1.0.7-unstable.19"></a>

## [1.0.7-unstable.19](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.7-unstable.17...aws-amplify@1.0.7-unstable.19) (2018-08-24)

**Note:** Version bump only for package aws-amplify

<a name="1.0.7-unstable.18"></a>

## [1.0.7-unstable.18](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.7-unstable.17...aws-amplify@1.0.7-unstable.18) (2018-08-24)

**Note:** Version bump only for package aws-amplify

<a name="1.0.7-unstable.17"></a>

## [1.0.7-unstable.17](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.7-unstable.15...aws-amplify@1.0.7-unstable.17) (2018-08-24)

**Note:** Version bump only for package aws-amplify

<a name="1.0.7-unstable.16"></a>

## [1.0.7-unstable.16](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.7-unstable.15...aws-amplify@1.0.7-unstable.16) (2018-08-24)

**Note:** Version bump only for package aws-amplify

<a name="1.0.7-unstable.15"></a>

## [1.0.7-unstable.15](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.7-unstable.14...aws-amplify@1.0.7-unstable.15) (2018-08-24)

**Note:** Version bump only for package aws-amplify

<a name="1.0.7-unstable.14"></a>

## [1.0.7-unstable.14](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.7-unstable.13...aws-amplify@1.0.7-unstable.14) (2018-08-24)

**Note:** Version bump only for package aws-amplify

<a name="1.0.7-unstable.13"></a>

## [1.0.7-unstable.13](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.7-unstable.11...aws-amplify@1.0.7-unstable.13) (2018-08-23)

**Note:** Version bump only for package aws-amplify

<a name="1.0.7-unstable.12"></a>

## [1.0.7-unstable.12](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.7-unstable.11...aws-amplify@1.0.7-unstable.12) (2018-08-23)

**Note:** Version bump only for package aws-amplify

<a name="1.0.7-unstable.11"></a>

## [1.0.7-unstable.11](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.7-unstable.10...aws-amplify@1.0.7-unstable.11) (2018-08-23)

**Note:** Version bump only for package aws-amplify

<a name="1.0.7-unstable.10"></a>

## [1.0.7-unstable.10](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.7-unstable.9...aws-amplify@1.0.7-unstable.10) (2018-08-23)

**Note:** Version bump only for package aws-amplify

<a name="1.0.7-unstable.9"></a>

## [1.0.7-unstable.9](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.7-unstable.8...aws-amplify@1.0.7-unstable.9) (2018-08-23)

**Note:** Version bump only for package aws-amplify

<a name="1.0.7-unstable.8"></a>

## [1.0.7-unstable.8](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.7-unstable.7...aws-amplify@1.0.7-unstable.8) (2018-08-22)

**Note:** Version bump only for package aws-amplify

<a name="1.0.7-unstable.7"></a>

## [1.0.7-unstable.7](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.7-unstable.6...aws-amplify@1.0.7-unstable.7) (2018-08-22)

**Note:** Version bump only for package aws-amplify

<a name="1.0.7-unstable.6"></a>

## [1.0.7-unstable.6](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.7-unstable.5...aws-amplify@1.0.7-unstable.6) (2018-08-21)

**Note:** Version bump only for package aws-amplify

<a name="1.0.7-unstable.5"></a>

## [1.0.7-unstable.5](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.7-unstable.4...aws-amplify@1.0.7-unstable.5) (2018-08-21)

**Note:** Version bump only for package aws-amplify

<a name="1.0.7-unstable.4"></a>

## [1.0.7-unstable.4](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.7-unstable.3...aws-amplify@1.0.7-unstable.4) (2018-08-20)

**Note:** Version bump only for package aws-amplify

<a name="1.0.7-unstable.3"></a>

## [1.0.7-unstable.3](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.7-unstable.2...aws-amplify@1.0.7-unstable.3) (2018-08-19)

**Note:** Version bump only for package aws-amplify

<a name="1.0.7-unstable.2"></a>

## [1.0.7-unstable.2](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.7-unstable.1...aws-amplify@1.0.7-unstable.2) (2018-08-18)

**Note:** Version bump only for package aws-amplify

<a name="1.0.7-unstable.1"></a>

## [1.0.7-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.7-unstable.0...aws-amplify@1.0.7-unstable.1) (2018-08-16)

**Note:** Version bump only for package aws-amplify

<a name="1.0.7-unstable.0"></a>

## [1.0.7-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.6...aws-amplify@1.0.7-unstable.0) (2018-08-15)

**Note:** Version bump only for package aws-amplify

<a name="1.0.6"></a>

## [1.0.6](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.6-unstable.5...aws-amplify@1.0.6) (2018-08-14)

**Note:** Version bump only for package aws-amplify

<a name="1.0.6-unstable.5"></a>

## [1.0.6-unstable.5](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.6-unstable.4...aws-amplify@1.0.6-unstable.5) (2018-08-14)

**Note:** Version bump only for package aws-amplify

<a name="1.0.6-unstable.4"></a>

## [1.0.6-unstable.4](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.6-unstable.3...aws-amplify@1.0.6-unstable.4) (2018-08-13)

**Note:** Version bump only for package aws-amplify

<a name="1.0.6-unstable.3"></a>

## [1.0.6-unstable.3](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.6-unstable.2...aws-amplify@1.0.6-unstable.3) (2018-08-13)

**Note:** Version bump only for package aws-amplify

<a name="1.0.6-unstable.2"></a>

## [1.0.6-unstable.2](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.6-unstable.1...aws-amplify@1.0.6-unstable.2) (2018-08-09)

**Note:** Version bump only for package aws-amplify

<a name="1.0.6-unstable.1"></a>

## [1.0.6-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.6-unstable.0...aws-amplify@1.0.6-unstable.1) (2018-08-07)

**Note:** Version bump only for package aws-amplify

<a name="1.0.6-unstable.0"></a>

## [1.0.6-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.5...aws-amplify@1.0.6-unstable.0) (2018-08-07)

**Note:** Version bump only for package aws-amplify

<a name="1.0.5"></a>

## [1.0.5](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.5-unstable.7...aws-amplify@1.0.5) (2018-08-06)

**Note:** Version bump only for package aws-amplify

<a name="1.0.5-unstable.7"></a>

## [1.0.5-unstable.7](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.5-unstable.6...aws-amplify@1.0.5-unstable.7) (2018-08-06)

**Note:** Version bump only for package aws-amplify

<a name="1.0.5-unstable.6"></a>

## [1.0.5-unstable.6](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.5-unstable.5...aws-amplify@1.0.5-unstable.6) (2018-08-06)

**Note:** Version bump only for package aws-amplify

<a name="1.0.5-unstable.5"></a>

## [1.0.5-unstable.5](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.5-unstable.3...aws-amplify@1.0.5-unstable.5) (2018-08-06)

**Note:** Version bump only for package aws-amplify

<a name="1.0.5-unstable.3"></a>

## [1.0.5-unstable.3](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.5-unstable.2...aws-amplify@1.0.5-unstable.3) (2018-07-31)

**Note:** Version bump only for package aws-amplify

<a name="1.0.5-unstable.2"></a>

## [1.0.5-unstable.2](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.5-unstable.1...aws-amplify@1.0.5-unstable.2) (2018-07-31)

**Note:** Version bump only for package aws-amplify

<a name="1.0.5-unstable.1"></a>

## [1.0.5-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.5-unstable.0...aws-amplify@1.0.5-unstable.1) (2018-07-30)

**Note:** Version bump only for package aws-amplify

<a name="1.0.5-unstable.0"></a>

## [1.0.5-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.4...aws-amplify@1.0.5-unstable.0) (2018-07-30)

**Note:** Version bump only for package aws-amplify

<a name="1.0.4"></a>

## [1.0.4](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.4-unstable.1...aws-amplify@1.0.4) (2018-07-28)

**Note:** Version bump only for package aws-amplify

<a name="1.0.4-unstable.1"></a>

## [1.0.4-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.4-unstable.0...aws-amplify@1.0.4-unstable.1) (2018-07-28)

**Note:** Version bump only for package aws-amplify

<a name="1.0.4-unstable.0"></a>

## [1.0.4-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.3-unstable.14...aws-amplify@1.0.4-unstable.0) (2018-07-27)

**Note:** Version bump only for package aws-amplify

<a name="1.0.3-unstable.15"></a>

## [1.0.3-unstable.15](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.3-unstable.14...aws-amplify@1.0.3-unstable.15) (2018-07-27)

**Note:** Version bump only for package aws-amplify

<a name="1.0.3-unstable.14"></a>

## [1.0.3-unstable.14](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.3-unstable.13...aws-amplify@1.0.3-unstable.14) (2018-07-27)

**Note:** Version bump only for package aws-amplify

<a name="1.0.3-unstable.13"></a>

## [1.0.3-unstable.13](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.3-unstable.12...aws-amplify@1.0.3-unstable.13) (2018-07-26)

**Note:** Version bump only for package aws-amplify

<a name="1.0.3-unstable.12"></a>

## [1.0.3-unstable.12](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.3-unstable.11...aws-amplify@1.0.3-unstable.12) (2018-07-26)

**Note:** Version bump only for package aws-amplify

<a name="1.0.3-unstable.11"></a>

## [1.0.3-unstable.11](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.3-unstable.10...aws-amplify@1.0.3-unstable.11) (2018-07-26)

**Note:** Version bump only for package aws-amplify

<a name="1.0.3-unstable.10"></a>

## [1.0.3-unstable.10](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.3-unstable.9...aws-amplify@1.0.3-unstable.10) (2018-07-26)

**Note:** Version bump only for package aws-amplify

<a name="1.0.3-unstable.9"></a>

## [1.0.3-unstable.9](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.3-unstable.8...aws-amplify@1.0.3-unstable.9) (2018-07-25)

**Note:** Version bump only for package aws-amplify

<a name="1.0.3-unstable.8"></a>

## [1.0.3-unstable.8](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.3-unstable.7...aws-amplify@1.0.3-unstable.8) (2018-07-25)

**Note:** Version bump only for package aws-amplify

<a name="1.0.3-unstable.7"></a>

## [1.0.3-unstable.7](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.3-unstable.6...aws-amplify@1.0.3-unstable.7) (2018-07-25)

**Note:** Version bump only for package aws-amplify

<a name="1.0.3-unstable.6"></a>

## [1.0.3-unstable.6](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.3-unstable.5...aws-amplify@1.0.3-unstable.6) (2018-07-24)

**Note:** Version bump only for package aws-amplify

<a name="1.0.3-unstable.5"></a>

## [1.0.3-unstable.5](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.3-unstable.4...aws-amplify@1.0.3-unstable.5) (2018-07-23)

**Note:** Version bump only for package aws-amplify

<a name="1.0.3-unstable.4"></a>

## [1.0.3-unstable.4](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.3-unstable.3...aws-amplify@1.0.3-unstable.4) (2018-07-23)

**Note:** Version bump only for package aws-amplify

<a name="1.0.3-unstable.3"></a>

## [1.0.3-unstable.3](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.3-unstable.2...aws-amplify@1.0.3-unstable.3) (2018-07-23)

**Note:** Version bump only for package aws-amplify

<a name="1.0.3-unstable.2"></a>

## [1.0.3-unstable.2](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.3-unstable.1...aws-amplify@1.0.3-unstable.2) (2018-07-20)

**Note:** Version bump only for package aws-amplify

<a name="1.0.3-unstable.1"></a>

## [1.0.3-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.3-unstable.0...aws-amplify@1.0.3-unstable.1) (2018-07-20)

**Note:** Version bump only for package aws-amplify

<a name="1.0.3-unstable.0"></a>

## [1.0.3-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.2...aws-amplify@1.0.3-unstable.0) (2018-07-20)

**Note:** Version bump only for package aws-amplify

<a name="1.0.2"></a>

## [1.0.2](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.2-unstable.1...aws-amplify@1.0.2) (2018-07-19)

**Note:** Version bump only for package aws-amplify

<a name="1.0.2-unstable.1"></a>

## [1.0.2-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.1...aws-amplify@1.0.2-unstable.1) (2018-07-19)

**Note:** Version bump only for package aws-amplify

<a name="1.0.2-unstable.0"></a>

## [1.0.2-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.1...aws-amplify@1.0.2-unstable.0) (2018-07-19)

**Note:** Version bump only for package aws-amplify

<a name="1.0.1"></a>

## [1.0.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.1-unstable.4...aws-amplify@1.0.1) (2018-07-18)

**Note:** Version bump only for package aws-amplify

<a name="1.0.1-unstable.4"></a>

## [1.0.1-unstable.4](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.1-unstable.3...aws-amplify@1.0.1-unstable.4) (2018-07-18)

**Note:** Version bump only for package aws-amplify

<a name="1.0.1-unstable.3"></a>

## [1.0.1-unstable.3](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.1-unstable.2...aws-amplify@1.0.1-unstable.3) (2018-07-18)

**Note:** Version bump only for package aws-amplify

<a name="1.0.1-unstable.2"></a>

## [1.0.1-unstable.2](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.1-unstable.1...aws-amplify@1.0.1-unstable.2) (2018-07-18)

**Note:** Version bump only for package aws-amplify

<a name="1.0.1-unstable.1"></a>

## [1.0.1-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.1...aws-amplify@1.0.1-unstable.1) (2018-07-18)

**Note:** Version bump only for package aws-amplify

<a name="1.0.1-unstable.0"></a>

## [1.0.1-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@1.0.1...aws-amplify@1.0.1-unstable.0) (2018-07-18)

**Note:** Version bump only for package aws-amplify

<a name="0.4.9-unstable.1"></a>

## [0.4.9-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.9-unstable.0...aws-amplify@0.4.9-unstable.1) (2018-07-03)

**Note:** Version bump only for package aws-amplify

<a name="0.4.9-unstable.0"></a>

## [0.4.9-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.8...aws-amplify@0.4.9-unstable.0) (2018-07-02)

**Note:** Version bump only for package aws-amplify

<a name="0.4.8"></a>

## [0.4.8](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.8-unstable.5...aws-amplify@0.4.8) (2018-06-29)

**Note:** Version bump only for package aws-amplify

<a name="0.4.8-unstable.5"></a>

## [0.4.8-unstable.5](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.8-unstable.4...aws-amplify@0.4.8-unstable.5) (2018-06-29)

**Note:** Version bump only for package aws-amplify

<a name="0.4.8-unstable.4"></a>

## [0.4.8-unstable.4](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.8-unstable.3...aws-amplify@0.4.8-unstable.4) (2018-06-29)

**Note:** Version bump only for package aws-amplify

<a name="0.4.8-unstable.3"></a>

## [0.4.8-unstable.3](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.8-unstable.2...aws-amplify@0.4.8-unstable.3) (2018-06-28)

**Note:** Version bump only for package aws-amplify

<a name="0.4.8-unstable.2"></a>

## [0.4.8-unstable.2](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.8-unstable.1...aws-amplify@0.4.8-unstable.2) (2018-06-27)

**Note:** Version bump only for package aws-amplify

<a name="0.4.8-unstable.1"></a>

## [0.4.8-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.8-unstable.0...aws-amplify@0.4.8-unstable.1) (2018-06-27)

**Note:** Version bump only for package aws-amplify

<a name="0.4.8-unstable.0"></a>

## [0.4.8-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.7-unstable.2...aws-amplify@0.4.8-unstable.0) (2018-06-27)

### Bug Fixes

- **interactions:** check fulfilled state to trigger onComplete callback ([#1122](https://github.com/aws/aws-amplify/issues/1122)) ([c24b1f1](https://github.com/aws/aws-amplify/commit/c24b1f1))

<a name="0.4.7"></a>

## [0.4.7](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.7-unstable.2...aws-amplify@0.4.7) (2018-06-27)

### Bug Fixes

- **interactions:** check fulfilled state to trigger onComplete callback ([#1122](https://github.com/aws/aws-amplify/issues/1122)) ([c24b1f1](https://github.com/aws/aws-amplify/commit/c24b1f1))

<a name="0.4.7-unstable.2"></a>

## [0.4.7-unstable.2](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.7-unstable.1...aws-amplify@0.4.7-unstable.2) (2018-06-26)

### Bug Fixes

- **integration tests:** CircleCI workflows and Cypress integration testing ([#1071](https://github.com/aws/aws-amplify/issues/1071)) ([bfa4776](https://github.com/aws/aws-amplify/commit/bfa4776))

<a name="0.4.7-unstable.1"></a>

## [0.4.7-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.7-unstable.0...aws-amplify@0.4.7-unstable.1) (2018-06-22)

**Note:** Version bump only for package aws-amplify

<a name="0.4.7-unstable.0"></a>

## [0.4.7-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.6...aws-amplify@0.4.7-unstable.0) (2018-06-22)

**Note:** Version bump only for package aws-amplify

<a name="0.4.6"></a>

## [0.4.6](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.5-unstable.3...aws-amplify@0.4.6) (2018-06-21)

**Note:** Version bump only for package aws-amplify

<a name="0.4.5"></a>

## [0.4.5](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.47...aws-amplify@0.4.5) (2018-06-20)

<a name="0.4.5-unstable.3"></a>

## [0.4.5-unstable.3](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.5-unstable.2...aws-amplify@0.4.5-unstable.3) (2018-06-21)

**Note:** Version bump only for package aws-amplify

<a name="0.4.5-unstable.2"></a>

## [0.4.5-unstable.2](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.5-unstable.1...aws-amplify@0.4.5-unstable.2) (2018-06-21)

**Note:** Version bump only for package aws-amplify

<a name="0.4.5-unstable.1"></a>

## [0.4.5-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.5-unstable.0...aws-amplify@0.4.5-unstable.1) (2018-06-20)

**Note:** Version bump only for package aws-amplify

<a name="0.4.5-unstable.0"></a>

## [0.4.5-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.47...aws-amplify@0.4.5-unstable.0) (2018-06-20)

### Bug Fixes

- **aws-amplify:** Fix missing ServiceWorker export ([46069e2](https://github.com/aws/aws-amplify/commit/46069e2))
- **pushnotification:** revert change in pr 952 ([b8d167c](https://github.com/aws/aws-amplify/commit/b8d167c))
- **pushnotification:** revert change in pr 952 ([257fc40](https://github.com/aws/aws-amplify/commit/257fc40))

<a name="0.4.4"></a>

## [0.4.4](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.33...aws-amplify@0.4.4) (2018-06-04)

<a name="0.4.2-unstable.47"></a>

## [0.4.2-unstable.47](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.46...aws-amplify@0.4.2-unstable.47) (2018-06-19)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.46"></a>

## [0.4.2-unstable.46](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.45...aws-amplify@0.4.2-unstable.46) (2018-06-18)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.45"></a>

## [0.4.2-unstable.45](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.44...aws-amplify@0.4.2-unstable.45) (2018-06-18)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.44"></a>

## [0.4.2-unstable.44](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.43...aws-amplify@0.4.2-unstable.44) (2018-06-16)

### Features

- **interactions:** Interactions category ([#1042](https://github.com/aws/aws-amplify/issues/1042)) ([befb336](https://github.com/aws/aws-amplify/commit/befb336))

<a name="0.4.2-unstable.43"></a>

## [0.4.2-unstable.43](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.42...aws-amplify@0.4.2-unstable.43) (2018-06-13)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.42"></a>

## [0.4.2-unstable.42](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.41...aws-amplify@0.4.2-unstable.42) (2018-06-13)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.41"></a>

## [0.4.2-unstable.41](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.40...aws-amplify@0.4.2-unstable.41) (2018-06-12)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.40"></a>

## [0.4.2-unstable.40](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.39...aws-amplify@0.4.2-unstable.40) (2018-06-11)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.39"></a>

## [0.4.2-unstable.39](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.38...aws-amplify@0.4.2-unstable.39) (2018-06-08)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.38"></a>

## [0.4.2-unstable.38](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.37...aws-amplify@0.4.2-unstable.38) (2018-06-08)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.37"></a>

## [0.4.2-unstable.37](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.36...aws-amplify@0.4.2-unstable.37) (2018-06-07)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.36"></a>

## [0.4.2-unstable.36](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.35...aws-amplify@0.4.2-unstable.36) (2018-06-06)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.35"></a>

## [0.4.2-unstable.35](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.34...aws-amplify@0.4.2-unstable.35) (2018-06-05)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.34"></a>

## [0.4.2-unstable.34](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.33...aws-amplify@0.4.2-unstable.34) (2018-06-04)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.33"></a>

## [0.4.2-unstable.33](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.32...aws-amplify@0.4.2-unstable.33) (2018-06-04)

### Bug Fixes

- **aws-amplify:** Fix missing ServiceWorker export ([46069e2](https://github.com/aws/aws-amplify/commit/46069e2))
- **pushnotification:** revert change in pr 952 ([b8d167c](https://github.com/aws/aws-amplify/commit/b8d167c))
- **pushnotification:** revert change in pr 952 ([257fc40](https://github.com/aws/aws-amplify/commit/257fc40))

<a name="0.4.3"></a>

## [0.4.3](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2...aws-amplify@0.4.3) (2018-06-02)

### Bug Fixes

- **aws-amplify:** Fix missing ServiceWorker export ([46069e2](https://github.com/aws/aws-amplify/commit/46069e2))
- **aws-amplify:** Fix missing ServiceWorker export ([acbf754](https://github.com/aws/aws-amplify/commit/acbf754))

<a name="0.4.2"></a>

## [0.4.2](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.30...aws-amplify@0.4.2) (2018-06-01)

**Note:** Version bump only for package aws-amplify

- **API:** query string for non signed requests ([#801](https://github.com/aws/aws-amplify/issues/801)) ([6746368](https://github.com/aws/aws-amplify/commit/6746368))

<a name="0.4.2-unstable.31"></a>

## [0.4.2-unstable.31](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.30...aws-amplify@0.4.2-unstable.31) (2018-06-02)

### Bug Fixes

- **aws-amplify:** Fix missing ServiceWorker export ([acbf754](https://github.com/aws/aws-amplify/commit/acbf754))

<a name="0.4.2-unstable.30"></a>

## [0.4.2-unstable.30](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.29...aws-amplify@0.4.2-unstable.30) (2018-06-01)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.29"></a>

## [0.4.2-unstable.29](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.28...aws-amplify@0.4.2-unstable.29) (2018-06-01)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.28"></a>

## [0.4.2-unstable.28](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.27...aws-amplify@0.4.2-unstable.28) (2018-06-01)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.27"></a>

## [0.4.2-unstable.27](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.26...aws-amplify@0.4.2-unstable.27) (2018-05-31)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.26"></a>

## [0.4.2-unstable.26](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.23...aws-amplify@0.4.2-unstable.26) (2018-05-31)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.23"></a>

## [0.4.2-unstable.23](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.22...aws-amplify@0.4.2-unstable.23) (2018-05-31)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.22"></a>

## [0.4.2-unstable.22](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.21...aws-amplify@0.4.2-unstable.22) (2018-05-31)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.21"></a>

## [0.4.2-unstable.21](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.20...aws-amplify@0.4.2-unstable.21) (2018-05-30)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.20"></a>

## [0.4.2-unstable.20](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.19...aws-amplify@0.4.2-unstable.20) (2018-05-29)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.19"></a>

## [0.4.2-unstable.19](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.18...aws-amplify@0.4.2-unstable.19) (2018-05-29)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.18"></a>

## [0.4.2-unstable.18](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.17...aws-amplify@0.4.2-unstable.18) (2018-05-29)

### Bug Fixes

- **Storage:** allowing to set an empty value as prefix for the S3 Key ([#931](https://github.com/aws/aws-amplify/issues/931)) ([240e50b](https://github.com/aws/aws-amplify/commit/240e50b))

<a name="0.4.2-unstable.17"></a>

## [0.4.2-unstable.17](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.16...aws-amplify@0.4.2-unstable.17) (2018-05-24)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.16"></a>

## [0.4.2-unstable.16](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.15...aws-amplify@0.4.2-unstable.16) (2018-05-24)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.15"></a>

## [0.4.2-unstable.15](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.14...aws-amplify@0.4.2-unstable.15) (2018-05-24)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.14"></a>

## [0.4.2-unstable.14](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.13...aws-amplify@0.4.2-unstable.14) (2018-05-24)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.13"></a>

## [0.4.2-unstable.13](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.12...aws-amplify@0.4.2-unstable.13) (2018-05-24)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.12"></a>

## [0.4.2-unstable.12](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.11...aws-amplify@0.4.2-unstable.12) (2018-05-24)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.11"></a>

## [0.4.2-unstable.11](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.10...aws-amplify@0.4.2-unstable.11) (2018-05-24)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.10"></a>

## [0.4.2-unstable.10](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.1...aws-amplify@0.4.2-unstable.10) (2018-05-24)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.9"></a>

## [0.4.2-unstable.9](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.8...aws-amplify@0.4.2-unstable.9) (2018-05-24)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.8"></a>

## [0.4.2-unstable.8](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.7...aws-amplify@0.4.2-unstable.8) (2018-05-24)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.7"></a>

## [0.4.2-unstable.7](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.6...aws-amplify@0.4.2-unstable.7) (2018-05-24)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.6"></a>

## [0.4.2-unstable.6](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.5...aws-amplify@0.4.2-unstable.6) (2018-05-24)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.5"></a>

## [0.4.2-unstable.5](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.4...aws-amplify@0.4.2-unstable.5) (2018-05-24)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.4"></a>

## [0.4.2-unstable.4](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.3...aws-amplify@0.4.2-unstable.4) (2018-05-24)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.3"></a>

## [0.4.2-unstable.3](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.2...aws-amplify@0.4.2-unstable.3) (2018-05-24)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.2"></a>

## [0.4.2-unstable.2](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.1...aws-amplify@0.4.2-unstable.2) (2018-05-24)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.1"></a>

## [0.4.2-unstable.1](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.2-unstable.0...aws-amplify@0.4.2-unstable.1) (2018-05-24)

**Note:** Version bump only for package aws-amplify

<a name="0.4.2-unstable.0"></a>

## [0.4.2-unstable.0](https://github.com/aws/aws-amplify/compare/aws-amplify@0.4.1...aws-amplify@0.4.2-unstable.0) (2018-05-23)

**Note:** Version bump only for package aws-amplify
