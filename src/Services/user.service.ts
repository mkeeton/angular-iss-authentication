import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { APIResponse } from '../Classes/apiResponse';
import { User } from '../Classes/user';
import { AuthenticatedService } from '../Services/authenticated.service';

@Injectable()
export class UserService {

    constructor(private authenticatedService: AuthenticatedService,
                @Inject('UserApiBaseUrl') private apiBaseUrl: string) { }

    public getCurrentUserAsync(): Observable<User> {
        let remoteData: Observable<User>;
        remoteData = new Observable((observer) => {
            this.authenticatedService.getAsync(this.apiBaseUrl, 'api/User/CurrentUser')
                .subscribe((res: APIResponse) => {
                    if (((<User> res.responseData).Id === '') || ((<User> res.responseData).Id === undefined)) {
                        observer.next(null);
                    } else {
                        observer.next(<User> res.responseData);
                    }
                    observer.complete();
                });
        });
        return remoteData;
    }

	    public getUserAsync(userId: string): Observable<User> {
        let remoteData: Observable<User>;
        remoteData = new Observable((observer) => {
            this.authenticatedService.getAsync(this.apiBaseUrl, 'api/User/GetUser?Id=' + userId)
                .subscribe((res: APIResponse) => {
                    if (((<User>res.responseData).Id === '') || ((<User>res.responseData).Id === undefined)) {
                        observer.next(null);
                    } else {
                        observer.next(<User>res.responseData);
                    }
                    observer.complete();
                });
        });
        return remoteData;
    }
}