import { Component } from '@angular/core';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent {
  isDisplayed= false;
  log=[];

  toggleDisplay() {
    this.isDisplayed = !this.isDisplayed;
    this.log.push(new Date)
  }
}
  // addCLick(val) {
  //   this.buttonClicks.push(val);
  //   console.log(this.buttonClicks);
  // }


//   username='';

//   resetInputForm() {
//     this.username = "";
//   }
// }

  // allowNewServer=false;
  // serverCreationStatus= "No created server";
  // serverName="testss ";
  // serverCreated=false;
  // servers = ['TestServer 1', 'TestServer 2'];

  // constructor() {
  //   setTimeout(() => {
  //     this.allowNewServer=true;
  //   }, 2000);
  // }

  // onCreateServer() {
  //   this.serverCreated = true;
  //   this.servers.push(this.serverName);
  //   this.serverCreationStatus="server created. Name is " + this.serverName;
  // }

  // onUpdateServerName(event: any) {
  //   this.serverName = event.target.value;
  //    console.log(event);
  // }
