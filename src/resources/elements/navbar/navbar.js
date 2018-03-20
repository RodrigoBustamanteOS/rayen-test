import { bindable, inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import $ from "jquery";
@inject(Router)
export class Navbar{
  constructor(router){
    this.router = router;
  }
}
