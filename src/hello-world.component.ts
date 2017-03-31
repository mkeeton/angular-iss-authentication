import { Component } from '@angular/core';

@Component({
  selector: 'iss-authentication-hello-world',
  template: 'Hello world from the {{ projectTitle }} module!'
})
export class HelloWorldComponent {
  projectTitle: string = 'angular iss authentication';
}
