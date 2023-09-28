import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Climber } from '../climber-model';
import { Observable } from 'rxjs';
import { DatabaseCommsService } from '../database-comms.service';
import { ClimbersService } from '../climbers.service';

@Injectable({
  providedIn: 'root',
})
export class ClimberResolverService implements Resolve<Climber[]> {
  constructor(
    private dataService: DatabaseCommsService,
    private climberService: ClimbersService
  ) {}
  resolve(): Climber[] | Observable<Climber[]> | Promise<Climber[]> {
    const climbers = this.climberService.getClimbers();

    if (climbers.length === 0) {
      return this.dataService.climberFetch();
    } else {
      return climbers;
    }
  }
}
