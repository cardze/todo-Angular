import { CommonModule } from '@angular/common';
import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent implements OnInit {
  private dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wesnesday', 'Thursday', 'Friday', 'Saturday'];
  private date = new Date();
  public hour: any;
  public minute: string = '';
  public second: string = '';
  public ampm: string = '';
  public day: string = '';

  ngOnInit(): void {
    setInterval(() => {
      const date = new Date();
      this.updateDate(date);

    }, 1000); // update every second
    this.day = this.dayArray[this.date.getDay()];
  }

  updateDate(date: Date) {
    const hours = date.getHours();

    this.ampm = hours >= 12 ? 'PM' : 'AM';

    this.hour = hours % 12;
    this.hour = this.hour ? this.hour : 12;
    this.hour = this.hour > 10 ? this.hour : '0' + this.hour;

    const minutes = date.getMinutes();

    this.minute = minutes > 10 ? minutes.toString() : '0' + minutes.toString();

    const seconds = date.getSeconds();

    this.second = seconds > 10 ? seconds.toString() : '0'+seconds.toString();


  }
}
