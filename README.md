***Demo***

This repos is used to demo Playwright as part of 1.21GWS Presentation

Demo site used - ```https://react-redux.realworld.io/```

***Prerequisities***

1) Nodej should be installed in your machine.

***Setup***

1) Clone the repo to local

2) Navigate to 1.21-playwrighttestrunner directory

3) Install dependancies - ```npm ci```

***Use Cases***

1) Device Emulation
2) Reuse Authentication State
3) Passing a failed test
4) Visual Regression Testing
5) Trace Viewer

***Running Tests***

Device Emulation - ```npx playwright test ./tests/device_emulation.spec.ts --config=mobile.config.ts```

Reuse Authentication - ```npx playwright test --project='GoogleChrome' --grep @reuse```

Fail Annotation - ```npx playwright test ./tests/fail_annotation.test.ts --project=GoogleChrome```

Visual Testing -
```npx playwright test ./tests/visual_testing.test.ts --project=GoogleChrome --update-snapshots```

```npx playwright test ./tests/visual_testing.test.ts --project=GoogleChrome```

TraceViewer - ```npx playwright test ./tests/traceviewer.test.ts --project=GoogleChrome```

Debugger - ```npx playwright test ./tests/traceviewer.test.ts --project=GoogleChrome --debug```
