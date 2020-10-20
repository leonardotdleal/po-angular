import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PoModule } from '../../../ui/src/lib';
import { registerLocaleData } from '@angular/common';
import localept from '@angular/common/locales/pt';
import localerus from '@angular/common/locales/ru';

registerLocaleData(localept, 'pt');
registerLocaleData(localerus, 'ru');

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([]), PoModule],
  bootstrap: [AppComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'en' }]
})
export class AppModule {}
