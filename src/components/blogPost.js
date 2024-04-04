import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogdata } from './blogData.js';
import { useAuth } from './auth.js';

function BlogPost() {
    const { slug } = useParams(); //hook para url dinámica
    const blogpost = blogdata.find(post => post.slug === slug);
    const navigate = useNavigate(); //hook para asignar una url y q te dirija
    const auth = useAuth();
    //creo variable para reconocer si el user es Admin, O si es el autor del post
    const deletePost = auth.user?.isAdmin || blogpost.author === auth.user?.username;

    const handleReturn = () => {
        navigate('/blog'); //podría poner -1 --> navigate('/blog') (sería la pag anterior)
    };

    return (
        <>
            <h2>{blogpost.title}</h2>
            <button onClick={() => handleReturn()}>Volver al blog</button>
            <p>{blogpost.author}</p>
            <p>{blogpost.content}</p>
            {
                deletePost && (
                    <button>Eliminar Post</button>
                )
            }
        </>
    );
}
export { BlogPost };