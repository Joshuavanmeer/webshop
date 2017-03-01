import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from "../shared/services/current-user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'ws-wishlist-menu',
  templateUrl: './wishlist-menu.component.html',
  styleUrls: ['./wishlist-menu.component.css']
})
export class WishlistMenuComponent implements OnInit {

    private totalItems: any;

    private handleClick (): void {
        this.router.navigate(['/wishlist']);
    }


    constructor(
        private currentUserService: CurrentUserService,
        private router: Router
    ) { }



    ngOnInit() {

        this.totalItems = this.currentUserService.connect('wishList').getTotalItems();

    }

}
