import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from "../shared/services/current-user.service";

@Component({
  selector: 'ws-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    addToCart(): void {
        const id = '-Kd0CMuU_tgmY33z_ZBX';
        this.currentUserService.addToCart(id);
    }

    constructor(
        private currentUserService: CurrentUserService
    ) { }


    ngOnInit() {

    }

}
