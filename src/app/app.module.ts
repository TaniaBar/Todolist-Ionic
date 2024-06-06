import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { CommonModule } from '@angular/common';

export const firebaseConfig = {
  apiKey: "AIzaSyAallM8alOkifUYnlz6qswGrng4mfQSWqo",
  authDomain: "todolist-ionic-60eee.firebaseapp.com",
  projectId: "todolist-ionic-60eee",
  storageBucket: "todolist-ionic-60eee.appspot.com",
  messagingSenderId: "719131759550",
  appId: "1:719131759550:web:3c6764291eb2c68f8f9fef"
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    CommonModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})

export class AppModule {}
