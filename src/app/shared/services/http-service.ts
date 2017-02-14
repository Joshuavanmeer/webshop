import { Injectable } from '@angular/core';
import {CurrentUserService} from "./current-user.service";

@Injectable()
export class HttpService {

    private sub: any;


    display(res) {
        console.log(res, 'and so forth')
    }

    constructor(private currentUserService: CurrentUserService) {

        this.sub = this.currentUserService.wishList$.subscribe(res => {
            console.log(res);
        })

    }

}
