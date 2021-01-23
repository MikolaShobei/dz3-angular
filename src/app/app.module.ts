import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {CarsComponent} from './cars/cars.component';
import {CarComponent} from './cars/car/car.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OwnerComponent } from './cars/car/owner/owner.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    HomePageComponent,
    OwnerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'home', component: HomePageComponent
    },
      {
        path: 'cars', component: CarsComponent, children: [
          {path: ':id', component: OwnerComponent}
        ]
      }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
