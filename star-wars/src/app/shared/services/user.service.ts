import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Observable, of } from 'rxjs';
import { CommandResult } from '../../models/command-result';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  getByUsername(username: string) : Observable<User> {
      return of(this.getUsers().find(u => u.username === username));
  }

  Create(user: User): Observable<CommandResult> {

    return new Observable(observer => {
      // simulate api call with $timeout
      setTimeout(() => {
        debugger;
          this.getByUsername(user.username)
              .subscribe(duplicateUser => {
                  debugger;
                  var response: CommandResult;

                  if (duplicateUser) {
                    response = { success: false, message: 'Username "' + user.username + '" is already taken' };
                  } else {
                      var users = this.getUsers();

                      // assign id
                      var lastUser = users[users.length - 1] || { id: 0 };
                      user.id = lastUser.id + 1;

                      // save to local storage
                      users.push(user);
                      this.setUsers(users);

                      response = { success: true };
                  }

                  observer.next(response);
              });
      }, 1000);
    });
  }

  // private functions

  private getUsers(): User[] {
    const users = localStorage.getItem('users') || JSON.stringify([]);
    return JSON.parse(users);
  }

  private setUsers(users: User[]) {
      localStorage.setItem('users', JSON.stringify(users));
  }


}

