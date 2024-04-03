import React from 'react';
import{Link, Outlet}from 'react-router-dom';
import { blogdata } from './blogData.js';

function BlogPage() {
    return (
        <>
            <h1>Blog</h1>

            <Outlet/> {/* muestra el comp hijo dentro del padre - Outlet viene con  react-router-dom*/}

            <ul>
                {
                    blogdata.map(post => (
                        <BlogLink key={post.slug} post={post}/>
                    ))
                }
            </ul>
        </>
    );
}

//de --> ${post.slug} --> sale para la url dinámica, y es el dato q toma useParam
function BlogLink({ post }) {
    return (
        <li>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
    );
}
export{BlogPage};