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
  servers: string[] = ['Testserver', 'Testserver 2'];
  angular17List: number[] = [16, 17];

  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer = () => {
    this.serverCreationStatus = "Server created: " + this.serverName
    this.serverCreated = true;
    this.servers.push(this.serverName);
  };

  onUpdateServerName = (event : Event) => this.serverName = (<HTMLInputElement>event.target).value; 
}
