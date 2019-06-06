import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientShowComponent } from './client-show/client-show.component';
import { AdvisorShowComponent } from './advisor-show/advisor-show.component';
import { AdvisorListComponent } from './advisor-list/advisor-list.component';
import { AdvisorEditComponent } from './advisor-edit/advisor-edit.component';
import { AdvisorCreateComponent } from './advisor-create/advisor-create.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientCreateComponent,
    ClientEditComponent,
    ClientListComponent,
    ClientShowComponent,
    AdvisorShowComponent,
    AdvisorListComponent,
    AdvisorEditComponent,
    AdvisorCreateComponent,
    LoginComponent

],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }