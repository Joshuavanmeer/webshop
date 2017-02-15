import { Component, OnInit, EventEmitter } from '@angular/core';
import { Input, Output } from "@angular/core/src/metadata/directives";

@Component({
    selector: 'ws-wishlist-button',
    template: './wishlist-button.component.html',
    styles: [`
        
        .on-wishlist {
            background: yellow;
        }
        
    `]
})
export class WishListButtonComponent implements OnInit {

    @Input() private onWishList: boolean = false;
    @Output() addToWishList: EventEmitter<any> = new EventEmitter<any>();



    private handleClick(ev): void {
        const target = ev.target;
        if (target.classList.contains('add-to-wishlist-btn')) {
            console.log(' df')
            this.addToWishList.emit(ev);
        }
    }


    constructor() { }

    ngOnInit() {
    }

}
