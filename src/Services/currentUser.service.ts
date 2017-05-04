import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../Classes/user';
import { UserService } from './user.service';

@Injectable()
export class CurrentUserService implements OnInit {

	public dispatcher: BehaviorSubject<User> = new BehaviorSubject<User>(null);
    private currentUser: User;

    constructor(private userService: UserService) {
        this.currentUser = null;
    }

	public ngOnInit() : any {
		var temp : any = this.userService.getCurrentUserAsync()
            .subscribe(((user) => {
                this.currentUser = user;
				this.dispatcher.next(this.currentUser);
            })
            , ((err) => {
                this.currentUser = null;
				this.dispatcher.next(this.currentUser);
            }));
	}

    public getCurrentUser() : User {
        return this.currentUser;
    }

    public setCurrentUser(user: User) : any {
        this.currentUser = user;
        this.dispatcher.next(this.currentUser);
    }
}