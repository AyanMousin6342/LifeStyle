import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { InventoryComponent } from './inventory/inventory.component';
import { UsersignComponent } from './usersign/usersign.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserinventoryComponent } from './userinventory/userinventory.component';
import { AddinventoryComponent } from './addinventory/addinventory.component';
import { ReportsComponent } from './reports/reports.component';
import { HelpComponent } from './help/help.component';
import { FetchComponent } from './fetch/fetch.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CheckfeedbackComponent } from './checkfeedback/checkfeedback.component';

const routes: Routes = [
  {
    path: "",redirectTo:"home",pathMatch:'full'
  },
  {
    path: "home",component: HomeComponent
  },
  {
    path:"adminlogin",component:AdminloginComponent
  },
  {
    path:"userlogin",component:UserloginComponent
  },
  {
   path:"admindashboard",component:AdmindashboardComponent
  },
  {
    path:"inventory/:category_id",component:InventoryComponent
  },
  {
    path:"usersign",component:UsersignComponent
  },
  {
    path:"userdashboard",component:UserdashboardComponent
  },
  {
    path:"userinventory/:category_id",component:UserinventoryComponent
  },
  {
    path:"addinventory",component:AddinventoryComponent
  },
  {
    path:"reports",component:ReportsComponent
  },
  {
    path:"help",component:HelpComponent
  },
  {
    path:"feedback",component:FeedbackComponent
  },
  {
    path:"checkfeedback",component:CheckfeedbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
