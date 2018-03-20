import { RouterConfiguration, Router } from 'aurelia-router';
export class Admision{
  configureRouter(config, router){
    config.title = "Admisión";
    config.map([
      { route: 'inscripcion', name: 'inscripcion', moduleId: './routes/inscripcion/index', nav: true, title: 'Inscripción'},
      { route: 'informes', name: 'informes', moduleId: './routes/informes/index', nav: true, title: 'Informes'}
    ]);
  }
}
