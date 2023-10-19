import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ClimbersService } from 'src/app/climbers.service';
import { DatabaseCommsService } from 'src/app/database-comms.service';
@Component({
  selector: 'app-new-climber',
  templateUrl: './new-climber.component.html',
  styleUrls: ['./new-climber.component.css'],
})
export class NewClimberComponent implements OnInit {
  check: boolean = false;
  dataFrom: FormGroup<any>;

  constructor(
    private climberService: ClimbersService,
    private dataStorage: DatabaseCommsService
  ) {}

  ngOnInit() {
    let climberName;
    let climberBirthday;
    let climberID;
    let climberGuardian;

    this.dataFrom = new FormGroup({
      name: new FormControl(climberName, Validators.required),
      birthday: new FormControl(climberBirthday, Validators.required),
      id: new FormControl(climberID, Validators.required),
      guardian: new FormControl(climberGuardian),
      dateCreated: new FormControl(new Date()),
    });
  }

  onSubmit() {
    // log climbers
    console.log('on submit', this.dataFrom.value);

    // add climber
    this.climberService.addClimber(this.dataFrom.value);

    // store the climbers
    this.dataStorage.climberStore();
  }
}
