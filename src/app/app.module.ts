import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { PerfilComponent } from './view/perfil/perfil.component';
import { SearchInputComponent } from './components/search-input/search-input.component';

import { GithubService } from './services/github/github.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerfilComponent,
    SearchInputComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
