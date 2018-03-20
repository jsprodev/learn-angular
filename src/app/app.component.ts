import { Component } from '@angular/core';
import { DataService } from './data.service';
import { IFavoriteObject } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'hello  world';
  isActive = true;
  colspanNo = 2;
  pink = 'pink';
  email = 'two way data binding, ngModel';
  tasks = [];
  person = {};
  text = '';
  highlight: boolean;
  courses = ['angular', 'react', 'vue'];
  viewMode = 'grid';

  constructor(myService: DataService) {
    this.tasks = myService.getTasks();
    this.person = myService.getPerson();
    this.text = myService.getText();
    this.highlight = true;
  }

  clickDiv() {
    console.log('div is clicked');
  }

  clickButton(eventP) {
    console.log('button is clicked', eventP);
    eventP.stopPropagation();
    // console.dir(eventP);
  }

  keyEvent(valueP) {
      console.log('Enter was pressed. The value of input is: ' + valueP);
      // console.log($event.target.value); // vanilla js way
  }

  // we can use type annotation -> ChangeFavorite(eventP: {value: Boolean}) , use interface if the object is complex.
  changeFavorite(eventP: IFavoriteObject) {
    console.log('Message from Host Component, favorite changed :', eventP);
  }

}
