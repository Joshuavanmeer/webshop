import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Input } from "@angular/core/src/metadata/directives";

@Component({
  selector: 'ws-shoppingcart-button',
  templateUrl: './shoppingcart-button.component.html',
  styles: [`
        
        .in-shoppingcart {
            background: yellow;
        }
        
    `]
})
export class ShoppingCartButtonComponent implements OnInit {


    @Input() private inShoppingCart: boolean = false;
    @Output() addToShoppingCart: EventEmitter<any> = new EventEmitter<any>();
    @Output() removeFromShoppingCart: EventEmitter<any> = new EventEmitter<any>();


    toggleInCart(): void {
        this.inShoppingCart = this.inShoppingCart ? false : true;
    }


    private handleClick(ev): void {
        const target = ev.target;
        if (target.classList.contains('add-to-shoppingcart-btn')) {
            if (!this.inShoppingCart) {
                this.addToShoppingCart.emit();
            } else if (this.inShoppingCart) {
                this.removeFromShoppingCart.emit();
            }
            //this.toggleInCart();
        }
    }


    constructor() { }

    ngOnInit() {
    }

}
