import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  currentDate: string;
  myTask = '';

  // on déclare tasks type any(n'importe quelle type) array vide
  tasks: any[] = [];

  constructor(public afDB: AngularFireDatabase) {
    const timeformat: Intl.DateTimeFormatOptions = {
       weekday: 'short',
       year: 'numeric',
       month: 'short',
       day: 'numeric',
       hour12: false
    };

    this.currentDate = new Date().toLocaleTimeString('fr-FR', timeformat); 
    this.getTasks();
  }

  addTaskToFirebase() {
    this.afDB.list('Task/').push({
      text: this.myTask,
      date: new Date().toISOString(),
      checked: false
    });
    this.showForm();
  }

  addTask = false;

  showForm() {
    this.addTask = !this.addTask;
    this.myTask = '';
  }

  getTasks() {
    this.afDB.list('Task/').snapshotChanges().subscribe(actions => {
      this.tasks = [];
      actions.forEach(action => {
        this.tasks.push({
          key: action.key,
          text: action.payload.exportVal().text,
          hour: action.payload.exportVal().date.substring(11, 16),
          checked: action.payload.exportVal().checked
        });
      });
    });
  }

}
