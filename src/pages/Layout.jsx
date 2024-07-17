import { Outlet, Link } from "react-router-dom";

const Layout = () =>{
 return <div>
    <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/src/componentes/Heidi.jsx">Heidi</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
    </nav>
    <hr />
    <Outlet />
 </div>;
}

export default Layout;