# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.3.0 (2025-05-09)

### Features

- add host to config, use in connect, subscribe, publish ([e20c614](https://github.com/aws-amplify/amplify-js/commit/e20c6145632494532580007645c87e0b8e6c31e9))

# 1.2.0 (2025-05-09)

### Bug Fixes

- add module loader for web browser native module ([#12519](https://github.com/aws-amplify/amplify-js/issues/12519)) ([7dde343](https://github.com/aws-amplify/amplify-js/commit/7dde34332397efc47a174122df0a6efc24b61296))
- **react-native:** Update namespaces to be unique ([#12510](https://github.com/aws-amplify/amplify-js/issues/12510)) ([e1d88c2](https://github.com/aws-amplify/amplify-js/commit/e1d88c2eee75ed28a33cc9e3354fc5af7ab1549a))
- remove unused nativeEventEmitter ([#12541](https://github.com/aws-amplify/amplify-js/issues/12541)) ([852e91f](https://github.com/aws-amplify/amplify-js/commit/852e91fbf8aab30f491c12996a2b30fe452bd2af))
- **rtn-web-browser:** prevent CustomTab to show in recent used app ([#13847](https://github.com/aws-amplify/amplify-js/issues/13847)) ([c586b7b](https://github.com/aws-amplify/amplify-js/commit/c586b7b1d243df4cdaf5a4fe15deeac545639b24))
- **rtn-web-browser:** signInWithRedirect needs to be called twice on Android ([b473ce3](https://github.com/aws-amplify/amplify-js/commit/b473ce34bac46c4bec6226e4a62f078dbd75fb94))
- **web-browser:** pass callbackURLScheme to auth session ([#12155](https://github.com/aws-amplify/amplify-js/issues/12155)) ([7f60abd](https://github.com/aws-amplify/amplify-js/commit/7f60abda8e5d1f12a6acb99d0fca02fe2079341c))

### Features

- add ability to set ephemeral session ([#12202](https://github.com/aws-amplify/amplify-js/issues/12202)) ([fcf47a0](https://github.com/aws-amplify/amplify-js/commit/fcf47a030aba2ffd2847ede879b44fe5c6dee5ad))
- add web browser native module ([#12036](https://github.com/aws-amplify/amplify-js/issues/12036)) ([6491191](https://github.com/aws-amplify/amplify-js/commit/649119112b6f422bc7eb07457e90adee95e791f3))
- **auth:** HostedUI oidc signout ([#13512](https://github.com/aws-amplify/amplify-js/issues/13512)) ([e8fb997](https://github.com/aws-amplify/amplify-js/commit/e8fb9973f8e3e3490619416a778ec1460cafaf9a)), closes [#13712](https://github.com/aws-amplify/amplify-js/issues/13712) [#13736](https://github.com/aws-amplify/amplify-js/issues/13736)
- **repo:** set up rollup to emit esm and cjs artifacts ([#12522](https://github.com/aws-amplify/amplify-js/issues/12522)) ([903a012](https://github.com/aws-amplify/amplify-js/commit/903a0123e51f69ff3476b6b15aa89a73b750f9dc))
- Update signInWithRedirect to work with RN ([#12144](https://github.com/aws-amplify/amplify-js/issues/12144)) ([e90c05b](https://github.com/aws-amplify/amplify-js/commit/e90c05b1696870443b3bfb4846205a12926a9252))

### Reverts

- Revert "chore(release): Publish" (#13027) ([f6f4f42](https://github.com/aws-amplify/amplify-js/commit/f6f4f42befa04ed3c1502fa0adf17c6700abfddf)), closes [#13027](https://github.com/aws-amplify/amplify-js/issues/13027)
- Revert "chore(repo): use typescript 5.0.2 across workspace" (#12941) ([dc04ba1](https://github.com/aws-amplify/amplify-js/commit/dc04ba18604291d9618a681e7ec4cdb801a355c8)), closes [#12941](https://github.com/aws-amplify/amplify-js/issues/12941)

## [1.1.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/rtn-web-browser@1.1.2...@aws-amplify/rtn-web-browser@1.1.3) (2025-04-28)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## [1.1.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/rtn-web-browser@1.1.1...@aws-amplify/rtn-web-browser@1.1.2) (2025-04-09)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## [1.1.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/rtn-web-browser@1.1.0...@aws-amplify/rtn-web-browser@1.1.1) (2024-09-30)

### Bug Fixes

- **rtn-web-browser:** prevent CustomTab to show in recent used app ([#13847](https://github.com/aws-amplify/amplify-js/issues/13847)) ([c586b7b](https://github.com/aws-amplify/amplify-js/commit/c586b7b1d243df4cdaf5a4fe15deeac545639b24))

# [1.1.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/rtn-web-browser@1.0.31...@aws-amplify/rtn-web-browser@1.1.0) (2024-09-04)

### Features

- **auth:** HostedUI oidc signout ([#13512](https://github.com/aws-amplify/amplify-js/issues/13512)) ([e8fb997](https://github.com/aws-amplify/amplify-js/commit/e8fb9973f8e3e3490619416a778ec1460cafaf9a)), closes [#13712](https://github.com/aws-amplify/amplify-js/issues/13712) [#13736](https://github.com/aws-amplify/amplify-js/issues/13736)

## [1.0.31](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/rtn-web-browser@1.0.30...@aws-amplify/rtn-web-browser@1.0.31) (2024-07-23)

### Bug Fixes

- **rtn-web-browser:** signInWithRedirect needs to be called twice on Android ([b473ce3](https://github.com/aws-amplify/amplify-js/commit/b473ce34bac46c4bec6226e4a62f078dbd75fb94))

## [1.0.30](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/rtn-web-browser@1.0.29...@aws-amplify/rtn-web-browser@1.0.30) (2024-05-13)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## [1.0.29](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/rtn-web-browser@1.0.28...@aws-amplify/rtn-web-browser@1.0.29) (2024-05-07)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## 1.0.28 (2024-04-02)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## 1.0.27 (2024-04-01)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## 1.0.26 (2024-03-30)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## 1.0.25 (2024-03-29)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## 1.0.24 (2024-03-25)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## 1.0.23 (2024-03-25)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## 1.0.22 (2024-03-19)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## 1.0.21 (2024-03-18)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## 1.0.20 (2024-03-11)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## 1.0.19 (2024-03-05)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## 1.0.18 (2024-02-27)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## 1.0.17 (2024-02-19)

### Reverts

- Revert "chore(release): Publish" (#13027) ([f6f4f42](https://github.com/aws-amplify/amplify-js/commit/f6f4f42befa04ed3c1502fa0adf17c6700abfddf)), closes [#13027](https://github.com/aws-amplify/amplify-js/issues/13027)

## 1.0.16 (2024-02-09)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## 1.0.15 (2024-02-06)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## 1.0.14 (2024-02-01)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## 1.0.13 (2024-01-22)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## 1.0.12 (2024-01-12)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## 1.0.11 (2024-01-10)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## 1.0.10 (2024-01-04)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## 1.0.9 (2023-12-22)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## 1.0.8 (2023-12-18)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## 1.0.7 (2023-12-12)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## 1.0.6 (2023-12-05)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## 1.0.5 (2023-11-22)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## 1.0.4 (2023-11-20)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## 1.0.3 (2023-11-16)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

## 1.0.2 (2023-11-13)

**Note:** Version bump only for package @aws-amplify/rtn-web-browser

# Change Log

## 1.0.0

Initial implementation.
