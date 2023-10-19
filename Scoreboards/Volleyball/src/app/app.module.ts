import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RosterService } from './roster.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, BoardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [RosterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
