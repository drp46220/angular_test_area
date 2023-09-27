import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewClimberComponent } from './Components/new-climber/new-climber.component';
import { BelayComponent } from './Components/belay/belay.component';
import { PersonalGearComponent } from './Components/personal-gear/personal-gear.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'new-climber', component: NewClimberComponent },
  { path: 'belay', component: BelayComponent },
  { path: 'personal-gear', component: PersonalGearComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
