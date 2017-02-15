import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { CurrentUserService } from "../shared/services/current-user.service";
import { HttpService } from "../shared/services/http.service";



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
        private currentUserService: CurrentUserService,
        private httpService: HttpService
    ) {}

    ngOnInit() {



    }

}
