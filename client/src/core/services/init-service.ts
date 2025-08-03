import { inject, Injectable } from '@angular/core';
import { AccountService } from './account-service';
import { Observable, of } from 'rxjs';
import { LikesService } from './likes-service';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  private accountService = inject(AccountService);
  private likesService = inject(LikesService);

  init() {
    const UserString = localStorage.getItem('user');
    if (!UserString) return of(null);
    const user = JSON.parse(UserString);
    this.accountService.currentUser.set(user);
    this.likesService.getLikeIds();

    return of(null)
  }
}
