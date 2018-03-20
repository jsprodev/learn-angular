import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { BootstrapCardComponent } from './bootstrap-card/bootstrap-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    FavoriteComponent,
    BootstrapCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
