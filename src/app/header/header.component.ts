import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'ws-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {


    handleClick (ev): void {
        const target = ev.target;
        if (target.id === 'logo') {
            this.router.navigate(['/']);
        }
    }


    constructor(
        private router: Router
    ) {}

    ngOnInit() {



    }

}
