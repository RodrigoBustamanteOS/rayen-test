import { RouterConfiguration, Router } from 'aurelia-router';
export class Admision{
  configureRouter(config, router){
    config.title = "Admisión";
    config.map([
      { route: 'testeo', name: 'testeo', moduleId: './routes/testeo/index' }
    ])
  }
}
