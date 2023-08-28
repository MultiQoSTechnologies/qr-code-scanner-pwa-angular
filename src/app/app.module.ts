import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { environment } from '../environments/environment';
import { AppInfoDialogComponent } from './app-info-dialog/app-info-dialog.component';
import { AppInfoComponent } from './app-info/app-info.component';
import { AppUiModule } from './app-ui.module';
// import { FormatsDialogComponent } from './formats-dialog/formats-dialog.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
@NgModule({
  declarations: [AppComponent,  AppInfoComponent, AppInfoDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    AppUiModule,
    NoopAnimationsModule,
    ZXingScannerModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }


