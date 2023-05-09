import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { UserHistoryComponent } from './pages/user-history/user-history.component';
import { ReserveParkingComponent } from './pages/reserve-parking/reserve-parking.component';
import { CheckAvailabilityComponent } from './pages/check-availability/check-availability.component';
import { RegisterCustomerComponent } from './pages/register-customer/register-customer.component';
import { AddVehicleComponent } from './pages/add-vehicle/add-vehicle.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';



@NgModule({
  declarations: [
    LoginComponent,
    UserHistoryComponent,
    ReserveParkingComponent,
    CheckAvailabilityComponent,
    RegisterCustomerComponent,
    AddVehicleComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ParkudModule { }
