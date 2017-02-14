import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/scan';


@Injectable()
export class TestService {

    msgService: Subject<any> = new Subject<any>();

    messages: any;
    messagesArr: any;
    sub: any;


    addMessage(msg: any) {
        this.msgService.next([{age: 20}]);
        this.msgService.next([{name: 'henk'}]);
    }


    constructor() {


        this.messagesArr = this.msgService
            .scan((acc, cur) => {
                let arr = [];
                return arr.concat(acc, cur);
            }, [{dus: 'jeppers first value'}])

        // this.messagesArr.subscribe(res => {
        //     console.log(res);
        // })




    }

}
