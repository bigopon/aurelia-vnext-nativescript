/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

// import * as application from "tns-core-modules/application";
// import { Page } from "tns-core-modules/ui/page";
// import { Button } from "tns-core-modules/ui/button";

// application.run({
//   create: () => {
//     const page = new Page();
//     const button = new Button();
//     button.text = 'Hello, click me! type of Proxy: ' + typeof Proxy;
//     page.content = button;
//     return page;
//   }
// });

import { BasicConfiguration } from './@aurelia/jit';
import { DebugConfiguration } from './@aurelia/debug';
import { Frame } from 'tns-core-modules/ui/frame/frame';
import { Aurelia, customElement } from './@aurelia/runtime';

@customElement({
  name: 'app',
  template:
  `<template>
    <Page>
      <Button text="Hello world" />
    </Page>
  </template>`
})
class App {

}

new Aurelia()
  .register(
    DebugConfiguration,
    BasicConfiguration
  )
  .app({
    host: new Frame(),
    component: App
  })
  .start();

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
