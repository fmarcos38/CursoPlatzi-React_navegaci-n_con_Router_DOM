import React from 'react'
import { /* Link, */ NavLink } from 'react-router-dom'
import { useAuth } from './auth';

//diferencia entre LINK y NAVLINK
/* LINK NO permite la propiedad STYLE con pasaje de parametros como isActive*/
function Menu() {

    const auth = useAuth();    
    //funcion SI tengo user NO muestro login
    function routesFilter(routes){
        if(auth.user.username){            
            const siTengoUsername = routes.filter(r => r.to !== '/login');
            return siTengoUsername;
        }else{
            const routesPublic = routes.filter(r => r.private !== true);
            return routesPublic;
        }        
    }
    let newRoutes = routesFilter(routes);
    
    return (
        <nav>
            {/* con etiqta LINK */}
            {/* <ul>
                    <li>
                        <Link to={'/'}>Home</Link> 
                    </li>
                    <li>
                        <Link to={'/productos'}>Prods</Link>
                    </li>
                </ul> */
            }
            {/* con etiqta NAV_LINK */}
            {/* 
            <ul>
                <li>
                    <NavLink 
                        to={'/'}
                        style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
                        to={'/productos'}
                    >
                        Prods
                    </NavLink>
                </li> 
            </ul>
            */}
            {/* con ARAAY de RUTAS */}
            <ul>
                {
                    newRoutes.map(route => 
                        <li key={route.to}>
                            <NavLink 
                                to={route.to}
                                style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
                            >
                                {route.text}
                            </NavLink>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}

//PARA no repetir codigo, creamos un array con cada ruta
const routes = [];
routes.push({
    to: '/',
    text: 'Home',
    private: false,
});
routes.push({
    to: '/blog',
    text: 'Blog',
    private: false,
});
routes.push({
    to: '/profile',
    text: 'Profile',
    private: true,
});
routes.push({
    to: '/login',
    text: 'Login',
    private: false,
});
routes.push({
    to: '/logout',
    text: 'Logout',
    private: true,
});

export {Menu};

//opcion sin funcion
/*

{routes.map(route => {
          if (route.publicOnly && auth.user) return null;
          if (route.private && !auth.user) return null;
          
          return (
            <li key={route.to}>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? 'red' : 'blue',
                })}
                to={route.to}
              >
                {route.text}
              </NavLink>
            </li>
          );
        })}


*/