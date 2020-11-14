import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { InfoComponentComponent } from './info-component/info-component.component';
import { TabComponentComponent } from './tab-component/tab-component.component';
import { AComponent } from './tab-component/a-component/a-component.component';
import { BComponent } from './tab-component/b-component/b-component.component';
import { CComponent } from './tab-component/c-component/c-component.component';
import { DComponent } from './tab-component/d-component/d-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    InfoComponentComponent,
    TabComponentComponent,
    AComponent,
    BComponent,
    CComponent,
    DComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
