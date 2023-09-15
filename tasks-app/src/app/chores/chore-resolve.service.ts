import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Chore } from './chore-model';
import { Observable } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { ChoreService } from './chore.service';

@Injectable({
  providedIn: 'root',
})
export class ChoreResolveService implements Resolve<Chore[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private choreService: ChoreService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Chore[] | Observable<Chore[]> | Promise<Chore[]> {
    const chores = this.choreService.getChores();
    if (chores.length === 0) {
      return this.dataStorageService.choreFetch();
    } else {
      return chores;
    }
  }
}
