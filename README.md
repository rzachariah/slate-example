#slate-example
Example usage of slate and slate-testing-utils

## Repro

I'm currently having an issue on `npm test`. To repro

```
npm i
npm test
```

```
npm test

> slate-example@0.0.0 test
> jest --verbose

 FAIL  src/tests/ensure-valid.test.tsx
  ● Test suite failed to run

    Cannot find module 'lodash.clonedeep' from 'node_modules/slate-test-utils/dist/cjs/ensureSlateValid.js'

    Require stack:
      node_modules/slate-test-utils/dist/cjs/ensureSlateValid.js
      node_modules/slate-test-utils/dist/cjs/buildTestHarness.js
      node_modules/slate-test-utils/dist/cjs/index.js
      src/tests/ensure-valid.test.tsx

      at Resolver.resolveModule (node_modules/jest-resolve/build/resolver.js:324:11)
      at Object.<anonymous> (node_modules/slate-test-utils/dist/cjs/ensureSlateValid.js:5:28)

 FAIL  src/tests/snapshot.test.tsx
  ● Test suite failed to run

    Cannot find module 'lodash.clonedeep' from 'node_modules/slate-test-utils/dist/cjs/ensureSlateValid.js'

    Require stack:
      node_modules/slate-test-utils/dist/cjs/ensureSlateValid.js
      node_modules/slate-test-utils/dist/cjs/buildTestHarness.js
      node_modules/slate-test-utils/dist/cjs/index.js
      src/tests/snapshot.test.tsx

      at Resolver.resolveModule (node_modules/jest-resolve/build/resolver.js:324:11)
      at Object.<anonymous> (node_modules/slate-test-utils/dist/cjs/ensureSlateValid.js:5:28)

 FAIL  src/tests/history.test.tsx
  ● Test suite failed to run

    Cannot find module 'lodash.clonedeep' from 'node_modules/slate-test-utils/dist/cjs/ensureSlateValid.js'

    Require stack:
      node_modules/slate-test-utils/dist/cjs/ensureSlateValid.js
      node_modules/slate-test-utils/dist/cjs/buildTestHarness.js
      node_modules/slate-test-utils/dist/cjs/index.js
      src/tests/history.test.tsx

      at Resolver.resolveModule (node_modules/jest-resolve/build/resolver.js:324:11)
      at Object.<anonymous> (node_modules/slate-test-utils/dist/cjs/ensureSlateValid.js:5:28)

 FAIL  src/tests/bulleted-list.test.tsx
  ● Test suite failed to run

    Cannot find module 'lodash.clonedeep' from 'node_modules/slate-test-utils/dist/cjs/ensureSlateValid.js'

    Require stack:
      node_modules/slate-test-utils/dist/cjs/ensureSlateValid.js
      node_modules/slate-test-utils/dist/cjs/buildTestHarness.js
      node_modules/slate-test-utils/dist/cjs/index.js
      src/tests/bulleted-list.test.tsx

      at Resolver.resolveModule (node_modules/jest-resolve/build/resolver.js:324:11)
      at Object.<anonymous> (node_modules/slate-test-utils/dist/cjs/ensureSlateValid.js:5:28)

 FAIL  src/tests/variant-runner.test.tsx
  ● Test suite failed to run

    Cannot find module 'lodash.clonedeep' from 'node_modules/slate-test-utils/dist/cjs/ensureSlateValid.js'

    Require stack:
      node_modules/slate-test-utils/dist/cjs/ensureSlateValid.js
      node_modules/slate-test-utils/dist/cjs/buildTestHarness.js
      node_modules/slate-test-utils/dist/cjs/index.js
      src/tests/variant-runner.test.tsx

      at Resolver.resolveModule (node_modules/jest-resolve/build/resolver.js:324:11)
      at Object.<anonymous> (node_modules/slate-test-utils/dist/cjs/ensureSlateValid.js:5:28)

 FAIL  src/tests/mac-windows.test.tsx
  ● Test suite failed to run

    Cannot find module 'lodash.clonedeep' from 'node_modules/slate-test-utils/dist/cjs/ensureSlateValid.js'

    Require stack:
      node_modules/slate-test-utils/dist/cjs/ensureSlateValid.js
      node_modules/slate-test-utils/dist/cjs/buildTestHarness.js
      node_modules/slate-test-utils/dist/cjs/index.js
      src/tests/mac-windows.test.tsx

      at Resolver.resolveModule (node_modules/jest-resolve/build/resolver.js:324:11)
      at Object.<anonymous> (node_modules/slate-test-utils/dist/cjs/ensureSlateValid.js:5:28)

 FAIL  src/tests/Editor.test.tsx
  ● Test suite failed to run

    Cannot find module 'lodash.clonedeep' from 'node_modules/slate-test-utils/dist/cjs/ensureSlateValid.js'

    Require stack:
      node_modules/slate-test-utils/dist/cjs/ensureSlateValid.js
      node_modules/slate-test-utils/dist/cjs/buildTestHarness.js
      node_modules/slate-test-utils/dist/cjs/index.js
      src/tests/Editor.test.tsx

      at Resolver.resolveModule (node_modules/jest-resolve/build/resolver.js:324:11)
      at Object.<anonymous> (node_modules/slate-test-utils/dist/cjs/ensureSlateValid.js:5:28)

 FAIL  src/tests/bold.test.tsx
  ● Test suite failed to run

    Cannot find module 'lodash.clonedeep' from 'node_modules/slate-test-utils/dist/cjs/ensureSlateValid.js'

    Require stack:
      node_modules/slate-test-utils/dist/cjs/ensureSlateValid.js
      node_modules/slate-test-utils/dist/cjs/buildTestHarness.js
      node_modules/slate-test-utils/dist/cjs/index.js
      src/tests/bold.test.tsx

      at Resolver.resolveModule (node_modules/jest-resolve/build/resolver.js:324:11)
      at Object.<anonymous> (node_modules/slate-test-utils/dist/cjs/ensureSlateValid.js:5:28)

Test Suites: 8 failed, 8 total
Tests:       0 total
Snapshots:   0 total
Time:        12.974 s
Ran all test suites.
```
