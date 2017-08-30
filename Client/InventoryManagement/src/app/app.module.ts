import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './layout/app.component';
import {InventoryManagementModule} from './InventoryManagement/inventorymanagement.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InventoryManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
