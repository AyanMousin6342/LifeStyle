import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { FormsModule } from '@angular/forms';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoriesComponent } from './inventories/inventories.component';
import { UsersignComponent } from './usersign/usersign.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserinventoryComponent } from './userinventory/userinventory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AddinventoryComponent } from './addinventory/addinventory.component';
import { ReportsComponent } from './reports/reports.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HelpComponent } from './help/help.component';
import { FetchComponent } from './fetch/fetch.component';
import { CheckfeedbackComponent } from './checkfeedback/checkfeedback.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminloginComponent,
    UserloginComponent,
    AddCategoryComponent,
    AdmindashboardComponent,
    InventoryComponent,
    InventoriesComponent,
    UsersignComponent,
    UserdashboardComponent,
    UserinventoryComponent,
    AddinventoryComponent,
    ReportsComponent,
    FeedbackComponent,
    HelpComponent,
    FetchComponent,
    CheckfeedbackComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
