import { Route } from 'react-router-dom'
import App from './App';
import AgregarPage from './AgregarPage'; // Importa el componente para la página de agregar

function AppRouter() {
    return (
        <>
            <Route path="/" component={App} />
            <Route path="/agregar" component={AgregarPage} /> {/* Definimos la ruta para la página de agregar */}
        </>
    );
}

export default AppRouter;
