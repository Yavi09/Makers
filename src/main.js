import './assets/main.css'
// importación de bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import { createApp } from 'vue'
import App from './App.vue'
import ROUTER from './routes';

// instancia del componente
const APP = createApp(App)

// usar el enrutado
APP.use(ROUTER);

// montar lo recuperado del componente principal
// al contenedor con id="app"
APP.mount('#app')
