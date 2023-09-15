import { Component, OnInit } from '@angular/core';
import { Chore } from '../chore-model';
import { ChoreService } from '../chore.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-chore-detail',
  templateUrl: './chore-detail.component.html',
})
export class ChoreDetailComponent implements OnInit {
  chore: Chore;
  id: number;

  onChoreEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onChoreDelete() {
    this.choreService.deleteChore(this.id);
    this.router.navigate(['/chores']);
  }

  constructor(
    private choreService: ChoreService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.chore = this.choreService.getChore(this.id);
    });
  }

  ngUnsubscribe() {}
}
