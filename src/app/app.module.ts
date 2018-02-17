import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatToolbarModule, MatInputModule, MatIconModule } from '@angular/material';

// Components
import { ListComponent } from './components/list/list.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { DetailComponent } from './components/detail/detail.component';

// Services
import { BuscoExtraService } from './services/buscoExtra.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SearcherComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'detail/:id',
        component: DetailComponent
      }
    ]),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [
    BuscoExtraService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
