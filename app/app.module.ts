import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DataService } from './data.service';

const rotes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'countries',
    component: CountriesComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotes),
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
