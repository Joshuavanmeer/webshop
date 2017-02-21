import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'ws-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

    private cartValue: any = 1;
    private sub: any;


    constructor(
    ) {}

    ngOnInit() {



    }

}
