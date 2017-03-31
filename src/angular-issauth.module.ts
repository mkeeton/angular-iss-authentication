import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world.component';
import { LoginComponent } from './login.component';
import { APIResponse } from './Classes/apiResponse';
import { User } from './Classes/user';
import { APIService } from './Services/api.service';
import { AuthenticationService } from './Services/authentication.service';
import { AuthenticatedService } from './Services/authenticated.service';
import { CurrentUserService } from './Services/currentUser.service';
import { EasyXDMService } from './Services/easyXDM.service';
import { StoredSettingService } from './Services/storedSettings.service';
import { UserService } from './Services/user.service';

@NgModule({
  declarations: [
    HelloWorldComponent,
	LoginComponent
  ],
  providers: [
	APIService,
	AuthenticationService,
	AuthenticatedService,
	CurrentUserService,
	EasyXDMService,
	StoredSettingService,
	UserService
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HelloWorldComponent,
	LoginComponent
  ]
})
export class AngularISSauthModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AngularISSauthModule
    };
  }

}