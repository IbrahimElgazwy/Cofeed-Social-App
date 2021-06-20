import { SharedModule } from './../shared/shared.module';
import { AppRoutingModule } from './../app-routing.module';
import { MenueComponent } from './menue.component';
import { TopMenueComponent } from './top-menue/top-menue.component';
import { LeftMenueComponent } from './left-menue/left-menue.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightMenueComponent } from './right-menue/right-menue.component';



@NgModule({
  declarations: [TopMenueComponent, MenueComponent, LeftMenueComponent, RightMenueComponent],
  imports: [
    CommonModule, AppRoutingModule, SharedModule
  ],
  exports: [MenueComponent, RightMenueComponent]
})
export class MenuesModule { }
