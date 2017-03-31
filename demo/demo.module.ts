import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularISSauthModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, AngularISSauthModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}