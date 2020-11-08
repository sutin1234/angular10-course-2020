import { Component, ComponentFactoryResolver, ViewContainerRef, OnInit, ViewChild } from '@angular/core';
import { HiComponent } from './components/dynamic/hi/hi.component';
import { WelcomeComponent } from './components/dynamic/welcome/welcome.component';
import { HelloComponent } from './components/hello/hello.component';
import { ContainerDirective } from './directives/container.directive';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Angular 10';
  isLogin = true;
  hasUser = true;
  number = 3;
  osList = ['Window10', 'MacOSX', 'Linux'];
  name = 'Hello';
  valueFromChild = '';
  @ViewChild(ContainerDirective, { static: true }) container: ContainerDirective;

  constructor(
    private cfr: ComponentFactoryResolver,
    private vcr: ViewContainerRef
  ) { }

  ngOnInit(): void {
    // this.loadComponentLogic();
    // this.loadMultiComponent();
    this.loadComponentWithDirective();
  }

  onClickEvt(value: string): void {
    console.log('clicked ', value);
    this.valueFromChild = value;
  }

  loadComponentLogic(): void {
    const isComponent = this.isLogin ? HiComponent : WelcomeComponent;
    const componentFactory = this.cfr.resolveComponentFactory(isComponent);
    this.vcr.createComponent(componentFactory);
  }
  loadMultiComponent(): void {
    const componentList = [HiComponent, WelcomeComponent];
    componentList.forEach(com => {
      const componentFactory = this.cfr.resolveComponentFactory(com);
      this.vcr.createComponent(componentFactory);
    });
  }

  loadComponentWithDirective(): void {
    const viewContainerRef = this.container.viewContainerRef;
    viewContainerRef.clear();

    const isComponent = this.isLogin ? HiComponent : WelcomeComponent;
    const componentFactory = this.cfr.resolveComponentFactory(isComponent);
    const componentRef = viewContainerRef.createComponent(componentFactory);
    if (componentRef.instance.constructor === HiComponent) {
      (componentRef.instance as HiComponent).data = this.osList;
    }

  }
}
