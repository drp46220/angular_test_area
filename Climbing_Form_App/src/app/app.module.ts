import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { NewClimberComponent } from './Components/new-climber/new-climber.component';
import { BelayComponent } from './Components/belay/belay.component';
import { PersonalGearComponent } from './Components/personal-gear/personal-gear.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { WaiversComponent } from './Components/waivers/waivers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewClimberComponent,
    BelayComponent,
    PersonalGearComponent,
    WelcomeComponent,
    WaiversComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
