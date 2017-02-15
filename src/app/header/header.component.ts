import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'ws-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

    private cartOpen:boolean = false;
    private cartValue: any = 1;
    private sub: any;

    private openCart(): void {
        this.cartOpen = this.cartOpen ? false : true;
    }




    constructor(
    ) {}

    ngOnInit() {



    }

}
