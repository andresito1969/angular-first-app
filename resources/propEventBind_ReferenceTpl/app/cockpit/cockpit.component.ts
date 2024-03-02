import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() childAddServer = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() childAddBlueprint = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';

  onAddServer(serverName : HTMLInputElement) {
    this.childAddServer.emit({
      serverName: serverName.value,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.childAddBlueprint.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
}
