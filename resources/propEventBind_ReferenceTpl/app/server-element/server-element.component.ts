import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input("srvElement") element: {type: string, name: string, content: string};

  constructor() {
    console.log("console");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("onChanges");
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngoninit")
  }
}
