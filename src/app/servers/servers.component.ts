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

  constructor() {
    console.log("aa");
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer = () => this.serverCreationStatus = "Server created";

  onUpdateServerName = (event : Event) => this.serverName = (<HTMLInputElement>event.target).value; 
}
