import React from 'react'
import { /* Link, */ NavLink } from 'react-router-dom'

//diferencia entre LINK y NAVLINK
/* LINK NO permite la propiedad STYLE con pasaje de parametros como isActive*/
function Menu() {
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
                    routes.map(route => 
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
});
routes.push({
    to: '/blog',
    text: 'Blog',
});
routes.push({
    to: '/profile',
    text: 'Profile',
});
export {Menu};