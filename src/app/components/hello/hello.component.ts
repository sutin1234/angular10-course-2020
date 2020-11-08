import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  @Input() title: string;
  @Input() name: string;

  @Output()
  clicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.title);
  }

  buttonClick(): void {
    this.clicked.emit('hi from event emitter');
  }

}
