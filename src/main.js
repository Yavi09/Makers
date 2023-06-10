import './assets/main.css'
// importación de bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

// componente nativo de vue
import { createApp } from 'vue'
// componente definido en ese directorio
import App from './App.vue'

// componente definido en ese directorio
import ROUTER from './routes';

// componente nativo de cors (depencia)
import cors from 'cors';

// instancia del componente
const APP = createApp(App)

APP.use(cors);
// usar el enrutado
APP.use(ROUTER);

// montar lo recuperado del componente principal
// al contenedor con id="app"
APP.mount('#app')
