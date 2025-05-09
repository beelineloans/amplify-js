# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 7.1.0 (2025-05-09)

### Features

- add host to config, use in connect, subscribe, publish ([e20c614](https://github.com/aws-amplify/amplify-js/commit/e20c6145632494532580007645c87e0b8e6c31e9))

# 7.0.0 (2025-05-09)

### Bug Fixes

- [#4311](https://github.com/aws-amplify/amplify-js/issues/4311) Update main entry field to point to CJS builds instead of webpack bundles ([#4678](https://github.com/aws-amplify/amplify-js/issues/4678)) ([54fbdf4](https://github.com/aws-amplify/amplify-js/commit/54fbdf4b1393567735fb7b5f4144db273f1a5f6a))
- **@aws-amplify/api-graphql:** Add missing @aws-amplify/pubsub… ([#5352](https://github.com/aws-amplify/amplify-js/issues/5352)) ([ffb6514](https://github.com/aws-amplify/amplify-js/commit/ffb6514ab2aa14e09d2aa0df0da110585b5a713f))
- **@aws-amplify/api-rest:** Improve Clock Drift/Skew Logic ([#8319](https://github.com/aws-amplify/amplify-js/issues/8319)) ([8448b4f](https://github.com/aws-amplify/amplify-js/commit/8448b4fe1f995f0d6056bcb46dd0fb2023fb197d))
- **@aws-amplify/auth:** [#3855](https://github.com/aws-amplify/amplify-js/issues/3855) add identityPoolRegion to core parser ([#3856](https://github.com/aws-amplify/amplify-js/issues/3856)) ([eb3ab44](https://github.com/aws-amplify/amplify-js/commit/eb3ab4409d7e1e06130095f29b76284d72612390))
- **@aws-amplify/auth:** No Auth module registered in Amplify ([#6811](https://github.com/aws-amplify/amplify-js/issues/6811)) ([cfa00d3](https://github.com/aws-amplify/amplify-js/commit/cfa00d32ce942faba72a8064173ba5fc9cba17bd))
- **@aws-amplify/auth:** switching unauthenticated users to authenticated users ([40cc22f](https://github.com/aws-amplify/amplify-js/commit/40cc22f8b332e4748c85504ca8e2ac2713fd87d1))
- **@aws-amplify/auth:** throw error when failed to sync items from AsyncStorage into Memory ([85c3f32](https://github.com/aws-amplify/amplify-js/commit/85c3f32c2939d11c32e6f129731723b8721637f0))
- **@aws-amplify/core, @aws-amplify/analytics:** Fix guest credentials without Auth module ([#10596](https://github.com/aws-amplify/amplify-js/issues/10596)) ([f12dbb2](https://github.com/aws-amplify/amplify-js/commit/f12dbb29ef575bb5d28d7788db458246107801d3))
- **@aws-amplify/core,@aws-amplify/auth:** Use identityPoolRegion param correctly ([#10709](https://github.com/aws-amplify/amplify-js/issues/10709)) ([b4d2769](https://github.com/aws-amplify/amplify-js/commit/b4d27695b3e196cd14b486b9a8db778c9951bc29)), closes [#6462](https://github.com/aws-amplify/amplify-js/issues/6462)
- **@aws-amplify/core:** add zen-observable dependency ([#4511](https://github.com/aws-amplify/amplify-js/issues/4511)) ([ada4518](https://github.com/aws-amplify/amplify-js/commit/ada451811e3e654ac6b620c86874978c8ec589cc))
- **@aws-amplify/core:** add zen-observable dependency ([#4511](https://github.com/aws-amplify/amplify-js/issues/4511)) ([8674120](https://github.com/aws-amplify/amplify-js/commit/867412030de57fd74078b609252de6f7f81ad331))
- **@aws-amplify/core:** Await for cache.setItem when setting federatedInfo ([8691c42](https://github.com/aws-amplify/amplify-js/commit/8691c42666c1d8160fa2f608a92c45fdf6a78bed)), closes [#3296](https://github.com/aws-amplify/amplify-js/issues/3296)
- **@aws-amplify/core:** bind console error to console ([d01062c](https://github.com/aws-amplify/amplify-js/commit/d01062c9195d0ccc1c5f97c970fed74ad2051310))
- **@aws-amplify/core:** check if window object exists for browser usage ([3596c9e](https://github.com/aws-amplify/amplify-js/commit/3596c9e47fe9c5167cf04b0fd10d29fefc3a8ddc))
- **@aws-amplify/core:** check if window.addListener is a function ([eaca33b](https://github.com/aws-amplify/amplify-js/commit/eaca33bbbe265f0e7bff353547229538228bda9a))
- **@aws-amplify/core:** Correctly log retry error object ([#5699](https://github.com/aws-amplify/amplify-js/issues/5699)) ([825ed73](https://github.com/aws-amplify/amplify-js/commit/825ed73218ae3074c536da2d3e444bb965506a97))
- **@aws-amplify/core:** directly return if input is null for function transferKeyToUpperCase/transferKeyToLowerCase ([1600cfb](https://github.com/aws-amplify/amplify-js/commit/1600cfb96f825c87773ca8ce83dc1d732a052920))
- **@aws-amplify/core:** Edge browser misidentified as Chrome ([#3807](https://github.com/aws-amplify/amplify-js/issues/3807)) ([302d95b](https://github.com/aws-amplify/amplify-js/commit/302d95b8c39894e59e8addf2670d20c2012784d1))
- **@aws-amplify/core:** error throwing and tests ([#8916](https://github.com/aws-amplify/amplify-js/issues/8916)) ([0918a07](https://github.com/aws-amplify/amplify-js/commit/0918a0741d1e90bc67cbfb10f3eb6ce719fee58e))
- **@aws-amplify/core:** expose tree-shaking for Webpack ([d1e5616](https://github.com/aws-amplify/amplify-js/commit/d1e561609e2f1098fc0f12aa2a2411042d7d4e12))
- **@aws-amplify/core:** fix aws-sdk version to 2.329.0 ([#1851](https://github.com/aws-amplify/amplify-js/issues/1851)) ([c6519e7](https://github.com/aws-amplify/amplify-js/commit/c6519e709c1a34cfbaa642f212f1344436061d6c))
- **@aws-amplify/core:** fix hub this binding issue ([#3002](https://github.com/aws-amplify/amplify-js/issues/3002)) ([8fba1a2](https://github.com/aws-amplify/amplify-js/commit/8fba1a22c8e464e66fad8b6444f3a72891feb85a))
- **@aws-amplify/core:** get new guest credentials if identity id isn't found ([#6618](https://github.com/aws-amplify/amplify-js/issues/6618)) ([7b904bf](https://github.com/aws-amplify/amplify-js/commit/7b904bf8647a39e5bdb683d9767aaba69ab932f3))
- **@aws-amplify/core:** guard for Symbol reference ([ac76a7f](https://github.com/aws-amplify/amplify-js/commit/ac76a7fa339f31604847d5799c0354a07ce11626))
- **@aws-amplify/core:** Include refreshToken in UniversalStorage for SSR ([#7374](https://github.com/aws-amplify/amplify-js/issues/7374)) ([1e0887b](https://github.com/aws-amplify/amplify-js/commit/1e0887bdc45e178f04229c888051ecf10d2bfabc))
- **@aws-amplify/core:** refresh manually after TTL has passed ([#7288](https://github.com/aws-amplify/amplify-js/issues/7288)) ([74b895c](https://github.com/aws-amplify/amplify-js/commit/74b895c45e629edc5ecf333e2769f222ae500834))
- **@aws-amplify/core:** remove the polyfill ([728bf20](https://github.com/aws-amplify/amplify-js/commit/728bf203bab835a5a9ca2ec230887d20faf83aa2))
- **@aws-amplify/core:** removed unused variables ([#3926](https://github.com/aws-amplify/amplify-js/issues/3926)) ([b63ac72](https://github.com/aws-amplify/amplify-js/commit/b63ac72ab2c3d5e9105885d3f7a4f1a346878c81))
- **@aws-amplify/core:** retry federation refresh token on network error ([#5728](https://github.com/aws-amplify/amplify-js/issues/5728)) ([bd07ee8](https://github.com/aws-amplify/amplify-js/commit/bd07ee8e8b987021e58b9c25d5e1ef524aa4abbc))
- **@aws-amplify/core:** Revert environment checks ([#4803](https://github.com/aws-amplify/amplify-js/issues/4803)) ([d92f3d8](https://github.com/aws-amplify/amplify-js/commit/d92f3d8df057c8dcb61a77b648bfc6d9efc2fd02)), closes [#4678](https://github.com/aws-amplify/amplify-js/issues/4678)
- **@aws-amplify/core:** storage, avoid to sync twice ([919c82a](https://github.com/aws-amplify/amplify-js/commit/919c82a5d724d2d83917c2fd51f235d529da6f6c))
- **@aws-amplify/core:** Support clock skew ([#4844](https://github.com/aws-amplify/amplify-js/issues/4844)) ([8156cc9](https://github.com/aws-amplify/amplify-js/commit/8156cc9c84713541c236e41a8928f03368052bef))
- **@aws-amplify/core:** use addEventListener for Reachability ([#7407](https://github.com/aws-amplify/amplify-js/issues/7407)) ([cd1db8f](https://github.com/aws-amplify/amplify-js/commit/cd1db8f99aa2499936792ddb8267a8a951603434))
- **@aws-amplify/core:** use empty string as translation ([#9403](https://github.com/aws-amplify/amplify-js/issues/9403)) ([512fd99](https://github.com/aws-amplify/amplify-js/commit/512fd99a0d6751ffc3915de6a043d2e6fe01f1e4))
- **@aws-amplify/core:** use existing methods to load localStorage ([3ec680d](https://github.com/aws-amplify/amplify-js/commit/3ec680ddd9caeedf2b737aaafbf2a083b7546bb8))
- **@aws-amplify/core:** Use undefined for default sequence token with CloudWatch logging ([#9181](https://github.com/aws-amplify/amplify-js/issues/9181)) ([6f217aa](https://github.com/aws-amplify/amplify-js/commit/6f217aa89e672fc4665816756994e6245b19227e))
- **@aws-amplify/datastore:** Allow partial subscriptions. ([#5968](https://github.com/aws-amplify/amplify-js/issues/5968)) ([3331e9a](https://github.com/aws-amplify/amplify-js/commit/3331e9a713b38bb672aca5dc667ecef30b8820ce))
- **@aws-amplify/datastore:** fix mutations to retry indefinitely on network error ([#9724](https://github.com/aws-amplify/amplify-js/issues/9724)) ([5371380](https://github.com/aws-amplify/amplify-js/commit/53713804b79df9c69ac29b75ffc576b4c2002507))
- **adapter-nextjs:** align with js-cookie on the client handling double encoded cookie names ([#12280](https://github.com/aws-amplify/amplify-js/issues/12280)) ([a08bf5c](https://github.com/aws-amplify/amplify-js/commit/a08bf5c80deade5dff10a80f7d2de653ee9f8319))
- **adapter:** fix the runWithAmplifyServerContext operation return type ([13f23a2](https://github.com/aws-amplify/amplify-js/commit/13f23a237446572c7d76370d77d7cb83adc32007))
- Add files with Amplify.register to sideEffects array ([#6867](https://github.com/aws-amplify/amplify-js/issues/6867)) ([58ddbf8](https://github.com/aws-amplify/amplify-js/commit/58ddbf8811e44695d97b6ab8be8f7cd2a2242921))
- Add upkeep to platform/framework caches ([#11505](https://github.com/aws-amplify/amplify-js/issues/11505)) ([03aa356](https://github.com/aws-amplify/amplify-js/commit/03aa3560e921f08717594bdf679b62501bc6de77))
- added expiration to ICredentials type ([6553676](https://github.com/aws-amplify/amplify-js/commit/6553676ae2f5add5705dedd1b66a7e19c064cee1))
- address feedbacks ([2d6eecf](https://github.com/aws-amplify/amplify-js/commit/2d6eecfa4763a6cfb6aeaabedd49a530c6420dcd))
- **amazon-cognito-identity-js:** update random implementation ([#7090](https://github.com/aws-amplify/amplify-js/issues/7090)) ([7048453](https://github.com/aws-amplify/amplify-js/commit/70484532da8a9953384b00b223b2b3ba0c0e845e))
- amplify configure with auth userGroups ([#14046](https://github.com/aws-amplify/amplify-js/issues/14046)) ([4278be2](https://github.com/aws-amplify/amplify-js/commit/4278be2b07374a98724e4d787891a36a2bf55c05))
- **amplifyConfig:** Amplify.configure.category should not allow empty object ([#12540](https://github.com/aws-amplify/amplify-js/issues/12540)) ([17ffbdd](https://github.com/aws-amplify/amplify-js/commit/17ffbdd7f49c38ea038f5aab5dd01c501f97c6b2))
- **analytics:** add options for configuring pinpoint event buffer ([#12521](https://github.com/aws-amplify/amplify-js/issues/12521)) ([5b52c3a](https://github.com/aws-amplify/amplify-js/commit/5b52c3a08e651577ced89a31c24615374630ee57))
- **analytics:** customize user-agent header for aws client ([#12187](https://github.com/aws-amplify/amplify-js/issues/12187)) ([c48e88a](https://github.com/aws-amplify/amplify-js/commit/c48e88acfa2162a6fdbe56e604a6e8646ea0b068))
- **api-graphql:** custom types support ([#12750](https://github.com/aws-amplify/amplify-js/issues/12750)) ([7d95fa1](https://github.com/aws-amplify/amplify-js/commit/7d95fa1c2cfdeef75e71a235dbfc616b44773d75))
- **api-graphql:** generate client.models has no properties ([#12935](https://github.com/aws-amplify/amplify-js/issues/12935)) ([5e30055](https://github.com/aws-amplify/amplify-js/commit/5e30055971598cb4972a5c913af906e86c16cd3f))
- api/enable ts strict ([#12560](https://github.com/aws-amplify/amplify-js/issues/12560)) ([92789fb](https://github.com/aws-amplify/amplify-js/commit/92789fbb94f19d91f38fb1d90578160666901d0b))
- **auth:** add deprecated signInDetails type to AuthTokens type ([#12981](https://github.com/aws-amplify/amplify-js/issues/12981)) ([b758843](https://github.com/aws-amplify/amplify-js/commit/b758843635c9abeb6348723e48852c3a58af569e))
- **auth:** bug fixes for credentialsProvider ([#11814](https://github.com/aws-amplify/amplify-js/issues/11814)) ([ed8aa8d](https://github.com/aws-amplify/amplify-js/commit/ed8aa8d6d28e960d5c6ceb873c86df0bf5b6aa8d))
- **auth:** clear out identityId as well when clearing credentials for sign out ([#11908](https://github.com/aws-amplify/amplify-js/issues/11908)) ([6fd4a4f](https://github.com/aws-amplify/amplify-js/commit/6fd4a4f5997dd2e2e14bf710bc159b9dc2759f36))
- **auth:** dispatch signInWithRedirect error ([#12653](https://github.com/aws-amplify/amplify-js/issues/12653)) ([271546d](https://github.com/aws-amplify/amplify-js/commit/271546de73cbbc8958ccd107a30bd5465ed01740))
- **auth:** fall back to user agent if deviceName resolves to empty st… ([#14102](https://github.com/aws-amplify/amplify-js/issues/14102)) ([9a73470](https://github.com/aws-amplify/amplify-js/commit/9a73470be85b6056939631d86cf87d502728fb5c))
- **auth:** guest credentials obtained only if isMandatorySignIn is false ([#11895](https://github.com/aws-amplify/amplify-js/issues/11895)) ([5d33293](https://github.com/aws-amplify/amplify-js/commit/5d332931f0922c481b8007db636f3e07d07c119e))
- **auth:** improve error handling while refreshing auth tokens ([#12802](https://github.com/aws-amplify/amplify-js/issues/12802)) ([d0911f5](https://github.com/aws-amplify/amplify-js/commit/d0911f5f9108f224627491738c2eb7461af0639c))
- **auth:** vend the helpful types for custom providers ([#12497](https://github.com/aws-amplify/amplify-js/issues/12497)) ([875e28a](https://github.com/aws-amplify/amplify-js/commit/875e28aeca78b65cc391d82226eba58910978866))
- **aws-amplify-angular:** Angular rollup ([#1441](https://github.com/aws-amplify/amplify-js/issues/1441)) ([eb84e01](https://github.com/aws-amplify/amplify-js/commit/eb84e012397b8ba4ef93083da7ccc52e1b3d39fb))
- **aws-amplify:** createKeyValueStorageFromCookieStorageAdapter misses default path and secure values ([#13508](https://github.com/aws-amplify/amplify-js/issues/13508)) ([60a559f](https://github.com/aws-amplify/amplify-js/commit/60a559f612e092c76e1499f93547248312db46f2))
- **aws-amplify:** manual version bumps for lerna issue ([9ce5a72](https://github.com/aws-amplify/amplify-js/commit/9ce5a720a659ee01857feadc12f169fdc1c8cbaa))
- **aws-amplify:** set correct expires value to the client cookie store ([fad9e6d](https://github.com/aws-amplify/amplify-js/commit/fad9e6d32c4cd82f3179ae0c0f8584ded2736ecd))
- **aws-amplify:** update the version of aws-sdk to latest ([482402d](https://github.com/aws-amplify/amplify-js/commit/482402dbb7882279c48cd68387a35ec2c4eda5bd))
- **aws-amplify:** use method get instead of getPromise for credentials ([f15d74f](https://github.com/aws-amplify/amplify-js/commit/f15d74f32c5ec90a3bc11f9f4f405f019e6bd013))
- bump package version ([c5ab404](https://github.com/aws-amplify/amplify-js/commit/c5ab40454c22b91fd54a293831e88c4bb9ae45ee))
- Bunde size checks for core ([2b58e02](https://github.com/aws-amplify/amplify-js/commit/2b58e02d02332a3e0b442fcbd955aec1b9f2e05c))
- Bundle size adjustment ([f71d173](https://github.com/aws-amplify/amplify-js/commit/f71d173ecc73a5ef3f08f4b2a60805a7652fdbfb))
- **cache:** export correct module for RN ([#4786](https://github.com/aws-amplify/amplify-js/issues/4786)) ([a15730c](https://github.com/aws-amplify/amplify-js/commit/a15730cc50692d9d31a0f586c3544b3dcdbea659))
- Check for OAuth URLs before splitting ([#12469](https://github.com/aws-amplify/amplify-js/issues/12469)) ([b63359a](https://github.com/aws-amplify/amplify-js/commit/b63359a0acd1c8266161e2816ac56753b2746f12))
- **client:** correct clock skew from any response ([#11503](https://github.com/aws-amplify/amplify-js/issues/11503)) ([c1fa9c7](https://github.com/aws-amplify/amplify-js/commit/c1fa9c7363ca911dbd336c26478b39345de14a72))
- **clients:** add missing export for getHashedPayload in RN ([#11528](https://github.com/aws-amplify/amplify-js/issues/11528)) ([b24b336](https://github.com/aws-amplify/amplify-js/commit/b24b33610b804870e17564917d93bb6f795453a0))
- **clients:** add react-native entrypoint for internal modules ([c1535dd](https://github.com/aws-amplify/amplify-js/commit/c1535ddbfb198dc669e8a00eda52323975b37dc6))
- **clients:** middleware chain revert after every invocation ([#11432](https://github.com/aws-amplify/amplify-js/issues/11432)) ([f576be5](https://github.com/aws-amplify/amplify-js/commit/f576be5ad4fd3e6625d5bc555fa8cbd4e1783f06))
- Codescanning alerts ([#11159](https://github.com/aws-amplify/amplify-js/issues/11159)) ([b19e0ba](https://github.com/aws-amplify/amplify-js/commit/b19e0bab948d995b70fb98ad5d935483b3e15d8d))
- **core, auth, aws-amplify-react:** fix tests ([bdd162c](https://github.com/aws-amplify/amplify-js/commit/bdd162c2dd03488168a299f8dd8c554f76ca8a12))
- **core:** adapter-core: make SetCookieOptions fields optional ([#12658](https://github.com/aws-amplify/amplify-js/issues/12658)) ([ef20ad8](https://github.com/aws-amplify/amplify-js/commit/ef20ad8280421400d3e94ca004c93f4f7b166953))
- **core:** add @types/node-fetch to runtime dependency ([#11560](https://github.com/aws-amplify/amplify-js/issues/11560)) ([0dab406](https://github.com/aws-amplify/amplify-js/commit/0dab4066d1c65251be62d442f4fba99dda1168fa))
- **core:** add cache-control header to cognito identity client ([#10753](https://github.com/aws-amplify/amplify-js/issues/10753)) ([dfbabaf](https://github.com/aws-amplify/amplify-js/commit/dfbabaf54dda902f1f77c4501e78f49e6a9397af))
- **core:** add Partial back to AmplifyOutputs groups and paths ([#14265](https://github.com/aws-amplify/amplify-js/issues/14265)) ([0580740](https://github.com/aws-amplify/amplify-js/commit/0580740b0f19fd20fe03a6c8ee8f5a8c6cd91a37)), closes [#14101](https://github.com/aws-amplify/amplify-js/issues/14101)
- **core:** add URL polyfill for signer in react native ([#11362](https://github.com/aws-amplify/amplify-js/issues/11362)) ([720ac60](https://github.com/aws-amplify/amplify-js/commit/720ac606dede7d243f3d5ce08395fc6387a6f35d))
- **core:** allow credentials to be called without token provider and no guest mode ([#12012](https://github.com/aws-amplify/amplify-js/issues/12012)) ([31f1067](https://github.com/aws-amplify/amplify-js/commit/31f1067e4e1c46a2d35a4625e117bb5773dddf59))
- **core:** Always set login methods when parsing Gen2 config files ([#13315](https://github.com/aws-amplify/amplify-js/issues/13315)) ([f65cae2](https://github.com/aws-amplify/amplify-js/commit/f65cae2c0e288bec0d43fd1826dd224b4aa30a69))
- **core:** amplify configure with storage path type issue ([#14088](https://github.com/aws-amplify/amplify-js/issues/14088)) ([0ecded1](https://github.com/aws-amplify/amplify-js/commit/0ecded15a4d1318fe10b16dbe534a111a12bdc21))
- **core:** Amplify.configure dispatches Hub event with unparsed config object ([#12930](https://github.com/aws-amplify/amplify-js/issues/12930)) ([d16cf14](https://github.com/aws-amplify/amplify-js/commit/d16cf1433cfedc447d2db33eb45b1080f5fc4dda))
- **core:** Angular web detection and other minor changes ([#11491](https://github.com/aws-amplify/amplify-js/issues/11491)) ([c0cb9b9](https://github.com/aws-amplify/amplify-js/commit/c0cb9b9795c1a3343bb9460c61f12500211f8442))
- **core:** build in CookieSerializeOptions def ([#14213](https://github.com/aws-amplify/amplify-js/issues/14213)) ([406157d](https://github.com/aws-amplify/amplify-js/commit/406157df09ea25a8b3d4d42ee65104cde8886fe9))
- **core:** bump SDK verion to gamma.2 ([#5909](https://github.com/aws-amplify/amplify-js/issues/5909)) ([3bd2d25](https://github.com/aws-amplify/amplify-js/commit/3bd2d2509c2db59cffd7ac81c08ac4f9ef298198))
- **core:** bundle react-native-url-polyfill to unblock jest test failure ([#11422](https://github.com/aws-amplify/amplify-js/issues/11422)) ([8137ee7](https://github.com/aws-amplify/amplify-js/commit/8137ee79ef2121ceaa6dfa1d9ce675370b38e26b))
- **core:** change userPoolClientId to userPoolId in assertion ([#12163](https://github.com/aws-amplify/amplify-js/issues/12163)) ([55fede4](https://github.com/aws-amplify/amplify-js/commit/55fede432fbffb1e97d07e2c806c5140f0d941f1))
- **core:** Check for storage initialization errors ([#13938](https://github.com/aws-amplify/amplify-js/issues/13938)) ([0f50917](https://github.com/aws-amplify/amplify-js/commit/0f5091780046b9556b98300c29fb970a0358bd70))
- **core:** disable type to accept empty config for analytics ([#12426](https://github.com/aws-amplify/amplify-js/issues/12426)) ([9277184](https://github.com/aws-amplify/amplify-js/commit/9277184fb1e94112969606be2fe7d5a589bfe35f))
- **core:** eslint migration caused wrong CustomScope type ([#13013](https://github.com/aws-amplify/amplify-js/issues/13013)) ([3d2803e](https://github.com/aws-amplify/amplify-js/commit/3d2803eb859c37e52f1dc9459b79d628e0377d2e))
- **core:** fail to clean up framework observers ([233bd08](https://github.com/aws-amplify/amplify-js/commit/233bd0806c92788a835fe60f37ec4e613064cffc))
- **core:** fixed cache.clear() not working as expected ([#13926](https://github.com/aws-amplify/amplify-js/issues/13926)) ([60de524](https://github.com/aws-amplify/amplify-js/commit/60de5246910486cdfaf5dc23b19668cdfd5892e6))
- **core:** give ampilfyUuid clear type info ([#12388](https://github.com/aws-amplify/amplify-js/issues/12388)) ([fdb6732](https://github.com/aws-amplify/amplify-js/commit/fdb673215051ca2af0f6ff3b4b321fe3e7c1c1f7))
- **core:** make AmplifyOutputs category types as unknown ([#14153](https://github.com/aws-amplify/amplify-js/issues/14153)) ([5dbfbf3](https://github.com/aws-amplify/amplify-js/commit/5dbfbf3f83799b7691fa4d51a61726326a22f1e5))
- **core:** make TokenProvider.getTokens parameter optional ([ba05e9a](https://github.com/aws-amplify/amplify-js/commit/ba05e9a2bb4543ddbd3025cbd7624f3e3450554e))
- **core:** move react-native dependency from dev ([fedf0b3](https://github.com/aws-amplify/amplify-js/commit/fedf0b331cb8e2263f0c7b7ae57bac5d8f69c888))
- **core:** parse empty oauth param ([#11999](https://github.com/aws-amplify/amplify-js/issues/11999)) ([54730e2](https://github.com/aws-amplify/amplify-js/commit/54730e2ad2ec673f5effd2f673424bca8517e1c8))
- **core:** Remove unneeded Hub.dispatch and Hub.listen ([#2919](https://github.com/aws-amplify/amplify-js/issues/2919)) ([aea7fa9](https://github.com/aws-amplify/amplify-js/commit/aea7fa939d39095ab35f6bb3e1eaf8d16e9f040e)), closes [#2623](https://github.com/aws-amplify/amplify-js/issues/2623)
- **core:** remove used symbol and remove usage of Symbol.for ([0960fdd](https://github.com/aws-amplify/amplify-js/commit/0960fdde3b302b19dc7390d20ae63211d81feebb))
- **core:** revert dep addition. Add to peer and devDeps ([b2a22e5](https://github.com/aws-amplify/amplify-js/commit/b2a22e53532663328b200761ce1ecf35495acbd1))
- **core:** undefined window bug with setItem on server ([#10871](https://github.com/aws-amplify/amplify-js/issues/10871)) ([9713a81](https://github.com/aws-amplify/amplify-js/commit/9713a81957733547102ad609464ecd69406ec45e))
- **core:** update AWSCredentialsAndIdentityIdProvider interface to ma… ([#11931](https://github.com/aws-amplify/amplify-js/issues/11931)) ([43a770b](https://github.com/aws-amplify/amplify-js/commit/43a770b34e3b587b8c5f059fdc09ff95783c10ec))
- **data:** fix library configuration options headers for subscriptions ([#12590](https://github.com/aws-amplify/amplify-js/issues/12590)) ([#12659](https://github.com/aws-amplify/amplify-js/issues/12659)) ([e101cea](https://github.com/aws-amplify/amplify-js/commit/e101ceac6a901e240d574e30909ca4409fe91357))
- **datastore:** crypto random numbers for ulid factory ([#12435](https://github.com/aws-amplify/amplify-js/issues/12435)) ([f405448](https://github.com/aws-amplify/amplify-js/commit/f405448e81a252e5f377d935a9f8d9d5c1532047))
- **deps:** fix more implicit deps and add linting ([#14137](https://github.com/aws-amplify/amplify-js/issues/14137)) ([22ca811](https://github.com/aws-amplify/amplify-js/commit/22ca811743f6729d3a00dd71726ff6b5afb44b53))
- determine timeoutid type based on return type of setTimeout ([#12641](https://github.com/aws-amplify/amplify-js/issues/12641)) ([e2c5b57](https://github.com/aws-amplify/amplify-js/commit/e2c5b5738e3747676a17c20a18d7d0d400a08fd1))
- Fix SSR & AmplifyOutput types when using Gen2 configuration files ([#13247](https://github.com/aws-amplify/amplify-js/issues/13247)) ([f797dc5](https://github.com/aws-amplify/amplify-js/commit/f797dc539f57a55a325b227d8205813b122d7789))
- **geo:** update amplify config geo schema ([#13290](https://github.com/aws-amplify/amplify-js/issues/13290)) ([3cca682](https://github.com/aws-amplify/amplify-js/commit/3cca6822ad4b76ab8966654923363635d92587f0))
- i18n default language resolution ([#12786](https://github.com/aws-amplify/amplify-js/issues/12786)) ([05d73ab](https://github.com/aws-amplify/amplify-js/commit/05d73abd21aa5682c2c73298195904af5363ea20))
- Lambda auth config value ([#12922](https://github.com/aws-amplify/amplify-js/issues/12922)) ([b728a72](https://github.com/aws-amplify/amplify-js/commit/b728a72700decefc74f541d4fca29bdf8c1310e2))
- Lower `tslib` version to improve dependency flattening ([#10588](https://github.com/aws-amplify/amplify-js/issues/10588)) ([a48a17b](https://github.com/aws-amplify/amplify-js/commit/a48a17b1b6adaf09305e338869129b4f7c380fc9))
- Make Reachability node safe ([#12335](https://github.com/aws-amplify/amplify-js/issues/12335)) ([cb0d401](https://github.com/aws-amplify/amplify-js/commit/cb0d401668b87df7cffdc514af36842ab01cd5b6))
- **message overrides:** extract message content with Platform-Specific Overrides ([#12917](https://github.com/aws-amplify/amplify-js/issues/12917)) ([cb91437](https://github.com/aws-amplify/amplify-js/commit/cb914374263262c84c6337dddca1f17fb7dd204a))
- not appending notification configs ([cb7040f](https://github.com/aws-amplify/amplify-js/commit/cb7040fe58a9f2fdc82dd224a91471cc7ea0b4f2))
- pin async storage to 1.15.17 ([#9570](https://github.com/aws-amplify/amplify-js/issues/9570)) ([bc5235a](https://github.com/aws-amplify/amplify-js/commit/bc5235ac0d15242f7a13457f40999b5331823395))
- Pinpoint analytics stopSession event ([422806e](https://github.com/aws-amplify/amplify-js/commit/422806e58525490b0fec28055a818024f2681769)), closes [#3786](https://github.com/aws-amplify/amplify-js/issues/3786) [#3042](https://github.com/aws-amplify/amplify-js/issues/3042)
- Pinpoint session generation ([#12407](https://github.com/aws-amplify/amplify-js/issues/12407)) ([dae7b27](https://github.com/aws-amplify/amplify-js/commit/dae7b27bc52f88c40a556cdf25836b64d38514a5))
- Prevent creating multiple endpoint ids ([a75ae7b](https://github.com/aws-amplify/amplify-js/commit/a75ae7b2d648ea45ad1fa9332ee95a00ba0d1d3b))
- Prevent overwriting with fallbacks when updating endpoint ([#13330](https://github.com/aws-amplify/amplify-js/issues/13330)) ([d7b837e](https://github.com/aws-amplify/amplify-js/commit/d7b837edba0dff209fb4a596fcb4531ce0a66e21))
- PubSub - Resolve ts strict errors in the AWSAppSyncRealTimeProvider ([#9731](https://github.com/aws-amplify/amplify-js/issues/9731)) ([0c9c401](https://github.com/aws-amplify/amplify-js/commit/0c9c4018573df31f7e4739207be22eefb8bf8a56))
- React detection and Analytics batch upload ([#11478](https://github.com/aws-amplify/amplify-js/issues/11478)) ([f2b1740](https://github.com/aws-amplify/amplify-js/commit/f2b1740d6ea2b0b25397a02da7f9e6669768b3d7))
- Recreate Analytics clients when credentials change ([#12789](https://github.com/aws-amplify/amplify-js/issues/12789)) ([1bcbae4](https://github.com/aws-amplify/amplify-js/commit/1bcbae432d054ef6b19d8086375f040e6edbfccf))
- remove Cognito Identity Id from storage on SignIn/SignOut ([#8278](https://github.com/aws-amplify/amplify-js/issues/8278)) ([ef358a7](https://github.com/aws-amplify/amplify-js/commit/ef358a761cf74d16b61172cd1a75b4bc6cfd2bdf))
- remove RN-specific peerDeps to correctly hoist core in npm@7 ([#8368](https://github.com/aws-amplify/amplify-js/issues/8368)) ([9cc5218](https://github.com/aws-amplify/amplify-js/commit/9cc52186e687d6782b41581959380bd7f534e5d2))
- Remove unused dependency ([#11524](https://github.com/aws-amplify/amplify-js/issues/11524)) ([aaf73d8](https://github.com/aws-amplify/amplify-js/commit/aaf73d8e0ddb8157d3ee2dac1f6706120b91224a))
- **retry:** add metadata to returns from retry middldeware ([#11212](https://github.com/aws-amplify/amplify-js/issues/11212)) ([7fc0540](https://github.com/aws-amplify/amplify-js/commit/7fc0540a44ffe4b70320996b0142ed18d6365303))
- Rollback the manual major version changes and change release command to increment the major versions ([#10638](https://github.com/aws-amplify/amplify-js/issues/10638)) ([660e5d9](https://github.com/aws-amplify/amplify-js/commit/660e5d9e7f18c514dc3c88322a1df6b5d5a5e796))
- Run ts coverage check with test ([#11047](https://github.com/aws-amplify/amplify-js/issues/11047)) ([430bedf](https://github.com/aws-amplify/amplify-js/commit/430bedfd0d0618bd0093b488233521356feef787))
- **s3:** add missing default content-type & support body.text() in RN & optimize retry ([#11537](https://github.com/aws-amplify/amplify-js/issues/11537)) ([33d858d](https://github.com/aws-amplify/amplify-js/commit/33d858d8d0ea112822e8b8289fc15761a053301d))
- session cookies when SSR config enabled ([#10831](https://github.com/aws-amplify/amplify-js/issues/10831)) ([d34c01a](https://github.com/aws-amplify/amplify-js/commit/d34c01aa04599508e9473d128779bc8212343ece))
- Social providers not getting included in configuration ([#12369](https://github.com/aws-amplify/amplify-js/issues/12369)) ([961a3b3](https://github.com/aws-amplify/amplify-js/commit/961a3b301745c5deca9d86def19935057e28a3ed))
- Storage action enum update ([82a96c9](https://github.com/aws-amplify/amplify-js/commit/82a96c9804797891a2b604ae3d6c82ea48f0a18c))
- **storage:** Add getProperties user agent action ([#11501](https://github.com/aws-amplify/amplify-js/issues/11501)) ([019b5b1](https://github.com/aws-amplify/amplify-js/commit/019b5b1115bebc92f2c44bbf285d1d916cb08492))
- **storage:** address actionable TODOs ([#12414](https://github.com/aws-amplify/amplify-js/issues/12414)) ([20e9a79](https://github.com/aws-amplify/amplify-js/commit/20e9a799c8260f61a4b4d7d637b67f5d0e427322))
- **storage:** custom client base64 encoded SSE-C headers ([#11567](https://github.com/aws-amplify/amplify-js/issues/11567)) ([ee19046](https://github.com/aws-amplify/amplify-js/commit/ee190460c01250b693c163f83be412abf3acc234))
- Type error in I18n utility. ([#12146](https://github.com/aws-amplify/amplify-js/issues/12146)) ([ebb44c7](https://github.com/aws-amplify/amplify-js/commit/ebb44c73db27d39dd5a5de10e2de793c6991ea48))
- Update `isReactNative` check to consider Expo as well ([#11555](https://github.com/aws-amplify/amplify-js/issues/11555)) ([60f7d3d](https://github.com/aws-amplify/amplify-js/commit/60f7d3d1b91ebe5fd80a4002c9c7f0db36d2f181))
- Update getAmplifyUserAgent to retain original interface ([#11535](https://github.com/aws-amplify/amplify-js/issues/11535)) ([dc84cc8](https://github.com/aws-amplify/amplify-js/commit/dc84cc8bfa7811b5f4f8ac2f7e5ea1b5edc54fe1))
- update parseAWSExports to return the expected shape of userAttributes ([#12654](https://github.com/aws-amplify/amplify-js/issues/12654)) ([3340588](https://github.com/aws-amplify/amplify-js/commit/3340588687df5dcfa08ae71e4807d054c9e9f13f))
- Update useragent string with npm version ([#13903](https://github.com/aws-amplify/amplify-js/issues/13903)) ([541e463](https://github.com/aws-amplify/amplify-js/commit/541e46347ba10cd1cfc0bf080c9a45281cf0be4e))
- Wait for endpoint creation to identify user ([#13353](https://github.com/aws-amplify/amplify-js/issues/13353)) ([f17cdf0](https://github.com/aws-amplify/amplify-js/commit/f17cdf0077387ee275bea245632f1a9b88089e1e))

- chore!: Upgrade to @react-native-async-storage/async-storage (#8250) ([1de4853](https://github.com/aws-amplify/amplify-js/commit/1de48531b68e3c53c3b7dbf4487da4578cb79888)), closes [#8250](https://github.com/aws-amplify/amplify-js/issues/8250)

### Features

- **@aws-amplify/auth:** Auto sign in after sign up ([#10126](https://github.com/aws-amplify/amplify-js/issues/10126)) ([e54617f](https://github.com/aws-amplify/amplify-js/commit/e54617f2878244f0e391d2d49f5cd2e8a8c069f9)), closes [#6320](https://github.com/aws-amplify/amplify-js/issues/6320) [#3882](https://github.com/aws-amplify/amplify-js/issues/3882) [#3631](https://github.com/aws-amplify/amplify-js/issues/3631) [#6018](https://github.com/aws-amplify/amplify-js/issues/6018)
- **@aws-amplify/core:** [Delivers [#168673137](https://github.com/aws-amplify/amplify-js/issues/168673137)] Migrate core category to aws sdk V3 ([#4077](https://github.com/aws-amplify/amplify-js/issues/4077)) ([beb73a4](https://github.com/aws-amplify/amplify-js/commit/beb73a4b1c051654750f5bdc3b20cde3a3aba37d))
- **@aws-amplify/core:** add ui protected channel ([#9554](https://github.com/aws-amplify/amplify-js/issues/9554)) ([86e07fc](https://github.com/aws-amplify/amplify-js/commit/86e07fcd3ebbaa5f03d65ed8009b7531ee300e39))
- **@aws-amplify/core:** add worker support to reachability ([#6956](https://github.com/aws-amplify/amplify-js/issues/6956)) ([ebb20c1](https://github.com/aws-amplify/amplify-js/commit/ebb20c1c970eea5dc32288f4dfda9c2cc959ac10))
- **@aws-amplify/core:** publish ES2015/ESM artifacts ([d73d5e1](https://github.com/aws-amplify/amplify-js/commit/d73d5e14b5e6a46b36dc00045029693a229046d4))
- **@aws-amplify/core:** Throw Error if body attribute passed to Sign… ([#10137](https://github.com/aws-amplify/amplify-js/issues/10137)) ([360bde2](https://github.com/aws-amplify/amplify-js/commit/360bde20716778b69af339f4f66b42c05ccf4639))
- **@aws-amplify/datastore:** add Selective Sync ([#7001](https://github.com/aws-amplify/amplify-js/issues/7001)) ([8fa348b](https://github.com/aws-amplify/amplify-js/commit/8fa348b8ba708434992d97557b0fceebbf7abe9a))
- **@aws-amplify/datastore:** Make DataStore available in aws-amplify… ([#5202](https://github.com/aws-amplify/amplify-js/issues/5202)) ([c9c020d](https://github.com/aws-amplify/amplify-js/commit/c9c020d6d13c5678ce15c738f7eaebec39e2b48a))
- **@aws-amplify/datastore:** support indexeddb adapter on web worker ([#6874](https://github.com/aws-amplify/amplify-js/issues/6874)) ([e43e181](https://github.com/aws-amplify/amplify-js/commit/e43e18195ca201fa61bd0dfb1b18c06c3262f825))
- **@aws-amplify/datastore:** Sync Status Notification. Performance Improvements. ([#5942](https://github.com/aws-amplify/amplify-js/issues/5942)) ([67fac50](https://github.com/aws-amplify/amplify-js/commit/67fac50cd734338ac76797d06111fc5ca911bd48))
- **@aws-amplify/ui-components:** I18n Support ([#4979](https://github.com/aws-amplify/amplify-js/issues/4979)) ([6f3e37c](https://github.com/aws-amplify/amplify-js/commit/6f3e37cf1d764455475bc4aee689bd3fbe71dd3e))
- **@aws-amplify/ui-components:** User agent tracking for UI component packages ([#4804](https://github.com/aws-amplify/amplify-js/issues/4804)) ([15a0a2f](https://github.com/aws-amplify/amplify-js/commit/15a0a2fadeb96543721a6733faeb509efc26e1e2))
- add a typescript coverage report mechanism ([#10551](https://github.com/aws-amplify/amplify-js/issues/10551)) ([8e8df55](https://github.com/aws-amplify/amplify-js/commit/8e8df55b449f8bae2fe962fe282613d1b818cc5a)), closes [#10379](https://github.com/aws-amplify/amplify-js/issues/10379)
- Add custom user agent enhancements for Predictions ([#11437](https://github.com/aws-amplify/amplify-js/issues/11437)) ([424e9d4](https://github.com/aws-amplify/amplify-js/commit/424e9d46c9b218401472123c0c0d5cd240afe00d))
- add data-schema client ([#12552](https://github.com/aws-amplify/amplify-js/issues/12552)) ([922eb86](https://github.com/aws-amplify/amplify-js/commit/922eb86d030a6b50d05da2191a6d6c8f3b40dcdd))
- add host to config, use in connect, subscribe, publish ([cb412e5](https://github.com/aws-amplify/amplify-js/commit/cb412e55356d9ae11130c817ce24c0769aca4fdc))
- Add support for local testing of api and storage ([#3806](https://github.com/aws-amplify/amplify-js/issues/3806)) ([4390e8e](https://github.com/aws-amplify/amplify-js/commit/4390e8edd24027af42ce4717ec116af8ddb9b2fc))
- Added additional Auth config fields & ability to override Cognito endpoint. ([#12236](https://github.com/aws-amplify/amplify-js/issues/12236)) ([6060984](https://github.com/aws-amplify/amplify-js/commit/606098437021ff03363009094dd79f84fe96f1dc))
- Added internal APIs for setting custom User Agent state ([#12249](https://github.com/aws-amplify/amplify-js/issues/12249)) ([db28490](https://github.com/aws-amplify/amplify-js/commit/db28490b9977e61be452863673fb2ca26cb0c7ac))
- added log queue and size safety to cloudwatch provider ([ae2f198](https://github.com/aws-amplify/amplify-js/commit/ae2f198b1e96c232f52f4ce9d613c4f3d94a0718))
- Added Prettier formatting ([4dfd9aa](https://github.com/aws-amplify/amplify-js/commit/4dfd9aa9ab900307c9d17c68448a6ca4aa08fd5a))
- adding more methods to the cloudwatchlogger ([263c637](https://github.com/aws-amplify/amplify-js/commit/263c6376fffd48e9c080aab8141d55cd6e31d135))
- **analtics:** add flushEvents for service provider Pinpoint ([#12183](https://github.com/aws-amplify/amplify-js/issues/12183)) ([3e7c526](https://github.com/aws-amplify/amplify-js/commit/3e7c5261ae31645ebb203d3ecf1b0247403c7846))
- **analytics:** add record API for Analytics service provider Personalize ([#12151](https://github.com/aws-amplify/amplify-js/issues/12151)) ([a2c4621](https://github.com/aws-amplify/amplify-js/commit/a2c4621c7c2871f757de1c11fd22428047a9ab8a))
- **analytics:** add record api for kinesis service provider ([#12099](https://github.com/aws-amplify/amplify-js/issues/12099)) ([21f0bac](https://github.com/aws-amplify/amplify-js/commit/21f0bac721435e483cfc14ddae10c183319d04b4))
- **analytics:** add record API for service provider kinesis firehose ([#12148](https://github.com/aws-amplify/amplify-js/issues/12148)) ([ad0ce0c](https://github.com/aws-amplify/amplify-js/commit/ad0ce0c1b2c1f659e36de2c417910f87926424a6))
- **analytics:** Add reporting for updateEndpoint ([#11468](https://github.com/aws-amplify/amplify-js/issues/11468)) ([663a5ed](https://github.com/aws-amplify/amplify-js/commit/663a5ed1835d87911c21a42e34b1d2f0a2829bbd))
- **analytics:** Allow sending batch events ([#4377](https://github.com/aws-amplify/amplify-js/issues/4377)) ([6e7d693](https://github.com/aws-amplify/amplify-js/commit/6e7d69337d8fe8295f03d4d0441576cffb2a21f9))
- **analytics:** Use custom user agent in all Analytics providers ([#11410](https://github.com/aws-amplify/amplify-js/issues/11410)) ([9fe4a5e](https://github.com/aws-amplify/amplify-js/commit/9fe4a5e43a7d671e76375833f9ce44b60bac05d7))
- **api-graphql:** add `.enums` property to the GQL client ([#12980](https://github.com/aws-amplify/amplify-js/issues/12980)) ([5c56101](https://github.com/aws-amplify/amplify-js/commit/5c561018aedcff314e68b3dd385fe9bd9ff93150))
- **api-graphql:** add model index query support ([#12967](https://github.com/aws-amplify/amplify-js/issues/12967)) ([0d398a4](https://github.com/aws-amplify/amplify-js/commit/0d398a4dd5ee01fb8d7a723b6410bb481168fa41))
- **api-graphql:** alias authMode identityPool -> iam ([#13299](https://github.com/aws-amplify/amplify-js/issues/13299)) ([a5d176b](https://github.com/aws-amplify/amplify-js/commit/a5d176b3c9ec1cecd265740e8b4579327ef98e1f))
- **api-graphql:** custom subscriptions ([#13154](https://github.com/aws-amplify/amplify-js/issues/13154)) ([2b71e29](https://github.com/aws-amplify/amplify-js/commit/2b71e29d50204f037b1dae2007291c54d1ec8c19))
- **api-graphql:** pass authToken via subprotocol ([#13727](https://github.com/aws-amplify/amplify-js/issues/13727)) ([ced891c](https://github.com/aws-amplify/amplify-js/commit/ced891c2e4f6b0f1fdeaf44ab80cae9d585b6d15))
- **api-rest:** configurable retry behavior ([#14303](https://github.com/aws-amplify/amplify-js/issues/14303)) ([65207a6](https://github.com/aws-amplify/amplify-js/commit/65207a668cf66f07932b7f89f38651cbb84b8187))
- **api-rest:** internal API handling GraphQL requests ([#12138](https://github.com/aws-amplify/amplify-js/issues/12138)) ([3bbd5d9](https://github.com/aws-amplify/amplify-js/commit/3bbd5d91926d90d58fbdab3516ed546c3be7b37c))
- **api:** expose HTTP response from API errors ([#12835](https://github.com/aws-amplify/amplify-js/issues/12835)) ([38c1d56](https://github.com/aws-amplify/amplify-js/commit/38c1d56973c6318fc63ce0bdba888c2b0136d083))
- **api:** REST API handlers ([#12172](https://github.com/aws-amplify/amplify-js/issues/12172)) ([8d0489f](https://github.com/aws-amplify/amplify-js/commit/8d0489f0fafad9eb26fc4bd6be97ba13aa345448))
- **api:** update API config interface ([#12122](https://github.com/aws-amplify/amplify-js/issues/12122)) ([3e17805](https://github.com/aws-amplify/amplify-js/commit/3e1780544f16fc769bb3c7316b413b966c909515))
- append amplify user agent to all V3 SDK calls ([#4564](https://github.com/aws-amplify/amplify-js/issues/4564)) ([175d4c3](https://github.com/aws-amplify/amplify-js/commit/175d4c34ccb9cd5674c228db14513827d1c80d3f))
- **auth/cognito:** base directory structure, service clients and signUp API ([#11075](https://github.com/aws-amplify/amplify-js/issues/11075)) ([5bdef02](https://github.com/aws-amplify/amplify-js/commit/5bdef0239204f53577393ab62448319854c46d19))
- **auth/cognito:** base directory structure, service clients and signUp API ([#11075](https://github.com/aws-amplify/amplify-js/issues/11075)) ([20ab772](https://github.com/aws-amplify/amplify-js/commit/20ab772e5552610c3fa4b975d9906d01309e848e))
- **auth:** add `customOAuthState` missing hub event ([#12090](https://github.com/aws-amplify/amplify-js/issues/12090)) ([7dec0f1](https://github.com/aws-amplify/amplify-js/commit/7dec0f1d3cb6bfb3a934c5c36b38c1eead445cc6))
- **auth:** add a default deviceName when remembering device ([#13022](https://github.com/aws-amplify/amplify-js/issues/13022)) ([5f34186](https://github.com/aws-amplify/amplify-js/commit/5f3418678a06ac43ed8bf700649703c1cf280eeb))
- **auth:** add auto sign-in support ([#12229](https://github.com/aws-amplify/amplify-js/issues/12229)) ([22c5e12](https://github.com/aws-amplify/amplify-js/commit/22c5e12042acfb9706fe06b5050658152206596a)), closes [#12153](https://github.com/aws-amplify/amplify-js/issues/12153)
- **auth:** add hub events ([#11918](https://github.com/aws-amplify/amplify-js/issues/11918)) ([18c7cfe](https://github.com/aws-amplify/amplify-js/commit/18c7cfeafd60639b8fb85100ed2eed82dfa3883b))
- **auth:** Add sign up error handling ([#11153](https://github.com/aws-amplify/amplify-js/issues/11153)) ([88e69d3](https://github.com/aws-amplify/amplify-js/commit/88e69d3d1846c5362478a55a582b0ce2f7fcb61a))
- **auth:** Add sign up error handling ([#11153](https://github.com/aws-amplify/amplify-js/issues/11153)) ([706a627](https://github.com/aws-amplify/amplify-js/commit/706a627f80bcf1575a7a47fa1c20fcd81b0502a1))
- **auth:** add signedIn and signedOut hub events ([#12135](https://github.com/aws-amplify/amplify-js/issues/12135)) ([f8d8448](https://github.com/aws-amplify/amplify-js/commit/f8d8448b43407418ebec722a88f42fcd7efee040))
- **auth:** credentials provider ([#11660](https://github.com/aws-amplify/amplify-js/issues/11660)) ([6a58dbe](https://github.com/aws-amplify/amplify-js/commit/6a58dbe96cc3303c2eb5cbe52ce7fa1c25d6e621))
- **auth:** Enable resumable SignIn ([#13483](https://github.com/aws-amplify/amplify-js/issues/13483)) ([f3421f1](https://github.com/aws-amplify/amplify-js/commit/f3421f190da7473c30b5688c281935645488c663))
- **auth:** Enable resumable SignIn ([#13855](https://github.com/aws-amplify/amplify-js/issues/13855)) ([#14074](https://github.com/aws-amplify/amplify-js/issues/14074)) ([fe315be](https://github.com/aws-amplify/amplify-js/commit/fe315be4da6d814f2b802cf1acbb00513ca238ac))
- **auth:** make a subset of auth apis runnable with the server context ([#11877](https://github.com/aws-amplify/amplify-js/issues/11877)) ([50d037e](https://github.com/aws-amplify/amplify-js/commit/50d037e28e562cabc24166a0998b035e0ce38af9))
- **auth:** passwordless ([#14032](https://github.com/aws-amplify/amplify-js/issues/14032)) ([68c7f6f](https://github.com/aws-amplify/amplify-js/commit/68c7f6fbaa903ac8e45035bc25a71321a6240aec)), closes [#1](https://github.com/aws-amplify/amplify-js/issues/1) [#3](https://github.com/aws-amplify/amplify-js/issues/3) [#6](https://github.com/aws-amplify/amplify-js/issues/6) [#8](https://github.com/aws-amplify/amplify-js/issues/8) [#2](https://github.com/aws-amplify/amplify-js/issues/2) [#11](https://github.com/aws-amplify/amplify-js/issues/11) [#7](https://github.com/aws-amplify/amplify-js/issues/7) [#14](https://github.com/aws-amplify/amplify-js/issues/14) [#15](https://github.com/aws-amplify/amplify-js/issues/15) [#16](https://github.com/aws-amplify/amplify-js/issues/16) [#18](https://github.com/aws-amplify/amplify-js/issues/18) [#17](https://github.com/aws-amplify/amplify-js/issues/17) [#19](https://github.com/aws-amplify/amplify-js/issues/19) [#22](https://github.com/aws-amplify/amplify-js/issues/22)
- **auth:** proactive token refresh ([#14076](https://github.com/aws-amplify/amplify-js/issues/14076)) ([b818753](https://github.com/aws-amplify/amplify-js/commit/b8187536ab3633e6a390ea38b9e8434b23293380))
- **auth:** standalone enable oauth listener for MPAs ([#12731](https://github.com/aws-amplify/amplify-js/issues/12731)) ([94d1fb2](https://github.com/aws-amplify/amplify-js/commit/94d1fb2c91a539d336e24c3fe86881422cce0474))
- **auth:** standalone enable oauth listener for MPAs ([#12768](https://github.com/aws-amplify/amplify-js/issues/12768)) ([ef15561](https://github.com/aws-amplify/amplify-js/commit/ef15561d92e370d046152da7dc763063a6ad5b76)), closes [#12753](https://github.com/aws-amplify/amplify-js/issues/12753)
- Automatically handle clock drift/skew for API calls ([#5869](https://github.com/aws-amplify/amplify-js/issues/5869)) ([6218ff6](https://github.com/aws-amplify/amplify-js/commit/6218ff62269056f46d65760c3ec61baadb3742f4))
- **aws-amplify:** add adapter core ([b9024ef](https://github.com/aws-amplify/amplify-js/commit/b9024ef72cd838c62a1d172ef669e7b4a35721b8))
- change JS target to ES2020 ([#12365](https://github.com/aws-amplify/amplify-js/issues/12365)) ([381b201](https://github.com/aws-amplify/amplify-js/commit/381b2010afb0ca72d392307d4da64af3ca146d6f))
- **clients:** Add custom signature v4 signer ([#11273](https://github.com/aws-amplify/amplify-js/issues/11273)) ([41bb35a](https://github.com/aws-amplify/amplify-js/commit/41bb35aabac952006ad7ef5f8e60ab8782503317))
- **clients:** Add signing middleware ([#11323](https://github.com/aws-amplify/amplify-js/issues/11323)) ([de1ce7b](https://github.com/aws-amplify/amplify-js/commit/de1ce7b1d3fcc9b0fe042e08cfa58f705d8751da))
- **clients:** add useragent to cognito identity ([#11269](https://github.com/aws-amplify/amplify-js/issues/11269)) ([475f26b](https://github.com/aws-amplify/amplify-js/commit/475f26bc4d0c415ede4eaf4d5126023a43fb44de))
- **clients:** allow fetch handler to read body multiple times ([868fb4a](https://github.com/aws-amplify/amplify-js/commit/868fb4af05d35f76364014c74dd5f780959465c5))
- **clients:** basic types and fetch handler ([#11120](https://github.com/aws-amplify/amplify-js/issues/11120)) ([79f8ae8](https://github.com/aws-amplify/amplify-js/commit/79f8ae8c043df80b1b59a2ce87fe8527090837f8))
- **clients:** cognito identity client ([#11213](https://github.com/aws-amplify/amplify-js/issues/11213)) ([67e4017](https://github.com/aws-amplify/amplify-js/commit/67e40171385f02d0c9448fdc3e036d63e009ea34))
- **clients:** compose transfer handler with middleware & retry middleware ([#11188](https://github.com/aws-amplify/amplify-js/issues/11188)) ([85bc134](https://github.com/aws-amplify/amplify-js/commit/85bc134f1975eaab7c85b2c72f78e30946e226c2))
- **clients:** support CN partition by adding DNS suffix resolver ([#11311](https://github.com/aws-amplify/amplify-js/issues/11311)) ([9de2975](https://github.com/aws-amplify/amplify-js/commit/9de297519fdbaaf1e9b4ae98f12aed4137400222))
- **clients:** vendor TS types from pinpoint and cognito-identity clients ([#11393](https://github.com/aws-amplify/amplify-js/issues/11393)) ([9a8569a](https://github.com/aws-amplify/amplify-js/commit/9a8569ab98480ad96b53a7104366640c66343aa2))
- core/cloudwatch-logging ([#8588](https://github.com/aws-amplify/amplify-js/issues/8588)) ([6f28c7e](https://github.com/aws-amplify/amplify-js/commit/6f28c7e94ae8d41b37490292ff3547505100c6b2))
- **core:** add adapter core - serverContext ([76faf5e](https://github.com/aws-amplify/amplify-js/commit/76faf5e9df90ea61f64268b3684b65a424fdb399))
- **core:** add AmplifyServerContextError to adapter core ([40d6987](https://github.com/aws-amplify/amplify-js/commit/40d69877e465b51386a4db1660a50baaa8c5ea3a))
- **core:** add amplifyUuid and amplifyUrl with builtin polyfill loader for RN ([a4ad9e0](https://github.com/aws-amplify/amplify-js/commit/a4ad9e09d6098a53f4530d9fa9112c81b409a605))
- **core:** add convert util (base64) ([49bb74b](https://github.com/aws-amplify/amplify-js/commit/49bb74b8169e995ab89bde3402330a97a3cac210))
- **core:** add storage mechanisms ([#11676](https://github.com/aws-amplify/amplify-js/issues/11676)) ([cd2a952](https://github.com/aws-amplify/amplify-js/commit/cd2a952a0d0496002a01a8954f34da51a540f19d))
- **core:** allow fetchAuthSession to run with Amplify server context ([701460e](https://github.com/aws-amplify/amplify-js/commit/701460e93aa03af05f6505c3bf983bf4245bb7a0))
- **core:** API detection for 8 framework targets ([#11384](https://github.com/aws-amplify/amplify-js/issues/11384)) ([388f207](https://github.com/aws-amplify/amplify-js/commit/388f2074db0640f2d22aa7cd1a44d8eb8f2301d2))
- **core:** expose observable for testing ([#6042](https://github.com/aws-amplify/amplify-js/issues/6042)) ([05257da](https://github.com/aws-amplify/amplify-js/commit/05257da6604917ab1a54accbfc9945c6bbbbb22b))
- **core:** expose ssr flag for Amplify.configure() ([602f4e6](https://github.com/aws-amplify/amplify-js/commit/602f4e62f3cab90a77d768d4dcae9fd89ad51239))
- **core:** Hub refactor and tests ([7ac5bcf](https://github.com/aws-amplify/amplify-js/commit/7ac5bcfd409af5a8df9c39215287965839c5c9a9))
- **core:** make Amplify.configure accept both new and legacy config objects ([d5e8db5](https://github.com/aws-amplify/amplify-js/commit/d5e8db5c912fa112980d864f9a74a84e8764b0c3))
- **core:** queued storage (react-native) for logger ([14d5e13](https://github.com/aws-amplify/amplify-js/commit/14d5e1316e56918b06f8c357f1b12d4aca65b59b))
- **core:** queued storage (Web) for logger ([ff20db7](https://github.com/aws-amplify/amplify-js/commit/ff20db758675fc68bcf183b6464ebbbda98c3acc))
- **core:** refactor signer implementation to remove polyfill ([#11319](https://github.com/aws-amplify/amplify-js/issues/11319)) ([1603af3](https://github.com/aws-amplify/amplify-js/commit/1603af38ea7faa163f7fcb92fd09c056454c8a0a)), closes [#11273](https://github.com/aws-amplify/amplify-js/issues/11273) [#11307](https://github.com/aws-amplify/amplify-js/issues/11307) [#11310](https://github.com/aws-amplify/amplify-js/issues/11310) [#11120](https://github.com/aws-amplify/amplify-js/issues/11120) [#11320](https://github.com/aws-amplify/amplify-js/issues/11320)
- **core:** update detectable user agent for getClientInfo ([#12661](https://github.com/aws-amplify/amplify-js/issues/12661)) ([829723b](https://github.com/aws-amplify/amplify-js/commit/829723bb692f430dc1a392f661ea31fb59f4761c))
- **core:** Use lerna prepublishOnly version npm publish and use the … ([#11301](https://github.com/aws-amplify/amplify-js/issues/11301)) ([c682c5e](https://github.com/aws-amplify/amplify-js/commit/c682c5eb5189bd90ac3b05305056aeb91fe69176))
- **core:** validate if access and id tokens are valid cognito tokens ([#13385](https://github.com/aws-amplify/amplify-js/issues/13385)) ([0b72b32](https://github.com/aws-amplify/amplify-js/commit/0b72b32348dc63bbc11596a062338ee9ddfa9177))
- custom queries and mutations ([#13029](https://github.com/aws-amplify/amplify-js/issues/13029)) ([7e4eff3](https://github.com/aws-amplify/amplify-js/commit/7e4eff3be3ec25520332330461ca2cefbf7bdbb7))
- Custom user agent enhancement for api-rest ([#11457](https://github.com/aws-amplify/amplify-js/issues/11457)) ([4315ba0](https://github.com/aws-amplify/amplify-js/commit/4315ba05ad2e4463a4ef19431f20f8d5308cdc62))
- Custom user agent improvements for Storage ([#11425](https://github.com/aws-amplify/amplify-js/issues/11425)) ([fd04df4](https://github.com/aws-amplify/amplify-js/commit/fd04df40b6a07a864e2ded443a53f3efdf74931f))
- **data:** add GraphQL API V6 support for custom headers, non-Appsync endpoints, and custom domains; add / update tests ([#12185](https://github.com/aws-amplify/amplify-js/issues/12185)) ([6d5afce](https://github.com/aws-amplify/amplify-js/commit/6d5afce390687e925438d6d208a18c84e61399a9))
- **data:** add observer override to core Reachability util ([#12279](https://github.com/aws-amplify/amplify-js/issues/12279)) ([3bbc475](https://github.com/aws-amplify/amplify-js/commit/3bbc475021a6879fadff4a5d220314566a798bb1))
- **data:** events client ([#13923](https://github.com/aws-amplify/amplify-js/issues/13923)) ([847fb51](https://github.com/aws-amplify/amplify-js/commit/847fb51acee1ee8585503625a6f73d67265217d0))
- **deps:** upgrade sha256-js to 5.2.0 with esm artifacts ([#12326](https://github.com/aws-amplify/amplify-js/issues/12326)) ([91faff4](https://github.com/aws-amplify/amplify-js/commit/91faff40dd5d09460a3ad3b22921c0018e667b78))
- disable request caching for cognito APIs ([#12020](https://github.com/aws-amplify/amplify-js/issues/12020)) ([6ba700b](https://github.com/aws-amplify/amplify-js/commit/6ba700bf0f3a8d9243b6c221ad2765f36278e2e7))
- enable watch mode for builds ([#4358](https://github.com/aws-amplify/amplify-js/issues/4358)) ([055e530](https://github.com/aws-amplify/amplify-js/commit/055e5308efc308ae6beee78f8963bb2f812e1f85))
- **Geo:** add Geo class and amazonLocationServicesProvider - Geo milestone 1 - PR 3/6 ([#8618](https://github.com/aws-amplify/amplify-js/issues/8618)) ([4c1c1fe](https://github.com/aws-amplify/amplify-js/commit/4c1c1fe786f2a4b1d7e1260491357a248dd6d084))
- **Geo:** getAvailableMaps and getDefaultMap - Geo milestone 1 - PR 4 ([#8620](https://github.com/aws-amplify/amplify-js/issues/8620)) ([229f93e](https://github.com/aws-amplify/amplify-js/commit/229f93edf1bc07de26aebe28f26f3066d3e31a74))
- **Geo:** searchByCoordinates - Geo milestone 1 - PR 6 ([#8622](https://github.com/aws-amplify/amplify-js/issues/8622)) ([ae725c0](https://github.com/aws-amplify/amplify-js/commit/ae725c0f2d55ba95d4ecc76e46506a888e6b67c5))
- **Geo:** searchByText - Geo milestone 1 - PR 5 ([#8621](https://github.com/aws-amplify/amplify-js/issues/8621)) ([5346ae1](https://github.com/aws-amplify/amplify-js/commit/5346ae17dcf5672b3c25c46f483af53d5f5dfc93))
- **Geo:** update aws-amplify/core - Geo milestone 1 - PR 2/6 ([#8617](https://github.com/aws-amplify/amplify-js/issues/8617)) ([3a83893](https://github.com/aws-amplify/amplify-js/commit/3a8389388ebe7a521d0b78c58e24d91b53db4799))
- **inApp:** functional dispatchEvent & setConflictHandler APIs ([#12231](https://github.com/aws-amplify/amplify-js/issues/12231)) ([f5bcc3a](https://github.com/aws-amplify/amplify-js/commit/f5bcc3a082e5609b094c1508c434973165245472))
- **InApp:** functional identifyUser API ([#12159](https://github.com/aws-amplify/amplify-js/issues/12159)) ([b83333f](https://github.com/aws-amplify/amplify-js/commit/b83333f508c154badc4832aeaa8c5911e6716fba))
- **InApp:** functional syncMessages API ([#12145](https://github.com/aws-amplify/amplify-js/issues/12145)) ([a9c8854](https://github.com/aws-amplify/amplify-js/commit/a9c88541a8d6d406aeac93d3a45f2778017dd47b))
- initial setup for the cloudwatch logger and provider ([57a7d4c](https://github.com/aws-amplify/amplify-js/commit/57a7d4c9add70170c69e7fad89f59c4d0efe779d))
- integrate predictions with v6 ([#12313](https://github.com/aws-amplify/amplify-js/issues/12313)) ([80b63ee](https://github.com/aws-amplify/amplify-js/commit/80b63ee4a4a6b0db45eb7f229438bbbcf067dba8)), closes [#11983](https://github.com/aws-amplify/amplify-js/issues/11983) [#12193](https://github.com/aws-amplify/amplify-js/issues/12193) [#12237](https://github.com/aws-amplify/amplify-js/issues/12237) [#12266](https://github.com/aws-amplify/amplify-js/issues/12266) [#12312](https://github.com/aws-amplify/amplify-js/issues/12312)
- Integrated ServiceWorker with v6 ([#12261](https://github.com/aws-amplify/amplify-js/issues/12261)) ([8f3ba99](https://github.com/aws-amplify/amplify-js/commit/8f3ba99af092a9b517ccf84d05947a4e328b3248))
- **interactions:** adapt v6 api design ([#12285](https://github.com/aws-amplify/amplify-js/issues/12285)) ([76471b6](https://github.com/aws-amplify/amplify-js/commit/76471b6488efc37d7d0bdc1feb7fcbc97334ec7c))
- library observability improvements ([#14309](https://github.com/aws-amplify/amplify-js/issues/14309)) ([b383885](https://github.com/aws-amplify/amplify-js/commit/b3838851da3c5620d6c1ea7950d16d81b21e073f)), closes [#14230](https://github.com/aws-amplify/amplify-js/issues/14230) [#14237](https://github.com/aws-amplify/amplify-js/issues/14237) [#14259](https://github.com/aws-amplify/amplify-js/issues/14259) [#14251](https://github.com/aws-amplify/amplify-js/issues/14251) [#14296](https://github.com/aws-amplify/amplify-js/issues/14296)
- moved CloudLogger logic to ConsoleLogger ([93db90d](https://github.com/aws-amplify/amplify-js/commit/93db90d041c7ca697e5993003a4fb105a3821cbe))
- **notifications:** Refactor push notification to be functional ([#12305](https://github.com/aws-amplify/amplify-js/issues/12305)) ([8eb24ad](https://github.com/aws-amplify/amplify-js/commit/8eb24add53c0dc188d7331a9c49cd01073bbc1f5)), closes [#12301](https://github.com/aws-amplify/amplify-js/issues/12301) [#12292](https://github.com/aws-amplify/amplify-js/issues/12292) [#12276](https://github.com/aws-amplify/amplify-js/issues/12276) [#12294](https://github.com/aws-amplify/amplify-js/issues/12294) [#12310](https://github.com/aws-amplify/amplify-js/issues/12310) [#12304](https://github.com/aws-amplify/amplify-js/issues/12304)
- Pinpoint configureAutoTrack & tracker migration ([#12322](https://github.com/aws-amplify/amplify-js/issues/12322)) ([c5ca240](https://github.com/aws-amplify/amplify-js/commit/c5ca240faf6e94bdb4c709ff434253096879d573))
- PubSub Add Options objects for all Providers and fix: Spelling error and deprecation of old exports ([#9683](https://github.com/aws-amplify/amplify-js/issues/9683)) ([b535af2](https://github.com/aws-amplify/amplify-js/commit/b535af2133b5460c6e8e2fcfd89e1fe235872c27))
- PubSub for V6 ([#12265](https://github.com/aws-amplify/amplify-js/issues/12265)) ([32d7532](https://github.com/aws-amplify/amplify-js/commit/32d7532d25dd70a552dad82b4ae197dafe118a30))
- **pubsub:** Automated reconnect for IoT and API ([#10235](https://github.com/aws-amplify/amplify-js/issues/10235)) ([a677cd8](https://github.com/aws-amplify/amplify-js/commit/a677cd85cd60665fb1660e66aebf7eb230c4dfca))
- **pubsub:** Enable PubSub to work along side GraphQL/Appsync ([d8c972d](https://github.com/aws-amplify/amplify-js/commit/d8c972dff0ad4483db8a7122f5bf4952cc8a295a))
- **pubsub:** Typescript improvements and cleanup ([#10954](https://github.com/aws-amplify/amplify-js/issues/10954)) ([5147c5c](https://github.com/aws-amplify/amplify-js/commit/5147c5ce555d042722e2888fc423430f517b91b7))
- **react-native,core,storage:** add polyfill loaders ([1905829](https://github.com/aws-amplify/amplify-js/commit/1905829e58531e606210740b1bd889bee0ef7e21))
- **react-native:** add loadBase64 module loader ([#12235](https://github.com/aws-amplify/amplify-js/issues/12235)) ([256c949](https://github.com/aws-amplify/amplify-js/commit/256c949650d5d057a65e9a8caf129e0feed81f96))
- **react-native:** add moduleLoaders ([1bd0faf](https://github.com/aws-amplify/amplify-js/commit/1bd0faf75602e48a42bb03f8d09c028ed812ed68))
- Reintroduce & undeprecate I18n ([#12112](https://github.com/aws-amplify/amplify-js/issues/12112)) ([e9cb99a](https://github.com/aws-amplify/amplify-js/commit/e9cb99a45a7d18e2bc3a0f019b1090d2249cb603))
- Rename `endpoint` to `userPoolEndpoint` ([#12276](https://github.com/aws-amplify/amplify-js/issues/12276)) ([b047cd1](https://github.com/aws-amplify/amplify-js/commit/b047cd1d484d8ffe77a48e0ff19e9abbe85b0e73))
- **repo:** set up rollup to emit esm and cjs artifacts ([#12522](https://github.com/aws-amplify/amplify-js/issues/12522)) ([903a012](https://github.com/aws-amplify/amplify-js/commit/903a0123e51f69ff3476b6b15aa89a73b750f9dc))
- **s3:** add s3 transfer handler ([#11482](https://github.com/aws-amplify/amplify-js/issues/11482)) ([53aa94f](https://github.com/aws-amplify/amplify-js/commit/53aa94f95a3959d5e490b17d91c9b65b52847359))
- **s3:** custom xhr transfer handler ([#11471](https://github.com/aws-amplify/amplify-js/issues/11471)) ([e1f2ca1](https://github.com/aws-amplify/amplify-js/commit/e1f2ca11f0179e51126e42360de19169ffc7c6e2))
- **s3:** implement listObjectsV2 ([#11504](https://github.com/aws-amplify/amplify-js/issues/11504)) ([0c43bb3](https://github.com/aws-amplify/amplify-js/commit/0c43bb3c3eaff0ed287953b44186a82da9169cd4))
- **s3:** implement multiparts upload APIs ([#11514](https://github.com/aws-amplify/amplify-js/issues/11514)) ([835b74f](https://github.com/aws-amplify/amplify-js/commit/835b74fa15a143f7490ffcfb7f5811594d5c5a8e))
- **s3:** omit double encoding of path for S3 when signing ([#11538](https://github.com/aws-amplify/amplify-js/issues/11538)) ([d46d2d1](https://github.com/aws-amplify/amplify-js/commit/d46d2d1d4263e3b8bcfc03af473d7445af12e5b7))
- setup server subpath for core, auth and aws-amplify packages ([626de05](https://github.com/aws-amplify/amplify-js/commit/626de05cd81cdd8274f6631d0203082969cd2ed1))
- **SSR:** withSSRContext ([#6146](https://github.com/aws-amplify/amplify-js/issues/6146)) ([1cb1afd](https://github.com/aws-amplify/amplify-js/commit/1cb1afd1e56135908dceb2ef6403f0b3e78067fe))
- **storage:** consolidate shared config resolution & reconstructure types ([#11871](https://github.com/aws-amplify/amplify-js/issues/11871)) ([52f5e19](https://github.com/aws-amplify/amplify-js/commit/52f5e195dbd9a2211f4bfea6a1c94500a71a2ff1))
- **storage:** functional storage library options ([#11699](https://github.com/aws-amplify/amplify-js/issues/11699)) ([5e155a4](https://github.com/aws-amplify/amplify-js/commit/5e155a46a2619f09ddcfce12343233266ba9e902))
- **storage:** implement functional downloadData ([#11823](https://github.com/aws-amplify/amplify-js/issues/11823)) ([5dac90a](https://github.com/aws-amplify/amplify-js/commit/5dac90a41bcc418adf840977bd2f9f8a06b9535e))
- **storage:** integrate custom s3 client ([#11542](https://github.com/aws-amplify/amplify-js/issues/11542)) ([fe05494](https://github.com/aws-amplify/amplify-js/commit/fe05494c75ab6d1561863f4dfaf1107bc1f256a6))
- **storage:** Integrity changes for storage browser ([#13909](https://github.com/aws-amplify/amplify-js/issues/13909)) ([ec7bf6f](https://github.com/aws-amplify/amplify-js/commit/ec7bf6ff2fb4af84425eca4f2d68c2bef7f49d03)), closes [#13478](https://github.com/aws-amplify/amplify-js/issues/13478) [#13474](https://github.com/aws-amplify/amplify-js/issues/13474)
- support server-side auth flows with Cognito managed login ([#14168](https://github.com/aws-amplify/amplify-js/issues/14168)) ([825d338](https://github.com/aws-amplify/amplify-js/commit/825d338021964a48ffab07d7b5961c5afa63a50e)), closes [#13788](https://github.com/aws-amplify/amplify-js/issues/13788) [#13801](https://github.com/aws-amplify/amplify-js/issues/13801) [#13827](https://github.com/aws-amplify/amplify-js/issues/13827) [#13839](https://github.com/aws-amplify/amplify-js/issues/13839) [#13840](https://github.com/aws-amplify/amplify-js/issues/13840) [#13841](https://github.com/aws-amplify/amplify-js/issues/13841) [#14103](https://github.com/aws-amplify/amplify-js/issues/14103) [#14112](https://github.com/aws-amplify/amplify-js/issues/14112) [#14114](https://github.com/aws-amplify/amplify-js/issues/14114) [#14115](https://github.com/aws-amplify/amplify-js/issues/14115) [#14119](https://github.com/aws-amplify/amplify-js/issues/14119) [#14125](https://github.com/aws-amplify/amplify-js/issues/14125) [#14116](https://github.com/aws-amplify/amplify-js/issues/14116) [#14134](https://github.com/aws-amplify/amplify-js/issues/14134) [#14132](https://github.com/aws-amplify/amplify-js/issues/14132) [#14141](https://github.com/aws-amplify/amplify-js/issues/14141) [#14152](https://github.com/aws-amplify/amplify-js/issues/14152) [#14169](https://github.com/aws-amplify/amplify-js/issues/14169)
- Update signInWithRedirect to work with RN ([#12144](https://github.com/aws-amplify/amplify-js/issues/12144)) ([e90c05b](https://github.com/aws-amplify/amplify-js/commit/e90c05b1696870443b3bfb4846205a12926a9252))
- Upgrade TypeDoc & rebuild our API documentation ([#13012](https://github.com/aws-amplify/amplify-js/issues/13012)) ([1509592](https://github.com/aws-amplify/amplify-js/commit/1509592c017aa3e63d6c2d3a5c683f9356fb6a75))
- user agent enhancements - auth reduction ([#11465](https://github.com/aws-amplify/amplify-js/issues/11465)) ([f73abd2](https://github.com/aws-amplify/amplify-js/commit/f73abd2f3c9a377a4d14832c68ea2880a1372020))
- user agent enhancements - cross-category api>api-graphql>pubsub ([#11368](https://github.com/aws-amplify/amplify-js/issues/11368)) ([a88dda2](https://github.com/aws-amplify/amplify-js/commit/a88dda202919aa1d4dc2af48f33c3533d8626261))
- user agent enhancements: part1 core ([#11121](https://github.com/aws-amplify/amplify-js/issues/11121)) ([66d1fb5](https://github.com/aws-amplify/amplify-js/commit/66d1fb5a7c3d82621ce9a8c1e880fe81573387ba))

### Reverts

- Revert "feat(auth): Enable resumable SignIn" (#13855) ([b26e719](https://github.com/aws-amplify/amplify-js/commit/b26e7199d25cbc1821ff7c45b8ad78b5544b7a2f)), closes [#13855](https://github.com/aws-amplify/amplify-js/issues/13855) [#13483](https://github.com/aws-amplify/amplify-js/issues/13483)
- Revert "Reapply "feat(core): resolve webcrypto from node:crypto for Node18 (#13599)" (#13775)" ([953d578](https://github.com/aws-amplify/amplify-js/commit/953d578fabd69ab8eb7bf494a50c5a15ebf0b74c)), closes [#13599](https://github.com/aws-amplify/amplify-js/issues/13599) [#13775](https://github.com/aws-amplify/amplify-js/issues/13775)
- Revert "feat(core): validate if access and id tokens are valid cognito tokens (#13385)" (#13410) ([82d53fa](https://github.com/aws-amplify/amplify-js/commit/82d53fab4e47e988b26811cb8b6fe09abbdbda4b)), closes [#13385](https://github.com/aws-amplify/amplify-js/issues/13385) [#13410](https://github.com/aws-amplify/amplify-js/issues/13410)
- Revert "chore(release): Publish [skip release]" ([241fa11](https://github.com/aws-amplify/amplify-js/commit/241fa1105e177d9e4afe59c40ee92656b87ae542))
- Revert "chore(release): Publish" (#13027) ([f6f4f42](https://github.com/aws-amplify/amplify-js/commit/f6f4f42befa04ed3c1502fa0adf17c6700abfddf)), closes [#13027](https://github.com/aws-amplify/amplify-js/issues/13027)
- Revert "chore(repo): use typescript 5.0.2 across workspace" (#12941) ([dc04ba1](https://github.com/aws-amplify/amplify-js/commit/dc04ba18604291d9618a681e7ec4cdb801a355c8)), closes [#12941](https://github.com/aws-amplify/amplify-js/issues/12941)
- Revert "chore: Upgrade Prettier (#12582)" (#12600) ([cd937f5](https://github.com/aws-amplify/amplify-js/commit/cd937f56bef5f90a4b42638776656faf746c48aa)), closes [#12582](https://github.com/aws-amplify/amplify-js/issues/12582) [#12600](https://github.com/aws-amplify/amplify-js/issues/12600)
- Revert "feat: custom user agent core changes for UI handoff (#11602)" ([fdd39c9](https://github.com/aws-amplify/amplify-js/commit/fdd39c9994d03c5cc9236fc9ed7e7b7c124f505b)), closes [#11602](https://github.com/aws-amplify/amplify-js/issues/11602)
- Revert "feat: custom user agent Geo changes for UI handoff (#11632)" ([ba2ae71](https://github.com/aws-amplify/amplify-js/commit/ba2ae7183b096fac71e5d4ef9a5c160d11202841)), closes [#11632](https://github.com/aws-amplify/amplify-js/issues/11632)
- Revert "feat: custom user agent Storage changes for UI handoff (#11627)" ([288a3bb](https://github.com/aws-amplify/amplify-js/commit/288a3bbd5d99ce46e9f085a107183b3dffb8f76e)), closes [#11627](https://github.com/aws-amplify/amplify-js/issues/11627)
- Revert "feat: custom user agent InAppMessaging changes for UI handoff (#11639)" ([2f0b16b](https://github.com/aws-amplify/amplify-js/commit/2f0b16bd15fea1a46a723d1ebfda00d3de2b56b0)), closes [#11639](https://github.com/aws-amplify/amplify-js/issues/11639)
- Revert "feat: pipe auth user agent details through to service call (#11755)" ([812875f](https://github.com/aws-amplify/amplify-js/commit/812875fce7b85209486b7ff8cad8674fac43d12c)), closes [#11755](https://github.com/aws-amplify/amplify-js/issues/11755)
- Revert "test: prepare integration test over dist folder" ([0508ab3](https://github.com/aws-amplify/amplify-js/commit/0508ab3809045ae20a921d75b4acec77da9dc55c))
- Revert "chore: bump version for user agent to 5.0.1" (#10657) ([d98bf4c](https://github.com/aws-amplify/amplify-js/commit/d98bf4c9ae53523dd8a94f5586efd4a2c342f1de)), closes [#10657](https://github.com/aws-amplify/amplify-js/issues/10657) [#10655](https://github.com/aws-amplify/amplify-js/issues/10655)
- Revert "chore(amplify-js): consolidate react-native dependencies (#9451)" (#9473) ([9924a31](https://github.com/aws-amplify/amplify-js/commit/9924a31397761fccd03f53336d754b98367199a8)), closes [#9451](https://github.com/aws-amplify/amplify-js/issues/9451) [#9473](https://github.com/aws-amplify/amplify-js/issues/9473)
- Revert "fix(@aws-amplify/core): use empty string as translation (#9403)" (#9436) ([711259b](https://github.com/aws-amplify/amplify-js/commit/711259b482d721f66d4acc728ff96a8a26965787)), closes [#9403](https://github.com/aws-amplify/amplify-js/issues/9403) [#9436](https://github.com/aws-amplify/amplify-js/issues/9436)
- Revert "chore:update-@aws-sdk/client-cloudwatch-logs (#9189)" (#9192) ([36fe262](https://github.com/aws-amplify/amplify-js/commit/36fe26243247c45cdb3f5391d91f0641c9cd5b99)), closes [#9189](https://github.com/aws-amplify/amplify-js/issues/9189) [#9192](https://github.com/aws-amplify/amplify-js/issues/9192)
- Revert "chore: bump aws-sdk to 3.4.1 (#7674)" (#7716) ([f142314](https://github.com/aws-amplify/amplify-js/commit/f1423144cf73304f3dc048233b35c831c9a1742d)), closes [#7674](https://github.com/aws-amplify/amplify-js/issues/7674) [#7716](https://github.com/aws-amplify/amplify-js/issues/7716)
- Revert "Upgrade aws-sdk clients to beta4 (#5575)" (#5577) ([f2dcabb](https://github.com/aws-amplify/amplify-js/commit/f2dcabb78110c0bab84780d045d046fabf97b6f4)), closes [#5575](https://github.com/aws-amplify/amplify-js/issues/5575) [#5577](https://github.com/aws-amplify/amplify-js/issues/5577)
- Revert "Publish" ([1319d31](https://github.com/aws-amplify/amplify-js/commit/1319d319b69717e76660fbfa6f1a845195c6d635))
- Revert "chore(release): Publish [ci skip]" ([9b03c49](https://github.com/aws-amplify/amplify-js/commit/9b03c49b0ba5eef09920017386c9fae139b6e0f9))
- **auth:** standalone enable oauth listener for MPAs ([#12753](https://github.com/aws-amplify/amplify-js/issues/12753)) ([0462761](https://github.com/aws-amplify/amplify-js/commit/04627618afe526dd776ee678b723ed6e697f440d)), closes [#12748](https://github.com/aws-amplify/amplify-js/issues/12748) [#12731](https://github.com/aws-amplify/amplify-js/issues/12731)

### BREAKING CHANGES

- Upgrade from React Native AsyncStorage to @react-native-async-storage/async-storage

Co-authored-by: Ashish Nanda <ashish.nanda.5591@gmail.com>
Co-authored-by: Ivan Artemiev <29709626+iartemiev@users.noreply.github.com>

## [6.11.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.11.3...@aws-amplify/core@6.11.4) (2025-04-28)

**Note:** Version bump only for package @aws-amplify/core

## [6.11.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.11.2...@aws-amplify/core@6.11.3) (2025-04-21)

**Note:** Version bump only for package @aws-amplify/core

## [6.11.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.11.1...@aws-amplify/core@6.11.2) (2025-04-09)

**Note:** Version bump only for package @aws-amplify/core

## [6.11.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.11.0...@aws-amplify/core@6.11.1) (2025-03-28)

**Note:** Version bump only for package @aws-amplify/core

# [6.11.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.10.6...@aws-amplify/core@6.11.0) (2025-03-25)

### Features

- **api-rest:** configurable retry behavior ([#14303](https://github.com/aws-amplify/amplify-js/issues/14303)) ([65207a6](https://github.com/aws-amplify/amplify-js/commit/65207a668cf66f07932b7f89f38651cbb84b8187))
- library observability improvements ([#14309](https://github.com/aws-amplify/amplify-js/issues/14309)) ([b383885](https://github.com/aws-amplify/amplify-js/commit/b3838851da3c5620d6c1ea7950d16d81b21e073f)), closes [#14230](https://github.com/aws-amplify/amplify-js/issues/14230) [#14237](https://github.com/aws-amplify/amplify-js/issues/14237) [#14259](https://github.com/aws-amplify/amplify-js/issues/14259) [#14251](https://github.com/aws-amplify/amplify-js/issues/14251) [#14296](https://github.com/aws-amplify/amplify-js/issues/14296)

## [6.10.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.10.5...@aws-amplify/core@6.10.6) (2025-03-21)

**Note:** Version bump only for package @aws-amplify/core

## [6.10.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.10.4...@aws-amplify/core@6.10.5) (2025-03-14)

**Note:** Version bump only for package @aws-amplify/core

## [6.10.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.10.3...@aws-amplify/core@6.10.4) (2025-03-07)

**Note:** Version bump only for package @aws-amplify/core

## [6.10.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.10.2...@aws-amplify/core@6.10.3) (2025-03-05)

### Bug Fixes

- **core:** add Partial back to AmplifyOutputs groups and paths ([#14265](https://github.com/aws-amplify/amplify-js/issues/14265)) ([0580740](https://github.com/aws-amplify/amplify-js/commit/0580740b0f19fd20fe03a6c8ee8f5a8c6cd91a37)), closes [#14101](https://github.com/aws-amplify/amplify-js/issues/14101)
- **core:** make AmplifyOutputs category types as unknown ([#14153](https://github.com/aws-amplify/amplify-js/issues/14153)) ([5dbfbf3](https://github.com/aws-amplify/amplify-js/commit/5dbfbf3f83799b7691fa4d51a61726326a22f1e5))

## [6.10.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.10.1...@aws-amplify/core@6.10.2) (2025-02-27)

**Note:** Version bump only for package @aws-amplify/core

## [6.10.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.10.0...@aws-amplify/core@6.10.1) (2025-02-20)

### Bug Fixes

- **core:** build in CookieSerializeOptions def ([#14213](https://github.com/aws-amplify/amplify-js/issues/14213)) ([406157d](https://github.com/aws-amplify/amplify-js/commit/406157df09ea25a8b3d4d42ee65104cde8886fe9))

# [6.10.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.9.3...@aws-amplify/core@6.10.0) (2025-02-12)

### Features

- support server-side auth flows with Cognito managed login ([#14168](https://github.com/aws-amplify/amplify-js/issues/14168)) ([825d338](https://github.com/aws-amplify/amplify-js/commit/825d338021964a48ffab07d7b5961c5afa63a50e)), closes [#13788](https://github.com/aws-amplify/amplify-js/issues/13788) [#13801](https://github.com/aws-amplify/amplify-js/issues/13801) [#13827](https://github.com/aws-amplify/amplify-js/issues/13827) [#13839](https://github.com/aws-amplify/amplify-js/issues/13839) [#13840](https://github.com/aws-amplify/amplify-js/issues/13840) [#13841](https://github.com/aws-amplify/amplify-js/issues/13841) [#14103](https://github.com/aws-amplify/amplify-js/issues/14103) [#14112](https://github.com/aws-amplify/amplify-js/issues/14112) [#14114](https://github.com/aws-amplify/amplify-js/issues/14114) [#14115](https://github.com/aws-amplify/amplify-js/issues/14115) [#14119](https://github.com/aws-amplify/amplify-js/issues/14119) [#14125](https://github.com/aws-amplify/amplify-js/issues/14125) [#14116](https://github.com/aws-amplify/amplify-js/issues/14116) [#14134](https://github.com/aws-amplify/amplify-js/issues/14134) [#14132](https://github.com/aws-amplify/amplify-js/issues/14132) [#14141](https://github.com/aws-amplify/amplify-js/issues/14141) [#14152](https://github.com/aws-amplify/amplify-js/issues/14152) [#14169](https://github.com/aws-amplify/amplify-js/issues/14169)

## [6.9.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.9.2...@aws-amplify/core@6.9.3) (2025-02-04)

### Bug Fixes

- **deps:** fix more implicit deps and add linting ([#14137](https://github.com/aws-amplify/amplify-js/issues/14137)) ([22ca811](https://github.com/aws-amplify/amplify-js/commit/22ca811743f6729d3a00dd71726ff6b5afb44b53))

## [6.9.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.9.1...@aws-amplify/core@6.9.2) (2025-01-24)

**Note:** Version bump only for package @aws-amplify/core

## [6.9.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.9.0...@aws-amplify/core@6.9.1) (2025-01-14)

**Note:** Version bump only for package @aws-amplify/core

# [6.9.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.8.0...@aws-amplify/core@6.9.0) (2025-01-03)

### Bug Fixes

- **auth:** fall back to user agent if deviceName resolves to empty st… ([#14102](https://github.com/aws-amplify/amplify-js/issues/14102)) ([9a73470](https://github.com/aws-amplify/amplify-js/commit/9a73470be85b6056939631d86cf87d502728fb5c))
- **core:** amplify configure with storage path type issue ([#14088](https://github.com/aws-amplify/amplify-js/issues/14088)) ([0ecded1](https://github.com/aws-amplify/amplify-js/commit/0ecded15a4d1318fe10b16dbe534a111a12bdc21))

### Features

- **auth:** proactive token refresh ([#14076](https://github.com/aws-amplify/amplify-js/issues/14076)) ([b818753](https://github.com/aws-amplify/amplify-js/commit/b8187536ab3633e6a390ea38b9e8434b23293380))

# [6.8.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.7.3...@aws-amplify/core@6.8.0) (2024-12-19)

### Features

- **auth:** Enable resumable SignIn ([#13855](https://github.com/aws-amplify/amplify-js/issues/13855)) ([#14074](https://github.com/aws-amplify/amplify-js/issues/14074)) ([fe315be](https://github.com/aws-amplify/amplify-js/commit/fe315be4da6d814f2b802cf1acbb00513ca238ac))

## [6.7.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.7.2...@aws-amplify/core@6.7.3) (2024-12-12)

**Note:** Version bump only for package @aws-amplify/core

## [6.7.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.7.1...@aws-amplify/core@6.7.2) (2024-12-03)

### Bug Fixes

- bump package version ([c5ab404](https://github.com/aws-amplify/amplify-js/commit/c5ab40454c22b91fd54a293831e88c4bb9ae45ee))

## [6.7.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.7.0...@aws-amplify/core@6.7.1) (2024-12-03)

### Bug Fixes

- amplify configure with auth userGroups ([#14046](https://github.com/aws-amplify/amplify-js/issues/14046)) ([4278be2](https://github.com/aws-amplify/amplify-js/commit/4278be2b07374a98724e4d787891a36a2bf55c05))

# [6.7.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.6.0...@aws-amplify/core@6.7.0) (2024-11-25)

### Features

- **auth:** passwordless ([#14032](https://github.com/aws-amplify/amplify-js/issues/14032)) ([68c7f6f](https://github.com/aws-amplify/amplify-js/commit/68c7f6fbaa903ac8e45035bc25a71321a6240aec)), closes [#1](https://github.com/aws-amplify/amplify-js/issues/1) [#3](https://github.com/aws-amplify/amplify-js/issues/3) [#6](https://github.com/aws-amplify/amplify-js/issues/6) [#8](https://github.com/aws-amplify/amplify-js/issues/8) [#2](https://github.com/aws-amplify/amplify-js/issues/2) [#11](https://github.com/aws-amplify/amplify-js/issues/11) [#7](https://github.com/aws-amplify/amplify-js/issues/7) [#14](https://github.com/aws-amplify/amplify-js/issues/14) [#15](https://github.com/aws-amplify/amplify-js/issues/15) [#16](https://github.com/aws-amplify/amplify-js/issues/16) [#18](https://github.com/aws-amplify/amplify-js/issues/18) [#17](https://github.com/aws-amplify/amplify-js/issues/17) [#19](https://github.com/aws-amplify/amplify-js/issues/19) [#22](https://github.com/aws-amplify/amplify-js/issues/22)

# [6.6.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.5.3...@aws-amplify/core@6.6.0) (2024-11-20)

### Features

- **storage:** Integrity changes for storage browser ([#13909](https://github.com/aws-amplify/amplify-js/issues/13909)) ([ec7bf6f](https://github.com/aws-amplify/amplify-js/commit/ec7bf6ff2fb4af84425eca4f2d68c2bef7f49d03)), closes [#13478](https://github.com/aws-amplify/amplify-js/issues/13478) [#13474](https://github.com/aws-amplify/amplify-js/issues/13474)

## [6.5.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.5.2...@aws-amplify/core@6.5.3) (2024-11-13)

**Note:** Version bump only for package @aws-amplify/core

## [6.5.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.5.1...@aws-amplify/core@6.5.2) (2024-11-12)

### Bug Fixes

- **core:** Check for storage initialization errors ([#13938](https://github.com/aws-amplify/amplify-js/issues/13938)) ([0f50917](https://github.com/aws-amplify/amplify-js/commit/0f5091780046b9556b98300c29fb970a0358bd70))

## [6.5.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.5.0...@aws-amplify/core@6.5.1) (2024-10-31)

**Note:** Version bump only for package @aws-amplify/core

# [6.5.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.4.7...@aws-amplify/core@6.5.0) (2024-10-29)

### Features

- **data:** events client ([#13923](https://github.com/aws-amplify/amplify-js/issues/13923)) ([847fb51](https://github.com/aws-amplify/amplify-js/commit/847fb51acee1ee8585503625a6f73d67265217d0))

## [6.4.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.4.6...@aws-amplify/core@6.4.7) (2024-10-25)

**Note:** Version bump only for package @aws-amplify/core

## [6.4.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.4.5...@aws-amplify/core@6.4.6) (2024-10-21)

### Bug Fixes

- **core:** fixed cache.clear() not working as expected ([#13926](https://github.com/aws-amplify/amplify-js/issues/13926)) ([60de524](https://github.com/aws-amplify/amplify-js/commit/60de5246910486cdfaf5dc23b19668cdfd5892e6))

## [6.4.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.4.4...@aws-amplify/core@6.4.5) (2024-10-15)

### Bug Fixes

- Update useragent string with npm version ([#13903](https://github.com/aws-amplify/amplify-js/issues/13903)) ([541e463](https://github.com/aws-amplify/amplify-js/commit/541e46347ba10cd1cfc0bf080c9a45281cf0be4e))

## [6.4.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.4.3...@aws-amplify/core@6.4.4) (2024-10-05)

**Note:** Version bump only for package @aws-amplify/core

## [6.4.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.4.2...@aws-amplify/core@6.4.3) (2024-09-30)

**Note:** Version bump only for package @aws-amplify/core

## [6.4.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.4.1...@aws-amplify/core@6.4.2) (2024-09-17)

### Reverts

- Revert "Reapply "feat(core): resolve webcrypto from node:crypto for Node18 (#13599)" (#13775)" ([953d578](https://github.com/aws-amplify/amplify-js/commit/953d578fabd69ab8eb7bf494a50c5a15ebf0b74c)), closes [#13599](https://github.com/aws-amplify/amplify-js/issues/13599) [#13775](https://github.com/aws-amplify/amplify-js/issues/13775)

## [6.4.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.4.0...@aws-amplify/core@6.4.1) (2024-09-16)

**Note:** Version bump only for package @aws-amplify/core

# [6.4.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.3.13...@aws-amplify/core@6.4.0) (2024-09-04)

### Features

- **api-graphql:** pass authToken via subprotocol ([#13727](https://github.com/aws-amplify/amplify-js/issues/13727)) ([ced891c](https://github.com/aws-amplify/amplify-js/commit/ced891c2e4f6b0f1fdeaf44ab80cae9d585b6d15))

## [6.3.13](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.3.12...@aws-amplify/core@6.3.13) (2024-09-03)

**Note:** Version bump only for package @aws-amplify/core

## [6.3.12](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.3.11...@aws-amplify/core@6.3.12) (2024-08-26)

**Note:** Version bump only for package @aws-amplify/core

## [6.3.11](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.3.10...@aws-amplify/core@6.3.11) (2024-08-21)

**Note:** Version bump only for package @aws-amplify/core

## [6.3.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.3.9...@aws-amplify/core@6.3.10) (2024-08-15)

**Note:** Version bump only for package @aws-amplify/core

## [6.3.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.3.8...@aws-amplify/core@6.3.9) (2024-08-07)

**Note:** Version bump only for package @aws-amplify/core

## [6.3.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.3.7...@aws-amplify/core@6.3.8) (2024-08-05)

**Note:** Version bump only for package @aws-amplify/core

## [6.3.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.3.6...@aws-amplify/core@6.3.7) (2024-07-23)

**Note:** Version bump only for package @aws-amplify/core

## [6.3.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.3.5...@aws-amplify/core@6.3.6) (2024-07-22)

### Bug Fixes

- **aws-amplify:** createKeyValueStorageFromCookieStorageAdapter misses default path and secure values ([#13508](https://github.com/aws-amplify/amplify-js/issues/13508)) ([60a559f](https://github.com/aws-amplify/amplify-js/commit/60a559f612e092c76e1499f93547248312db46f2))

## [6.3.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.3.4...@aws-amplify/core@6.3.5) (2024-07-19)

**Note:** Version bump only for package @aws-amplify/core

## [6.3.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.3.3...@aws-amplify/core@6.3.4) (2024-07-08)

**Note:** Version bump only for package @aws-amplify/core

## [6.3.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.3.2...@aws-amplify/core@6.3.3) (2024-06-24)

**Note:** Version bump only for package @aws-amplify/core

## [6.3.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.3.1...@aws-amplify/core@6.3.2) (2024-06-07)

**Note:** Version bump only for package @aws-amplify/core

## [6.3.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.3.0...@aws-amplify/core@6.3.1) (2024-05-23)

**Note:** Version bump only for package @aws-amplify/core

# [6.3.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.2.1...@aws-amplify/core@6.3.0) (2024-05-23)

### Features

- **core:** validate if access and id tokens are valid cognito tokens ([#13385](https://github.com/aws-amplify/amplify-js/issues/13385)) ([0b72b32](https://github.com/aws-amplify/amplify-js/commit/0b72b32348dc63bbc11596a062338ee9ddfa9177))

### Reverts

- Revert "feat(core): validate if access and id tokens are valid cognito tokens (#13385)" (#13410) ([82d53fa](https://github.com/aws-amplify/amplify-js/commit/82d53fab4e47e988b26811cb8b6fe09abbdbda4b)), closes [#13385](https://github.com/aws-amplify/amplify-js/issues/13385) [#13410](https://github.com/aws-amplify/amplify-js/issues/13410)

## [6.2.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.2.0...@aws-amplify/core@6.2.1) (2024-05-13)

### Bug Fixes

- Prevent overwriting with fallbacks when updating endpoint ([#13330](https://github.com/aws-amplify/amplify-js/issues/13330)) ([d7b837e](https://github.com/aws-amplify/amplify-js/commit/d7b837edba0dff209fb4a596fcb4531ce0a66e21))
- Wait for endpoint creation to identify user ([#13353](https://github.com/aws-amplify/amplify-js/issues/13353)) ([f17cdf0](https://github.com/aws-amplify/amplify-js/commit/f17cdf0077387ee275bea245632f1a9b88089e1e))

# [6.2.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.1.0...@aws-amplify/core@6.2.0) (2024-05-07)

### Bug Fixes

- **core:** Always set login methods when parsing Gen2 config files ([#13315](https://github.com/aws-amplify/amplify-js/issues/13315)) ([f65cae2](https://github.com/aws-amplify/amplify-js/commit/f65cae2c0e288bec0d43fd1826dd224b4aa30a69))
- Prevent creating multiple endpoint ids ([a75ae7b](https://github.com/aws-amplify/amplify-js/commit/a75ae7b2d648ea45ad1fa9332ee95a00ba0d1d3b))

### Features

- **auth:** add a default deviceName when remembering device ([#13022](https://github.com/aws-amplify/amplify-js/issues/13022)) ([5f34186](https://github.com/aws-amplify/amplify-js/commit/5f3418678a06ac43ed8bf700649703c1cf280eeb))

# [6.1.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.0.28...@aws-amplify/core@6.1.0) (2024-04-29)

### Bug Fixes

- Fix SSR & AmplifyOutput types when using Gen2 configuration files ([#13247](https://github.com/aws-amplify/amplify-js/issues/13247)) ([f797dc5](https://github.com/aws-amplify/amplify-js/commit/f797dc539f57a55a325b227d8205813b122d7789))
- **geo:** update amplify config geo schema ([#13290](https://github.com/aws-amplify/amplify-js/issues/13290)) ([3cca682](https://github.com/aws-amplify/amplify-js/commit/3cca6822ad4b76ab8966654923363635d92587f0))

### Features

- **api-graphql:** alias authMode identityPool -> iam ([#13299](https://github.com/aws-amplify/amplify-js/issues/13299)) ([a5d176b](https://github.com/aws-amplify/amplify-js/commit/a5d176b3c9ec1cecd265740e8b4579327ef98e1f))

## [6.0.28](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@6.0.27...@aws-amplify/core@6.0.28) (2024-04-22)

### Bug Fixes

- **message overrides:** extract message content with Platform-Specific Overrides ([#12917](https://github.com/aws-amplify/amplify-js/issues/12917)) ([cb91437](https://github.com/aws-amplify/amplify-js/commit/cb914374263262c84c6337dddca1f17fb7dd204a))

## 6.0.27 (2024-04-02)

**Note:** Version bump only for package @aws-amplify/core

## 6.0.26 (2024-04-01)

**Note:** Version bump only for package @aws-amplify/core

## 6.0.25 (2024-03-30)

**Note:** Version bump only for package @aws-amplify/core

## 6.0.24 (2024-03-29)

**Note:** Version bump only for package @aws-amplify/core

## 6.0.23 (2024-03-25)

**Note:** Version bump only for package @aws-amplify/core

## 6.0.22 (2024-03-25)

**Note:** Version bump only for package @aws-amplify/core

## 6.0.21 (2024-03-19)

**Note:** Version bump only for package @aws-amplify/core

## 6.0.20 (2024-03-11)

**Note:** Version bump only for package @aws-amplify/core

## 6.0.19 (2024-03-05)

**Note:** Version bump only for package @aws-amplify/core

## 6.0.18 (2024-02-27)

**Note:** Version bump only for package @aws-amplify/core

## 6.0.17 (2024-02-19)

### Reverts

- Revert "chore(release): Publish" (#13027) ([f6f4f42](https://github.com/aws-amplify/amplify-js/commit/f6f4f42befa04ed3c1502fa0adf17c6700abfddf)), closes [#13027](https://github.com/aws-amplify/amplify-js/issues/13027)

## 6.0.16 (2024-02-09)

**Note:** Version bump only for package @aws-amplify/core

## 6.0.15 (2024-02-06)

**Note:** Version bump only for package @aws-amplify/core

## 6.0.14 (2024-02-01)

**Note:** Version bump only for package @aws-amplify/core

## 6.0.13 (2024-01-22)

**Note:** Version bump only for package @aws-amplify/core

## 6.0.12 (2024-01-12)

**Note:** Version bump only for package @aws-amplify/core

## 6.0.11 (2024-01-10)

**Note:** Version bump only for package @aws-amplify/core

## 6.0.10 (2024-01-04)

**Note:** Version bump only for package @aws-amplify/core

## 6.0.9 (2023-12-22)

**Note:** Version bump only for package @aws-amplify/core

## 6.0.8 (2023-12-18)

**Note:** Version bump only for package @aws-amplify/core

## 6.0.7 (2023-12-12)

**Note:** Version bump only for package @aws-amplify/core

## 6.0.6 (2023-12-05)

**Note:** Version bump only for package @aws-amplify/core

## 6.0.5 (2023-11-22)

**Note:** Version bump only for package @aws-amplify/core

## 6.0.4 (2023-11-20)

**Note:** Version bump only for package @aws-amplify/core

## 6.0.3 (2023-11-16)

**Note:** Version bump only for package @aws-amplify/core

## 6.0.2 (2023-11-13)

**Note:** Version bump only for package @aws-amplify/core

## 5.8.4 (2023-08-23)

**Note:** Version bump only for package @aws-amplify/core

## 5.8.3 (2023-08-22)

**Note:** Version bump only for package @aws-amplify/core

## 5.8.2 (2023-08-17)

**Note:** Version bump only for package @aws-amplify/core

## 5.8.1 (2023-08-10)

**Note:** Version bump only for package @aws-amplify/core

# [5.8.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.7.0...@aws-amplify/core@5.8.0) (2023-07-31)

### Features

- custom user agent Geo changes for UI handoff ([#11632](https://github.com/aws-amplify/amplify-js/issues/11632)) ([01bfa8f](https://github.com/aws-amplify/amplify-js/commit/01bfa8f692737bd14422f7dc2eae11ed00c19048))
- custom user agent InAppMessaging changes for UI handoff ([#11639](https://github.com/aws-amplify/amplify-js/issues/11639)) ([4d389da](https://github.com/aws-amplify/amplify-js/commit/4d389da22c9f39d5a5d7cd6df9116327a9d6a04e))
- custom user agent Storage changes for UI handoff ([#11627](https://github.com/aws-amplify/amplify-js/issues/11627)) ([b0231af](https://github.com/aws-amplify/amplify-js/commit/b0231af9d7fe631ef9e0e669df7a20802e3a21b3)), closes [#11656](https://github.com/aws-amplify/amplify-js/issues/11656) [#11657](https://github.com/aws-amplify/amplify-js/issues/11657)

# [5.7.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.6.0...@aws-amplify/core@5.7.0) (2023-07-20)

### Features

- custom user agent core changes for UI handoff ([#11602](https://github.com/aws-amplify/amplify-js/issues/11602)) ([7365c34](https://github.com/aws-amplify/amplify-js/commit/7365c34b28015af199dbfdb3713cc26e096d1213))

# [5.6.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.5.2...@aws-amplify/core@5.6.0) (2023-07-13)

### Bug Fixes

- **clients:** add missing export for getHashedPayload in RN ([#11528](https://github.com/aws-amplify/amplify-js/issues/11528)) ([b24b336](https://github.com/aws-amplify/amplify-js/commit/b24b33610b804870e17564917d93bb6f795453a0))
- **core:** add @types/node-fetch to runtime dependency ([#11560](https://github.com/aws-amplify/amplify-js/issues/11560)) ([0dab406](https://github.com/aws-amplify/amplify-js/commit/0dab4066d1c65251be62d442f4fba99dda1168fa))
- **s3:** add missing default content-type & support body.text() in RN & optimize retry ([#11537](https://github.com/aws-amplify/amplify-js/issues/11537)) ([33d858d](https://github.com/aws-amplify/amplify-js/commit/33d858d8d0ea112822e8b8289fc15761a053301d))
- **storage:** custom client base64 encoded SSE-C headers ([#11567](https://github.com/aws-amplify/amplify-js/issues/11567)) ([ee19046](https://github.com/aws-amplify/amplify-js/commit/ee190460c01250b693c163f83be412abf3acc234))

### Features

- **s3:** add s3 transfer handler ([#11482](https://github.com/aws-amplify/amplify-js/issues/11482)) ([53aa94f](https://github.com/aws-amplify/amplify-js/commit/53aa94f95a3959d5e490b17d91c9b65b52847359))
- **s3:** custom xhr transfer handler ([#11471](https://github.com/aws-amplify/amplify-js/issues/11471)) ([e1f2ca1](https://github.com/aws-amplify/amplify-js/commit/e1f2ca11f0179e51126e42360de19169ffc7c6e2))
- **s3:** implement listObjectsV2 ([#11504](https://github.com/aws-amplify/amplify-js/issues/11504)) ([0c43bb3](https://github.com/aws-amplify/amplify-js/commit/0c43bb3c3eaff0ed287953b44186a82da9169cd4))
- **s3:** implement multiparts upload APIs ([#11514](https://github.com/aws-amplify/amplify-js/issues/11514)) ([835b74f](https://github.com/aws-amplify/amplify-js/commit/835b74fa15a143f7490ffcfb7f5811594d5c5a8e))
- **s3:** omit double encoding of path for S3 when signing ([#11538](https://github.com/aws-amplify/amplify-js/issues/11538)) ([d46d2d1](https://github.com/aws-amplify/amplify-js/commit/d46d2d1d4263e3b8bcfc03af473d7445af12e5b7))
- **storage:** integrate custom s3 client ([#11542](https://github.com/aws-amplify/amplify-js/issues/11542)) ([fe05494](https://github.com/aws-amplify/amplify-js/commit/fe05494c75ab6d1561863f4dfaf1107bc1f256a6))

## [5.5.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.5.1...@aws-amplify/core@5.5.2) (2023-06-28)

### Bug Fixes

- Update `isReactNative` check to consider Expo as well ([#11555](https://github.com/aws-amplify/amplify-js/issues/11555)) ([60f7d3d](https://github.com/aws-amplify/amplify-js/commit/60f7d3d1b91ebe5fd80a4002c9c7f0db36d2f181))

## [5.5.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.5.0...@aws-amplify/core@5.5.1) (2023-06-21)

### Bug Fixes

- Update getAmplifyUserAgent to retain original interface ([#11535](https://github.com/aws-amplify/amplify-js/issues/11535)) ([dc84cc8](https://github.com/aws-amplify/amplify-js/commit/dc84cc8bfa7811b5f4f8ac2f7e5ea1b5edc54fe1))

# [5.5.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.4.0...@aws-amplify/core@5.5.0) (2023-06-20)

### Bug Fixes

- Add upkeep to platform/framework caches ([#11505](https://github.com/aws-amplify/amplify-js/issues/11505)) ([03aa356](https://github.com/aws-amplify/amplify-js/commit/03aa3560e921f08717594bdf679b62501bc6de77))
- **client:** correct clock skew from any response ([#11503](https://github.com/aws-amplify/amplify-js/issues/11503)) ([c1fa9c7](https://github.com/aws-amplify/amplify-js/commit/c1fa9c7363ca911dbd336c26478b39345de14a72))
- **core:** Angular web detection and other minor changes ([#11491](https://github.com/aws-amplify/amplify-js/issues/11491)) ([c0cb9b9](https://github.com/aws-amplify/amplify-js/commit/c0cb9b9795c1a3343bb9460c61f12500211f8442))
- React detection and Analytics batch upload ([#11478](https://github.com/aws-amplify/amplify-js/issues/11478)) ([f2b1740](https://github.com/aws-amplify/amplify-js/commit/f2b1740d6ea2b0b25397a02da7f9e6669768b3d7))
- Remove unused dependency ([#11524](https://github.com/aws-amplify/amplify-js/issues/11524)) ([aaf73d8](https://github.com/aws-amplify/amplify-js/commit/aaf73d8e0ddb8157d3ee2dac1f6706120b91224a))
- Storage action enum update ([82a96c9](https://github.com/aws-amplify/amplify-js/commit/82a96c9804797891a2b604ae3d6c82ea48f0a18c))
- **storage:** Add getProperties user agent action ([#11501](https://github.com/aws-amplify/amplify-js/issues/11501)) ([019b5b1](https://github.com/aws-amplify/amplify-js/commit/019b5b1115bebc92f2c44bbf285d1d916cb08492))

### Features

- Add custom user agent enhancements for Predictions ([#11437](https://github.com/aws-amplify/amplify-js/issues/11437)) ([424e9d4](https://github.com/aws-amplify/amplify-js/commit/424e9d46c9b218401472123c0c0d5cd240afe00d))
- **analytics:** Add reporting for updateEndpoint ([#11468](https://github.com/aws-amplify/amplify-js/issues/11468)) ([663a5ed](https://github.com/aws-amplify/amplify-js/commit/663a5ed1835d87911c21a42e34b1d2f0a2829bbd))
- **analytics:** Use custom user agent in all Analytics providers ([#11410](https://github.com/aws-amplify/amplify-js/issues/11410)) ([9fe4a5e](https://github.com/aws-amplify/amplify-js/commit/9fe4a5e43a7d671e76375833f9ce44b60bac05d7))
- **core:** API detection for 8 framework targets ([#11384](https://github.com/aws-amplify/amplify-js/issues/11384)) ([388f207](https://github.com/aws-amplify/amplify-js/commit/388f2074db0640f2d22aa7cd1a44d8eb8f2301d2))
- Custom user agent enhancement for api-rest ([#11457](https://github.com/aws-amplify/amplify-js/issues/11457)) ([4315ba0](https://github.com/aws-amplify/amplify-js/commit/4315ba05ad2e4463a4ef19431f20f8d5308cdc62))
- Custom user agent improvements for Storage ([#11425](https://github.com/aws-amplify/amplify-js/issues/11425)) ([fd04df4](https://github.com/aws-amplify/amplify-js/commit/fd04df40b6a07a864e2ded443a53f3efdf74931f))
- user agent enhancements - auth reduction ([#11465](https://github.com/aws-amplify/amplify-js/issues/11465)) ([f73abd2](https://github.com/aws-amplify/amplify-js/commit/f73abd2f3c9a377a4d14832c68ea2880a1372020))
- user agent enhancements - cross-category api>api-graphql>pubsub ([#11368](https://github.com/aws-amplify/amplify-js/issues/11368)) ([a88dda2](https://github.com/aws-amplify/amplify-js/commit/a88dda202919aa1d4dc2af48f33c3533d8626261))
- user agent enhancements: part1 core ([#11121](https://github.com/aws-amplify/amplify-js/issues/11121)) ([66d1fb5](https://github.com/aws-amplify/amplify-js/commit/66d1fb5a7c3d82621ce9a8c1e880fe81573387ba))

# [5.4.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.3.1...@aws-amplify/core@5.4.0) (2023-06-05)

### Bug Fixes

- address feedbacks ([2d6eecf](https://github.com/aws-amplify/amplify-js/commit/2d6eecfa4763a6cfb6aeaabedd49a530c6420dcd))
- **clients:** add react-native entrypoint for internal modules ([c1535dd](https://github.com/aws-amplify/amplify-js/commit/c1535ddbfb198dc669e8a00eda52323975b37dc6))
- **clients:** middleware chain revert after every invocation ([#11432](https://github.com/aws-amplify/amplify-js/issues/11432)) ([f576be5](https://github.com/aws-amplify/amplify-js/commit/f576be5ad4fd3e6625d5bc555fa8cbd4e1783f06))
- **retry:** add metadata to returns from retry middldeware ([#11212](https://github.com/aws-amplify/amplify-js/issues/11212)) ([7fc0540](https://github.com/aws-amplify/amplify-js/commit/7fc0540a44ffe4b70320996b0142ed18d6365303))

### Features

- **clients:** Add custom signature v4 signer ([#11273](https://github.com/aws-amplify/amplify-js/issues/11273)) ([41bb35a](https://github.com/aws-amplify/amplify-js/commit/41bb35aabac952006ad7ef5f8e60ab8782503317))
- **clients:** Add signing middleware ([#11323](https://github.com/aws-amplify/amplify-js/issues/11323)) ([de1ce7b](https://github.com/aws-amplify/amplify-js/commit/de1ce7b1d3fcc9b0fe042e08cfa58f705d8751da))
- **clients:** add useragent to cognito identity ([#11269](https://github.com/aws-amplify/amplify-js/issues/11269)) ([475f26b](https://github.com/aws-amplify/amplify-js/commit/475f26bc4d0c415ede4eaf4d5126023a43fb44de))
- **clients:** allow fetch handler to read body multiple times ([868fb4a](https://github.com/aws-amplify/amplify-js/commit/868fb4af05d35f76364014c74dd5f780959465c5))
- **clients:** basic types and fetch handler ([#11120](https://github.com/aws-amplify/amplify-js/issues/11120)) ([79f8ae8](https://github.com/aws-amplify/amplify-js/commit/79f8ae8c043df80b1b59a2ce87fe8527090837f8))
- **clients:** cognito identity client ([#11213](https://github.com/aws-amplify/amplify-js/issues/11213)) ([67e4017](https://github.com/aws-amplify/amplify-js/commit/67e40171385f02d0c9448fdc3e036d63e009ea34))
- **clients:** compose transfer handler with middleware & retry middleware ([#11188](https://github.com/aws-amplify/amplify-js/issues/11188)) ([85bc134](https://github.com/aws-amplify/amplify-js/commit/85bc134f1975eaab7c85b2c72f78e30946e226c2))
- **clients:** support CN partition by adding DNS suffix resolver ([#11311](https://github.com/aws-amplify/amplify-js/issues/11311)) ([9de2975](https://github.com/aws-amplify/amplify-js/commit/9de297519fdbaaf1e9b4ae98f12aed4137400222))
- **clients:** vendor TS types from pinpoint and cognito-identity clients ([#11393](https://github.com/aws-amplify/amplify-js/issues/11393)) ([9a8569a](https://github.com/aws-amplify/amplify-js/commit/9a8569ab98480ad96b53a7104366640c66343aa2))

## [5.3.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.3.0...@aws-amplify/core@5.3.1) (2023-05-27)

### Bug Fixes

- **core:** bundle react-native-url-polyfill to unblock jest test failure ([#11422](https://github.com/aws-amplify/amplify-js/issues/11422)) ([8137ee7](https://github.com/aws-amplify/amplify-js/commit/8137ee79ef2121ceaa6dfa1d9ce675370b38e26b))

# [5.3.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.2.0...@aws-amplify/core@5.3.0) (2023-05-12)

### Bug Fixes

- **core:** add URL polyfill for signer in react native ([#11362](https://github.com/aws-amplify/amplify-js/issues/11362)) ([720ac60](https://github.com/aws-amplify/amplify-js/commit/720ac606dede7d243f3d5ce08395fc6387a6f35d))

### Features

- **core:** refactor signer implementation to remove polyfill ([#11319](https://github.com/aws-amplify/amplify-js/issues/11319)) ([1603af3](https://github.com/aws-amplify/amplify-js/commit/1603af38ea7faa163f7fcb92fd09c056454c8a0a)), closes [#11273](https://github.com/aws-amplify/amplify-js/issues/11273) [#11307](https://github.com/aws-amplify/amplify-js/issues/11307) [#11310](https://github.com/aws-amplify/amplify-js/issues/11310) [#11120](https://github.com/aws-amplify/amplify-js/issues/11120) [#11320](https://github.com/aws-amplify/amplify-js/issues/11320)

# [5.2.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.1.13...@aws-amplify/core@5.2.0) (2023-05-04)

### Features

- **core:** Use lerna prepublishOnly version npm publish and use the … ([#11301](https://github.com/aws-amplify/amplify-js/issues/11301)) ([c682c5e](https://github.com/aws-amplify/amplify-js/commit/c682c5eb5189bd90ac3b05305056aeb91fe69176))

## [5.1.13](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.1.12...@aws-amplify/core@5.1.13) (2023-04-27)

**Note:** Version bump only for package @aws-amplify/core

## [5.1.12](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.1.11...@aws-amplify/core@5.1.12) (2023-04-20)

**Note:** Version bump only for package @aws-amplify/core

## [5.1.11](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.1.10...@aws-amplify/core@5.1.11) (2023-04-18)

**Note:** Version bump only for package @aws-amplify/core

## [5.1.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.1.9...@aws-amplify/core@5.1.10) (2023-04-13)

**Note:** Version bump only for package @aws-amplify/core

## [5.1.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.1.8...@aws-amplify/core@5.1.9) (2023-04-12)

**Note:** Version bump only for package @aws-amplify/core

## [5.1.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.1.7...@aws-amplify/core@5.1.8) (2023-04-06)

**Note:** Version bump only for package @aws-amplify/core

## [5.1.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.1.6...@aws-amplify/core@5.1.7) (2023-04-04)

**Note:** Version bump only for package @aws-amplify/core

## [5.1.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.1.5...@aws-amplify/core@5.1.6) (2023-03-30)

### Bug Fixes

- Codescanning alerts ([#11159](https://github.com/aws-amplify/amplify-js/issues/11159)) ([b19e0ba](https://github.com/aws-amplify/amplify-js/commit/b19e0bab948d995b70fb98ad5d935483b3e15d8d))

## [5.1.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.1.4...@aws-amplify/core@5.1.5) (2023-03-23)

**Note:** Version bump only for package @aws-amplify/core

## [5.1.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.1.3...@aws-amplify/core@5.1.4) (2023-03-21)

**Note:** Version bump only for package @aws-amplify/core

## [5.1.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.1.2...@aws-amplify/core@5.1.3) (2023-03-16)

**Note:** Version bump only for package @aws-amplify/core

## [5.1.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.1.1...@aws-amplify/core@5.1.2) (2023-03-13)

### Bug Fixes

- Run ts coverage check with test ([#11047](https://github.com/aws-amplify/amplify-js/issues/11047)) ([430bedf](https://github.com/aws-amplify/amplify-js/commit/430bedfd0d0618bd0093b488233521356feef787))

## [5.1.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.1.0...@aws-amplify/core@5.1.1) (2023-03-08)

**Note:** Version bump only for package @aws-amplify/core

# [5.1.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.0.16...@aws-amplify/core@5.1.0) (2023-03-06)

### Features

- **pubsub:** Typescript improvements and cleanup ([#10954](https://github.com/aws-amplify/amplify-js/issues/10954)) ([5147c5c](https://github.com/aws-amplify/amplify-js/commit/5147c5ce555d042722e2888fc423430f517b91b7))

## [5.0.16](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.0.15...@aws-amplify/core@5.0.16) (2023-02-24)

**Note:** Version bump only for package @aws-amplify/core

## [5.0.15](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.0.14...@aws-amplify/core@5.0.15) (2023-02-16)

### Reverts

- Revert "test: prepare integration test over dist folder" ([0508ab3](https://github.com/aws-amplify/amplify-js/commit/0508ab3809045ae20a921d75b4acec77da9dc55c))

## [5.0.14](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.0.13...@aws-amplify/core@5.0.14) (2023-02-09)

**Note:** Version bump only for package @aws-amplify/core

## [5.0.13](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.0.12...@aws-amplify/core@5.0.13) (2023-02-08)

**Note:** Version bump only for package @aws-amplify/core

## [5.0.12](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.0.11...@aws-amplify/core@5.0.12) (2023-01-30)

**Note:** Version bump only for package @aws-amplify/core

## [5.0.11](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.0.10...@aws-amplify/core@5.0.11) (2023-01-19)

### Bug Fixes

- **core:** undefined window bug with setItem on server ([#10871](https://github.com/aws-amplify/amplify-js/issues/10871)) ([9713a81](https://github.com/aws-amplify/amplify-js/commit/9713a81957733547102ad609464ecd69406ec45e))

## [5.0.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.0.9...@aws-amplify/core@5.0.10) (2023-01-13)

### Bug Fixes

- session cookies when SSR config enabled ([#10831](https://github.com/aws-amplify/amplify-js/issues/10831)) ([d34c01a](https://github.com/aws-amplify/amplify-js/commit/d34c01aa04599508e9473d128779bc8212343ece))

## [5.0.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.0.8...@aws-amplify/core@5.0.9) (2023-01-10)

**Note:** Version bump only for package @aws-amplify/core

## [5.0.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.0.7...@aws-amplify/core@5.0.8) (2022-12-27)

**Note:** Version bump only for package @aws-amplify/core

## [5.0.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.0.6...@aws-amplify/core@5.0.7) (2022-12-16)

**Note:** Version bump only for package @aws-amplify/core

## [5.0.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.0.5...@aws-amplify/core@5.0.6) (2022-12-15)

### Bug Fixes

- **core:** add cache-control header to cognito identity client ([#10753](https://github.com/aws-amplify/amplify-js/issues/10753)) ([dfbabaf](https://github.com/aws-amplify/amplify-js/commit/dfbabaf54dda902f1f77c4501e78f49e6a9397af))

## [5.0.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.0.4...@aws-amplify/core@5.0.5) (2022-12-06)

### Bug Fixes

- **@aws-amplify/core,@aws-amplify/auth:** Use identityPoolRegion param correctly ([#10709](https://github.com/aws-amplify/amplify-js/issues/10709)) ([b4d2769](https://github.com/aws-amplify/amplify-js/commit/b4d27695b3e196cd14b486b9a8db778c9951bc29)), closes [#6462](https://github.com/aws-amplify/amplify-js/issues/6462)

## [5.0.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.0.3...@aws-amplify/core@5.0.4) (2022-11-23)

**Note:** Version bump only for package @aws-amplify/core

## [5.0.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.0.2...@aws-amplify/core@5.0.3) (2022-11-19)

**Note:** Version bump only for package @aws-amplify/core

## [5.0.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.0.1...@aws-amplify/core@5.0.2) (2022-11-16)

**Note:** Version bump only for package @aws-amplify/core

## [5.0.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@5.0.0...@aws-amplify/core@5.0.1) (2022-11-11)

### Reverts

- Revert "chore: bump version for user agent to 5.0.1" (#10657) ([d98bf4c](https://github.com/aws-amplify/amplify-js/commit/d98bf4c9ae53523dd8a94f5586efd4a2c342f1de)), closes [#10657](https://github.com/aws-amplify/amplify-js/issues/10657) [#10655](https://github.com/aws-amplify/amplify-js/issues/10655)

# [5.0.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.7.12...@aws-amplify/core@5.0.0) (2022-11-09)

### Bug Fixes

- **@aws-amplify/core, @aws-amplify/analytics:** Fix guest credentials without Auth module ([#10596](https://github.com/aws-amplify/amplify-js/issues/10596)) ([f12dbb2](https://github.com/aws-amplify/amplify-js/commit/f12dbb29ef575bb5d28d7788db458246107801d3))

### Features

- Setup tslib & importHelpers to improve bundle size ([#10435](https://github.com/aws-amplify/amplify-js/pull/10435))
- Migrate auth and amazon-cognito-identity-js to use @aws-crypto/sha256-js ([#10523](https://github.com/aws-amplify/amplify-js/pull/10523))
- Remove miscellaneous deprecated exports & prototypes ([#10528](https://github.com/aws-amplify/amplify-js/pull/10528))
- Remove (most) default exports ([10461](https://github.com/aws-amplify/amplify-js/pull/10461))
- Expand \* exports to optimize tree-shaking ([#10555](https://github.com/aws-amplify/amplify-js/pull/10555))
- add a typescript coverage report mechanism ([#10551](https://github.com/aws-amplify/amplify-js/issues/10551)) ([8e8df55](https://github.com/aws-amplify/amplify-js/commit/8e8df55b449f8bae2fe962fe282613d1b818cc5a)), closes [#10379](https://github.com/aws-amplify/amplify-js/issues/10379)

## [4.7.11](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.7.10...@aws-amplify/core@4.7.11) (2022-10-27)

**Note:** Version bump only for package @aws-amplify/core

## [4.7.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.7.9...@aws-amplify/core@4.7.10) (2022-10-26)

### Bug Fixes

- remove dep on es2020.promise lib additions ([#10532](https://github.com/aws-amplify/amplify-js/issues/10532)) ([8ad200e](https://github.com/aws-amplify/amplify-js/commit/8ad200e7b98967d565e7abe29c2dfb971b9f52a1))

## [4.7.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.7.8...@aws-amplify/core@4.7.9) (2022-10-25)

### Bug Fixes

- **@aws-amplify/datastore:** introduce "settlement" guarantees to stop() and clear() ([#10450](https://github.com/aws-amplify/amplify-js/issues/10450)) ([16c535b](https://github.com/aws-amplify/amplify-js/commit/16c535beda9386a027c2805f29a359fbeb8bac15)), closes [#10449](https://github.com/aws-amplify/amplify-js/issues/10449)

## [4.7.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.7.7...@aws-amplify/core@4.7.8) (2022-10-14)

**Note:** Version bump only for package @aws-amplify/core

## [4.7.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.7.6...@aws-amplify/core@4.7.7) (2022-10-14)

**Note:** Version bump only for package @aws-amplify/core

## [4.7.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.7.4...@aws-amplify/core@4.7.6) (2022-09-30)

**Note:** Version bump only for package @aws-amplify/core

## [4.7.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.7.4...@aws-amplify/core@4.7.5) (2022-09-20)

**Note:** Version bump only for package @aws-amplify/core

## [4.7.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.7.3...@aws-amplify/core@4.7.4) (2022-09-08)

**Note:** Version bump only for package @aws-amplify/core

## [4.7.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.7.2...@aws-amplify/core@4.7.3) (2022-09-01)

**Note:** Version bump only for package @aws-amplify/core

## [4.7.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.7.1...@aws-amplify/core@4.7.2) (2022-08-23)

**Note:** Version bump only for package @aws-amplify/core

## [4.7.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.7.0...@aws-amplify/core@4.7.1) (2022-08-18)

**Note:** Version bump only for package @aws-amplify/core

# [4.7.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.6.1...@aws-amplify/core@4.7.0) (2022-08-16)

### Features

- **@aws-amplify/core:** Throw Error if body attribute passed to Sign… ([#10137](https://github.com/aws-amplify/amplify-js/issues/10137)) ([360bde2](https://github.com/aws-amplify/amplify-js/commit/360bde20716778b69af339f4f66b42c05ccf4639))

## [4.6.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.6.0...@aws-amplify/core@4.6.1) (2022-08-01)

**Note:** Version bump only for package @aws-amplify/core

# [4.6.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.5.10...@aws-amplify/core@4.6.0) (2022-07-28)

### Features

- **@aws-amplify/auth:** Auto sign in after sign up ([#10126](https://github.com/aws-amplify/amplify-js/issues/10126)) ([e54617f](https://github.com/aws-amplify/amplify-js/commit/e54617f2878244f0e391d2d49f5cd2e8a8c069f9)), closes [#6320](https://github.com/aws-amplify/amplify-js/issues/6320) [#3882](https://github.com/aws-amplify/amplify-js/issues/3882) [#3631](https://github.com/aws-amplify/amplify-js/issues/3631) [#6018](https://github.com/aws-amplify/amplify-js/issues/6018)

## [4.5.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.5.9...@aws-amplify/core@4.5.10) (2022-07-21)

**Note:** Version bump only for package @aws-amplify/core

## [4.5.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.5.8...@aws-amplify/core@4.5.9) (2022-07-07)

**Note:** Version bump only for package @aws-amplify/core

## [4.5.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.5.7...@aws-amplify/core@4.5.8) (2022-06-18)

**Note:** Version bump only for package @aws-amplify/core

## [4.5.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.5.6...@aws-amplify/core@4.5.7) (2022-06-15)

**Note:** Version bump only for package @aws-amplify/core

## [4.5.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.5.5...@aws-amplify/core@4.5.6) (2022-05-24)

**Note:** Version bump only for package @aws-amplify/core

## [4.5.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.5.4...@aws-amplify/core@4.5.5) (2022-05-23)

**Note:** Version bump only for package @aws-amplify/core

## [4.5.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.5.3...@aws-amplify/core@4.5.4) (2022-05-12)

**Note:** Version bump only for package @aws-amplify/core

## [4.5.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.5.2...@aws-amplify/core@4.5.3) (2022-05-03)

**Note:** Version bump only for package @aws-amplify/core

## [4.5.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.5.1...@aws-amplify/core@4.5.2) (2022-04-14)

### Bug Fixes

- PubSub - Resolve ts strict errors in the AWSAppSyncRealTimeProvider ([#9731](https://github.com/aws-amplify/amplify-js/issues/9731)) ([0c9c401](https://github.com/aws-amplify/amplify-js/commit/0c9c4018573df31f7e4739207be22eefb8bf8a56))

## [4.5.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.5.0...@aws-amplify/core@4.5.1) (2022-04-04)

**Note:** Version bump only for package @aws-amplify/core

# [4.5.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.4.2...@aws-amplify/core@4.5.0) (2022-03-28)

### Features

- PubSub Add Options objects for all Providers and fix: Spelling error and deprecation of old exports ([#9683](https://github.com/aws-amplify/amplify-js/issues/9683)) ([b535af2](https://github.com/aws-amplify/amplify-js/commit/b535af2133b5460c6e8e2fcfd89e1fe235872c27))

## [4.4.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.4.1...@aws-amplify/core@4.4.2) (2022-03-22)

### Bug Fixes

- **@aws-amplify/datastore:** fix mutations to retry indefinitely on network error ([#9724](https://github.com/aws-amplify/amplify-js/issues/9724)) ([5371380](https://github.com/aws-amplify/amplify-js/commit/53713804b79df9c69ac29b75ffc576b4c2002507))

## [4.4.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.4.0...@aws-amplify/core@4.4.1) (2022-03-10)

**Note:** Version bump only for package @aws-amplify/core

# [4.4.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.3.14...@aws-amplify/core@4.4.0) (2022-02-28)

### Bug Fixes

- pin async storage to 1.15.17 ([#9570](https://github.com/aws-amplify/amplify-js/issues/9570)) ([bc5235a](https://github.com/aws-amplify/amplify-js/commit/bc5235ac0d15242f7a13457f40999b5331823395))

### Features

- **@aws-amplify/core:** add ui protected channel ([#9554](https://github.com/aws-amplify/amplify-js/issues/9554)) ([86e07fc](https://github.com/aws-amplify/amplify-js/commit/86e07fcd3ebbaa5f03d65ed8009b7531ee300e39))

## [4.3.14](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.3.13...@aws-amplify/core@4.3.14) (2022-02-03)

**Note:** Version bump only for package @aws-amplify/core

## [4.3.13](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.3.12...@aws-amplify/core@4.3.13) (2022-01-27)

### Reverts

- Revert "chore(amplify-js): consolidate react-native dependencies (#9451)" (#9473) ([9924a31](https://github.com/aws-amplify/amplify-js/commit/9924a31397761fccd03f53336d754b98367199a8)), closes [#9451](https://github.com/aws-amplify/amplify-js/issues/9451) [#9473](https://github.com/aws-amplify/amplify-js/issues/9473)

## [4.3.12](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.3.11...@aws-amplify/core@4.3.12) (2022-01-07)

### Bug Fixes

- **@aws-amplify/core:** use empty string as translation ([#9403](https://github.com/aws-amplify/amplify-js/issues/9403)) ([512fd99](https://github.com/aws-amplify/amplify-js/commit/512fd99a0d6751ffc3915de6a043d2e6fe01f1e4))

### Reverts

- Revert "fix(@aws-amplify/core): use empty string as translation (#9403)" (#9436) ([711259b](https://github.com/aws-amplify/amplify-js/commit/711259b482d721f66d4acc728ff96a8a26965787)), closes [#9403](https://github.com/aws-amplify/amplify-js/issues/9403) [#9436](https://github.com/aws-amplify/amplify-js/issues/9436)

## [4.3.11](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.3.10...@aws-amplify/core@4.3.11) (2021-12-16)

**Note:** Version bump only for package @aws-amplify/core

## [4.3.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.3.9...@aws-amplify/core@4.3.10) (2021-12-03)

**Note:** Version bump only for package @aws-amplify/core

## [4.3.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.3.8...@aws-amplify/core@4.3.9) (2021-12-02)

### Bug Fixes

- **@aws-amplify/core:** Use undefined for default sequence token with CloudWatch logging ([#9181](https://github.com/aws-amplify/amplify-js/issues/9181)) ([6f217aa](https://github.com/aws-amplify/amplify-js/commit/6f217aa89e672fc4665816756994e6245b19227e))

## [4.3.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.3.7...@aws-amplify/core@4.3.8) (2021-11-18)

**Note:** Version bump only for package @aws-amplify/core

## [4.3.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.3.6...@aws-amplify/core@4.3.7) (2021-11-16)

**Note:** Version bump only for package @aws-amplify/core

## [4.3.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.3.5...@aws-amplify/core@4.3.6) (2021-11-12)

### Reverts

- Revert "chore:update-@aws-sdk/client-cloudwatch-logs (#9189)" (#9192) ([36fe262](https://github.com/aws-amplify/amplify-js/commit/36fe26243247c45cdb3f5391d91f0641c9cd5b99)), closes [#9189](https://github.com/aws-amplify/amplify-js/issues/9189) [#9192](https://github.com/aws-amplify/amplify-js/issues/9192)

## [4.3.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.3.4...@aws-amplify/core@4.3.5) (2021-11-09)

**Note:** Version bump only for package @aws-amplify/core

## [4.3.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.3.3...@aws-amplify/core@4.3.4) (2021-10-28)

**Note:** Version bump only for package @aws-amplify/core

## [4.3.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.3.2...@aws-amplify/core@4.3.3) (2021-10-21)

**Note:** Version bump only for package @aws-amplify/core

## [4.3.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.3.1...@aws-amplify/core@4.3.2) (2021-10-07)

**Note:** Version bump only for package @aws-amplify/core

## [4.3.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.3.0...@aws-amplify/core@4.3.1) (2021-09-30)

**Note:** Version bump only for package @aws-amplify/core

# [4.3.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.2.11...@aws-amplify/core@4.3.0) (2021-09-24)

### Features

- **Geo:** add Geo class and amazonLocationServicesProvider - Geo milestone 1 - PR 3/6 ([#8618](https://github.com/aws-amplify/amplify-js/issues/8618)) ([4c1c1fe](https://github.com/aws-amplify/amplify-js/commit/4c1c1fe786f2a4b1d7e1260491357a248dd6d084))
- **Geo:** getAvailableMaps and getDefaultMap - Geo milestone 1 - PR 4 ([#8620](https://github.com/aws-amplify/amplify-js/issues/8620)) ([229f93e](https://github.com/aws-amplify/amplify-js/commit/229f93edf1bc07de26aebe28f26f3066d3e31a74))
- **Geo:** searchByCoordinates - Geo milestone 1 - PR 6 ([#8622](https://github.com/aws-amplify/amplify-js/issues/8622)) ([ae725c0](https://github.com/aws-amplify/amplify-js/commit/ae725c0f2d55ba95d4ecc76e46506a888e6b67c5))
- **Geo:** searchByText - Geo milestone 1 - PR 5 ([#8621](https://github.com/aws-amplify/amplify-js/issues/8621)) ([5346ae1](https://github.com/aws-amplify/amplify-js/commit/5346ae17dcf5672b3c25c46f483af53d5f5dfc93))
- **Geo:** update aws-amplify/core - Geo milestone 1 - PR 2/6 ([#8617](https://github.com/aws-amplify/amplify-js/issues/8617)) ([3a83893](https://github.com/aws-amplify/amplify-js/commit/3a8389388ebe7a521d0b78c58e24d91b53db4799))

## [4.2.11](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.2.10...@aws-amplify/core@4.2.11) (2021-09-22)

### Bug Fixes

- **@aws-amplify/core:** error throwing and tests ([#8916](https://github.com/aws-amplify/amplify-js/issues/8916)) ([0918a07](https://github.com/aws-amplify/amplify-js/commit/0918a0741d1e90bc67cbfb10f3eb6ce719fee58e))

## [4.2.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.2.9...@aws-amplify/core@4.2.10) (2021-09-17)

**Note:** Version bump only for package @aws-amplify/core

## [4.2.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.2.8...@aws-amplify/core@4.2.9) (2021-09-09)

**Note:** Version bump only for package @aws-amplify/core

## [4.2.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.2.7...@aws-amplify/core@4.2.8) (2021-09-07)

**Note:** Version bump only for package @aws-amplify/core

## [4.2.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.2.6...@aws-amplify/core@4.2.7) (2021-09-04)

**Note:** Version bump only for package @aws-amplify/core

## [4.2.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.2.5...@aws-amplify/core@4.2.6) (2021-09-02)

**Note:** Version bump only for package @aws-amplify/core

## [4.2.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.2.4...@aws-amplify/core@4.2.5) (2021-08-26)

**Note:** Version bump only for package @aws-amplify/core

## [4.2.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.2.3...@aws-amplify/core@4.2.4) (2021-08-19)

**Note:** Version bump only for package @aws-amplify/core

## [4.2.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.2.2...@aws-amplify/core@4.2.3) (2021-08-12)

### Bug Fixes

- **@aws-amplify/core:** Include refreshToken in UniversalStorage for SSR ([#7374](https://github.com/aws-amplify/amplify-js/issues/7374)) ([1e0887b](https://github.com/aws-amplify/amplify-js/commit/1e0887bdc45e178f04229c888051ecf10d2bfabc))

## [4.2.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.2.1...@aws-amplify/core@4.2.2) (2021-07-28)

**Note:** Version bump only for package @aws-amplify/core

## [4.2.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.2.0...@aws-amplify/core@4.2.1) (2021-07-22)

**Note:** Version bump only for package @aws-amplify/core

# [4.2.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.1.3...@aws-amplify/core@4.2.0) (2021-07-16)

### Features

- core/cloudwatch-logging ([#8588](https://github.com/aws-amplify/amplify-js/issues/8588)) ([6f28c7e](https://github.com/aws-amplify/amplify-js/commit/6f28c7e94ae8d41b37490292ff3547505100c6b2))

## [4.1.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.1.2...@aws-amplify/core@4.1.3) (2021-07-08)

**Note:** Version bump only for package @aws-amplify/core

## [4.1.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.1.1...@aws-amplify/core@4.1.2) (2021-06-24)

### Bug Fixes

- **@aws-amplify/auth:** switching unauthenticated users to authenticated users ([40cc22f](https://github.com/aws-amplify/amplify-js/commit/40cc22f8b332e4748c85504ca8e2ac2713fd87d1))

## [4.1.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.1.0...@aws-amplify/core@4.1.1) (2021-06-18)

**Note:** Version bump only for package @aws-amplify/core

# [4.1.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.0.3...@aws-amplify/core@4.1.0) (2021-06-10)

### Bug Fixes

- remove RN-specific peerDeps to correctly hoist core in npm@7 ([#8368](https://github.com/aws-amplify/amplify-js/issues/8368)) ([9cc5218](https://github.com/aws-amplify/amplify-js/commit/9cc52186e687d6782b41581959380bd7f534e5d2))

### Features

- added log queue and size safety to cloudwatch provider ([ae2f198](https://github.com/aws-amplify/amplify-js/commit/ae2f198b1e96c232f52f4ce9d613c4f3d94a0718))
- adding more methods to the cloudwatchlogger ([263c637](https://github.com/aws-amplify/amplify-js/commit/263c6376fffd48e9c080aab8141d55cd6e31d135))
- initial setup for the cloudwatch logger and provider ([57a7d4c](https://github.com/aws-amplify/amplify-js/commit/57a7d4c9add70170c69e7fad89f59c4d0efe779d))
- moved CloudLogger logic to ConsoleLogger ([93db90d](https://github.com/aws-amplify/amplify-js/commit/93db90d041c7ca697e5993003a4fb105a3821cbe))

## [4.0.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.0.1...@aws-amplify/core@4.0.3) (2021-05-26)

### Bug Fixes

- **@aws-amplify/api-rest:** Improve Clock Drift/Skew Logic ([#8319](https://github.com/aws-amplify/amplify-js/issues/8319)) ([8448b4f](https://github.com/aws-amplify/amplify-js/commit/8448b4fe1f995f0d6056bcb46dd0fb2023fb197d))
- added expiration to ICredentials type ([6553676](https://github.com/aws-amplify/amplify-js/commit/6553676ae2f5add5705dedd1b66a7e19c064cee1))
- remove Cognito Identity Id from storage on SignIn/SignOut ([#8278](https://github.com/aws-amplify/amplify-js/issues/8278)) ([ef358a7](https://github.com/aws-amplify/amplify-js/commit/ef358a761cf74d16b61172cd1a75b4bc6cfd2bdf))

## [4.0.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@4.0.0...@aws-amplify/core@4.0.1) (2021-05-14)

**Note:** Version bump only for package @aws-amplify/core

# [4.0.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.8.23...@aws-amplify/core@4.0.0) (2021-05-11)

- chore!: Upgrade to @react-native-async-storage/async-storage (#8250) ([1de4853](https://github.com/aws-amplify/amplify-js/commit/1de48531b68e3c53c3b7dbf4487da4578cb79888)), closes [#8250](https://github.com/aws-amplify/amplify-js/issues/8250)

### BREAKING CHANGES

- Upgrade from React Native AsyncStorage to @react-native-async-storage/async-storage

Co-authored-by: Ashish Nanda <ashish.nanda.5591@gmail.com>
Co-authored-by: Ivan Artemiev <29709626+iartemiev@users.noreply.github.com>

## [3.8.23](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.8.22...@aws-amplify/core@3.8.23) (2021-05-06)

**Note:** Version bump only for package @aws-amplify/core

## [3.8.22](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.8.21...@aws-amplify/core@3.8.22) (2021-04-15)

**Note:** Version bump only for package @aws-amplify/core

## [3.8.21](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.8.20...@aws-amplify/core@3.8.21) (2021-03-25)

**Note:** Version bump only for package @aws-amplify/core

## [3.8.20](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.8.19...@aws-amplify/core@3.8.20) (2021-03-18)

**Note:** Version bump only for package @aws-amplify/core

## [3.8.19](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.8.18...@aws-amplify/core@3.8.19) (2021-03-12)

**Note:** Version bump only for package @aws-amplify/core

## [3.8.18](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.8.17...@aws-amplify/core@3.8.18) (2021-03-08)

**Note:** Version bump only for package @aws-amplify/core

## [3.8.17](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.8.16...@aws-amplify/core@3.8.17) (2021-03-03)

**Note:** Version bump only for package @aws-amplify/core

## [3.8.16](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.8.15...@aws-amplify/core@3.8.16) (2021-02-25)

**Note:** Version bump only for package @aws-amplify/core

## [3.8.15](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.8.14...@aws-amplify/core@3.8.15) (2021-02-18)

**Note:** Version bump only for package @aws-amplify/core

## [3.8.14](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.8.13...@aws-amplify/core@3.8.14) (2021-02-15)

**Note:** Version bump only for package @aws-amplify/core

## [3.8.13](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.8.12...@aws-amplify/core@3.8.13) (2021-02-09)

### Reverts

- Revert "chore: bump aws-sdk to 3.4.1 (#7674)" (#7716) ([f142314](https://github.com/aws-amplify/amplify-js/commit/f1423144cf73304f3dc048233b35c831c9a1742d)), closes [#7674](https://github.com/aws-amplify/amplify-js/issues/7674) [#7716](https://github.com/aws-amplify/amplify-js/issues/7716)

## [3.8.12](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.8.11...@aws-amplify/core@3.8.12) (2021-02-03)

**Note:** Version bump only for package @aws-amplify/core

## [3.8.11](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.8.10...@aws-amplify/core@3.8.11) (2021-02-01)

**Note:** Version bump only for package @aws-amplify/core

## [3.8.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.8.9...@aws-amplify/core@3.8.10) (2021-01-29)

**Note:** Version bump only for package @aws-amplify/core

## [3.8.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.8.8...@aws-amplify/core@3.8.9) (2021-01-07)

**Note:** Version bump only for package @aws-amplify/core

## [3.8.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.8.7...@aws-amplify/core@3.8.8) (2020-12-17)

### Bug Fixes

- **@aws-amplify/core:** use addEventListener for Reachability ([#7407](https://github.com/aws-amplify/amplify-js/issues/7407)) ([cd1db8f](https://github.com/aws-amplify/amplify-js/commit/cd1db8f99aa2499936792ddb8267a8a951603434))

## [3.8.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.8.6...@aws-amplify/core@3.8.7) (2020-12-10)

### Bug Fixes

- **@aws-amplify/core:** refresh manually after TTL has passed ([#7288](https://github.com/aws-amplify/amplify-js/issues/7288)) ([74b895c](https://github.com/aws-amplify/amplify-js/commit/74b895c45e629edc5ecf333e2769f222ae500834))

## [3.8.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.8.5...@aws-amplify/core@3.8.6) (2020-11-30)

**Note:** Version bump only for package @aws-amplify/core

## [3.8.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.8.4...@aws-amplify/core@3.8.5) (2020-11-23)

**Note:** Version bump only for package @aws-amplify/core

## [3.8.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.8.3...@aws-amplify/core@3.8.4) (2020-11-20)

**Note:** Version bump only for package @aws-amplify/core

## [3.8.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.8.2...@aws-amplify/core@3.8.3) (2020-11-13)

**Note:** Version bump only for package @aws-amplify/core

## [3.8.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.8.1...@aws-amplify/core@3.8.2) (2020-11-03)

**Note:** Version bump only for package @aws-amplify/core

## [3.8.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.8.0...@aws-amplify/core@3.8.1) (2020-10-31)

### Bug Fixes

- **amazon-cognito-identity-js:** update random implementation ([#7090](https://github.com/aws-amplify/amplify-js/issues/7090)) ([7048453](https://github.com/aws-amplify/amplify-js/commit/70484532da8a9953384b00b223b2b3ba0c0e845e))

# [3.8.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.7.0...@aws-amplify/core@3.8.0) (2020-10-29)

### Features

- **@aws-amplify/datastore:** add Selective Sync ([#7001](https://github.com/aws-amplify/amplify-js/issues/7001)) ([8fa348b](https://github.com/aws-amplify/amplify-js/commit/8fa348b8ba708434992d97557b0fceebbf7abe9a))

# [3.7.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.6.0...@aws-amplify/core@3.7.0) (2020-10-15)

### Features

- **@aws-amplify/core:** add worker support to reachability ([#6956](https://github.com/aws-amplify/amplify-js/issues/6956)) ([ebb20c1](https://github.com/aws-amplify/amplify-js/commit/ebb20c1c970eea5dc32288f4dfda9c2cc959ac10))

# [3.6.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.5.5...@aws-amplify/core@3.6.0) (2020-10-01)

### Features

- **@aws-amplify/datastore:** support indexeddb adapter on web worker ([#6874](https://github.com/aws-amplify/amplify-js/issues/6874)) ([e43e181](https://github.com/aws-amplify/amplify-js/commit/e43e18195ca201fa61bd0dfb1b18c06c3262f825))

## [3.5.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.5.4...@aws-amplify/core@3.5.5) (2020-09-25)

### Bug Fixes

- Add files with Amplify.register to sideEffects array ([#6867](https://github.com/aws-amplify/amplify-js/issues/6867)) ([58ddbf8](https://github.com/aws-amplify/amplify-js/commit/58ddbf8811e44695d97b6ab8be8f7cd2a2242921))

## [3.5.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.5.3...@aws-amplify/core@3.5.4) (2020-09-16)

### Bug Fixes

- **@aws-amplify/auth:** No Auth module registered in Amplify ([#6811](https://github.com/aws-amplify/amplify-js/issues/6811)) ([cfa00d3](https://github.com/aws-amplify/amplify-js/commit/cfa00d32ce942faba72a8064173ba5fc9cba17bd))

## [3.5.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.5.2...@aws-amplify/core@3.5.3) (2020-09-15)

**Note:** Version bump only for package @aws-amplify/core

## [3.5.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.5.1...@aws-amplify/core@3.5.2) (2020-09-10)

**Note:** Version bump only for package @aws-amplify/core

## [3.5.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.5.0...@aws-amplify/core@3.5.1) (2020-09-03)

**Note:** Version bump only for package @aws-amplify/core

# [3.5.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.4.7...@aws-amplify/core@3.5.0) (2020-09-03)

### Features

- **SSR:** withSSRContext ([#6146](https://github.com/aws-amplify/amplify-js/issues/6146)) ([1cb1afd](https://github.com/aws-amplify/amplify-js/commit/1cb1afd1e56135908dceb2ef6403f0b3e78067fe))

## [3.4.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.4.6...@aws-amplify/core@3.4.7) (2020-09-01)

### Bug Fixes

- **@aws-amplify/core:** get new guest credentials if identity id isn't found ([#6618](https://github.com/aws-amplify/amplify-js/issues/6618)) ([7b904bf](https://github.com/aws-amplify/amplify-js/commit/7b904bf8647a39e5bdb683d9767aaba69ab932f3))

## [3.4.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.4.5...@aws-amplify/core@3.4.6) (2020-08-19)

**Note:** Version bump only for package @aws-amplify/core

## [3.4.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.4.4...@aws-amplify/core@3.4.5) (2020-08-06)

**Note:** Version bump only for package @aws-amplify/core

## [3.4.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.4.3...@aws-amplify/core@3.4.4) (2020-07-27)

**Note:** Version bump only for package @aws-amplify/core

## [3.4.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.4.2...@aws-amplify/core@3.4.3) (2020-07-22)

**Note:** Version bump only for package @aws-amplify/core

## [3.4.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.4.1...@aws-amplify/core@3.4.2) (2020-07-09)

**Note:** Version bump only for package @aws-amplify/core

## [3.4.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.4.0...@aws-amplify/core@3.4.1) (2020-07-07)

**Note:** Version bump only for package @aws-amplify/core

# [3.4.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.3.3...@aws-amplify/core@3.4.0) (2020-06-18)

### Bug Fixes

- **@aws-amplify/core:** retry federation refresh token on network error ([#5728](https://github.com/aws-amplify/amplify-js/issues/5728)) ([bd07ee8](https://github.com/aws-amplify/amplify-js/commit/bd07ee8e8b987021e58b9c25d5e1ef524aa4abbc))

### Features

- **core:** expose observable for testing ([#6042](https://github.com/aws-amplify/amplify-js/issues/6042)) ([05257da](https://github.com/aws-amplify/amplify-js/commit/05257da6604917ab1a54accbfc9945c6bbbbb22b))
- Automatically handle clock drift/skew for API calls ([#5869](https://github.com/aws-amplify/amplify-js/issues/5869)) ([6218ff6](https://github.com/aws-amplify/amplify-js/commit/6218ff62269056f46d65760c3ec61baadb3742f4))

## [3.3.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.3.2...@aws-amplify/core@3.3.3) (2020-06-09)

**Note:** Version bump only for package @aws-amplify/core

## [3.3.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.3.1...@aws-amplify/core@3.3.2) (2020-06-04)

**Note:** Version bump only for package @aws-amplify/core

## [3.3.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.3.0...@aws-amplify/core@3.3.1) (2020-06-03)

**Note:** Version bump only for package @aws-amplify/core

# [3.3.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.2.9...@aws-amplify/core@3.3.0) (2020-06-02)

### Bug Fixes

- **@aws-amplify/datastore:** Allow partial subscriptions. ([#5968](https://github.com/aws-amplify/amplify-js/issues/5968)) ([3331e9a](https://github.com/aws-amplify/amplify-js/commit/3331e9a713b38bb672aca5dc667ecef30b8820ce))

### Features

- **@aws-amplify/datastore:** Sync Status Notification. Performance Improvements. ([#5942](https://github.com/aws-amplify/amplify-js/issues/5942)) ([67fac50](https://github.com/aws-amplify/amplify-js/commit/67fac50cd734338ac76797d06111fc5ca911bd48))

## [3.2.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.2.8...@aws-amplify/core@3.2.9) (2020-05-26)

### Bug Fixes

- **core:** bump SDK verion to gamma.2 ([#5909](https://github.com/aws-amplify/amplify-js/issues/5909)) ([3bd2d25](https://github.com/aws-amplify/amplify-js/commit/3bd2d2509c2db59cffd7ac81c08ac4f9ef298198))

## [3.2.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.2.7...@aws-amplify/core@3.2.8) (2020-05-22)

**Note:** Version bump only for package @aws-amplify/core

## [3.2.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.2.6...@aws-amplify/core@3.2.7) (2020-05-14)

### Bug Fixes

- **@aws-amplify/core:** Correctly log retry error object ([#5699](https://github.com/aws-amplify/amplify-js/issues/5699)) ([825ed73](https://github.com/aws-amplify/amplify-js/commit/825ed73218ae3074c536da2d3e444bb965506a97))

## [3.2.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.2.5...@aws-amplify/core@3.2.6) (2020-04-30)

### Reverts

- Revert "Upgrade aws-sdk clients to beta4 (#5575)" (#5577) ([f2dcabb](https://github.com/aws-amplify/amplify-js/commit/f2dcabb78110c0bab84780d045d046fabf97b6f4)), closes [#5575](https://github.com/aws-amplify/amplify-js/issues/5575) [#5577](https://github.com/aws-amplify/amplify-js/issues/5577)

## [3.2.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.2.4...@aws-amplify/core@3.2.5) (2020-04-24)

**Note:** Version bump only for package @aws-amplify/core

## [3.2.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.2.3...@aws-amplify/core@3.2.4) (2020-04-14)

### Bug Fixes

- **@aws-amplify/api-graphql:** Add missing @aws-amplify/pubsub… ([#5352](https://github.com/aws-amplify/amplify-js/issues/5352)) ([ffb6514](https://github.com/aws-amplify/amplify-js/commit/ffb6514ab2aa14e09d2aa0df0da110585b5a713f))

## [3.2.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.2.2...@aws-amplify/core@3.2.3) (2020-04-08)

**Note:** Version bump only for package @aws-amplify/core

## [3.2.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.2.1...@aws-amplify/core@3.2.2) (2020-04-07)

**Note:** Version bump only for package @aws-amplify/core

## [3.2.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.2.0...@aws-amplify/core@3.2.1) (2020-04-03)

**Note:** Version bump only for package @aws-amplify/core

# [3.2.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.1.2...@aws-amplify/core@3.2.0) (2020-04-02)

### Features

- **@aws-amplify/ui-components:** I18n Support ([#4979](https://github.com/aws-amplify/amplify-js/issues/4979)) ([6f3e37c](https://github.com/aws-amplify/amplify-js/commit/6f3e37cf1d764455475bc4aee689bd3fbe71dd3e))
- **@aws-amplify/ui-components:** User agent tracking for UI component packages ([#4804](https://github.com/aws-amplify/amplify-js/issues/4804)) ([15a0a2f](https://github.com/aws-amplify/amplify-js/commit/15a0a2fadeb96543721a6733faeb509efc26e1e2))

## [3.1.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.1.1...@aws-amplify/core@3.1.2) (2020-04-01)

**Note:** Version bump only for package @aws-amplify/core

## [3.1.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@3.1.0...@aws-amplify/core@3.1.1) (2020-04-01)

**Note:** Version bump only for package @aws-amplify/core

# [3.1.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@2.3.0...@aws-amplify/core@3.1.0) (2020-03-31)

### Bug Fixes

- **@aws-amplify/core:** expose tree-shaking for Webpack ([d1e5616](https://github.com/aws-amplify/amplify-js/commit/d1e561609e2f1098fc0f12aa2a2411042d7d4e12))
- **core, auth, aws-amplify-react:** fix tests ([bdd162c](https://github.com/aws-amplify/amplify-js/commit/bdd162c2dd03488168a299f8dd8c554f76ca8a12))

### Features

- **@aws-amplify/core:** [Delivers [#168673137](https://github.com/aws-amplify/amplify-js/issues/168673137)] Migrate core category to aws sdk V3 ([#4077](https://github.com/aws-amplify/amplify-js/issues/4077)) ([beb73a4](https://github.com/aws-amplify/amplify-js/commit/beb73a4b1c051654750f5bdc3b20cde3a3aba37d))
- **@aws-amplify/core:** publish ES2015/ESM artifacts ([d73d5e1](https://github.com/aws-amplify/amplify-js/commit/d73d5e14b5e6a46b36dc00045029693a229046d4))
- append amplify user agent to all V3 SDK calls ([#4564](https://github.com/aws-amplify/amplify-js/issues/4564)) ([175d4c3](https://github.com/aws-amplify/amplify-js/commit/175d4c34ccb9cd5674c228db14513827d1c80d3f))

### Reverts

- Revert "Publish" ([1319d31](https://github.com/aws-amplify/amplify-js/commit/1319d319b69717e76660fbfa6f1a845195c6d635))

# [2.3.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@2.2.6...@aws-amplify/core@2.3.0) (2020-03-30)

### Features

- **@aws-amplify/datastore:** Make DataStore available in aws-amplify… ([#5202](https://github.com/aws-amplify/amplify-js/issues/5202)) ([c9c020d](https://github.com/aws-amplify/amplify-js/commit/c9c020d6d13c5678ce15c738f7eaebec39e2b48a))

## [2.2.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@2.2.5...@aws-amplify/core@2.2.6) (2020-03-25)

### Bug Fixes

- **core:** move react-native dependency from dev ([fedf0b3](https://github.com/aws-amplify/amplify-js/commit/fedf0b331cb8e2263f0c7b7ae57bac5d8f69c888))
- **core:** revert dep addition. Add to peer and devDeps ([b2a22e5](https://github.com/aws-amplify/amplify-js/commit/b2a22e53532663328b200761ce1ecf35495acbd1))

## [2.2.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@2.2.4...@aws-amplify/core@2.2.5) (2020-02-28)

**Note:** Version bump only for package @aws-amplify/core

## [2.2.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@2.2.2...@aws-amplify/core@2.2.4) (2020-02-07)

### Bug Fixes

- **@aws-amplify/core:** Revert environment checks ([#4803](https://github.com/aws-amplify/amplify-js/issues/4803)) ([d92f3d8](https://github.com/aws-amplify/amplify-js/commit/d92f3d8df057c8dcb61a77b648bfc6d9efc2fd02)), closes [#4678](https://github.com/aws-amplify/amplify-js/issues/4678)
- **@aws-amplify/core:** Support clock skew ([#4844](https://github.com/aws-amplify/amplify-js/issues/4844)) ([8156cc9](https://github.com/aws-amplify/amplify-js/commit/8156cc9c84713541c236e41a8928f03368052bef))
- **cache:** export correct module for RN ([#4786](https://github.com/aws-amplify/amplify-js/issues/4786)) ([a15730c](https://github.com/aws-amplify/amplify-js/commit/a15730cc50692d9d31a0f586c3544b3dcdbea659))

## [2.2.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@2.2.1...@aws-amplify/core@2.2.2) (2020-01-10)

### Bug Fixes

- **@aws-amplify/auth:** [#3855](https://github.com/aws-amplify/amplify-js/issues/3855) add identityPoolRegion to core parser ([#3856](https://github.com/aws-amplify/amplify-js/issues/3856)) ([eb3ab44](https://github.com/aws-amplify/amplify-js/commit/eb3ab4409d7e1e06130095f29b76284d72612390))
- [#4311](https://github.com/aws-amplify/amplify-js/issues/4311) Update main entry field to point to CJS builds instead of webpack bundles ([#4678](https://github.com/aws-amplify/amplify-js/issues/4678)) ([54fbdf4](https://github.com/aws-amplify/amplify-js/commit/54fbdf4b1393567735fb7b5f4144db273f1a5f6a))

## [2.2.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@2.2.0...@aws-amplify/core@2.2.1) (2019-12-18)

### Bug Fixes

- **@aws-amplify/core:** add zen-observable dependency ([#4511](https://github.com/aws-amplify/amplify-js/issues/4511)) ([ada4518](https://github.com/aws-amplify/amplify-js/commit/ada451811e3e654ac6b620c86874978c8ec589cc))

# [2.2.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@2.1.0...@aws-amplify/core@2.2.0) (2019-12-03)

### Features

- **analytics:** Allow sending batch events ([#4377](https://github.com/aws-amplify/amplify-js/issues/4377)) ([6e7d693](https://github.com/aws-amplify/amplify-js/commit/6e7d69337d8fe8295f03d4d0441576cffb2a21f9))

# [2.1.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@1.2.4...@aws-amplify/core@2.1.0) (2019-11-15)

### Features

- enable watch mode for builds ([#4358](https://github.com/aws-amplify/amplify-js/issues/4358)) ([055e530](https://github.com/aws-amplify/amplify-js/commit/055e5308efc308ae6beee78f8963bb2f812e1f85))

## [1.2.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@1.2.3...@aws-amplify/core@1.2.4) (2019-10-29)

**Note:** Version bump only for package @aws-amplify/core

## [1.2.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/core@1.2.2...@aws-amplify/core@1.2.3) (2019-10-23)

**Note:** Version bump only for package @aws-amplify/core

## [1.2.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.2.0...@aws-amplify/core@1.2.2) (2019-10-10)

**Note:** Version bump only for package @aws-amplify/core

# [1.2.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.1.2...@aws-amplify/core@1.2.0) (2019-10-10)

### Bug Fixes

- Pinpoint analytics stopSession event ([422806e](https://github.com/aws/aws-amplify/commit/422806e58525490b0fec28055a818024f2681769)), closes [#3786](https://github.com/aws/aws-amplify/issues/3786) [#3042](https://github.com/aws/aws-amplify/issues/3042)
- **@aws-amplify/core:** removed unused variables ([#3926](https://github.com/aws/aws-amplify/issues/3926)) ([b63ac72](https://github.com/aws/aws-amplify/commit/b63ac72ab2c3d5e9105885d3f7a4f1a346878c81))

### Features

- Added Prettier formatting ([4dfd9aa](https://github.com/aws/aws-amplify/commit/4dfd9aa9ab900307c9d17c68448a6ca4aa08fd5a))

## [1.1.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.1.1...@aws-amplify/core@1.1.2) (2019-09-05)

**Note:** Version bump only for package @aws-amplify/core

## [1.1.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.1.0...@aws-amplify/core@1.1.1) (2019-09-04)

**Note:** Version bump only for package @aws-amplify/core

# [1.1.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.31...@aws-amplify/core@1.1.0) (2019-08-05)

### Bug Fixes

- **@aws-amplify/core:** Await for cache.setItem when setting federatedInfo ([8691c42](https://github.com/aws/aws-amplify/commit/8691c42)), closes [#3296](https://github.com/aws/aws-amplify/issues/3296)
- **@aws-amplify/core:** Edge browser misidentified as Chrome ([#3807](https://github.com/aws/aws-amplify/issues/3807)) ([302d95b](https://github.com/aws/aws-amplify/commit/302d95b))

### Features

- Add support for local testing of api and storage ([#3806](https://github.com/aws/aws-amplify/issues/3806)) ([4390e8e](https://github.com/aws/aws-amplify/commit/4390e8e))

## [1.0.31](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.30...@aws-amplify/core@1.0.31) (2019-07-31)

**Note:** Version bump only for package @aws-amplify/core

## [1.0.30](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.29...@aws-amplify/core@1.0.30) (2019-07-30)

**Note:** Version bump only for package @aws-amplify/core

## [1.0.29](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.28...@aws-amplify/core@1.0.29) (2019-07-18)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.28"></a>

## [1.0.28](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.28-unstable.3...@aws-amplify/core@1.0.28) (2019-06-17)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.28-unstable.3"></a>

## [1.0.28-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.28-unstable.2...@aws-amplify/core@1.0.28-unstable.3) (2019-06-14)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.28-unstable.2"></a>

## [1.0.28-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.28-unstable.1...@aws-amplify/core@1.0.28-unstable.2) (2019-06-10)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.28-unstable.1"></a>

## [1.0.28-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.27...@aws-amplify/core@1.0.28-unstable.1) (2019-05-24)

### Bug Fixes

- **@aws-amplify/core:** guard for Symbol reference ([ac76a7f](https://github.com/aws/aws-amplify/commit/ac76a7f))
- **aws-amplify:** manual version bumps for lerna issue ([9ce5a72](https://github.com/aws/aws-amplify/commit/9ce5a72))

<a name="1.0.27"></a>

## [1.0.27](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.27-unstable.0...@aws-amplify/core@1.0.27) (2019-05-14)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.27-unstable.0"></a>

## [1.0.27-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.26...@aws-amplify/core@1.0.27-unstable.0) (2019-05-13)

### Bug Fixes

- **@aws-amplify/core:** bind console error to console ([d01062c](https://github.com/aws/aws-amplify/commit/d01062c))

<a name="1.0.26"></a>

## [1.0.26](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.26-unstable.2...@aws-amplify/core@1.0.26) (2019-05-06)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.26-unstable.2"></a>

## [1.0.26-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.26-unstable.1...@aws-amplify/core@1.0.26-unstable.2) (2019-05-06)

### Features

- **pubsub:** Enable PubSub to work along side GraphQL/Appsync ([d8c972d](https://github.com/aws/aws-amplify/commit/d8c972d))

<a name="1.0.26-unstable.1"></a>

## [1.0.26-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.26-unstable.0...@aws-amplify/core@1.0.26-unstable.1) (2019-04-17)

### Bug Fixes

- **@aws-amplify/core:** directly return if input is null for function transferKeyToUpperCase/transferKeyToLowerCase ([1600cfb](https://github.com/aws/aws-amplify/commit/1600cfb))

<a name="1.0.26-unstable.0"></a>

## [1.0.26-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.25...@aws-amplify/core@1.0.26-unstable.0) (2019-04-12)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.25"></a>

## [1.0.25](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.25-unstable.1...@aws-amplify/core@1.0.25) (2019-04-04)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.25-unstable.1"></a>

## [1.0.25-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.25-unstable.0...@aws-amplify/core@1.0.25-unstable.1) (2019-04-04)

### Bug Fixes

- **@aws-amplify/core:** fix hub this binding issue ([#3002](https://github.com/aws/aws-amplify/issues/3002)) ([8fba1a2](https://github.com/aws/aws-amplify/commit/8fba1a2))

<a name="1.0.25-unstable.0"></a>

## [1.0.25-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.24...@aws-amplify/core@1.0.25-unstable.0) (2019-04-02)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.24"></a>

## [1.0.24](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.24-unstable.1...@aws-amplify/core@1.0.24) (2019-03-28)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.24-unstable.1"></a>

## [1.0.24-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.24-unstable.0...@aws-amplify/core@1.0.24-unstable.1) (2019-03-28)

### Features

- **core:** Hub refactor and tests ([7ac5bcf](https://github.com/aws/aws-amplify/commit/7ac5bcf))

<a name="1.0.24-unstable.0"></a>

## [1.0.24-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.23...@aws-amplify/core@1.0.24-unstable.0) (2019-03-22)

### Bug Fixes

- **core:** Remove unneeded Hub.dispatch and Hub.listen ([#2919](https://github.com/aws/aws-amplify/issues/2919)) ([aea7fa9](https://github.com/aws/aws-amplify/commit/aea7fa9)), closes [#2623](https://github.com/aws/aws-amplify/issues/2623)

<a name="1.0.23"></a>

## [1.0.23](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.23-unstable.3...@aws-amplify/core@1.0.23) (2019-03-04)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.23-unstable.3"></a>

## [1.0.23-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.23-unstable.2...@aws-amplify/core@1.0.23-unstable.3) (2019-03-04)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.23-unstable.2"></a>

## [1.0.23-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.23-unstable.1...@aws-amplify/core@1.0.23-unstable.2) (2019-02-27)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.23-unstable.1"></a>

## [1.0.23-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.23-unstable.0...@aws-amplify/core@1.0.23-unstable.1) (2019-02-27)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.23-unstable.0"></a>

## [1.0.23-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.22...@aws-amplify/core@1.0.23-unstable.0) (2019-01-10)

### Bug Fixes

- **@aws-amplify/core:** storage, avoid to sync twice ([919c82a](https://github.com/aws/aws-amplify/commit/919c82a))

<a name="1.0.22"></a>

## [1.0.22](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.22-unstable.0...@aws-amplify/core@1.0.22) (2019-01-10)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.22-unstable.0"></a>

## [1.0.22-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.21...@aws-amplify/core@1.0.22-unstable.0) (2018-12-26)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.21"></a>

## [1.0.21](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.21-unstable.0...@aws-amplify/core@1.0.21) (2018-12-26)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.21-unstable.0"></a>

## [1.0.21-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.20...@aws-amplify/core@1.0.21-unstable.0) (2018-12-22)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.20"></a>

## [1.0.20](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.20-unstable.0...@aws-amplify/core@1.0.20) (2018-12-13)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.20-unstable.0"></a>

## [1.0.20-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.19...@aws-amplify/core@1.0.20-unstable.0) (2018-12-07)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.19"></a>

## [1.0.19](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.19-unstable.4...@aws-amplify/core@1.0.19) (2018-12-03)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.19-unstable.4"></a>

## [1.0.19-unstable.4](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.19-unstable.3...@aws-amplify/core@1.0.19-unstable.4) (2018-11-27)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.19-unstable.3"></a>

## [1.0.19-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.19-unstable.2...@aws-amplify/core@1.0.19-unstable.3) (2018-11-26)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.19-unstable.2"></a>

## [1.0.19-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.19-unstable.1...@aws-amplify/core@1.0.19-unstable.2) (2018-11-20)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.19-unstable.1"></a>

## [1.0.19-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.19-unstable.0...@aws-amplify/core@1.0.19-unstable.1) (2018-11-19)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.19-unstable.0"></a>

## [1.0.19-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.18...@aws-amplify/core@1.0.19-unstable.0) (2018-11-15)

### Bug Fixes

- **@aws-amplify/core:** check if window.addListener is a function ([eaca33b](https://github.com/aws/aws-amplify/commit/eaca33b))

<a name="1.0.18"></a>

## [1.0.18](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.18-unstable.0...@aws-amplify/core@1.0.18) (2018-11-12)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.18-unstable.0"></a>

## [1.0.18-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.17...@aws-amplify/core@1.0.18-unstable.0) (2018-11-06)

### Bug Fixes

- **@aws-amplify/core:** use existing methods to load localStorage ([3ec680d](https://github.com/aws/aws-amplify/commit/3ec680d))

<a name="1.0.17"></a>

## [1.0.17](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.17-unstable.0...@aws-amplify/core@1.0.17) (2018-11-01)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.17-unstable.0"></a>

## [1.0.17-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.16...@aws-amplify/core@1.0.17-unstable.0) (2018-10-30)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.16"></a>

## [1.0.16](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.16-unstable.3...@aws-amplify/core@1.0.16) (2018-10-17)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.16-unstable.3"></a>

## [1.0.16-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.16-unstable.2...@aws-amplify/core@1.0.16-unstable.3) (2018-10-16)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.16-unstable.2"></a>

## [1.0.16-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.16-unstable.1...@aws-amplify/core@1.0.16-unstable.2) (2018-10-08)

### Bug Fixes

- **@aws-amplify/auth:** throw error when failed to sync items from AsyncStorage into Memory ([85c3f32](https://github.com/aws/aws-amplify/commit/85c3f32))

<a name="1.0.16-unstable.1"></a>

## [1.0.16-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.16-unstable.0...@aws-amplify/core@1.0.16-unstable.1) (2018-10-05)

### Bug Fixes

- **@aws-amplify/core:** fix aws-sdk version to 2.329.0 ([#1851](https://github.com/aws/aws-amplify/issues/1851)) ([c6519e7](https://github.com/aws/aws-amplify/commit/c6519e7))

<a name="1.0.16-unstable.0"></a>

## [1.0.16-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.15-unstable.1...@aws-amplify/core@1.0.16-unstable.0) (2018-10-05)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.15"></a>

## [1.0.15](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.15-unstable.1...@aws-amplify/core@1.0.15) (2018-10-04)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.15-unstable.1"></a>

## [1.0.15-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.15-unstable.0...@aws-amplify/core@1.0.15-unstable.1) (2018-10-03)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.15-unstable.0"></a>

## [1.0.15-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.14-unstable.1...@aws-amplify/core@1.0.15-unstable.0) (2018-10-03)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.14"></a>

## [1.0.14](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.14-unstable.1...@aws-amplify/core@1.0.14) (2018-10-03)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.14-unstable.1"></a>

## [1.0.14-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.14-unstable.0...@aws-amplify/core@1.0.14-unstable.1) (2018-10-01)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.14-unstable.0"></a>

## [1.0.14-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.13...@aws-amplify/core@1.0.14-unstable.0) (2018-09-28)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.13"></a>

## [1.0.13](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.13-unstable.1...@aws-amplify/core@1.0.13) (2018-09-27)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.13-unstable.1"></a>

## [1.0.13-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.13-unstable.0...@aws-amplify/core@1.0.13-unstable.1) (2018-09-25)

### Bug Fixes

- **@aws-amplify/core:** remove the polyfill ([728bf20](https://github.com/aws/aws-amplify/commit/728bf20))

<a name="1.0.13-unstable.0"></a>

## [1.0.13-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.12...@aws-amplify/core@1.0.13-unstable.0) (2018-09-22)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.12"></a>

## [1.0.12](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.12-unstable.0...@aws-amplify/core@1.0.12) (2018-09-21)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.12-unstable.0"></a>

## [1.0.12-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.10...@aws-amplify/core@1.0.12-unstable.0) (2018-09-21)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.11"></a>

## [1.0.11](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.10...@aws-amplify/core@1.0.11) (2018-09-21)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.10"></a>

## [1.0.10](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.9...@aws-amplify/core@1.0.10) (2018-09-17)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.9"></a>

## [1.0.9](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.8...@aws-amplify/core@1.0.9) (2018-09-12)

### Bug Fixes

- **aws-amplify:** update the version of aws-sdk to latest ([482402d](https://github.com/aws/aws-amplify/commit/482402d))

<a name="1.0.8"></a>

## [1.0.8](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.8-unstable.2...@aws-amplify/core@1.0.8) (2018-09-09)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.8-unstable.2"></a>

## [1.0.8-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.8-unstable.1...@aws-amplify/core@1.0.8-unstable.2) (2018-09-05)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.8-unstable.1"></a>

## [1.0.8-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.7...@aws-amplify/core@1.0.8-unstable.1) (2018-08-30)

### Bug Fixes

- **@aws-amplify/core:** check if window object exists for browser usage ([3596c9e](https://github.com/aws/aws-amplify/commit/3596c9e))

<a name="1.0.7"></a>

## [1.0.7](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.6-unstable.1...@aws-amplify/core@1.0.7) (2018-08-28)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.6-unstable.1"></a>

## [1.0.6-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.6-unstable.0...@aws-amplify/core@1.0.6-unstable.1) (2018-08-20)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.6-unstable.0"></a>

## [1.0.6-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.5...@aws-amplify/core@1.0.6-unstable.0) (2018-08-19)

### Bug Fixes

- **aws-amplify-angular:** Angular rollup ([#1441](https://github.com/aws/aws-amplify/issues/1441)) ([eb84e01](https://github.com/aws/aws-amplify/commit/eb84e01))

<a name="1.0.5"></a>

## [1.0.5](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.5-unstable.0...@aws-amplify/core@1.0.5) (2018-08-14)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.5-unstable.0"></a>

## [1.0.5-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.4...@aws-amplify/core@1.0.5-unstable.0) (2018-08-09)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.4"></a>

## [1.0.4](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.3-unstable.1...@aws-amplify/core@1.0.4) (2018-08-06)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.3-unstable.1"></a>

## [1.0.3-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.3...@aws-amplify/core@1.0.3-unstable.1) (2018-08-06)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.3"></a>

## [1.0.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.3-unstable.0...@aws-amplify/core@1.0.3) (2018-07-28)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.3-unstable.0"></a>

## [1.0.3-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.2...@aws-amplify/core@1.0.3-unstable.0) (2018-07-26)

### Bug Fixes

- **aws-amplify:** use method get instead of getPromise for credentials ([f15d74f](https://github.com/aws/aws-amplify/commit/f15d74f))

<a name="1.0.2"></a>

## [1.0.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.2-unstable.0...@aws-amplify/core@1.0.2) (2018-07-19)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.2-unstable.0"></a>

## [1.0.2-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.1...@aws-amplify/core@1.0.2-unstable.0) (2018-07-19)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.1"></a>

## [1.0.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.1-unstable.2...@aws-amplify/core@1.0.1) (2018-07-18)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.1-unstable.2"></a>

## [1.0.1-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.1-unstable.1...@aws-amplify/core@1.0.1-unstable.2) (2018-07-18)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.1-unstable.1"></a>

## [1.0.1-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.1...@aws-amplify/core@1.0.1-unstable.1) (2018-07-18)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.1-unstable.0"></a>

## [1.0.1-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.1...@aws-amplify/core@1.0.1-unstable.0) (2018-07-18)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.1-next.2"></a>

## [1.0.1-next.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.1-next.1...@aws-amplify/core@1.0.1-next.2) (2018-06-28)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.1-next.1"></a>

## [1.0.1-next.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.1-next.1...@aws-amplify/core@1.0.1-next.1) (2018-06-28)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.1-next.0"></a>

## [1.0.1-next.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.1-next.1...@aws-amplify/core@1.0.1-next.0) (2018-06-28)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.1-next.1"></a>

## [1.0.1-next.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/core@1.0.1-next.0...@aws-amplify/core@1.0.1-next.1) (2018-06-28)

**Note:** Version bump only for package @aws-amplify/core

<a name="1.0.1-next.0"></a>

## 1.0.1-next.0 (2018-06-28)

**Note:** Version bump only for package @aws-amplify/core

<a name="0.1.3-unstable.0"></a>

## 0.1.3-unstable.0 (2018-06-27)

**Note:** Version bump only for package @aws-amplify/core
