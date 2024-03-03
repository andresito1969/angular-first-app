import { Component, Input } from "@angular/core";

@Component({
    templateUrl: './odd.component.html',
    selector: 'app-odd',
    styleUrl: './odd.component.css'
})

export class OddComponent {
    @Input() odd: number;
}