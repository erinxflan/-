import 'bootstrap';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
@inject(Router)

export class App {
  constructor(router) {
 this.Router=router
  }
    configureRouter(config, router){
      this.router = router
      config.title = "Blegh"
      config.map([{route:['', 'home'], name: 'home', moduleId: 'home', title: 'home'},
       {route:'aboutME', name: 'aboutME', moduleId: 'aboutME', title: 'about me'},
       {route:'contact', name: 'contact', moduleId: 'contact', title: 'Contact'}])
  }
  homeclick(){
    this.Router.navigateToRoute('home')
  }
  aboutmeclick(){
    this.Router.navigateToRoute('aboutME')
  }
  contactclick(){
    this.Router.navigateToRoute('contact')
  }
}
