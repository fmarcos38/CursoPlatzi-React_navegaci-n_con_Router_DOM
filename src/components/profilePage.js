import React from 'react';
import { useAuth } from './auth';
//import { Navigate } from 'react-router-dom';


function ProfilePage() {

  //llamo al hook
  const auth = useAuth();
  //proteccion de la url
  /* if(!auth.user.username){
    return <Navigate to={'/login'}/>;
  } */

  return (
    <> {/* envuelvo el comp en el comp desarrollado en auth */} 
      <h1>ProfilePage</h1>
      <p>Hola,{auth.user?.username}</p>
      {/* {
        auth.user.username && <p>Hola,{auth.user.username}</p>
      }  */}     
    </>
  );
}

export { ProfilePage };