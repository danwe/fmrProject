import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './modules/home-page/continers/home-page/home-page.component';
import { ListComponent } from './modules/home-page/continers/list/list.component';
import { SelectViewComponent } from './modules/home-page/continers/select-view/select-view.component';
import { DetailComponent } from './shareds/components/detail/detail.component';
import { SearchComponent } from './shareds/components/search/search.component';
import { ListSelectComponent } from './shareds/components/list-select/list-select.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListComponent,
    SelectViewComponent,
    DetailComponent,
    SearchComponent,
    ListSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
