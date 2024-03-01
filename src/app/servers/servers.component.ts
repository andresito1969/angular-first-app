import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //     <app-server></app-server>
  //     <app-server></app-server>
  //   `,
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created";
  serverName: string = '';
  serverCreated: boolean = false;

  constructor() {
    console.log("aa");
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer = () => {
    this.serverCreationStatus = "Server created: " + this.serverName
    this.serverCreated = true;
  };

  onUpdateServerName = (event : Event) => this.serverName = (<HTMLInputElement>event.target).value; 
}
