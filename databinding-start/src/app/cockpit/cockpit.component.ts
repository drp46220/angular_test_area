import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output('srvCreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;

  onAddServer(NameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: NameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(NameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: NameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }
}
