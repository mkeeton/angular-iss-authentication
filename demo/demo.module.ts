import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularISSauthenticationModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, AngularISSauthenticationModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}