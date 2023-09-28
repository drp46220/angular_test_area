import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabaseCommsService } from 'src/app/database-comms.service';

@Component({
  selector: 'app-new-climber',
  templateUrl: './new-climber.component.html',
  styleUrls: ['./new-climber.component.css'],
})
export class NewClimberComponent implements OnInit {
  check: boolean = false;
  formData: any = {};

  constructor(private dataService: DatabaseCommsService) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.dataService.addClimber(form.value);
  }
}
