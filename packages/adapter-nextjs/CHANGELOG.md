# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.7.0 (2025-05-09)

### Bug Fixes

- **adapter-nextjs:** add api dir to the distribution list ([6b2d06b](https://github.com/beelineloans/amplify-js/commit/6b2d06b78eb5430f958bc59e7048cb47eb824595))
- **adapter-nextjs:** align with js-cookie on the client handling double encoded cookie names ([#12280](https://github.com/beelineloans/amplify-js/issues/12280)) ([a08bf5c](https://github.com/beelineloans/amplify-js/commit/a08bf5c80deade5dff10a80f7d2de653ee9f8319))
- **adapter-nextjs:** correct the wrong directory included in distribution ([6095a4e](https://github.com/beelineloans/amplify-js/commit/6095a4e7c34c974c1c2788b21562f7585d632cd0))
- **adapter-nextjs:** create jwt verifier once ([#13825](https://github.com/beelineloans/amplify-js/issues/13825)) ([88f9eef](https://github.com/beelineloans/amplify-js/commit/88f9eef11f143663da4a5abbff1098b3a1dd704a))
- **adapter-nextjs:** duplicate response Set-Cookie headers in pages router ([#13765](https://github.com/beelineloans/amplify-js/issues/13765)) ([3fedf63](https://github.com/beelineloans/amplify-js/commit/3fedf6347823611ef5e28554911cf65c1419fce5))
- **adapter-nextjs:** ensure to use meaningful exception on config resolution ([b06a7e4](https://github.com/beelineloans/amplify-js/commit/b06a7e46fa61aebbae24dfd9cf66f36886e07179))
- **adapter-nextjs:** getAmplifyConfig may not return config in the pages router ([#12011](https://github.com/beelineloans/amplify-js/issues/12011)) ([50b0deb](https://github.com/beelineloans/amplify-js/commit/50b0debc69689135cd8a1f92a548f468f340e5ea))
- **adapter-nextjs:** remove the constraint of calling createServerRunner only once ([091f681](https://github.com/beelineloans/amplify-js/commit/091f681b502cfee7ae4df178388cea052d7eb9fb))
- **adapter-nextjs:** remove usage of node http ([#11970](https://github.com/beelineloans/amplify-js/issues/11970)) ([64e86c6](https://github.com/beelineloans/amplify-js/commit/64e86c663d4d5d2cd6f55797466325f1efe9dfc5))
- **adapter-nextjs:** secure: false is not set for localhost on sign-in ([#14231](https://github.com/beelineloans/amplify-js/issues/14231)) ([677f466](https://github.com/beelineloans/amplify-js/commit/677f466716c2467f441642c357a7bbe33f5a1dbe))
- **adapter-nextjs:** server-side sign out not working with Firefox and Safari ([#14246](https://github.com/beelineloans/amplify-js/issues/14246)) ([b940a23](https://github.com/beelineloans/amplify-js/commit/b940a23d111138cc19000c0fee5280b1c1fe0851))
- **adapter-nextjs:** Set-Cookie headers incorrectly set with getServerSideProps context ([#13388](https://github.com/beelineloans/amplify-js/issues/13388)) ([47f0f8b](https://github.com/beelineloans/amplify-js/commit/47f0f8b69e43491b6dc9993f01759cc028ed6d25))
- **adapter-nextjs:** update the cookie name encoding function ([40b8f7e](https://github.com/beelineloans/amplify-js/commit/40b8f7e8be163b8ccd62c8ccdfe60b396be64cc7))
- **adapter:** fix the runWithAmplifyServerContext operation return type ([13f23a2](https://github.com/beelineloans/amplify-js/commit/13f23a237446572c7d76370d77d7cb83adc32007))
- **aws-amplify:** createKeyValueStorageFromCookieStorageAdapter misses default path and secure values ([#13508](https://github.com/beelineloans/amplify-js/issues/13508)) ([60a559f](https://github.com/beelineloans/amplify-js/commit/60a559f612e092c76e1499f93547248312db46f2))
- bump package versions ([#13254](https://github.com/beelineloans/amplify-js/issues/13254)) ([aa490b9](https://github.com/beelineloans/amplify-js/commit/aa490b9bcbd2a442d9726937cfa59ef8b7859306))
- Client type explicit default type arg ([#12580](https://github.com/beelineloans/amplify-js/issues/12580)) ([4953a58](https://github.com/beelineloans/amplify-js/commit/4953a584b95db10dd528c6d1814d8bd47a33ee3d))
- **core:** build in CookieSerializeOptions def ([#14213](https://github.com/beelineloans/amplify-js/issues/14213)) ([406157d](https://github.com/beelineloans/amplify-js/commit/406157df09ea25a8b3d4d42ee65104cde8886fe9))
- **core:** make AmplifyOutputs category types as unknown ([#14153](https://github.com/beelineloans/amplify-js/issues/14153)) ([5dbfbf3](https://github.com/beelineloans/amplify-js/commit/5dbfbf3f83799b7691fa4d51a61726326a22f1e5))
- export generateClient return types; don't throw error in genClient ([#12577](https://github.com/beelineloans/amplify-js/issues/12577)) ([c69c562](https://github.com/beelineloans/amplify-js/commit/c69c5628458e49d705f2c58dc942bbbc7b9e60f4))
- Fix SSR & AmplifyOutput types when using Gen2 configuration files ([#13247](https://github.com/beelineloans/amplify-js/issues/13247)) ([f797dc5](https://github.com/beelineloans/amplify-js/commit/f797dc539f57a55a325b227d8205813b122d7789))
- server/generateModelsProperty bug ([#12610](https://github.com/beelineloans/amplify-js/issues/12610)) ([a04a462](https://github.com/beelineloans/amplify-js/commit/a04a462e5beef4d5eba813aa905fa6fcf1b4a8b6))
- **storage|aws-amplify:** export server apis from the subpaths ([#11910](https://github.com/beelineloans/amplify-js/issues/11910)) ([23fa46a](https://github.com/beelineloans/amplify-js/commit/23fa46a9c714273449861baf12bfa6a2ebd1ce9e))
- Update test references to removed export ([#12042](https://github.com/beelineloans/amplify-js/issues/12042)) ([c39db56](https://github.com/beelineloans/amplify-js/commit/c39db561ec6b866aea491246dbba3ddf5439d2f3))

### Features

- **adapter-core:** initial implementation of adapter-nextjs ([0093374](https://github.com/beelineloans/amplify-js/commit/0093374730a18b6434db98ed2064286b8d007906))
- **adapter-nextjs:** remove the need of calling parseAmplifyConfig in withAmplify ([c2a98db](https://github.com/beelineloans/amplify-js/commit/c2a98db38ed81e5cd539bf333265203c9dfe1151))
- **adapter-nextjs:** support next.js 15 ([#13947](https://github.com/beelineloans/amplify-js/issues/13947)) ([341eee2](https://github.com/beelineloans/amplify-js/commit/341eee293b772f0c71e667ccce4ebdca993513ff))
- **adapter-nextjs:** support sending lang param to managed login ([#14322](https://github.com/beelineloans/amplify-js/issues/14322)) ([d11c5ce](https://github.com/beelineloans/amplify-js/commit/d11c5ce413219cc88b7b68fb5b2c2c9050a5c6b1))
- add data-schema client ([#12552](https://github.com/beelineloans/amplify-js/issues/12552)) ([922eb86](https://github.com/beelineloans/amplify-js/commit/922eb86d030a6b50d05da2191a6d6c8f3b40dcdd))
- **api:** add custom endpoint support to API ([#14086](https://github.com/beelineloans/amplify-js/issues/14086)) ([ca2e4b8](https://github.com/beelineloans/amplify-js/commit/ca2e4b87a456dfe9a027e49bdcd912a2cba8e59d))
- **api:** expose generateClient from /server subpath ([#12691](https://github.com/beelineloans/amplify-js/issues/12691)) ([f4d3873](https://github.com/beelineloans/amplify-js/commit/f4d3873c546f2117eccfd40cef043e115c8de7bf))
- change JS target to ES2020 ([#12365](https://github.com/beelineloans/amplify-js/issues/12365)) ([381b201](https://github.com/beelineloans/amplify-js/commit/381b2010afb0ca72d392307d4da64af3ca146d6f))
- **core:** validate if access and id tokens are valid cognito tokens ([#13385](https://github.com/beelineloans/amplify-js/issues/13385)) ([0b72b32](https://github.com/beelineloans/amplify-js/commit/0b72b32348dc63bbc11596a062338ee9ddfa9177))
- **data:** add custom header support to data schema client ([#12559](https://github.com/beelineloans/amplify-js/issues/12559)) ([2b1db67](https://github.com/beelineloans/amplify-js/commit/2b1db67a8fec5f58a1a70f362e43979685a615d5))
- **repo:** set up rollup to emit esm and cjs artifacts ([#12522](https://github.com/beelineloans/amplify-js/issues/12522)) ([903a012](https://github.com/beelineloans/amplify-js/commit/903a0123e51f69ff3476b6b15aa89a73b750f9dc))
- ssr support for graphql ([#12430](https://github.com/beelineloans/amplify-js/issues/12430)) ([6f4d984](https://github.com/beelineloans/amplify-js/commit/6f4d98474db133959560232e3e4804ca84c4ba89))
- support server-side auth flows with Cognito managed login ([#14168](https://github.com/beelineloans/amplify-js/issues/14168)) ([825d338](https://github.com/beelineloans/amplify-js/commit/825d338021964a48ffab07d7b5961c5afa63a50e)), closes [#13788](https://github.com/beelineloans/amplify-js/issues/13788) [#13801](https://github.com/beelineloans/amplify-js/issues/13801) [#13827](https://github.com/beelineloans/amplify-js/issues/13827) [#13839](https://github.com/beelineloans/amplify-js/issues/13839) [#13840](https://github.com/beelineloans/amplify-js/issues/13840) [#13841](https://github.com/beelineloans/amplify-js/issues/13841) [#14103](https://github.com/beelineloans/amplify-js/issues/14103) [#14112](https://github.com/beelineloans/amplify-js/issues/14112) [#14114](https://github.com/beelineloans/amplify-js/issues/14114) [#14115](https://github.com/beelineloans/amplify-js/issues/14115) [#14119](https://github.com/beelineloans/amplify-js/issues/14119) [#14125](https://github.com/beelineloans/amplify-js/issues/14125) [#14116](https://github.com/beelineloans/amplify-js/issues/14116) [#14134](https://github.com/beelineloans/amplify-js/issues/14134) [#14132](https://github.com/beelineloans/amplify-js/issues/14132) [#14141](https://github.com/beelineloans/amplify-js/issues/14141) [#14152](https://github.com/beelineloans/amplify-js/issues/14152) [#14169](https://github.com/beelineloans/amplify-js/issues/14169)
- Upgrade TypeDoc & rebuild our API documentation ([#13012](https://github.com/beelineloans/amplify-js/issues/13012)) ([1509592](https://github.com/beelineloans/amplify-js/commit/1509592c017aa3e63d6c2d3a5c683f9356fb6a75))

### Reverts

- Revert "feat(core): validate if access and id tokens are valid cognito tokens (#13385)" (#13410) ([82d53fa](https://github.com/beelineloans/amplify-js/commit/82d53fab4e47e988b26811cb8b6fe09abbdbda4b)), closes [#13385](https://github.com/beelineloans/amplify-js/issues/13385) [#13410](https://github.com/beelineloans/amplify-js/issues/13410)
- Revert "chore(release): Publish [skip release]" ([241fa11](https://github.com/beelineloans/amplify-js/commit/241fa1105e177d9e4afe59c40ee92656b87ae542))
- Revert "chore(release): Publish" (#13027) ([f6f4f42](https://github.com/beelineloans/amplify-js/commit/f6f4f42befa04ed3c1502fa0adf17c6700abfddf)), closes [#13027](https://github.com/beelineloans/amplify-js/issues/13027)
- Revert "chore(repo): use typescript 5.0.2 across workspace" (#12941) ([dc04ba1](https://github.com/beelineloans/amplify-js/commit/dc04ba18604291d9618a681e7ec4cdb801a355c8)), closes [#12941](https://github.com/beelineloans/amplify-js/issues/12941)
- Revert "chore: Upgrade Prettier (#12582)" (#12600) ([cd937f5](https://github.com/beelineloans/amplify-js/commit/cd937f56bef5f90a4b42638776656faf746c48aa)), closes [#12582](https://github.com/beelineloans/amplify-js/issues/12582) [#12600](https://github.com/beelineloans/amplify-js/issues/12600)

## [1.6.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.6.1...@aws-amplify/adapter-nextjs@1.6.2) (2025-04-28)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.6.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.6.0...@aws-amplify/adapter-nextjs@1.6.1) (2025-04-21)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

# [1.6.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.5.8...@aws-amplify/adapter-nextjs@1.6.0) (2025-04-09)

### Features

- **adapter-nextjs:** support sending lang param to managed login ([#14322](https://github.com/aws-amplify/amplify-js/issues/14322)) ([d11c5ce](https://github.com/aws-amplify/amplify-js/commit/d11c5ce413219cc88b7b68fb5b2c2c9050a5c6b1))

## [1.5.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.5.7...@aws-amplify/adapter-nextjs@1.5.8) (2025-03-28)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.5.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.5.6...@aws-amplify/adapter-nextjs@1.5.7) (2025-03-25)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.5.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.5.5...@aws-amplify/adapter-nextjs@1.5.6) (2025-03-21)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.5.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.5.4...@aws-amplify/adapter-nextjs@1.5.5) (2025-03-14)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.5.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.5.3...@aws-amplify/adapter-nextjs@1.5.4) (2025-03-07)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.5.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.5.2...@aws-amplify/adapter-nextjs@1.5.3) (2025-03-05)

### Bug Fixes

- **core:** make AmplifyOutputs category types as unknown ([#14153](https://github.com/aws-amplify/amplify-js/issues/14153)) ([5dbfbf3](https://github.com/aws-amplify/amplify-js/commit/5dbfbf3f83799b7691fa4d51a61726326a22f1e5))

## [1.5.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.5.1...@aws-amplify/adapter-nextjs@1.5.2) (2025-02-27)

### Bug Fixes

- **adapter-nextjs:** secure: false is not set for localhost on sign-in ([#14231](https://github.com/aws-amplify/amplify-js/issues/14231)) ([677f466](https://github.com/aws-amplify/amplify-js/commit/677f466716c2467f441642c357a7bbe33f5a1dbe))
- **adapter-nextjs:** server-side sign out not working with Firefox and Safari ([#14246](https://github.com/aws-amplify/amplify-js/issues/14246)) ([b940a23](https://github.com/aws-amplify/amplify-js/commit/b940a23d111138cc19000c0fee5280b1c1fe0851))

## [1.5.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.5.0...@aws-amplify/adapter-nextjs@1.5.1) (2025-02-20)

### Bug Fixes

- **core:** build in CookieSerializeOptions def ([#14213](https://github.com/aws-amplify/amplify-js/issues/14213)) ([406157d](https://github.com/aws-amplify/amplify-js/commit/406157df09ea25a8b3d4d42ee65104cde8886fe9))

# [1.5.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.4.3...@aws-amplify/adapter-nextjs@1.5.0) (2025-02-12)

### Features

- support server-side auth flows with Cognito managed login ([#14168](https://github.com/aws-amplify/amplify-js/issues/14168)) ([825d338](https://github.com/aws-amplify/amplify-js/commit/825d338021964a48ffab07d7b5961c5afa63a50e)), closes [#13788](https://github.com/aws-amplify/amplify-js/issues/13788) [#13801](https://github.com/aws-amplify/amplify-js/issues/13801) [#13827](https://github.com/aws-amplify/amplify-js/issues/13827) [#13839](https://github.com/aws-amplify/amplify-js/issues/13839) [#13840](https://github.com/aws-amplify/amplify-js/issues/13840) [#13841](https://github.com/aws-amplify/amplify-js/issues/13841) [#14103](https://github.com/aws-amplify/amplify-js/issues/14103) [#14112](https://github.com/aws-amplify/amplify-js/issues/14112) [#14114](https://github.com/aws-amplify/amplify-js/issues/14114) [#14115](https://github.com/aws-amplify/amplify-js/issues/14115) [#14119](https://github.com/aws-amplify/amplify-js/issues/14119) [#14125](https://github.com/aws-amplify/amplify-js/issues/14125) [#14116](https://github.com/aws-amplify/amplify-js/issues/14116) [#14134](https://github.com/aws-amplify/amplify-js/issues/14134) [#14132](https://github.com/aws-amplify/amplify-js/issues/14132) [#14141](https://github.com/aws-amplify/amplify-js/issues/14141) [#14152](https://github.com/aws-amplify/amplify-js/issues/14152) [#14169](https://github.com/aws-amplify/amplify-js/issues/14169)

## [1.4.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.4.2...@aws-amplify/adapter-nextjs@1.4.3) (2025-02-04)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.4.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.4.1...@aws-amplify/adapter-nextjs@1.4.2) (2025-01-24)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.4.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.4.0...@aws-amplify/adapter-nextjs@1.4.1) (2025-01-14)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

# [1.4.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.3.1...@aws-amplify/adapter-nextjs@1.4.0) (2025-01-03)

### Features

- **api:** add custom endpoint support to API ([#14086](https://github.com/aws-amplify/amplify-js/issues/14086)) ([ca2e4b8](https://github.com/aws-amplify/amplify-js/commit/ca2e4b87a456dfe9a027e49bdcd912a2cba8e59d))

## [1.3.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.3.0...@aws-amplify/adapter-nextjs@1.3.1) (2024-12-19)

### Bug Fixes

- **adapter-nextjs:** create jwt verifier once ([#13825](https://github.com/aws-amplify/amplify-js/issues/13825)) ([88f9eef](https://github.com/aws-amplify/amplify-js/commit/88f9eef11f143663da4a5abbff1098b3a1dd704a))

# [1.3.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.32...@aws-amplify/adapter-nextjs@1.3.0) (2024-12-12)

### Features

- **adapter-nextjs:** support next.js 15 ([#13947](https://github.com/aws-amplify/amplify-js/issues/13947)) ([341eee2](https://github.com/aws-amplify/amplify-js/commit/341eee293b772f0c71e667ccce4ebdca993513ff))

## [1.2.32](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.30...@aws-amplify/adapter-nextjs@1.2.32) (2024-12-03)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.31](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.30...@aws-amplify/adapter-nextjs@1.2.31) (2024-12-03)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.30](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.29...@aws-amplify/adapter-nextjs@1.2.30) (2024-11-25)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.29](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.28...@aws-amplify/adapter-nextjs@1.2.29) (2024-11-20)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.28](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.27...@aws-amplify/adapter-nextjs@1.2.28) (2024-11-13)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.27](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.26...@aws-amplify/adapter-nextjs@1.2.27) (2024-11-12)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.26](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.25...@aws-amplify/adapter-nextjs@1.2.26) (2024-10-31)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.25](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.24...@aws-amplify/adapter-nextjs@1.2.25) (2024-10-29)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.24](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.23...@aws-amplify/adapter-nextjs@1.2.24) (2024-10-25)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.23](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.22...@aws-amplify/adapter-nextjs@1.2.23) (2024-10-21)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.22](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.21...@aws-amplify/adapter-nextjs@1.2.22) (2024-10-15)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.21](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.20...@aws-amplify/adapter-nextjs@1.2.21) (2024-10-05)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.20](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.19...@aws-amplify/adapter-nextjs@1.2.20) (2024-09-30)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.19](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.18...@aws-amplify/adapter-nextjs@1.2.19) (2024-09-17)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.18](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.17...@aws-amplify/adapter-nextjs@1.2.18) (2024-09-16)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.17](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.16...@aws-amplify/adapter-nextjs@1.2.17) (2024-09-04)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.16](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.15...@aws-amplify/adapter-nextjs@1.2.16) (2024-09-03)

### Bug Fixes

- **adapter-nextjs:** duplicate response Set-Cookie headers in pages router ([#13765](https://github.com/aws-amplify/amplify-js/issues/13765)) ([3fedf63](https://github.com/aws-amplify/amplify-js/commit/3fedf6347823611ef5e28554911cf65c1419fce5))

## [1.2.15](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.14...@aws-amplify/adapter-nextjs@1.2.15) (2024-08-26)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.14](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.13...@aws-amplify/adapter-nextjs@1.2.14) (2024-08-21)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.13](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.12...@aws-amplify/adapter-nextjs@1.2.13) (2024-08-15)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.12](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.11...@aws-amplify/adapter-nextjs@1.2.12) (2024-08-07)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.11](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.10...@aws-amplify/adapter-nextjs@1.2.11) (2024-08-05)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.9...@aws-amplify/adapter-nextjs@1.2.10) (2024-07-23)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.8...@aws-amplify/adapter-nextjs@1.2.9) (2024-07-22)

### Bug Fixes

- **aws-amplify:** createKeyValueStorageFromCookieStorageAdapter misses default path and secure values ([#13508](https://github.com/aws-amplify/amplify-js/issues/13508)) ([60a559f](https://github.com/aws-amplify/amplify-js/commit/60a559f612e092c76e1499f93547248312db46f2))

## [1.2.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.7...@aws-amplify/adapter-nextjs@1.2.8) (2024-07-19)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.6...@aws-amplify/adapter-nextjs@1.2.7) (2024-07-08)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.5...@aws-amplify/adapter-nextjs@1.2.6) (2024-06-24)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.4...@aws-amplify/adapter-nextjs@1.2.5) (2024-06-18)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.3...@aws-amplify/adapter-nextjs@1.2.4) (2024-06-07)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.2...@aws-amplify/adapter-nextjs@1.2.3) (2024-06-07)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.1...@aws-amplify/adapter-nextjs@1.2.2) (2024-06-04)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.2.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.2.0...@aws-amplify/adapter-nextjs@1.2.1) (2024-05-23)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

# [1.2.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.1.8...@aws-amplify/adapter-nextjs@1.2.0) (2024-05-23)

### Bug Fixes

- **adapter-nextjs:** Set-Cookie headers incorrectly set with getServerSideProps context ([#13388](https://github.com/aws-amplify/amplify-js/issues/13388)) ([47f0f8b](https://github.com/aws-amplify/amplify-js/commit/47f0f8b69e43491b6dc9993f01759cc028ed6d25))

### Features

- **core:** validate if access and id tokens are valid cognito tokens ([#13385](https://github.com/aws-amplify/amplify-js/issues/13385)) ([0b72b32](https://github.com/aws-amplify/amplify-js/commit/0b72b32348dc63bbc11596a062338ee9ddfa9177))

### Reverts

- Revert "feat(core): validate if access and id tokens are valid cognito tokens (#13385)" (#13410) ([82d53fa](https://github.com/aws-amplify/amplify-js/commit/82d53fab4e47e988b26811cb8b6fe09abbdbda4b)), closes [#13385](https://github.com/aws-amplify/amplify-js/issues/13385) [#13410](https://github.com/aws-amplify/amplify-js/issues/13410)

## [1.1.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.1.7...@aws-amplify/adapter-nextjs@1.1.8) (2024-05-16)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.1.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.1.6...@aws-amplify/adapter-nextjs@1.1.7) (2024-05-13)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.1.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.1.5...@aws-amplify/adapter-nextjs@1.1.6) (2024-05-07)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.1.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.1.4...@aws-amplify/adapter-nextjs@1.1.5) (2024-04-29)

### Bug Fixes

- Fix SSR & AmplifyOutput types when using Gen2 configuration files ([#13247](https://github.com/aws-amplify/amplify-js/issues/13247)) ([f797dc5](https://github.com/aws-amplify/amplify-js/commit/f797dc539f57a55a325b227d8205813b122d7789))

## [1.1.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.0.30...@aws-amplify/adapter-nextjs@1.1.4) (2024-04-26)

### Bug Fixes

- bump package versions ([#13254](https://github.com/aws-amplify/amplify-js/issues/13254)) ([aa490b9](https://github.com/aws-amplify/amplify-js/commit/aa490b9bcbd2a442d9726937cfa59ef8b7859306))

## [1.0.30](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.0.29...@aws-amplify/adapter-nextjs@1.0.30) (2024-04-24)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.0.29](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.0.28...@aws-amplify/adapter-nextjs@1.0.29) (2024-04-22)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## [1.0.28](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/adapter-nextjs@1.0.27...@aws-amplify/adapter-nextjs@1.0.28) (2024-04-09)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## 1.0.27 (2024-04-02)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## 1.0.26 (2024-04-01)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## 1.0.25 (2024-03-30)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## 1.0.24 (2024-03-29)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## 1.0.23 (2024-03-25)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## 1.0.22 (2024-03-25)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## 1.0.21 (2024-03-19)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## 1.0.20 (2024-03-11)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## 1.0.19 (2024-03-05)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## 1.0.18 (2024-02-27)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## 1.0.17 (2024-02-19)

### Reverts

- Revert "chore(release): Publish" (#13027) ([f6f4f42](https://github.com/aws-amplify/amplify-js/commit/f6f4f42befa04ed3c1502fa0adf17c6700abfddf)), closes [#13027](https://github.com/aws-amplify/amplify-js/issues/13027)

## 1.0.16 (2024-02-09)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## 1.0.15 (2024-02-06)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## 1.0.14 (2024-02-01)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## 1.0.13 (2024-01-22)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## 1.0.12 (2024-01-12)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## 1.0.11 (2024-01-10)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## 1.0.10 (2024-01-04)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## 1.0.9 (2023-12-22)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## 1.0.8 (2023-12-18)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## 1.0.7 (2023-12-12)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## 1.0.6 (2023-12-05)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## 1.0.5 (2023-11-22)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## 1.0.4 (2023-11-20)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## 1.0.3 (2023-11-16)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## 1.0.2 (2023-11-13)

**Note:** Version bump only for package @aws-amplify/adapter-nextjs

## 0.0.1

The initial implementation of the adapter supporting using Amplify in Next.js.
