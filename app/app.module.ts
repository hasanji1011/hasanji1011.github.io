import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes }   from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyDatepickerComponent } from './my-datepicker/my-datepicker.component';
import { DatepickerDirective } from './datepicker.directive';
import { CommaseparatednumberPipe } from './commaseparatednumber.pipe';
import { CustomSelectDirective } from './custom-select.directive';
import { HighChartsDirective } from './high-charts.directive';
import { HighMapsDirective } from './high-maps.directive';

import{ MapDataService } from './map-data.service';
import { DeviceUsagePieDirective } from './device-usage-pie.directive';
import { TestADirective } from './test-a.directive';
import { WorldmapDirective } from './worldmap.directive';
import { ProgressbarDirective } from './progressbar.directive';
import { ProgressbarComponent } from './progressbar/progressbar.component';
const appRoutes:Routes = [
 
  { path: '',
    redirectTo: 'Dashboard1',
    pathMatch: 'full'
  },
  { path: 'Dashboard1',
    component: Dashboard1Component
  },
  { path: 'Dashboard2',
    component: Dashboard2Component
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    Dashboard1Component,
    Dashboard2Component,
    PageNotFoundComponent,
    MyDatepickerComponent,
    DatepickerDirective,
    CommaseparatednumberPipe,
    CustomSelectDirective,
    HighChartsDirective,
    HighMapsDirective,
    DeviceUsagePieDirective,
    TestADirective,
    WorldmapDirective,
    ProgressbarDirective,
    ProgressbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, MapDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
