import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrderrByPipe } from './orderby';

@NgModule({
  declarations: [AppComponent, OrderrByPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

declare global {
  interface Window { analytics: any; }
}
