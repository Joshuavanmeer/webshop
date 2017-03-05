import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ws-modal-timer',
  templateUrl: './modal-timer.component.html',
  styleUrls: ['./modal-timer.component.css']
})
export class ModalTimerComponent implements OnInit {

    @Input() private message: string;

    constructor() { }

    ngOnInit() {
    }

}
