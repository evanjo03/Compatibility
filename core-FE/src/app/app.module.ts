import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from '../core/header/header.component';
import { MainComponent } from '../core/main/main.component';
import { FooterComponent } from '../core/footer/footer.component';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/core/login/login.component';
import { FormBuilder } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    MenuModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
