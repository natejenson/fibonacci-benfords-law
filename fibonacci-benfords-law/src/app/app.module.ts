import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { VisualizeComponent } from './visualize/visualize.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    VisualizeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
