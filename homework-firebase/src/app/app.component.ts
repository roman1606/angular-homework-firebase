import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listOfData: any[] | undefined;

  constructor( db: AngularFireDatabase) {
    db.list('/dataList').valueChanges().subscribe(listOfData => {
      this.listOfData = listOfData;
      console.log(this.listOfData);
    });
  }  
  
}


