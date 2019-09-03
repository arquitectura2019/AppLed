import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  led = new FormControl('');
  ledDatabase: AngularFireObject<any>;
  tempDatabase: AngularFireObject<any>;
  temp = new FormControl('');

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {}

  prenderLed() {
    this.ledDatabase = this.db.object('led');
    if (this.led.value) {
      this.ledDatabase.set(1);
    } else {
      this.ledDatabase.set(0);
    }
  }

  temporizar() {
    this.tempDatabase = this.db.object('temp');
    if (this.temp.value == '') {
      console.log(false);
    } else {
      this.tempDatabase.set(this.temp.value);
      this.temp.setValue('');
    }
  }
}
