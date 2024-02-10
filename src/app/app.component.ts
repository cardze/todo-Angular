import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Item } from "./item";
import { ItemComponent } from './item/item.component';
import { ClockComponent } from './clock/clock.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ItemComponent, ClockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'todo';
  today = new Date();

  filter: "all" | "active" | "done" = "all";
  allItems = [
    { description : "eat" , done : false, due_date : this.today.toDateString()},
    { description : "sleep" , done : false, due_date : this.today.toDateString()},
    { description : "play" , done : true, due_date : this.today.toDateString()},
    { description : "laugh" , done : true, due_date : this.today.toDateString()}
  ];

  get items() {
    if(this.filter === "all"){
      return this.allItems;
    }
    return this.allItems.filter((item)=>
      this.filter === "done" ? item.done : !item.done
    );
  }

  addItem(description:string){
    this.allItems.unshift({
      description,
      done : false,
      due_date : this.today.toDateString()
    });
  }

  remove(item : Item){
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
