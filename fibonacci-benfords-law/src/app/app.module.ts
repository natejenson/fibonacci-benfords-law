import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { VisualizeComponent } from './visualize/visualize.component';
import { AppRoutingModule } from './/app-routing.module';
import { FeedComponent } from './feed/feed.component';
import { FrappeDirective } from './frappe.directive';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    VisualizeComponent,
    FeedComponent,
    FrappeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
