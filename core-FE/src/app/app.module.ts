import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'

import { LoginComponent } from 'src/core/login/login.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../core/header/header.component';
import { LobbyComponent } from '../core/lobby/lobby.component';
import { MainComponent } from '../core/main/main.component';
import { FooterComponent } from '../core/footer/footer.component';

import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TabMenuModule } from 'primeng/tabmenu';

const appRoutes: Routes = [
  { path: 'lobby', component: LobbyComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    LoginComponent,
    LobbyComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    MenuModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    TabMenuModule,
    RouterModule,
    ReactiveFormsModule 
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
