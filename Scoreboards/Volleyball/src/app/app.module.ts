import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RosterService } from './roster.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { BoardComponent } from './board/board.component';
import { HomeRosterComponent } from './home-roster/home-roster.component';
import { AwayRosterComponent } from './away-roster/away-roster.component';
import { StatService } from './stats.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BoardComponent,
    HomeRosterComponent,
    AwayRosterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  providers: [RosterService, StatService],
  bootstrap: [AppComponent],
})
export class AppModule {}
