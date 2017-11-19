import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/header/header.component';
import { FooterComponent } from '../app/footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }