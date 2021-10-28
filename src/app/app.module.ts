import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { HelloWorldBindingsComponent } from './hello-world-bindings/hello-world-bindings.component';
import { HelloWorldNgIfComponent } from './hello-world-ngif/hello-world-ngif.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    HelloWorldBindingsComponent,
    HelloWorldNgIfComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
