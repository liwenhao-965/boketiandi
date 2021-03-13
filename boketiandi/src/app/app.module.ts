import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
//引入Material组件UI
import { MatSliderModule } from '@angular/material/slider';
//引入DevUI部分组件依赖angular动画，需要引入animations模块
import { DevUIModule } from 'ng-devui';
import { HomeComponent } from './components/home/home.component';
import { PageendComponent } from './components/pageend/pageend.component';
import { PanelComponent } from './components/panel/panel.component';

import { PanelModule } from 'ng-devui';
import { BadgeModule } from 'ng-devui/badge';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageendComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    DevUIModule,
    PanelModule,
    BadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
