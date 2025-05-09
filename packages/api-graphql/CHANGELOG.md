# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 4.9.0 (2025-05-09)

### Features

- add host to config, use in connect, subscribe, publish ([e20c614](https://github.com/aws-amplify/amplify-js/commit/e20c6145632494532580007645c87e0b8e6c31e9))

# 4.8.0 (2025-05-09)

### Bug Fixes

- (14277) Unable to override options when calling `events.connect` and `subscribe` ([#14278](https://github.com/aws-amplify/amplify-js/issues/14278)) ([db70f7b](https://github.com/aws-amplify/amplify-js/commit/db70f7be22711c6bf03fe68d7d3d3d93070d9a85))
- **@aws-amplify/api-graphql:** Add missing @aws-amplify/pubsub… ([#5352](https://github.com/aws-amplify/amplify-js/issues/5352)) ([ffb6514](https://github.com/aws-amplify/amplify-js/commit/ffb6514ab2aa14e09d2aa0df0da110585b5a713f))
- **@aws-amplify/api-graphql:** Fix webpack build ([#9358](https://github.com/aws-amplify/amplify-js/issues/9358)) ([73587d7](https://github.com/aws-amplify/amplify-js/commit/73587d78fc4feba39d5a527bfe2c790935653fd3))
- **@aws-amplify/api:** graphql API.cancel fix ([#9578](https://github.com/aws-amplify/amplify-js/issues/9578)) ([a9ae27f](https://github.com/aws-amplify/amplify-js/commit/a9ae27f65e1a782321c0be87556f92d2ee432352))
- **@aws-amplify/api:** Improve API.graphql return type ([#9197](https://github.com/aws-amplify/amplify-js/issues/9197)) ([9a0531b](https://github.com/aws-amplify/amplify-js/commit/9a0531b11e9eb6659d36ca0c51c642b3d947f63c))
- **@aws-amplify/datastore:** add token to currentAuthenticatedUser for OIDC ([#6858](https://github.com/aws-amplify/amplify-js/issues/6858)) ([61f7478](https://github.com/aws-amplify/amplify-js/commit/61f7478609fce7dd2f25c562aeb887d3f3db4a67))
- **@aws-amplify/datastore:** Retry mutation after GraphQL request timeout due to bad network condition. ([#6542](https://github.com/aws-amplify/amplify-js/issues/6542)) ([9fe6b7f](https://github.com/aws-amplify/amplify-js/commit/9fe6b7fa58aadb061a742b32c6a9cc1fd76dae6d))
- Add files with Amplify.register to sideEffects array ([#6867](https://github.com/aws-amplify/amplify-js/issues/6867)) ([58ddbf8](https://github.com/aws-amplify/amplify-js/commit/58ddbf8811e44695d97b6ab8be8f7cd2a2242921))
- address feedbacks ([2d6eecf](https://github.com/aws-amplify/amplify-js/commit/2d6eecfa4763a6cfb6aeaabedd49a530c6420dcd))
- **amazon-cognito-identity-js:** update random implementation ([#7090](https://github.com/aws-amplify/amplify-js/issues/7090)) ([7048453](https://github.com/aws-amplify/amplify-js/commit/70484532da8a9953384b00b223b2b3ba0c0e845e))
- API GraphQL dependencies on core & auth. ([250bff8](https://github.com/aws-amplify/amplify-js/commit/250bff8654cc6af9e447a4d07acc5390a1d72648))
- **api-graphql:** cannot generate selection set for nested custom types ([#13064](https://github.com/aws-amplify/amplify-js/issues/13064)) ([4b67d4d](https://github.com/aws-amplify/amplify-js/commit/4b67d4d682fe0f28b8c354de9061627dbea11230))
- **api-graphql:** close WS on events.closeAll ([#13989](https://github.com/aws-amplify/amplify-js/issues/13989)) ([168ecff](https://github.com/aws-amplify/amplify-js/commit/168ecff80ede7c92a2a443471061237f250b1fcd))
- **api-graphql:** custom operation selection set on nested custom types ([#13078](https://github.com/aws-amplify/amplify-js/issues/13078)) ([1570b12](https://github.com/aws-amplify/amplify-js/commit/1570b12a12e782e53dcf37c22c620835587e1a07))
- **api-graphql:** custom types support ([#12750](https://github.com/aws-amplify/amplify-js/issues/12750)) ([7d95fa1](https://github.com/aws-amplify/amplify-js/commit/7d95fa1c2cfdeef75e71a235dbfc616b44773d75))
- **api-graphql:** Data messages should maintain the keep alive status ([#14164](https://github.com/aws-amplify/amplify-js/issues/14164)) ([8b489d1](https://github.com/aws-amplify/amplify-js/commit/8b489d1667c67741cbc1111b0a52d10996aa857d))
- **api-graphql:** deep multi-level selectionSet resolution ([#12701](https://github.com/aws-amplify/amplify-js/issues/12701)) ([4a3a756](https://github.com/aws-amplify/amplify-js/commit/4a3a756ddd24ae0f19b7d4749bd91f1d97c6d942))
- **api-graphql:** default selection set regression ([#13185](https://github.com/aws-amplify/amplify-js/issues/13185)) ([873a6f4](https://github.com/aws-amplify/amplify-js/commit/873a6f47b24b6f8c97bf3af001db70f204f67daa))
- **api-graphql:** events url pattern; non-retryable error handling ([#13970](https://github.com/aws-amplify/amplify-js/issues/13970)) ([e0fdeb7](https://github.com/aws-amplify/amplify-js/commit/e0fdeb7bcbb24822607267b08b2919af5e73f2db))
- **api-graphql:** events ws connect sig ([#14003](https://github.com/aws-amplify/amplify-js/issues/14003)) ([4606279](https://github.com/aws-amplify/amplify-js/commit/460627966350c67db890dd908e882885e93624a7))
- **api-graphql:** fix missing model enum in default selection sets ([#12682](https://github.com/aws-amplify/amplify-js/issues/12682)) ([0aed4ba](https://github.com/aws-amplify/amplify-js/commit/0aed4ba62f2a67631efad518e9525d7e4af69864))
- **api-graphql:** generate client.models has no properties ([#12935](https://github.com/aws-amplify/amplify-js/issues/12935)) ([5e30055](https://github.com/aws-amplify/amplify-js/commit/5e30055971598cb4972a5c913af906e86c16cd3f))
- **api-graphql:** incorrect custom selection set for nested model.model.customType ([#13216](https://github.com/aws-amplify/amplify-js/issues/13216)) ([390c159](https://github.com/aws-amplify/amplify-js/commit/390c159cd976b744701d504a9d3929e80f7e2b72))
- **api-graphql:** incorrect list sk arg type ([#13249](https://github.com/aws-amplify/amplify-js/issues/13249)) ([f37faeb](https://github.com/aws-amplify/amplify-js/commit/f37faebacddeed66ce5bc1d7f78b8d1d46aecb17))
- **api-graphql:** Reintroduce subscription tests ([#12416](https://github.com/aws-amplify/amplify-js/issues/12416)) ([6157c46](https://github.com/aws-amplify/amplify-js/commit/6157c46a0c6927a2fbf15ccb38a3f0c5c9f13a25))
- **api-graphql:** remove unnecessary console.log ([#13009](https://github.com/aws-amplify/amplify-js/issues/13009)) ([17b685a](https://github.com/aws-amplify/amplify-js/commit/17b685a28c4364d8b0b3bc870d7be125f972385f))
- **api-graphql:** same results returned for queries on the same model with different selection set ([9dac939](https://github.com/aws-amplify/amplify-js/commit/9dac9390035faae1e79470bb146c007de12d8b2b))
- **api-graphql:** server side iam auth mode is ineffective ([#12992](https://github.com/aws-amplify/amplify-js/issues/12992)) ([e316a2e](https://github.com/aws-amplify/amplify-js/commit/e316a2eb6129a30a16008892e7cdc17aefd914f9))
- **api-graphql:** Subscription authtype overriding ([#12412](https://github.com/aws-amplify/amplify-js/issues/12412)) ([b5fb51f](https://github.com/aws-amplify/amplify-js/commit/b5fb51f61c80cd3e74fcd6ac45ce6b68842f5636))
- **api-graphql:** update error handling ([#13177](https://github.com/aws-amplify/amplify-js/issues/13177)) ([d4a48f1](https://github.com/aws-amplify/amplify-js/commit/d4a48f1ace550bf478ebbfa41bca8b83d7dd52e4))
- **api-graphql:** wrong arguments for GET operation of a CPK model ([d2367f7](https://github.com/aws-amplify/amplify-js/commit/d2367f77c4ab19f54cbd9fdb5ccd123a7de56cc7))
- api/enable ts strict ([#12560](https://github.com/aws-amplify/amplify-js/issues/12560)) ([92789fb](https://github.com/aws-amplify/amplify-js/commit/92789fbb94f19d91f38fb1d90578160666901d0b))
- **api:** remove runtime dep on buffer ([#12378](https://github.com/aws-amplify/amplify-js/issues/12378)) ([af04846](https://github.com/aws-amplify/amplify-js/commit/af048463dfec201394920e93dd997475ab1a167c))
- Arrays returned as objects ([#12676](https://github.com/aws-amplify/amplify-js/issues/12676)) ([8d9b94c](https://github.com/aws-amplify/amplify-js/commit/8d9b94c2f3f88c696520d94ef6cd5c98df81a92f))
- bump data-schema-types to unblock RN ([#12557](https://github.com/aws-amplify/amplify-js/issues/12557)) ([b778a9e](https://github.com/aws-amplify/amplify-js/commit/b778a9e3b05c6f0f52fcfaab79729f4d7d439444))
- **data:** conditional inclusion of sort keys / `sortDirection` for list ([#13189](https://github.com/aws-amplify/amplify-js/issues/13189)) ([5e16682](https://github.com/aws-amplify/amplify-js/commit/5e16682c8311b9020e4828143c679f4ea645dcd2))
- **data:** fix ConsoleLogger argument typo ([#12581](https://github.com/aws-amplify/amplify-js/issues/12581)) ([3777b2a](https://github.com/aws-amplify/amplify-js/commit/3777b2a444a350c4e7c9b04ac9ad438a0a46dbae))
- **data:** fix library configuration options headers for subscriptions ([#12590](https://github.com/aws-amplify/amplify-js/issues/12590)) ([#12659](https://github.com/aws-amplify/amplify-js/issues/12659)) ([e101cea](https://github.com/aws-amplify/amplify-js/commit/e101ceac6a901e240d574e30909ca4409fe91357))
- **data:** tests for error response fix ([#13279](https://github.com/aws-amplify/amplify-js/issues/13279)) ([1aef1ee](https://github.com/aws-amplify/amplify-js/commit/1aef1ee0e65d1489e4d86d19a6d017f852f3bafd))
- Enhance the "unauthorized" error message with recovery instructions ([#12652](https://github.com/aws-amplify/amplify-js/issues/12652)) ([ca62f29](https://github.com/aws-amplify/amplify-js/commit/ca62f295ebc19ff874c63b2ba0d6fa2277f2e862))
- export generateClient return types; don't throw error in genClient ([#12577](https://github.com/aws-amplify/amplify-js/issues/12577)) ([c69c562](https://github.com/aws-amplify/amplify-js/commit/c69c5628458e49d705f2c58dc942bbbc7b9e60f4))
- Fix regression in InternalGraphQL client & broken tests ([#12196](https://github.com/aws-amplify/amplify-js/issues/12196)) ([7158425](https://github.com/aws-amplify/amplify-js/commit/71584250cb94a6e483e0741604991a42a4418e59))
- Lower `tslib` version to improve dependency flattening ([#10588](https://github.com/aws-amplify/amplify-js/issues/10588)) ([a48a17b](https://github.com/aws-amplify/amplify-js/commit/a48a17b1b6adaf09305e338869129b4f7c380fc9))
- PR comments ([#11520](https://github.com/aws-amplify/amplify-js/issues/11520)) ([1ca73b1](https://github.com/aws-amplify/amplify-js/commit/1ca73b1431d4bb737890ac95004f10c3e572ba8b))
- Rollback the manual major version changes and change release command to increment the major versions ([#10638](https://github.com/aws-amplify/amplify-js/issues/10638)) ([660e5d9](https://github.com/aws-amplify/amplify-js/commit/660e5d9e7f18c514dc3c88322a1df6b5d5a5e796))
- Run ts coverage check with test ([#11047](https://github.com/aws-amplify/amplify-js/issues/11047)) ([430bedf](https://github.com/aws-amplify/amplify-js/commit/430bedfd0d0618bd0093b488233521356feef787))
- server/generateModelsProperty bug ([#12610](https://github.com/aws-amplify/amplify-js/issues/12610)) ([a04a462](https://github.com/aws-amplify/amplify-js/commit/a04a462e5beef4d5eba813aa905fa6fcf1b4a8b6))
- Standardize `cache` named export to preserve interoperability with RN ([#10546](https://github.com/aws-amplify/amplify-js/issues/10546)) ([20b096b](https://github.com/aws-amplify/amplify-js/commit/20b096b1a34e6a102d08dabcedb38772f3a6caf7))
- **storage|aws-amplify:** export server apis from the subpaths ([#11910](https://github.com/aws-amplify/amplify-js/issues/11910)) ([23fa46a](https://github.com/aws-amplify/amplify-js/commit/23fa46a9c714273449861baf12bfa6a2ebd1ce9e))
- Typescript errors ([#14037](https://github.com/aws-amplify/amplify-js/issues/14037)) ([c72e72a](https://github.com/aws-amplify/amplify-js/commit/c72e72ad038bb436287b984a98ad7eb992664be6))
- Update getAmplifyUserAgent to retain original interface ([#11535](https://github.com/aws-amplify/amplify-js/issues/11535)) ([dc84cc8](https://github.com/aws-amplify/amplify-js/commit/dc84cc8bfa7811b5f4f8ac2f7e5ea1b5edc54fe1))

### Features

- **@aws-amplify/api-graphql:** Add support for string 'authmode' values in TypeScript based apps ([#8799](https://github.com/aws-amplify/amplify-js/issues/8799)) ([f1dc4a2](https://github.com/aws-amplify/amplify-js/commit/f1dc4a24330bb41295621aaf47f6c4e26828fea5))
- **@aws-amplify/api:** support lambda authorizers ([aba3d2a](https://github.com/aws-amplify/amplify-js/commit/aba3d2aec7e7c9ad8701b345ab94d796b2bdb897))
- **@aws-amplify/datastore:** DataStore - Multi-Auth ([#8008](https://github.com/aws-amplify/amplify-js/issues/8008)) ([dedd564](https://github.com/aws-amplify/amplify-js/commit/dedd5641dfcfce209433088fe9570874cd810997))
- **@aws-amplify/datastore:** support lambda authorizers ([52d43cc](https://github.com/aws-amplify/amplify-js/commit/52d43cc73b459148f1ae81ab81d3a5365a4457e3))
- add a typescript coverage report mechanism ([#10551](https://github.com/aws-amplify/amplify-js/issues/10551)) ([8e8df55](https://github.com/aws-amplify/amplify-js/commit/8e8df55b449f8bae2fe962fe282613d1b818cc5a)), closes [#10379](https://github.com/aws-amplify/amplify-js/issues/10379)
- Add ability to override api user agent with granular actions ([d95573e](https://github.com/aws-amplify/amplify-js/commit/d95573e071870cd824268082ad0e0730d6699a36))
- add data-schema client ([#12552](https://github.com/aws-amplify/amplify-js/issues/12552)) ([922eb86](https://github.com/aws-amplify/amplify-js/commit/922eb86d030a6b50d05da2191a6d6c8f3b40dcdd))
- Add GraphQL user agent info. ([#12366](https://github.com/aws-amplify/amplify-js/issues/12366)) ([b4c2654](https://github.com/aws-amplify/amplify-js/commit/b4c2654a26c9f64042d21825b05fcd3a9ab96fb6))
- add host to config, use in connect, subscribe, publish ([cb412e5](https://github.com/aws-amplify/amplify-js/commit/cb412e55356d9ae11130c817ce24c0769aca4fdc))
- allow withCredentials on graphql requests ([#10796](https://github.com/aws-amplify/amplify-js/issues/10796)) ([8733026](https://github.com/aws-amplify/amplify-js/commit/8733026695ebe46309f8314696b6e11b51d28e61))
- **api-graphql:** add `.enums` property to the GQL client ([#12980](https://github.com/aws-amplify/amplify-js/issues/12980)) ([5c56101](https://github.com/aws-amplify/amplify-js/commit/5c561018aedcff314e68b3dd385fe9bd9ff93150))
- **api-graphql:** add model index query support ([#12967](https://github.com/aws-amplify/amplify-js/issues/12967)) ([0d398a4](https://github.com/aws-amplify/amplify-js/commit/0d398a4dd5ee01fb8d7a723b6410bb481168fa41))
- **api-graphql:** alias authMode identityPool -> iam ([#13299](https://github.com/aws-amplify/amplify-js/issues/13299)) ([a5d176b](https://github.com/aws-amplify/amplify-js/commit/a5d176b3c9ec1cecd265740e8b4579327ef98e1f))
- **api-graphql:** AppSync realtime - include custom headers as query string params ([#13735](https://github.com/aws-amplify/amplify-js/issues/13735)) ([5647497](https://github.com/aws-amplify/amplify-js/commit/56474971f45821d5049f9e8bc7ecbfc7810ea093))
- **api-graphql:** custom subscriptions ([#13154](https://github.com/aws-amplify/amplify-js/issues/13154)) ([2b71e29](https://github.com/aws-amplify/amplify-js/commit/2b71e29d50204f037b1dae2007291c54d1ec8c19))
- **api-graphql:** pass authToken via subprotocol ([#13727](https://github.com/aws-amplify/amplify-js/issues/13727)) ([ced891c](https://github.com/aws-amplify/amplify-js/commit/ced891c2e4f6b0f1fdeaf44ab80cae9d585b6d15))
- **api-graphql:** return entire payload in callback ([#13980](https://github.com/aws-amplify/amplify-js/issues/13980)) ([d6eede3](https://github.com/aws-amplify/amplify-js/commit/d6eede3a68df1e6c49927e62ce0b73d6db615a8a))
- **api-rest:** internal API handling GraphQL requests ([#12138](https://github.com/aws-amplify/amplify-js/issues/12138)) ([3bbd5d9](https://github.com/aws-amplify/amplify-js/commit/3bbd5d91926d90d58fbdab3516ed546c3be7b37c))
- **api:** add custom endpoint support to API ([#14086](https://github.com/aws-amplify/amplify-js/issues/14086)) ([ca2e4b8](https://github.com/aws-amplify/amplify-js/commit/ca2e4b87a456dfe9a027e49bdcd912a2cba8e59d))
- **api:** expose generateClient from /server subpath ([#12691](https://github.com/aws-amplify/amplify-js/issues/12691)) ([f4d3873](https://github.com/aws-amplify/amplify-js/commit/f4d3873c546f2117eccfd40cef043e115c8de7bf))
- **api:** expose HTTP response from API errors ([#12835](https://github.com/aws-amplify/amplify-js/issues/12835)) ([38c1d56](https://github.com/aws-amplify/amplify-js/commit/38c1d56973c6318fc63ce0bdba888c2b0136d083))
- **api:** REST API handlers ([#12172](https://github.com/aws-amplify/amplify-js/issues/12172)) ([8d0489f](https://github.com/aws-amplify/amplify-js/commit/8d0489f0fafad9eb26fc4bd6be97ba13aa345448))
- **api:** update API config interface ([#12122](https://github.com/aws-amplify/amplify-js/issues/12122)) ([3e17805](https://github.com/aws-amplify/amplify-js/commit/3e1780544f16fc769bb3c7316b413b966c909515))
- Automatically handle clock drift/skew for API calls ([#5869](https://github.com/aws-amplify/amplify-js/issues/5869)) ([6218ff6](https://github.com/aws-amplify/amplify-js/commit/6218ff62269056f46d65760c3ec61baadb3742f4))
- Better api graphql types ([#12175](https://github.com/aws-amplify/amplify-js/issues/12175)) ([7236358](https://github.com/aws-amplify/amplify-js/commit/7236358a2412264f97a7e15250ee0d5bafae1e7b))
- change JS target to ES2020 ([#12365](https://github.com/aws-amplify/amplify-js/issues/12365)) ([381b201](https://github.com/aws-amplify/amplify-js/commit/381b2010afb0ca72d392307d4da64af3ca146d6f))
- **clients:** cognito identity client ([#11213](https://github.com/aws-amplify/amplify-js/issues/11213)) ([67e4017](https://github.com/aws-amplify/amplify-js/commit/67e40171385f02d0c9448fdc3e036d63e009ea34))
- **clients:** support CN partition by adding DNS suffix resolver ([#11311](https://github.com/aws-amplify/amplify-js/issues/11311)) ([9de2975](https://github.com/aws-amplify/amplify-js/commit/9de297519fdbaaf1e9b4ae98f12aed4137400222))
- **core:** add amplifyUuid and amplifyUrl with builtin polyfill loader for RN ([a4ad9e0](https://github.com/aws-amplify/amplify-js/commit/a4ad9e09d6098a53f4530d9fa9112c81b409a605))
- **core:** API detection for 8 framework targets ([#11384](https://github.com/aws-amplify/amplify-js/issues/11384)) ([388f207](https://github.com/aws-amplify/amplify-js/commit/388f2074db0640f2d22aa7cd1a44d8eb8f2301d2))
- **core:** refactor signer implementation to remove polyfill ([#11319](https://github.com/aws-amplify/amplify-js/issues/11319)) ([1603af3](https://github.com/aws-amplify/amplify-js/commit/1603af38ea7faa163f7fcb92fd09c056454c8a0a)), closes [#11273](https://github.com/aws-amplify/amplify-js/issues/11273) [#11307](https://github.com/aws-amplify/amplify-js/issues/11307) [#11310](https://github.com/aws-amplify/amplify-js/issues/11310) [#11120](https://github.com/aws-amplify/amplify-js/issues/11120) [#11320](https://github.com/aws-amplify/amplify-js/issues/11320)
- custom queries and mutations ([#13029](https://github.com/aws-amplify/amplify-js/issues/13029)) ([7e4eff3](https://github.com/aws-amplify/amplify-js/commit/7e4eff3be3ec25520332330461ca2cefbf7bdbb7))
- custom user agent Auth changes for UI handoff ([#11606](https://github.com/aws-amplify/amplify-js/issues/11606)) ([2790f04](https://github.com/aws-amplify/amplify-js/commit/2790f0421b70977547378108e890d442637a45ba))
- Custom user agent improvements for Storage ([#11425](https://github.com/aws-amplify/amplify-js/issues/11425)) ([fd04df4](https://github.com/aws-amplify/amplify-js/commit/fd04df40b6a07a864e2ded443a53f3efdf74931f))
- custom user agent InternalCognitoUser ([#11709](https://github.com/aws-amplify/amplify-js/issues/11709)) ([4115295](https://github.com/aws-amplify/amplify-js/commit/411529560d225e789af220c554da8cd733b1563c))
- **data:** add 'sortDirection' support for list and index queries ([#13164](https://github.com/aws-amplify/amplify-js/issues/13164)) ([d18ee98](https://github.com/aws-amplify/amplify-js/commit/d18ee988485cd772fae23a9e0d579d40f62976b2))
- **data:** add custom header support to data schema client ([#12559](https://github.com/aws-amplify/amplify-js/issues/12559)) ([2b1db67](https://github.com/aws-amplify/amplify-js/commit/2b1db67a8fec5f58a1a70f362e43979685a615d5))
- **data:** add GraphQL API V6 support for custom headers, non-Appsync endpoints, and custom domains; add / update tests ([#12185](https://github.com/aws-amplify/amplify-js/issues/12185)) ([6d5afce](https://github.com/aws-amplify/amplify-js/commit/6d5afce390687e925438d6d208a18c84e61399a9))
- **data:** add request cancellation functionality to GraphQL API V6 ([#12142](https://github.com/aws-amplify/amplify-js/issues/12142)) ([335b6f1](https://github.com/aws-amplify/amplify-js/commit/335b6f1ca4398bef8ebcd4861e63e8dff9e15c57))
- **data:** events client ([#13923](https://github.com/aws-amplify/amplify-js/issues/13923)) ([847fb51](https://github.com/aws-amplify/amplify-js/commit/847fb51acee1ee8585503625a6f73d67265217d0))
- **data:** migrate `zen-observable-ts` to `rxjs` for API category packages ([#12081](https://github.com/aws-amplify/amplify-js/issues/12081)) ([51a8a54](https://github.com/aws-amplify/amplify-js/commit/51a8a548241563f750d90532ea548e475ffff0cc))
- **data:** pass request options to custom header functions ([#12572](https://github.com/aws-amplify/amplify-js/issues/12572)) ([b092100](https://github.com/aws-amplify/amplify-js/commit/b092100525e328247a814b6684ae4735ce3fc8da))
- **data:** update and re-enable GraphQL API unit tests ([#12421](https://github.com/aws-amplify/amplify-js/issues/12421)) ([c5474d6](https://github.com/aws-amplify/amplify-js/commit/c5474d675fd99b388aa0f3240b9fd8857b974458)), closes [#12416](https://github.com/aws-amplify/amplify-js/issues/12416)
- implicit group auth fields in selection sets ([#13161](https://github.com/aws-amplify/amplify-js/issues/13161)) ([1820354](https://github.com/aws-amplify/amplify-js/commit/182035411b23f55416940220bac742e318ced9b5))
- PubSub Add Options objects for all Providers and fix: Spelling error and deprecation of old exports ([#9683](https://github.com/aws-amplify/amplify-js/issues/9683)) ([b535af2](https://github.com/aws-amplify/amplify-js/commit/b535af2133b5460c6e8e2fcfd89e1fe235872c27))
- **repo:** set up rollup to emit esm and cjs artifacts ([#12522](https://github.com/aws-amplify/amplify-js/issues/12522)) ([903a012](https://github.com/aws-amplify/amplify-js/commit/903a0123e51f69ff3476b6b15aa89a73b750f9dc))
- ssr support for graphql ([#12430](https://github.com/aws-amplify/amplify-js/issues/12430)) ([6f4d984](https://github.com/aws-amplify/amplify-js/commit/6f4d98474db133959560232e3e4804ca84c4ba89))
- **SSR:** withSSRContext ([#6146](https://github.com/aws-amplify/amplify-js/issues/6146)) ([1cb1afd](https://github.com/aws-amplify/amplify-js/commit/1cb1afd1e56135908dceb2ef6403f0b3e78067fe))
- user agent enhancements - cross-category api>api-graphql>pubsub ([#11368](https://github.com/aws-amplify/amplify-js/issues/11368)) ([a88dda2](https://github.com/aws-amplify/amplify-js/commit/a88dda202919aa1d4dc2af48f33c3533d8626261))
- user agent enhancements: part1 core ([#11121](https://github.com/aws-amplify/amplify-js/issues/11121)) ([66d1fb5](https://github.com/aws-amplify/amplify-js/commit/66d1fb5a7c3d82621ce9a8c1e880fe81573387ba))
- V6 api graphql ssr ([#12214](https://github.com/aws-amplify/amplify-js/issues/12214)) ([d4a8756](https://github.com/aws-amplify/amplify-js/commit/d4a8756ac7bc2fcc91e963ff86fd68e7610d3e73))

### Reverts

- Revert "fix(api-graphql): default selection set regression" (#13187) ([27c1917](https://github.com/aws-amplify/amplify-js/commit/27c191755430fa2d6949e26654fb81968bfdeae9)), closes [#13187](https://github.com/aws-amplify/amplify-js/issues/13187) [#13185](https://github.com/aws-amplify/amplify-js/issues/13185)
- Revert "chore(release): Publish [skip release]" ([241fa11](https://github.com/aws-amplify/amplify-js/commit/241fa1105e177d9e4afe59c40ee92656b87ae542))
- Revert "chore(release): Publish" (#13027) ([f6f4f42](https://github.com/aws-amplify/amplify-js/commit/f6f4f42befa04ed3c1502fa0adf17c6700abfddf)), closes [#13027](https://github.com/aws-amplify/amplify-js/issues/13027)
- Revert "chore(repo): use typescript 5.0.2 across workspace" (#12941) ([dc04ba1](https://github.com/aws-amplify/amplify-js/commit/dc04ba18604291d9618a681e7ec4cdb801a355c8)), closes [#12941](https://github.com/aws-amplify/amplify-js/issues/12941)
- Revert "chore: Upgrade Prettier (#12582)" (#12600) ([cd937f5](https://github.com/aws-amplify/amplify-js/commit/cd937f56bef5f90a4b42638776656faf746c48aa)), closes [#12582](https://github.com/aws-amplify/amplify-js/issues/12582) [#12600](https://github.com/aws-amplify/amplify-js/issues/12600)
- Revert "remove unused tests" ([857af81](https://github.com/aws-amplify/amplify-js/commit/857af819e3030d5e609cf8ec45ed989a0910d982))
- Revert "cleanup" ([155dfd8](https://github.com/aws-amplify/amplify-js/commit/155dfd8b31fa739cd1820f1f95e54f4784cdf736))
- Revert "feat: pipe auth user agent details through to service call (#11755)" ([812875f](https://github.com/aws-amplify/amplify-js/commit/812875fce7b85209486b7ff8cad8674fac43d12c)), closes [#11755](https://github.com/aws-amplify/amplify-js/issues/11755)
- uuid dependency upgrade ([#9159](https://github.com/aws-amplify/amplify-js/issues/9159)) ([4ef8aa9](https://github.com/aws-amplify/amplify-js/commit/4ef8aa9c7c25dbe921fd02b6205b8defb93fbaec))

## [4.7.15](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.7.14...@aws-amplify/api-graphql@4.7.15) (2025-04-28)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.7.14](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.7.13...@aws-amplify/api-graphql@4.7.14) (2025-04-21)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.7.13](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.7.12...@aws-amplify/api-graphql@4.7.13) (2025-04-09)

### Bug Fixes

- (14277) Unable to override options when calling `events.connect` and `subscribe` ([#14278](https://github.com/aws-amplify/amplify-js/issues/14278)) ([db70f7b](https://github.com/aws-amplify/amplify-js/commit/db70f7be22711c6bf03fe68d7d3d3d93070d9a85))

## [4.7.12](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.7.11...@aws-amplify/api-graphql@4.7.12) (2025-03-28)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.7.11](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.7.10...@aws-amplify/api-graphql@4.7.11) (2025-03-25)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.7.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.7.9...@aws-amplify/api-graphql@4.7.10) (2025-03-21)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.7.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.7.8...@aws-amplify/api-graphql@4.7.9) (2025-03-14)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.7.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.7.7...@aws-amplify/api-graphql@4.7.8) (2025-03-07)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.7.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.7.6...@aws-amplify/api-graphql@4.7.7) (2025-03-05)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.7.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.7.5...@aws-amplify/api-graphql@4.7.6) (2025-02-27)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.7.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.7.4...@aws-amplify/api-graphql@4.7.5) (2025-02-20)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.7.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.7.3...@aws-amplify/api-graphql@4.7.4) (2025-02-12)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.7.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.7.2...@aws-amplify/api-graphql@4.7.3) (2025-02-04)

### Bug Fixes

- **api-graphql:** Data messages should maintain the keep alive status ([#14164](https://github.com/aws-amplify/amplify-js/issues/14164)) ([8b489d1](https://github.com/aws-amplify/amplify-js/commit/8b489d1667c67741cbc1111b0a52d10996aa857d))

## [4.7.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.7.1...@aws-amplify/api-graphql@4.7.2) (2025-01-24)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.7.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.7.0...@aws-amplify/api-graphql@4.7.1) (2025-01-14)

**Note:** Version bump only for package @aws-amplify/api-graphql

# [4.7.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.6.7...@aws-amplify/api-graphql@4.7.0) (2025-01-03)

### Features

- **api:** add custom endpoint support to API ([#14086](https://github.com/aws-amplify/amplify-js/issues/14086)) ([ca2e4b8](https://github.com/aws-amplify/amplify-js/commit/ca2e4b87a456dfe9a027e49bdcd912a2cba8e59d))

## [4.6.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.6.6...@aws-amplify/api-graphql@4.6.7) (2024-12-19)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.6.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.6.5...@aws-amplify/api-graphql@4.6.6) (2024-12-12)

### Bug Fixes

- Typescript errors ([#14037](https://github.com/aws-amplify/amplify-js/issues/14037)) ([c72e72a](https://github.com/aws-amplify/amplify-js/commit/c72e72ad038bb436287b984a98ad7eb992664be6))

## [4.6.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.6.4...@aws-amplify/api-graphql@4.6.5) (2024-12-03)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.6.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.6.3...@aws-amplify/api-graphql@4.6.4) (2024-12-03)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.6.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.6.2...@aws-amplify/api-graphql@4.6.3) (2024-11-25)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.6.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.6.1...@aws-amplify/api-graphql@4.6.2) (2024-11-20)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.6.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.6.0...@aws-amplify/api-graphql@4.6.1) (2024-11-13)

**Note:** Version bump only for package @aws-amplify/api-graphql

# [4.6.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.5.1...@aws-amplify/api-graphql@4.6.0) (2024-11-12)

### Bug Fixes

- **api-graphql:** close WS on events.closeAll ([#13989](https://github.com/aws-amplify/amplify-js/issues/13989)) ([168ecff](https://github.com/aws-amplify/amplify-js/commit/168ecff80ede7c92a2a443471061237f250b1fcd))
- **api-graphql:** events ws connect sig ([#14003](https://github.com/aws-amplify/amplify-js/issues/14003)) ([4606279](https://github.com/aws-amplify/amplify-js/commit/460627966350c67db890dd908e882885e93624a7))

### Features

- **api-graphql:** return entire payload in callback ([#13980](https://github.com/aws-amplify/amplify-js/issues/13980)) ([d6eede3](https://github.com/aws-amplify/amplify-js/commit/d6eede3a68df1e6c49927e62ce0b73d6db615a8a))

## [4.5.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.5.0...@aws-amplify/api-graphql@4.5.1) (2024-10-31)

**Note:** Version bump only for package @aws-amplify/api-graphql

# [4.5.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.4.3...@aws-amplify/api-graphql@4.5.0) (2024-10-29)

### Bug Fixes

- **api-graphql:** events url pattern; non-retryable error handling ([#13970](https://github.com/aws-amplify/amplify-js/issues/13970)) ([e0fdeb7](https://github.com/aws-amplify/amplify-js/commit/e0fdeb7bcbb24822607267b08b2919af5e73f2db))

### Features

- **data:** events client ([#13923](https://github.com/aws-amplify/amplify-js/issues/13923)) ([847fb51](https://github.com/aws-amplify/amplify-js/commit/847fb51acee1ee8585503625a6f73d67265217d0))

## [4.4.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.4.2...@aws-amplify/api-graphql@4.4.3) (2024-10-25)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.4.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.4.1...@aws-amplify/api-graphql@4.4.2) (2024-10-21)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.4.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.4.0...@aws-amplify/api-graphql@4.4.1) (2024-10-15)

**Note:** Version bump only for package @aws-amplify/api-graphql

# [4.4.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.3.3...@aws-amplify/api-graphql@4.4.0) (2024-10-05)

### Features

- Add ability to override api user agent with granular actions ([d95573e](https://github.com/aws-amplify/amplify-js/commit/d95573e071870cd824268082ad0e0730d6699a36))

## [4.3.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.3.2...@aws-amplify/api-graphql@4.3.3) (2024-09-30)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.3.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.3.1...@aws-amplify/api-graphql@4.3.2) (2024-09-17)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.3.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.3.0...@aws-amplify/api-graphql@4.3.1) (2024-09-16)

**Note:** Version bump only for package @aws-amplify/api-graphql

# [4.3.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.2.1...@aws-amplify/api-graphql@4.3.0) (2024-09-04)

### Features

- **api-graphql:** pass authToken via subprotocol ([#13727](https://github.com/aws-amplify/amplify-js/issues/13727)) ([ced891c](https://github.com/aws-amplify/amplify-js/commit/ced891c2e4f6b0f1fdeaf44ab80cae9d585b6d15))

## [4.2.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.2.0...@aws-amplify/api-graphql@4.2.1) (2024-09-03)

**Note:** Version bump only for package @aws-amplify/api-graphql

# [4.2.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.1.15...@aws-amplify/api-graphql@4.2.0) (2024-08-26)

### Features

- **api-graphql:** AppSync realtime - include custom headers as query string params ([#13735](https://github.com/aws-amplify/amplify-js/issues/13735)) ([5647497](https://github.com/aws-amplify/amplify-js/commit/56474971f45821d5049f9e8bc7ecbfc7810ea093))

## [4.1.15](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.1.14...@aws-amplify/api-graphql@4.1.15) (2024-08-21)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.1.14](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.1.13...@aws-amplify/api-graphql@4.1.14) (2024-08-15)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.1.13](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.1.12...@aws-amplify/api-graphql@4.1.13) (2024-08-07)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.1.12](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.1.11...@aws-amplify/api-graphql@4.1.12) (2024-08-05)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.1.11](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.1.10...@aws-amplify/api-graphql@4.1.11) (2024-07-23)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.1.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.1.9...@aws-amplify/api-graphql@4.1.10) (2024-07-22)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.1.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.1.8...@aws-amplify/api-graphql@4.1.9) (2024-07-19)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.1.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.1.7...@aws-amplify/api-graphql@4.1.8) (2024-07-08)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.1.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.1.6...@aws-amplify/api-graphql@4.1.7) (2024-06-24)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.1.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.1.5...@aws-amplify/api-graphql@4.1.6) (2024-06-07)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.1.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.1.4...@aws-amplify/api-graphql@4.1.5) (2024-06-04)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.1.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.1.3...@aws-amplify/api-graphql@4.1.4) (2024-05-23)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.1.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.1.2...@aws-amplify/api-graphql@4.1.3) (2024-05-23)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.1.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.1.1...@aws-amplify/api-graphql@4.1.2) (2024-05-13)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [4.1.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.1.0...@aws-amplify/api-graphql@4.1.1) (2024-05-07)

**Note:** Version bump only for package @aws-amplify/api-graphql

# [4.1.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.0.30...@aws-amplify/api-graphql@4.1.0) (2024-04-29)

### Features

- **api-graphql:** alias authMode identityPool -> iam ([#13299](https://github.com/aws-amplify/amplify-js/issues/13299)) ([a5d176b](https://github.com/aws-amplify/amplify-js/commit/a5d176b3c9ec1cecd265740e8b4579327ef98e1f))

## [4.0.30](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.0.29...@aws-amplify/api-graphql@4.0.30) (2024-04-26)

### Bug Fixes

- **data:** tests for error response fix ([#13279](https://github.com/aws-amplify/amplify-js/issues/13279)) ([1aef1ee](https://github.com/aws-amplify/amplify-js/commit/1aef1ee0e65d1489e4d86d19a6d017f852f3bafd))

## [4.0.29](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.0.28...@aws-amplify/api-graphql@4.0.29) (2024-04-22)

### Bug Fixes

- **api-graphql:** incorrect custom selection set for nested model.model.customType ([#13216](https://github.com/aws-amplify/amplify-js/issues/13216)) ([390c159](https://github.com/aws-amplify/amplify-js/commit/390c159cd976b744701d504a9d3929e80f7e2b72))
- **api-graphql:** incorrect list sk arg type ([#13249](https://github.com/aws-amplify/amplify-js/issues/13249)) ([f37faeb](https://github.com/aws-amplify/amplify-js/commit/f37faebacddeed66ce5bc1d7f78b8d1d46aecb17))

## [4.0.28](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@4.0.27...@aws-amplify/api-graphql@4.0.28) (2024-04-09)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 4.0.27 (2024-04-02)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 4.0.26 (2024-04-01)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 4.0.25 (2024-03-30)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 4.0.24 (2024-03-29)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 4.0.23 (2024-03-25)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 4.0.22 (2024-03-25)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 4.0.21 (2024-03-19)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 4.0.20 (2024-03-11)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 4.0.19 (2024-03-05)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 4.0.18 (2024-02-27)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 4.0.17 (2024-02-19)

### Reverts

- Revert "chore(release): Publish" (#13027) ([f6f4f42](https://github.com/aws-amplify/amplify-js/commit/f6f4f42befa04ed3c1502fa0adf17c6700abfddf)), closes [#13027](https://github.com/aws-amplify/amplify-js/issues/13027)

## 4.0.16 (2024-02-09)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 4.0.15 (2024-02-06)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 4.0.14 (2024-02-01)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 4.0.13 (2024-01-22)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 4.0.12 (2024-01-12)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 4.0.11 (2024-01-10)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 4.0.10 (2024-01-04)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 4.0.9 (2023-12-22)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 4.0.8 (2023-12-18)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 4.0.7 (2023-12-12)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 4.0.6 (2023-12-05)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 4.0.5 (2023-11-22)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 4.0.4 (2023-11-20)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 4.0.3 (2023-11-16)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 4.0.2 (2023-11-13)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 3.4.10 (2023-08-23)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 3.4.9 (2023-08-22)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 3.4.8 (2023-08-17)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 3.4.7 (2023-08-10)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.4.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.4.5...@aws-amplify/api-graphql@3.4.6) (2023-07-31)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.4.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.4.4...@aws-amplify/api-graphql@3.4.5) (2023-07-20)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.4.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.4.3...@aws-amplify/api-graphql@3.4.4) (2023-07-13)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.4.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.4.2...@aws-amplify/api-graphql@3.4.3) (2023-06-28)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.4.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.4.1...@aws-amplify/api-graphql@3.4.2) (2023-06-27)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.4.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.4.0...@aws-amplify/api-graphql@3.4.1) (2023-06-21)

### Bug Fixes

- Update getAmplifyUserAgent to retain original interface ([#11535](https://github.com/aws-amplify/amplify-js/issues/11535)) ([dc84cc8](https://github.com/aws-amplify/amplify-js/commit/dc84cc8bfa7811b5f4f8ac2f7e5ea1b5edc54fe1))

# [3.4.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.3.1...@aws-amplify/api-graphql@3.4.0) (2023-06-20)

### Bug Fixes

- PR comments ([#11520](https://github.com/aws-amplify/amplify-js/issues/11520)) ([1ca73b1](https://github.com/aws-amplify/amplify-js/commit/1ca73b1431d4bb737890ac95004f10c3e572ba8b))

### Features

- **core:** API detection for 8 framework targets ([#11384](https://github.com/aws-amplify/amplify-js/issues/11384)) ([388f207](https://github.com/aws-amplify/amplify-js/commit/388f2074db0640f2d22aa7cd1a44d8eb8f2301d2))
- Custom user agent improvements for Storage ([#11425](https://github.com/aws-amplify/amplify-js/issues/11425)) ([fd04df4](https://github.com/aws-amplify/amplify-js/commit/fd04df40b6a07a864e2ded443a53f3efdf74931f))
- user agent enhancements - cross-category api>api-graphql>pubsub ([#11368](https://github.com/aws-amplify/amplify-js/issues/11368)) ([a88dda2](https://github.com/aws-amplify/amplify-js/commit/a88dda202919aa1d4dc2af48f33c3533d8626261))
- user agent enhancements: part1 core ([#11121](https://github.com/aws-amplify/amplify-js/issues/11121)) ([66d1fb5](https://github.com/aws-amplify/amplify-js/commit/66d1fb5a7c3d82621ce9a8c1e880fe81573387ba))

## [3.3.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.3.0...@aws-amplify/api-graphql@3.3.1) (2023-06-14)

**Note:** Version bump only for package @aws-amplify/api-graphql

# [3.3.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.2.1...@aws-amplify/api-graphql@3.3.0) (2023-06-05)

### Bug Fixes

- address feedbacks ([2d6eecf](https://github.com/aws-amplify/amplify-js/commit/2d6eecfa4763a6cfb6aeaabedd49a530c6420dcd))

### Features

- **clients:** cognito identity client ([#11213](https://github.com/aws-amplify/amplify-js/issues/11213)) ([67e4017](https://github.com/aws-amplify/amplify-js/commit/67e40171385f02d0c9448fdc3e036d63e009ea34))
- **clients:** support CN partition by adding DNS suffix resolver ([#11311](https://github.com/aws-amplify/amplify-js/issues/11311)) ([9de2975](https://github.com/aws-amplify/amplify-js/commit/9de297519fdbaaf1e9b4ae98f12aed4137400222))

## [3.2.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.2.0...@aws-amplify/api-graphql@3.2.1) (2023-05-27)

**Note:** Version bump only for package @aws-amplify/api-graphql

# [3.2.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.1.19...@aws-amplify/api-graphql@3.2.0) (2023-05-12)

### Features

- **core:** refactor signer implementation to remove polyfill ([#11319](https://github.com/aws-amplify/amplify-js/issues/11319)) ([1603af3](https://github.com/aws-amplify/amplify-js/commit/1603af38ea7faa163f7fcb92fd09c056454c8a0a)), closes [#11273](https://github.com/aws-amplify/amplify-js/issues/11273) [#11307](https://github.com/aws-amplify/amplify-js/issues/11307) [#11310](https://github.com/aws-amplify/amplify-js/issues/11310) [#11120](https://github.com/aws-amplify/amplify-js/issues/11120) [#11320](https://github.com/aws-amplify/amplify-js/issues/11320)

## [3.1.19](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.1.18...@aws-amplify/api-graphql@3.1.19) (2023-05-04)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.1.18](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.1.17...@aws-amplify/api-graphql@3.1.18) (2023-04-27)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.1.17](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.1.16...@aws-amplify/api-graphql@3.1.17) (2023-04-20)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.1.16](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.1.15...@aws-amplify/api-graphql@3.1.16) (2023-04-18)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.1.15](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.1.14...@aws-amplify/api-graphql@3.1.15) (2023-04-13)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.1.14](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.1.13...@aws-amplify/api-graphql@3.1.14) (2023-04-12)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.1.13](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.1.12...@aws-amplify/api-graphql@3.1.13) (2023-04-06)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.1.12](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.1.11...@aws-amplify/api-graphql@3.1.12) (2023-04-04)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.1.11](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.1.10...@aws-amplify/api-graphql@3.1.11) (2023-03-30)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.1.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.1.9...@aws-amplify/api-graphql@3.1.10) (2023-03-23)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.1.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.1.8...@aws-amplify/api-graphql@3.1.9) (2023-03-21)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.1.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.1.7...@aws-amplify/api-graphql@3.1.8) (2023-03-16)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.1.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.1.6...@aws-amplify/api-graphql@3.1.7) (2023-03-13)

### Bug Fixes

- Run ts coverage check with test ([#11047](https://github.com/aws-amplify/amplify-js/issues/11047)) ([430bedf](https://github.com/aws-amplify/amplify-js/commit/430bedfd0d0618bd0093b488233521356feef787))

## [3.1.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.1.5...@aws-amplify/api-graphql@3.1.6) (2023-03-08)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.1.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.1.4...@aws-amplify/api-graphql@3.1.5) (2023-03-06)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.1.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.1.3...@aws-amplify/api-graphql@3.1.4) (2023-02-24)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.1.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.1.2...@aws-amplify/api-graphql@3.1.3) (2023-02-16)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.1.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.1.1...@aws-amplify/api-graphql@3.1.2) (2023-02-09)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.1.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.1.0...@aws-amplify/api-graphql@3.1.1) (2023-02-08)

**Note:** Version bump only for package @aws-amplify/api-graphql

# [3.1.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.0.11...@aws-amplify/api-graphql@3.1.0) (2023-01-30)

### Features

- allow withCredentials on graphql requests ([#10796](https://github.com/aws-amplify/amplify-js/issues/10796)) ([8733026](https://github.com/aws-amplify/amplify-js/commit/8733026695ebe46309f8314696b6e11b51d28e61))

## [3.0.11](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.0.10...@aws-amplify/api-graphql@3.0.11) (2023-01-19)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.0.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.0.9...@aws-amplify/api-graphql@3.0.10) (2023-01-13)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.0.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.0.8...@aws-amplify/api-graphql@3.0.9) (2023-01-10)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.0.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.0.7...@aws-amplify/api-graphql@3.0.8) (2022-12-27)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.0.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.0.6...@aws-amplify/api-graphql@3.0.7) (2022-12-16)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.0.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.0.5...@aws-amplify/api-graphql@3.0.6) (2022-12-15)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.0.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.0.4...@aws-amplify/api-graphql@3.0.5) (2022-12-06)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.0.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.0.3...@aws-amplify/api-graphql@3.0.4) (2022-11-23)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.0.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.0.2...@aws-amplify/api-graphql@3.0.3) (2022-11-19)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.0.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.0.1...@aws-amplify/api-graphql@3.0.2) (2022-11-16)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [3.0.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@3.0.0...@aws-amplify/api-graphql@3.0.1) (2022-11-11)

**Note:** Version bump only for package @aws-amplify/api-graphql

# [3.0.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.3.25...@aws-amplify/api-graphql@3.0.0) (2022-11-09)

### Bug Fixes

- Standardize `cache` named export to preserve interoperability with RN ([#10546](https://github.com/aws-amplify/amplify-js/issues/10546)) ([20b096b](https://github.com/aws-amplify/amplify-js/commit/20b096b1a34e6a102d08dabcedb38772f3a6caf7))

### Features

- Remove (most) default exports ([10461](https://github.com/aws-amplify/amplify-js/pull/10461))
- Setup tslib & importHelpers to improve bundle size ([#10435](https://github.com/aws-amplify/amplify-js/pull/10435))
- add a typescript coverage report mechanism ([#10551](https://github.com/aws-amplify/amplify-js/issues/10551)) ([8e8df55](https://github.com/aws-amplify/amplify-js/commit/8e8df55b449f8bae2fe962fe282613d1b818cc5a)), closes [#10379](https://github.com/aws-amplify/amplify-js/issues/10379)

## [2.3.24](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.3.23...@aws-amplify/api-graphql@2.3.24) (2022-10-27)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.3.23](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.3.22...@aws-amplify/api-graphql@2.3.23) (2022-10-26)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.3.22](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.3.21...@aws-amplify/api-graphql@2.3.22) (2022-10-25)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.3.21](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.3.20...@aws-amplify/api-graphql@2.3.21) (2022-10-14)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.3.20](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.3.19...@aws-amplify/api-graphql@2.3.20) (2022-10-14)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.3.19](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.3.17...@aws-amplify/api-graphql@2.3.19) (2022-09-30)

### Bug Fixes

- **api-graphql:** use named PubSub export ([#10344](https://github.com/aws-amplify/amplify-js/issues/10344)) ([3798cea](https://github.com/aws-amplify/amplify-js/commit/3798cea4d015f245e3b1a8008feb42d35850b860))

## [2.3.18](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.3.17...@aws-amplify/api-graphql@2.3.18) (2022-09-20)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.3.17](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.3.16...@aws-amplify/api-graphql@2.3.17) (2022-09-08)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.3.16](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.3.15...@aws-amplify/api-graphql@2.3.16) (2022-09-01)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.3.15](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.3.14...@aws-amplify/api-graphql@2.3.15) (2022-08-23)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.3.14](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.3.13...@aws-amplify/api-graphql@2.3.14) (2022-08-18)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.3.13](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.3.12...@aws-amplify/api-graphql@2.3.13) (2022-08-16)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.3.12](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.3.11...@aws-amplify/api-graphql@2.3.12) (2022-08-01)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.3.11](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.3.10...@aws-amplify/api-graphql@2.3.11) (2022-07-28)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.3.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.3.9...@aws-amplify/api-graphql@2.3.10) (2022-07-21)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.3.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.3.8...@aws-amplify/api-graphql@2.3.9) (2022-07-07)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.3.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.3.7...@aws-amplify/api-graphql@2.3.8) (2022-06-18)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.3.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.3.6...@aws-amplify/api-graphql@2.3.7) (2022-06-15)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.3.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.3.5...@aws-amplify/api-graphql@2.3.6) (2022-05-24)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.3.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.3.4...@aws-amplify/api-graphql@2.3.5) (2022-05-23)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.3.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.3.3...@aws-amplify/api-graphql@2.3.4) (2022-05-12)

### Bug Fixes

- **@aws-amplify/api:** graphql API.cancel fix ([#9578](https://github.com/aws-amplify/amplify-js/issues/9578)) ([a9ae27f](https://github.com/aws-amplify/amplify-js/commit/a9ae27f65e1a782321c0be87556f92d2ee432352))

## [2.3.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.3.2...@aws-amplify/api-graphql@2.3.3) (2022-05-03)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.3.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.3.1...@aws-amplify/api-graphql@2.3.2) (2022-04-14)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.3.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.3.0...@aws-amplify/api-graphql@2.3.1) (2022-04-04)

**Note:** Version bump only for package @aws-amplify/api-graphql

# [2.3.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.2.24...@aws-amplify/api-graphql@2.3.0) (2022-03-28)

### Features

- PubSub Add Options objects for all Providers and fix: Spelling error and deprecation of old exports ([#9683](https://github.com/aws-amplify/amplify-js/issues/9683)) ([b535af2](https://github.com/aws-amplify/amplify-js/commit/b535af2133b5460c6e8e2fcfd89e1fe235872c27))

## [2.2.24](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.2.23...@aws-amplify/api-graphql@2.2.24) (2022-03-22)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.2.23](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.2.22...@aws-amplify/api-graphql@2.2.23) (2022-03-10)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.2.22](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.2.21...@aws-amplify/api-graphql@2.2.22) (2022-02-28)

### Bug Fixes

- **@aws-amplify/api:** Improve API.graphql return type ([#9197](https://github.com/aws-amplify/amplify-js/issues/9197)) ([9a0531b](https://github.com/aws-amplify/amplify-js/commit/9a0531b11e9eb6659d36ca0c51c642b3d947f63c))

## [2.2.21](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.2.20...@aws-amplify/api-graphql@2.2.21) (2022-02-03)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.2.20](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.2.19...@aws-amplify/api-graphql@2.2.20) (2022-01-27)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.2.19](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.2.18...@aws-amplify/api-graphql@2.2.19) (2022-01-07)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.2.18](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.2.17...@aws-amplify/api-graphql@2.2.18) (2021-12-16)

### Bug Fixes

- **@aws-amplify/api-graphql:** Fix webpack build ([#9358](https://github.com/aws-amplify/amplify-js/issues/9358)) ([73587d7](https://github.com/aws-amplify/amplify-js/commit/73587d78fc4feba39d5a527bfe2c790935653fd3))

## [2.2.17](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.2.16...@aws-amplify/api-graphql@2.2.17) (2021-12-03)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.2.16](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.2.15...@aws-amplify/api-graphql@2.2.16) (2021-12-02)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.2.15](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.2.14...@aws-amplify/api-graphql@2.2.15) (2021-11-18)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.2.14](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.2.13...@aws-amplify/api-graphql@2.2.14) (2021-11-16)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.2.13](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.2.12...@aws-amplify/api-graphql@2.2.13) (2021-11-12)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.2.12](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.2.11...@aws-amplify/api-graphql@2.2.12) (2021-11-09)

### Reverts

- uuid dependency upgrade ([#9159](https://github.com/aws-amplify/amplify-js/issues/9159)) ([4ef8aa9](https://github.com/aws-amplify/amplify-js/commit/4ef8aa9c7c25dbe921fd02b6205b8defb93fbaec))

## [2.2.11](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.2.10...@aws-amplify/api-graphql@2.2.11) (2021-10-28)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.2.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.2.9...@aws-amplify/api-graphql@2.2.10) (2021-10-21)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.2.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.2.8...@aws-amplify/api-graphql@2.2.9) (2021-10-07)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.2.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.2.7...@aws-amplify/api-graphql@2.2.8) (2021-09-30)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.2.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.2.6...@aws-amplify/api-graphql@2.2.7) (2021-09-24)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.2.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.2.5...@aws-amplify/api-graphql@2.2.6) (2021-09-22)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.2.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.2.4...@aws-amplify/api-graphql@2.2.5) (2021-09-17)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.2.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.2.3...@aws-amplify/api-graphql@2.2.4) (2021-09-09)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.2.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.2.2...@aws-amplify/api-graphql@2.2.3) (2021-09-07)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.2.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.2.1...@aws-amplify/api-graphql@2.2.2) (2021-09-04)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.2.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.2.0...@aws-amplify/api-graphql@2.2.1) (2021-09-02)

**Note:** Version bump only for package @aws-amplify/api-graphql

# [2.2.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.1.2...@aws-amplify/api-graphql@2.2.0) (2021-08-26)

### Features

- **@aws-amplify/api-graphql:** Add support for string 'authmode' values in TypeScript based apps ([#8799](https://github.com/aws-amplify/amplify-js/issues/8799)) ([f1dc4a2](https://github.com/aws-amplify/amplify-js/commit/f1dc4a24330bb41295621aaf47f6c4e26828fea5))

## [2.1.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.1.1...@aws-amplify/api-graphql@2.1.2) (2021-08-19)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.1.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.1.0...@aws-amplify/api-graphql@2.1.1) (2021-08-12)

**Note:** Version bump only for package @aws-amplify/api-graphql

# [2.1.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.0.7...@aws-amplify/api-graphql@2.1.0) (2021-07-28)

### Features

- **@aws-amplify/api:** support lambda authorizers ([aba3d2a](https://github.com/aws-amplify/amplify-js/commit/aba3d2aec7e7c9ad8701b345ab94d796b2bdb897))
- **@aws-amplify/datastore:** support lambda authorizers ([52d43cc](https://github.com/aws-amplify/amplify-js/commit/52d43cc73b459148f1ae81ab81d3a5365a4457e3))

## [2.0.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.0.6...@aws-amplify/api-graphql@2.0.7) (2021-07-22)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.0.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.0.5...@aws-amplify/api-graphql@2.0.6) (2021-07-16)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.0.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.0.4...@aws-amplify/api-graphql@2.0.5) (2021-07-08)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.0.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.0.3...@aws-amplify/api-graphql@2.0.4) (2021-06-24)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.0.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.0.2...@aws-amplify/api-graphql@2.0.3) (2021-06-18)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.0.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@2.0.1...@aws-amplify/api-graphql@2.0.2) (2021-06-10)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [2.0.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.3.2...@aws-amplify/api-graphql@2.0.1) (2021-05-26)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.3.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.3.1...@aws-amplify/api-graphql@1.3.2) (2021-05-14)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.3.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.3.0...@aws-amplify/api-graphql@1.3.1) (2021-05-11)

**Note:** Version bump only for package @aws-amplify/api-graphql

# [1.3.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.30...@aws-amplify/api-graphql@1.3.0) (2021-05-06)

### Features

- **@aws-amplify/datastore:** DataStore - Multi-Auth ([#8008](https://github.com/aws-amplify/amplify-js/issues/8008)) ([dedd564](https://github.com/aws-amplify/amplify-js/commit/dedd5641dfcfce209433088fe9570874cd810997))

## [1.2.30](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.29...@aws-amplify/api-graphql@1.2.30) (2021-04-15)

### Bug Fixes

- **@aws-amplify/datastore:** Retry mutation after GraphQL request timeout due to bad network condition. ([#6542](https://github.com/aws-amplify/amplify-js/issues/6542)) ([9fe6b7f](https://github.com/aws-amplify/amplify-js/commit/9fe6b7fa58aadb061a742b32c6a9cc1fd76dae6d))

## [1.2.29](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.28...@aws-amplify/api-graphql@1.2.29) (2021-03-25)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.2.28](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.27...@aws-amplify/api-graphql@1.2.28) (2021-03-18)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.2.27](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.26...@aws-amplify/api-graphql@1.2.27) (2021-03-12)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.2.26](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.25...@aws-amplify/api-graphql@1.2.26) (2021-03-08)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.2.25](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.24...@aws-amplify/api-graphql@1.2.25) (2021-03-03)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.2.24](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.23...@aws-amplify/api-graphql@1.2.24) (2021-02-25)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.2.23](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.22...@aws-amplify/api-graphql@1.2.23) (2021-02-18)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.2.22](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.21...@aws-amplify/api-graphql@1.2.22) (2021-02-15)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.2.21](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.20...@aws-amplify/api-graphql@1.2.21) (2021-02-09)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.2.20](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.19...@aws-amplify/api-graphql@1.2.20) (2021-02-03)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.2.19](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.18...@aws-amplify/api-graphql@1.2.19) (2021-02-01)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.2.18](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.17...@aws-amplify/api-graphql@1.2.18) (2021-01-29)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.2.17](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.16...@aws-amplify/api-graphql@1.2.17) (2021-01-07)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.2.16](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.15...@aws-amplify/api-graphql@1.2.16) (2020-12-17)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.2.15](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.14...@aws-amplify/api-graphql@1.2.15) (2020-12-10)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.2.14](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.13...@aws-amplify/api-graphql@1.2.14) (2020-11-30)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.2.13](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.12...@aws-amplify/api-graphql@1.2.13) (2020-11-23)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.2.12](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.11...@aws-amplify/api-graphql@1.2.12) (2020-11-20)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.2.11](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.10...@aws-amplify/api-graphql@1.2.11) (2020-11-13)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.2.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.9...@aws-amplify/api-graphql@1.2.10) (2020-11-03)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.2.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.8...@aws-amplify/api-graphql@1.2.9) (2020-10-31)

### Bug Fixes

- **amazon-cognito-identity-js:** update random implementation ([#7090](https://github.com/aws-amplify/amplify-js/issues/7090)) ([7048453](https://github.com/aws-amplify/amplify-js/commit/70484532da8a9953384b00b223b2b3ba0c0e845e))

## [1.2.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.7...@aws-amplify/api-graphql@1.2.8) (2020-10-29)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.2.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.6...@aws-amplify/api-graphql@1.2.7) (2020-10-15)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.2.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.5...@aws-amplify/api-graphql@1.2.6) (2020-10-01)

### Bug Fixes

- **@aws-amplify/datastore:** add token to currentAuthenticatedUser for OIDC ([#6858](https://github.com/aws-amplify/amplify-js/issues/6858)) ([61f7478](https://github.com/aws-amplify/amplify-js/commit/61f7478609fce7dd2f25c562aeb887d3f3db4a67))

## [1.2.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.4...@aws-amplify/api-graphql@1.2.5) (2020-09-25)

### Bug Fixes

- Add files with Amplify.register to sideEffects array ([#6867](https://github.com/aws-amplify/amplify-js/issues/6867)) ([58ddbf8](https://github.com/aws-amplify/amplify-js/commit/58ddbf8811e44695d97b6ab8be8f7cd2a2242921))

## [1.2.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.3...@aws-amplify/api-graphql@1.2.4) (2020-09-16)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.2.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.2...@aws-amplify/api-graphql@1.2.3) (2020-09-15)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.2.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.1...@aws-amplify/api-graphql@1.2.2) (2020-09-10)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.2.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.2.0...@aws-amplify/api-graphql@1.2.1) (2020-09-03)

**Note:** Version bump only for package @aws-amplify/api-graphql

# [1.2.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.1.7...@aws-amplify/api-graphql@1.2.0) (2020-09-03)

### Features

- **SSR:** withSSRContext ([#6146](https://github.com/aws-amplify/amplify-js/issues/6146)) ([1cb1afd](https://github.com/aws-amplify/amplify-js/commit/1cb1afd1e56135908dceb2ef6403f0b3e78067fe))

## [1.1.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.1.6...@aws-amplify/api-graphql@1.1.7) (2020-09-01)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.1.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.1.5...@aws-amplify/api-graphql@1.1.6) (2020-08-19)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.1.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.1.4...@aws-amplify/api-graphql@1.1.5) (2020-08-06)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.1.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.1.3...@aws-amplify/api-graphql@1.1.4) (2020-07-27)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.1.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.1.2...@aws-amplify/api-graphql@1.1.3) (2020-07-22)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.1.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.1.1...@aws-amplify/api-graphql@1.1.2) (2020-07-09)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.1.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.1.0...@aws-amplify/api-graphql@1.1.1) (2020-07-07)

**Note:** Version bump only for package @aws-amplify/api-graphql

# [1.1.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.0.18...@aws-amplify/api-graphql@1.1.0) (2020-06-18)

### Features

- Automatically handle clock drift/skew for API calls ([#5869](https://github.com/aws-amplify/amplify-js/issues/5869)) ([6218ff6](https://github.com/aws-amplify/amplify-js/commit/6218ff62269056f46d65760c3ec61baadb3742f4))

## [1.0.18](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.0.17...@aws-amplify/api-graphql@1.0.18) (2020-06-09)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.0.17](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.0.16...@aws-amplify/api-graphql@1.0.17) (2020-06-04)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.0.16](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.0.15...@aws-amplify/api-graphql@1.0.16) (2020-06-03)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.0.15](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.0.14...@aws-amplify/api-graphql@1.0.15) (2020-06-02)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.0.14](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.0.13...@aws-amplify/api-graphql@1.0.14) (2020-05-26)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.0.13](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.0.12...@aws-amplify/api-graphql@1.0.13) (2020-05-22)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.0.12](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.0.11...@aws-amplify/api-graphql@1.0.12) (2020-05-14)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.0.11](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.0.10...@aws-amplify/api-graphql@1.0.11) (2020-04-30)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.0.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.0.9...@aws-amplify/api-graphql@1.0.10) (2020-04-24)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.0.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.0.8...@aws-amplify/api-graphql@1.0.9) (2020-04-14)

### Bug Fixes

- **@aws-amplify/api-graphql:** Add missing @aws-amplify/pubsub… ([#5352](https://github.com/aws-amplify/amplify-js/issues/5352)) ([ffb6514](https://github.com/aws-amplify/amplify-js/commit/ffb6514ab2aa14e09d2aa0df0da110585b5a713f))

## [1.0.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.0.7...@aws-amplify/api-graphql@1.0.8) (2020-04-08)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.0.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.0.6...@aws-amplify/api-graphql@1.0.7) (2020-04-07)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.0.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.0.5...@aws-amplify/api-graphql@1.0.6) (2020-04-03)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.0.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.0.4...@aws-amplify/api-graphql@1.0.5) (2020-04-02)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.0.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.0.3...@aws-amplify/api-graphql@1.0.4) (2020-04-01)

**Note:** Version bump only for package @aws-amplify/api-graphql

## [1.0.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api-graphql@1.0.2...@aws-amplify/api-graphql@1.0.3) (2020-04-01)

**Note:** Version bump only for package @aws-amplify/api-graphql

## 1.0.2 (2020-03-31)

**Note:** Version bump only for package @aws-amplify/api-graphql

# Change Log
