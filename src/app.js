export class App {
  constructor() {
    this.message = 'Hello World!';
  }

  configureRouter(config, router) {
    config.map([
      { route: '', name: 'Inicio', moduleId: './pantallas/welcome/index', title: 'Inicio', nav: true },
      { route: 'admision', name: 'Admision', moduleId: './pantallas/admision/index', title: 'Admisión', nav:true }
    ]);
    console.log(router.routes);
  }
}
