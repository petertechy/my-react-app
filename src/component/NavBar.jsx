import styles from "./NavBar.module.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    let style = {
        color: "green", 
        backgroundColor: "black"
    }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary align-items-center">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-decoration-none text-dark" to="/services">Service</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-decoration-none text-dark" to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-decoration-none text-dark" to="/data">Get Data</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  );
};

export default NavBar;
