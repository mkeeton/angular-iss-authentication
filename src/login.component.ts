import { Component, OnInit } from '@angular/core';
import { User } from './Classes/user';
import { APIService } from './Services/api.service';
import { AuthenticationService } from './Services/authentication.service';
import { CurrentUserService } from './Services/currentUser.service';
import { EasyXDMService } from './Services/easyXDM.service';
import { StoredSettingService } from './Services/storedSettings.service';
import { UserService } from './Services/user.service';

@Component({
    selector: 'iss-authentication-login-page',
    template: '<div id="iss-authentication-authenticationLogin"></div>',
})

export class LoginComponent implements OnInit {

    constructor(private currentUserService: CurrentUserService,
        private userService: UserService,
        private authenticationService: AuthenticationService) {
    }

    public ngOnInit() : any {
        this.getCurrentUser();
        this.showLogin();
    }

    public getCurrentUser() : any {
        var temp : any = this.userService.getCurrentUserAsync()
            .subscribe(((user) => {
                this.currentUserService.setCurrentUser(user);
            })
            , ((err) => {
                this.currentUserService.setCurrentUser(null);
            }));
    }

    public showLogin(withRegister: boolean = false) : any {
        this.authenticationService.login('iss-authentication-authenticationLogin', withRegister)
            .subscribe((res) => {
                this.getCurrentUser();
            });
    }
}