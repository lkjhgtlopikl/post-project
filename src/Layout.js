import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav id="nav">
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/uslugi">Main</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
