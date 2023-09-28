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
import { DatabaseCommsService } from './database-comms.service';
import { HttpClientModule } from '@angular/common/http';
import { ClimbersDatabaseViewComponent } from './Components/climbers-database-view/climbers-database-view.component';
import { ClimberListItemsComponent } from './Components/climbers-database-view/climber-list-items/climber-list-items.component';
import { ClimberResolverService } from './Components/climber-resolver.service';
import { ClimbersService } from './climbers.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewClimberComponent,
    BelayComponent,
    PersonalGearComponent,
    WelcomeComponent,
    ClimbersDatabaseViewComponent,
    ClimberListItemsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [DatabaseCommsService, ClimbersService, ClimberResolverService],
  bootstrap: [AppComponent],
})
export class AppModule {}
