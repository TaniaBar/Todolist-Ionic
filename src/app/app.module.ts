import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

export const firebaseConfig = {
  apiKey: "AIzaSyABWtMFKDAOfCdcYHAz012_TjL1p8EFwl4",
  authDomain: "test-firebase-3b5f2.firebaseapp.com",
  projectId: "test-firebase-3b5f2",
  storageBucket: "test-firebase-3b5f2.appspot.com",
  messagingSenderId: "572603452989",
  appId: "1:572603452989:web:f9e5656580acc724626454"
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})

export class AppModule {}
