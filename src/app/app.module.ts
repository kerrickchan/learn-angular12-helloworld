import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { HelloWorldBindingsComponent } from './hello-world-bindings/hello-world-bindings.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    HelloWorldBindingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
