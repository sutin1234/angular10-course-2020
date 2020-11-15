import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.scss']
})
export class HiComponent implements OnInit {

  @Input() data: string[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
