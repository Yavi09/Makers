// archivo con la configuración de direcciones

// importación de modulos para el enrutamiento con vue
import { createRouter, createWebHistory } from "vue-router";

// importar interfaces, dashboard (inicio), servicios, productos, clientes
//#region 
// empleados, reservaciones, facturas, horarios, sucursales
import dashboard from "../views/dashboard.vue";
import servicios from "../views/servicios/vista.vue";
import productos from '../views/productos/vista.vue';
import clientes from '../views/clientes/vista.vue';
import empleados from '../views/empleados/vista.vue';
import reservaciones from '../views/reservaciones/vista.vue';
import facturas from '../views/facturas/vista.vue';
import sucursales from '../views/sucursales/vista.vue';
import horarios from '../views/horarios/vista.vue';
import tipos from '../views/tipos_servicios/vista.vue';
import cargos from '../views/cargos/vista.vue';
import ordenes from '../views/ordenes/vista.vue';
//#endregion

//#region 
// arcihvos de crear
import crearReservacion from "../views/reservaciones/crear.vue";
import crearServicio from '../views/servicios/crear.vue';
import crearProducto from '../views/productos/crear.vue';
import crearCliente from '../views/clientes/crear.vue';
import crearEmpleado from '../views/empleados/crear.vue';
import crearTipo from '../views/tipos_servicios/crear.vue';
import crearCargo from '../views/cargos/crear.vue';
import crearOrden from '../views/ordenes/crear.vue';
import crearSucursal from '../views/sucursales/crear.vue';
//#endregion

//#region 
// archivos de editar
import editarCliente  from '../views/clientes/editar.vue';

//#endregion

// intancia del enrutador
const ROUTER = createRouter({
    // configuración del historial dentro de la ejecucción
    // se el valor asignado es la url que se utiliza para obtener 
    // la url base del proyecto
    history: createWebHistory(import.meta.env.BASE_URL),
    // definiendo arreglo con las rutas
    routes : [
        // nombre de la ruta para ser llamada en el sidebar
        // path: direcicón url
        // nombre del componente importado
        // inicio
        //#region 
        {
            name:  'dashboard',
            path: '/dashboard',
            component : dashboard
        },
        // servicios
        {
            name: 'servicios',
            path : '/servicios',
            component : servicios
        },
        // productos 
        {
            name : 'productos',
            path : '/productos',
            component : productos
        },
        // clientes
        {
            name : 'clientes',
            path : '/clientes',
            component : clientes
        },
        // empleados
        {
            name : 'empleados',
            path : '/empleados',
            component : empleados
        },
        // reservaciones
        {
            name : 'reservaciones',
            path : '/reservaciones',
            component : reservaciones
        },
        // facturas
        {
            name : 'facturas',
            path : '/facturas',
            component : facturas
        },
        // sucursales
        {
            name : 'sucursales',
            path : '/sucursales',
            component : sucursales
        },
        // horarios
        {
            name : 'horarios',
            path : '/horarios',
            component : horarios
        },
        // tipos de servicios
        {
            name: 'tipos servicios',
            path : '/servicios/tipos',
            component : tipos
        },
        // cargos
        {
            name : 'cargos',
            path: '/empleados/cargos',
            component : cargos
        },
        // ordenes 
        {
            name : 'ordenes',
            path: '/ordenes',
            component : ordenes
        },
        //#endregion
                
            // rutas de crear
        // servicios
        {
            name : 'crearServicio',
            path : '/servicios/crear',
            component : crearServicio

        },
        // productos
        {
            name : 'crearProducto',
            path : '/productos/crear',
            component : crearProducto
        },
        {
            name : 'crearCliente',
            path : '/clientes/crear',
            component : crearCliente
        },
        {
            name : 'crearEmpleado',
            path : '/empleados/crear',
            component : crearEmpleado
        },
        // reservacion
        {
            name : 'crearReservacion',
            path : '/reservaciones/crear',
            component : crearReservacion
        },
        {
            name : 'crearTipoServicio',
            path : '/servicios/tipos/crear',
            component : crearTipo
        },
        {
            name : 'crearCargo',
            path : '/empleados/cargos/crear',
            component : crearCargo
        },
        {
            name : 'crearOrden',
            path : '/ordenes/crear',
            component : crearOrden
        },
        {
            name : 'crearSucursal',
            path : '/sucursales/crear',
            component : crearSucursal
        },
        // TODO: faltan algunos de crear



            // rutas de actualizar
        // clientes
        {
            name : 'editarCliente',
            path : '/clientes/editar/:id',
            component: editarCliente
        }


    ]
})

// exportando ruteado
export default ROUTER;