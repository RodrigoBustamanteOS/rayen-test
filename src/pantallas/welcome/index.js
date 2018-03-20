import { inject } from 'aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';
import {
  ValidationControllerFactory,
  ValidationController,
  ValidationRules
} from 'aurelia-validation';
import { BootstrapFormRenderer } from '../../resources/bootstrap-form-renderer'

@inject(HttpClient, ValidationControllerFactory)
export class Welcome {

  theForm = {
    run: "",
    password: ""
  };

  run = "";
  password = "";

  constructor(HttpClient, controllerFactory) {
    this.httpClient = HttpClient;
    this.url = "http://jsonplaceholder.typicode.com/posts/1";
    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new BootstrapFormRenderer());
        
  }
  getApi() {
    this.httpClient.fetch(this.url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }
  hello() {
    this.controller.validate()
      .then(result => {
          if (result.valid) {
              this.theMail = {
                  name: this.name,
                  email: this.email,
                  message: this.message
              };
              // this.common.postData(this.theMail);
              // this.router.navigate('gracias');
              console.log("resultoo");
          } else {
              // $('#exampleModal').modal('show');
              console.log("fallooo");
          }
      });  
  }
}

ValidationRules
    .ensure(a => a.run).required()
    .ensure(a => a.password).required()
    .on(Welcome)
