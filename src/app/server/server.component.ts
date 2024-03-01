import { Component } from "@angular/core";

@Component({
    // standalone: true, // we don't put it in ngmodule
    selector: 'app-server', // unique selector
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white
        }
    `]
    // template: '<h1>I work standalone</h1>', // and we remove the templateUrl
    // imports: [OtherComponent], // to tell angular which features can have our standalone component

})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus = () => this.serverStatus;

    getColor = () => this.serverStatus === 'online' ? 'green' : 'red';
}