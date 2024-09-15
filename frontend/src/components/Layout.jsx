import { Outlet, Link } from "react-router-dom";
import "./css/layout.css"
const Layout = () => {
  return (
    <>
      <nav>
        <ul className="menu-container">
          <li>
            <Link className="menu" to="/">Home</Link>
          </li>
          <li>
            <Link className="menu" to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link className="menu" to="/contact">Contact</Link>
          </li>
          <li>
            <Link className="menu" to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;