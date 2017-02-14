import { Injectable } from '@angular/core';
import {CurrentUserService} from "./current-user.service";

@Injectable()
export class HttpService {

    private sub: any;


    constructor(private currentUserService: CurrentUserService) {

        this.sub = this.currentUserService.wishList$.subscribe(
            val => console.log(val)
        );

    }

}
