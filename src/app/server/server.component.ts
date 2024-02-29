import { Component } from "@angular/core";

@Component({
    // standalone: true, // we don't put it in ngmodule
    selector: 'app-server', // unique selector
    templateUrl: './server.component.html',
    // template: '<h1>I work standalone</h1>', // and we remove the templateUrl
    // imports: [OtherComponent], // to tell angular which features can have our standalone component

})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    getServerStatus = () => this.serverStatus;
}