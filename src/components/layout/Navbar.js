import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../Images/costs_logo.png";
function Navbar() {
  return (
    <nav>
      <Container>
        <img src={logo} alt="Falcon-Manager" />
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/contact">Contact</Link>
        <br></br>
        <Link to="/company">Company</Link>
        <br></br>
        <Link to="/newproject">NewProject</Link>
        <br></br>
      </Container>
    </nav>
  );
}
export default Navbar;
