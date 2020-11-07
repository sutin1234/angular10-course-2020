import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public title: string;
  public name: string;
  public myHtml: string;
  public myGetterName: string;


  public ngOnInit(): void {
    this.title = 'data binding';
    this.name = `${this.title} sutin injitt`;
    this.myHtml = '<h4> Angular10 data binding</h4>';
    this.myGetterName = 'myGetter Sutin';
  }

  get getName(): string {
    return this.myGetterName;
  }

  // tslint:disable-next-line: typedef
  setName(name: string): void {
    this.myGetterName = name;
  }

  // tslint:disable-next-line: typedef
  buttonClick(value: string) {
    this.setName(value);
  }
}
