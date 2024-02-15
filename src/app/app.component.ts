import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { Item } from "./item";
import { ItemComponent } from './item/item.component';
import { ClockComponent } from './clock/clock.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ItemComponent, ClockComponent, MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'todo';
  today = new Date();
  yesterday = new Date(new Date().setDate(new Date().getDate() - 1));

  filter: "all" | "active" | "done" = "all";
  allItems = [
    { description: "eat", done: false, due_date: this.today.toDateString(), time_out: false },
    { description: "sleep", done: false, due_date: this.yesterday.toDateString(), time_out: false },
    { description: "play", done: true, due_date: this.today.toDateString(), time_out: false },
    { description: "laugh", done: true, due_date: this.yesterday.toDateString(), time_out: false }
  ];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false,
      due_date: this.today.toDateString(),
      time_out: this.check_due_date(this.today.toDateString()),
    });
  }
  addItem_withDuedate(description: string, due_date: MatDatepickerInputEvent<Date>) {
    const check_res = this.check_due_date(due_date.value?.toDateString());
    console.log(`check_due_date(${due_date.value?.toDateString()}) returns ${check_res}`)
    this.allItems.unshift({
      description,
      done: false,
      due_date: `${due_date.value?.toDateString()}`,
      time_out: this.check_due_date(due_date.value?.toDateString())
    });
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

  check_due_date(due_date:string | any){
    const due_date_d = new Date(due_date);
    const today_date = new Date(new Date().toDateString());
    console.log(`due_date : ${due_date}`);
    console.log(`due_date_d : ${due_date_d}`);
    console.log(`today_date : ${today_date}`);
    return due_date_d.getTime() < today_date.getTime();
  }
}
