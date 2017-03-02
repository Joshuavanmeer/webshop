import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyaccountComponent } from "./myaccount.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        MyaccountComponent
    ]
})

export class MyaccountModule {}
