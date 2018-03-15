export class App {
  constructor() {
    this.message = 'Hello World!';
  }

  configureRouter(config, router){
    config.map([
      { route: '', name: 'Inicio', moduleId: './pantallas/welcome/index', title: 'Inicio' }
    ])
  }
}
