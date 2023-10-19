import { Component } from '@angular/core';
import { Climber } from 'src/app/climber-model';
import { DatabaseCommsService } from 'src/app/database-comms.service';

@Component({
  selector: 'app-climbers-database-view',
  templateUrl: './climbers-database-view.component.html',
  styleUrls: ['./climbers-database-view.component.css'],
})
export class ClimbersDatabaseViewComponent {
  climbers: Climber[] = [];

  constructor(private dataService: DatabaseCommsService) {}

  // Load() {
  //   this.dataService.climberFetchs().subscribe();
  // }

  ngOnInit() {
    this.dataService.climberFetch().subscribe((climbers) => {
      this.climbers = climbers;
    });
  }
}
