import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChoreService } from '../chores/chore.service';
import { Chore } from '../chores/chore-model';
import { map, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  FireBaseURL = 'https://recipe-book-f6c8f-default-rtdb.firebaseio.com/';

  constructor(
    private http: HttpClient,
    private choreService: ChoreService,
    private authService: AuthService
  ) {}

  choreStore() {
    const chores = this.choreService.getChores();
    this.http
      .put(this.FireBaseURL + 'chores.json', chores)
      .subscribe((response) => {
        console.log(chores);
      });
  }

  choreFetch() {
    return this.http.get<Chore[]>(this.FireBaseURL + 'chores.json').pipe(
      map((chores) => {
        return chores.map((chore) => {
          return {
            ...chore,
          };
        });
      }),
      tap((chores) => {
        this.choreService.setChore(chores);
      })
    );
  }
}
