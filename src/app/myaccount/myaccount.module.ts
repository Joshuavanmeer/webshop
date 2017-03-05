import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyaccountComponent } from "./myaccount.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ModalTimerComponent } from "../modal-timer/modal-timer.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        MyaccountComponent,
        ModalTimerComponent
    ]
})

export class MyaccountModule {}
