import {Component, OnInit, style, state, animate, transition, trigger } from '@angular/core';
import { CurrentUserService } from "../shared/services/current-user.service";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import 'rxjs/Rx';

@Component({
    selector: 'ws-myaccount',
    templateUrl: './myaccount.component.html',
    styleUrls: ['./myaccount.component.css'],
        animations: [
        trigger('errorMsg', [
            state('show', style({
                opacity: 1
            })),
            transition('void => *', [
                style({
                    opacity: 0
                }),
                animate(400)
            ]),
            transition('* => void', [
                animate(400, style({
                    opacity: 0
                }))
            ])
        ])
    ]
})
export class MyaccountComponent implements OnInit {


    private myAccountForm: FormGroup;
    private userData: any;
    private formReady: boolean = false;



    private buildForm(): void {
        this.myAccountForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            streetName: ['', Validators.required],
            streetNumber: ['', Validators.required],
            city: ['', Validators.required],
            phoneNumber: ['', Validators.required]
        });
    }



    private prefillForm(): void {
        this.myAccountForm.setValue({
            firstName: this.userData.firstName,
            lastName: this.userData.lastName,
            streetName: this.userData.streetName,
            streetNumber: this.userData.streetNumber,
            city: this.userData.city,
            phoneNumber: this.userData.phoneNumber
        });
    }



    private submitForm(): void {
        if (this.myAccountForm.valid) {
            this.currentUserService.updateUserDetails({
                firstName: this.myAccountForm.value.firstName,
                lastName: this.myAccountForm.value.lastName,
                streetName: this.myAccountForm.value.streetName,
                streetNumber: this.myAccountForm.value.streetNumber,
                city: this.myAccountForm.value.city,
                phoneNumber: this.myAccountForm.value.phoneNumber
            });
        }
    }



    constructor(
        private currentUserService: CurrentUserService,
        private formBuilder: FormBuilder
    ) { }


    ngOnInit() {

        this.buildForm();
        this.currentUserService.currentUserAction.subscribe(
            res => {
                if (res) {
                    this.userData = res;
                    this.prefillForm();
                }
            }
        );

    }
}
