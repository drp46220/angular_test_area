import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Chore } from '../chore-model';
import { ChoreService } from '../chore.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChoreItemComponent } from './chore-item/chore-item.component';

@Component({
  selector: 'app-chore-list',
  templateUrl: './chore-list.component.html',
  styleUrls: ['./chore-list.component.css'],
})
export class ChoreListComponent implements OnInit, OnDestroy {
  @Input() chores: Chore[];
  subscription: Subscription;

  constructor(
    private choreService: ChoreService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.chores = this.choreService.getChores();
    this.subscription = this.choreService.choreChanged.subscribe(
      (chores: Chore[]) => {
        this.chores = chores;
      }
    );
  }

  onNewChore() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
