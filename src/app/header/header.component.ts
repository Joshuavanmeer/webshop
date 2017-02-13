import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    private cartOpen: boolean = false;


    private openCart(): void {
        this.cartOpen = this.cartOpen ? false : true;
    }


    constructor() { }

    ngOnInit() {
    }

}
