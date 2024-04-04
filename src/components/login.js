import React from 'react';
import { useAuth } from './auth';
import { Navigate } from 'react-router-dom';

function Login() {
    const auth = useAuth();//hook personalizado
    const [username, setUsername] = React.useState('');

    const login = (e) => {
        e.preventDefault();
        auth.login({ username });//mando el nombre del user al estado del arch auth
    };

    //si ya estoy logeado NO quiero q por URL se pueda volver a entrar
    if(auth.user){
        return <Navigate to={'/profile'}/>
    }


    return (
        <>
            <h1>Login</h1>

            <form onSubmit={login}>
                <label>Escribe tu nombre de usuario:</label>
                <input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />

                <button type="submit">Entrar</button>
            </form>
        </>
    );
}

export default Login