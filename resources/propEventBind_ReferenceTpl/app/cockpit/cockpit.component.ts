import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() childAddServer = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() childAddBlueprint = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInp') serverContentInp: ElementRef;

  onAddServer(serverName : HTMLInputElement) {
    this.childAddServer.emit({
      serverName: serverName.value,
      serverContent: this.serverContentInp.nativeElement.value
    });
  }

  onAddBlueprint(serverName : HTMLInputElement) {
    this.childAddBlueprint.emit({
      serverName: serverName.value,
      serverContent: this.serverContentInp.nativeElement.value
    });
  }
}
