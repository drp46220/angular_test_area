import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ChoreService } from '../chore.service';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-chore-edit',
  templateUrl: './chore-edit.component.html',
  styleUrls: ['./chore-edit.component.css'],
})
export class ChoreEditComponent implements OnInit {
  id: number;
  editMode = false;
  choreForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private choreService: ChoreService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let choreName = '';
    let choreDesc = '';
    let choreFinish = null;

    if (this.editMode) {
      const chore = this.choreService.getChore(this.id);
      choreName = chore.name;
      choreDesc = chore.description;
      choreFinish = chore.finishDate;
    }
    this.choreForm = new FormGroup({
      name: new FormControl(choreName, Validators.required),
      description: new FormControl(choreDesc, Validators.required),
      finishDate: new FormControl(new Date(choreFinish), Validators.required),
      startDate: new FormControl(new Date()),
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.choreService.updateChore(this.choreForm.value, this.id);
    } else {
      this.choreService.addChore(this.choreForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
