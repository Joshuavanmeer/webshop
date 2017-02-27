import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'ws-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent implements OnInit {

    @Output() deleteProduct: EventEmitter<any> = new EventEmitter<any>();
    @Input() private productId: string;


    private handleClick(): void {
        this.deleteProduct.emit(this.productId);
    }


    constructor() { }


    ngOnInit() {
    }

}
