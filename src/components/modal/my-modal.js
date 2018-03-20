import {DialogService} from 'aurelia-dialog';
import {inject} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';
import $ from 'jquery';

@inject(DialogController)
export class Prompt {
  static inject = [DialogService];
   constructor(controller, dialogService) {
      this.controller = controller;
      this.answer = null;
      controller.settings.centerHorizontalOnly = true; 
      this.dialogService = dialogService;
   }

   activate(message) {
      this.message = message;
   }

   Enviar(){
    $('#exampleModal').modal('show');
   }
  
}