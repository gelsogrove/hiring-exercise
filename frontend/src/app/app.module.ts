import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MultiRequestComponent } from './multiRequest/multiRequest.component';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import { TimerComponent } from './multiRequest/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiRequestComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
  ],  
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
