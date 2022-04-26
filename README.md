Use Cases for Playwright Test Runner

1) Device Emulation
2) Reuse Authentication State
3) Passing a failed test
4) Visual Regression Testing
5) Trace Viewer


1) Device Emulation - npx playwright test ./tests/device_emulation.spec.ts

2) Reuse Authentication - npx playwright test --project='GoogleChrome' --grep @reuse

3) Fail Annotation - npx playwright test ./tests/fail_annotation.test.ts --project=GoogleChrome

4) Visual Testing - npx playwright test ./tests/fail_annotation.test.ts --project=GoogleChrome

5) TraceViewer - npx playwright test ./tests/traceviewer.test.ts --project=GoogleChrome
