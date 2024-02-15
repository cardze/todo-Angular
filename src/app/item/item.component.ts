import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Item } from "../item";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit{
  editable = false;
  time_out = false;
  @Input() item!: Item;
  @Output() remove = new EventEmitter<Item>();

  ngOnInit():void{
    this.item.time_out = this.check_due_date(this.item.due_date);
  }

  saveItem(description:string) {
    if(!description) return;
    this.editable = false;
    this.item.description = description;
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
