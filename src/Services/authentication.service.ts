import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { EasyXDMService } from './easyXDM.service';

@Injectable()
export class AuthenticationService {

    constructor(private easyXDMService: EasyXDMService,
                @Inject('AuthApiBaseUrl')
                private serverURL: string,
                @Inject('LoginPageUrl')
                private loginURL: string) { }

    public getAuthToken(baseURL: string): Observable<string> {

        let remoteData: Observable<string>;
        remoteData = new Observable((observer) => {
            this.easyXDMService.Msg(this.serverURL, baseURL, 'DistLogin')
                .subscribe((value) => {
                    observer.next(value);
                    observer.complete();
                });
        });
        return remoteData;
    }

    public login(loginFormContainer: string): Observable<string> {

        let remoteData: Observable<string>;
        remoteData = new Observable((observer) => {
            this.easyXDMService.IFrame(this.loginURL, loginFormContainer, '400px', '400px', 'CheckoutLogin')
                .subscribe((value) => {
                    observer.next(value);
                    observer.complete();
                });
        });
        return remoteData;
    }

    public logOut(): Observable<boolean> {

        let remoteData: Observable<boolean>;
        remoteData = new Observable((observer) => {
            this.easyXDMService.Msg(this.serverURL, 'Logout', 'CheckoutLogin')
                .subscribe((value) => {
                    observer.next(true);
                    observer.complete();
                });
        });
        return remoteData;
    }
}