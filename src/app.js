import {DialogService} from 'aurelia-dialog';
// import {Prompt} from './prompt';
import {inject} from 'aurelia-dependency-injection';

@inject(DialogService)
export class App {
  constructor(dialogService) {
    this.dialogService = dialogService;
    this.message = 'Hello World!';
  }
}
