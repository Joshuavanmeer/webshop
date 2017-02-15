import { NgModule } from '@angular/core';
import { HomeComponent } from "./home.component";
import { CommonModule} from "@angular/common";

@NgModule({
    imports: [CommonModule],
    declarations: [HomeComponent],
    exports: [HomeComponent],
    providers: []
})

export class HomeModule {

}
