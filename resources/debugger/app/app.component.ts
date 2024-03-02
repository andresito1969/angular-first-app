import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers: Array<String> = [];

  onAddServer() {
    console.log(this.servers);
    this.servers.push('Another Server' + this.servers.length);
  }

  onRemoveServer(id: number) {
    delete this.servers[id];

    // const position = id + 1;
    // this.servers.splice(position, 1);
  }
}
