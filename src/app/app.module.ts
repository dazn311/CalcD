import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopViewComponent } from './top-view/top-view.component';
import { CenterViewComponent } from './center-view/center-view.component';
import { BottomViewComponent } from './bottom-view/bottom-view.component';
import { TopElementComponent } from './top-view/top-element/top-element.component';


@NgModule({
  declarations: [
    AppComponent,
    TopViewComponent,
    CenterViewComponent,
    BottomViewComponent,
    TopElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
