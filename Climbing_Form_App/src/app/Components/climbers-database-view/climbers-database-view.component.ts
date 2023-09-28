import { Component, Input } from '@angular/core';
import { Subscription, pipe } from 'rxjs';
import { Climber } from 'src/app/climber-model';
import { ClimbersService } from 'src/app/climbers.service';
import { DatabaseCommsService } from 'src/app/database-comms.service';

interface climberData {
  name: string;
  id: number;
  birthday: Date;
  dateCreated: Date;
  ofAge: boolean;
  guardianName?: string;
}

@Component({
  selector: 'app-climbers-database-view',
  templateUrl: './climbers-database-view.component.html',
  styleUrls: ['./climbers-database-view.component.css'],
})
export class ClimbersDatabaseViewComponent {
  @Input() climbers: Climber[];
  subscription: Subscription;

  constructor(
    private climberService: ClimbersService,
    private dataService: DatabaseCommsService
  ) {}

  Save() {
    this.dataService.climberStore();
  }

  Load() {
    this.dataService.climberFetch().subscribe();
  }

  ngOnInit() {
    this.climbers = this.climberService.getClimbers();
    this.subscription = this.climberService.climbersChanged.subscribe(
      (climbers: Climber[]) => {
        this.climbers = climbers;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
