import { bindable, inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@inject(Router)
export class Navbar{
  constructor(router){
    this.router = router;
  }
}
