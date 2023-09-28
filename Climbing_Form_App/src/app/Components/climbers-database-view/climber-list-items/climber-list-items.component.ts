import { Component } from '@angular/core';
import { Climber } from 'src/app/climber-model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-climber-list-items',
  templateUrl: './climber-list-items.component.html',
  styleUrls: ['./climber-list-items.component.css'],
})
export class ClimberListItemsComponent {
  @Input() climber: Climber;
  @Input() index: number;
}
