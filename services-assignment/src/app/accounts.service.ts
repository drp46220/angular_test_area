import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  activeUsers = [{ name: 'Max' }, { name: 'Anna' }];
  inactiveUsers = [{ name: 'Chris' }, { name: 'Manu' }];

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1)
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1)
  }

  addAcitve(name: string) {
    this.activeUsers.push({ name: name });
  }

  addInactive(name: string) {
    this.activeUsers.push({ name: name });
  }

  constructor() { }
}
