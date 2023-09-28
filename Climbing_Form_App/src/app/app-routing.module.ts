import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewClimberComponent } from './Components/new-climber/new-climber.component';
import { BelayComponent } from './Components/belay/belay.component';
import { PersonalGearComponent } from './Components/personal-gear/personal-gear.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { WaiversComponent } from './Components/waivers/waivers.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent }, // to welcome screen
  { path: 'new-climber', component: NewClimberComponent }, // to new climber form
  { path: 'belay', component: BelayComponent }, // to belay cert form
  { path: 'personal-gear', component: PersonalGearComponent }, // to personal gear release form
  { path: 'waivers', component: WaiversComponent }, // to all waivers
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
