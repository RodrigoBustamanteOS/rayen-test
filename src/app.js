import childAdmision from "./pantallas/routes";

export class App {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'Inicio', moduleId: './pantallas/welcome/index', title: 'Inicio', nav: true },
      { route: 'admision', name: 'Admision', moduleId: './pantallas/admision/index', title: 'Admisión', nav: true },
      { route: 'agenda', name: 'Agenda', moduleId: './pantallas/agenda/index', title: 'Agenda', nav: true },
      { route: 'citas', name: 'Citas', moduleId: './pantallas/citas/index', title: 'Citas', nav: true },
      { route: 'herramientas', name: 'Herramientas', moduleId: './pantallas/herramientas/index', title: 'Herramientas', nav: true },
      ...childAdmision
    ]);
  }
}
