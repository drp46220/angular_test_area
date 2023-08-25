import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Emulated/Default, Native/Shadow, None
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') //allows other compontents to see this element only using the 'srvElement' name
  element: { type: string, name: string, content: string };

  constructor() {
  }

  ngOnInit() {
  }
}
