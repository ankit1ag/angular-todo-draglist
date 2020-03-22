import { Component } from '@angular/core';
import {NgForm} from '@angular/forms' ;
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  title = 'Tracker';
  website = '';
  arr = [];

  todos = [
    {
      name: 'Angular',
      // category: 'Web Development'
    },
    {
      name: 'iOS',
      // category: 'App Development'
    },
    {
      name: 'Java',
      // category: 'Software development'
    }
  ];

  completed = [
    {
      name: 'Android',
      // category: 'Mobile Development'
    },
    {
      name: 'MongoDB',
      // category: 'Databases'
    },
  ];

  onSubmit(f : NgForm ){
    this.arr = f.value;
  
    var todo = this.arr["taskName"];

  
      this.todos.push({ name: todo}) ;
      f.reset();
   
  }
onDeleteToDo(taskName){
for (var i = 0; i < this.todos.length; i++) {
    var obj = this.todos[i];

    if ( taskName == obj.name) {
        this.todos.splice(i, 1);
    }
}
}

onDeleteDone(taskName){
for (var i = 0; i < this.completed.length; i++) {
    var obj = this.completed[i];

    if ( taskName == obj.name) {
        this.completed.splice(i, 1);
    }
}

}
onDrop(event: CdkDragDrop<string[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data,
      event.previousIndex,
      event.currentIndex);
  } else {
    transferArrayItem(event.previousContainer.data,
      event.container.data,
      event.previousIndex, event.currentIndex);
  }
}
}