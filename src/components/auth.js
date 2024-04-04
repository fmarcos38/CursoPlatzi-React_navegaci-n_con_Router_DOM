import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

//lista de administradores
const adminList = ['pepe', 'jose'];

//creo contexto
const AuthContext = React.createContext();

//creo mi propio Provider
function AuthProvider({ children }) {
    const navigate = useNavigate();
    //estado para el log guarda la data del usuario
    const [user, setUser] = React.useState("");

    //como a estas funciones las guardo en el provider LAS puedo acceder dsd cualq comp.(login logout)
    //funcion login
    const login = ({ username }) => {
        //busco si el user es admin
        const isAdmin = adminList.find(admin => admin === username);
        setUser({ username, isAdmin }); //isAdmin va a ser true o false 
        //una ves realiz el log ME lleva a profile
        navigate('/profile');
    };

    //logout
    const logout = () => {
        setUser("");
        navigate('/');
    };

    const auth = { user, login, logout };

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}

//creo un hook
function useAuth() {
    const auth = React.useContext(AuthContext);//simulo consumer
    return auth;
}

//COMPONENTE para proteger rutas/urls
//podría hacerlo en un archivo aparte
function AuthRoute(props) {
    const auth = useAuth();

    if (!auth.user) {
        return <Navigate to="/login" />;
    }

    return props.children;
}


export {
    AuthProvider,
    useAuth,
    AuthRoute,
};