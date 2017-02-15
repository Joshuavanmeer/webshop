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
    @Output() addToCart: EventEmitter<any> = new EventEmitter<any>();



    private handleClick(ev): void {
        const target = ev.target;
        if (target.classList.contains('add-to-shoppingcart-btn')) {
            this.addToCart.emit();
        }
    }


    constructor() { }

    ngOnInit() {
    }

}
