import {Component, OnInit, style, state, animate, transition, trigger } from '@angular/core';
import { CurrentUserService } from "../shared/services/current-user.service";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
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
    private processingForm: boolean = false;
    private processingMessage: string = 'Information successfully changed, redirecting you to home...';



    private buildForm(): void {
        this.myAccountForm = this.formBuilder.group({
            firstName: ['', [
                Validators.required,
                Validators.pattern('[a-zA-Z ]*')
                ]
            ],
            lastName: ['', [
                Validators.required,
                Validators.pattern('[a-zA-Z ]*')
                ]
            ],
            street: ['', [
                Validators.required,
                Validators.pattern('[a-zA-Z ]*')
                ]
            ],
            streetNumber: ['', [
                Validators.required,
                Validators.pattern('^[0-9]*$')
                ]
            ],
            city: ['', [
                Validators.required,
                Validators.pattern('[a-zA-Z ]*')
                ]
            ],
            phoneNumber: ['', [
                Validators.required,
                Validators.pattern('^[0-9]*$')
                ]
            ]
        });
    }



    private prefillForm(): void {
        this.myAccountForm.setValue({
            firstName: this.userData.firstName,
            lastName: this.userData.lastName,
            street: this.userData.street,
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
                street: this.myAccountForm.value.street,
                streetNumber: this.myAccountForm.value.streetNumber,
                city: this.myAccountForm.value.city,
                phoneNumber: this.myAccountForm.value.phoneNumber
            });
            this.processForm();
        }
    }



    private processForm(): void {
        this.processingForm = true;
        setTimeout(()=> {
            this.processingForm = false;
            this.router.navigate(['/']);
        }, 3000)
    }



    constructor(
        private currentUserService: CurrentUserService,
        private formBuilder: FormBuilder,
        private router: Router
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
