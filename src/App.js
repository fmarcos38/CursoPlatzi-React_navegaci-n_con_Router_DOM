import { HashRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './components/menu';
import { HomePage } from './components/home';
import { BlogPage } from './components/blogPage';
import { BlogPost } from './components/blogPost';
import { ProfilePage } from './components/profilePage';

// /#/ -> Home
// /#/blog
// /#/profile
// /#/lalalala -> Not Found
// /blog, /lalala -> Home

function App() {
  return (
    <>
      <HashRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* ruta anidada */} 
          <Route path="/blog" element={<BlogPage />}>
            {/* no ac falta al hijo colocarle la ruta del padre ATENTTO al / del hijo NO va*/}
            <Route path=":slug" element={<BlogPost />} /> {/* ruta dinámica */}
          </Route>
          
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
