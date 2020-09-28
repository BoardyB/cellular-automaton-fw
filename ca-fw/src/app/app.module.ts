import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PatternModule } from './pattern/pattern.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CaControlModule } from './ca-control/ca-control.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PatternModule,
    CaControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
