import { Component, OnInit, EventEmitter } from '@angular/core';
import { Input, Output } from "@angular/core/src/metadata/directives";

@Component({
    selector: 'ws-wishlist-button',
    templateUrl: './wishlist-button.component.html',
    styleUrls: ['./wishlist-button.component.css']
})
export class WishListButtonComponent implements OnInit {

    @Input() private onWishList: boolean = false;
    @Output() addToWishList: EventEmitter<any> = new EventEmitter<any>();
    @Output() removeFromWishList: EventEmitter<any> = new EventEmitter<any>();



    private handleClick(ev): void {
        console.log('handleCLick')
        const target = ev.target;
        if (target.classList.contains('add-to-wishlist-btn')) {
            if (!this.onWishList) {
                this.addToWishList.emit();
            } else if (this.onWishList) {
                this.removeFromWishList.emit();
            }
        }
    }



    constructor() { }

    ngOnInit() {
    }

}
