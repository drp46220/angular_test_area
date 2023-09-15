import { Component, Input } from '@angular/core';
import { Chore } from '../../chore-model';

@Component({
  selector: 'app-chore-item',
  templateUrl: './chore-item.component.html',
  styleUrls: ['./chore-item.component.css'],
})
export class ChoreItemComponent {
  @Input() chore: Chore;
  @Input() index: number;
}
