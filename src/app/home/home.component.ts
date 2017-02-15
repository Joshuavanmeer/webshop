import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from "../shared/services/current-user.service";

@Component({
  selector: 'ws-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {




    constructor(
        private currentUserService: CurrentUserService
    ) { }


    ngOnInit() {

    }

}
