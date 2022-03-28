import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuditoriaComponent } from './components/auditoria/auditoria.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UneteComponent } from './components/unete/unete.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PopupComponent } from './components/popup/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component'; 


@NgModule({
  declarations: [
    AppComponent,
    AuditoriaComponent,
    NavComponent,
    FooterComponent,
    UneteComponent,
    NosotrosComponent,
    PopupComponent,
    LoginComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
