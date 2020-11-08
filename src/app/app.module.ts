import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HelloComponent } from './components/hello/hello.component';
import { HiComponent } from './components/dynamic/hi/hi.component';
import { WelcomeComponent } from './components/dynamic/welcome/welcome.component';
import { ContainerDirective } from './directives/container.directive';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HiComponent,
    WelcomeComponent,
    ContainerDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
