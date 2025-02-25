import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {

  const isActiveLink = ({ isActive }) => {
    return {
      color: isActive ? "#646cff" : "white"
    }
  }

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="m-auto fw-bold my-3">

            <NavLink style={isActiveLink} className="me-5 fw-bold navlink" to="/movie-website">Home</NavLink>

            <NavLink style={isActiveLink} className="me-5 fw-bold navlink" to="/movie-website/contact">Contact</NavLink>

            <NavLink style={isActiveLink} className="me-5 fw-bold navlink" to="/movie-website/movie">Movie</NavLink>

            <NavLink style={isActiveLink} className="me-5 fw-bold navlink" to="/movie-website/service">Service</NavLink>
          </Nav>

        </Container>
      </Navbar>
    </>
  );
}

export default Header