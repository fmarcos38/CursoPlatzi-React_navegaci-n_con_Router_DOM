import { HashRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './components/menu';
import { HomePage } from './components/home';
import { BlogPage } from './components/blogPage';
import { BlogPost } from './components/blogPost';
import { ProfilePage } from './components/profilePage';
import Login from './components/login';
import Logout from './components/logout';
import { AuthProvider, AuthRoute } from './components/auth';

// /#/ -> Home
// /#/blog
// /#/profile
// /#/lalalala -> Not Found
// /blog, /lalala -> Home

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider> {/* encapsulo las rutas en el Provider */}
          <Menu />

          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* ruta anidada */}
            <Route path="/blog" element={<BlogPage />}>
              {/* no ac falta al hijo colocarle la ruta del padre ATENTTO al / del hijo NO va*/}
              <Route path=":slug" element={<BlogPost />} /> {/* ruta dinámica */}
            </Route>

            <Route path="/login" element={<Login />} />
            
            {/* ruta/url protegida */}
            <Route 
              path="/logout" 
              element={
                <AuthRoute>
                  <Logout />
                </AuthRoute>
              } 
            />

            {/* ruta/url protegida */}
            <Route 
              path="/profile" 
              element={
                <AuthRoute>
                  <ProfilePage />
                </AuthRoute>
              } 
            />
            <Route path="*" element={<p>Not found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
