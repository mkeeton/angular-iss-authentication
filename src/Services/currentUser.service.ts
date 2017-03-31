import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../Classes/user';

@Injectable()
export class CurrentUserService {

    public dispatcher: EventEmitter<User> = new EventEmitter<User>();
    private currentUser: User;

    constructor() {
        this.currentUser = null;
    }
    public getCurrentUser() : User {
        return this.currentUser;
    }
    public setCurrentUser(user: User) : any {
        this.currentUser = user;
        this.dispatcher.next(this.currentUser);
    }
}