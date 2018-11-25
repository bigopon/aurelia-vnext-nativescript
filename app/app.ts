/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/
import { BasicConfiguration } from './@aurelia/jit';
import { DebugConfiguration } from './@aurelia/debug';
import { Aurelia, customElement } from './@aurelia/runtime';

@customElement({
  name: 'app',
  template:
  `<template>
    <Button text="Click count: \${count} clicks" tap.trigger="count = count + 1" />
  </template>`
})
class App {
  count = 0;
}

new Aurelia()
  .register(
    DebugConfiguration,
    BasicConfiguration
  )
  .app({
    component: App
  })
  .start();

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
