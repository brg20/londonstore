import {Navbar, Container, Nav} from 'react-bootstrap'
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom' ;


function NavBar ()  {

    return ( 
        <>
  <Navbar   variant="dark">
    <Container>
    <Link className="nav-link" to={'/'}>
    <Navbar.Brand>London Store</Navbar.Brand></Link>
    <Nav className="me-auto">
    <Link className="nav-link" to={'/categoria/Camisetas'}>Camisetas</Link>
    <Link className="nav-link" to={'/categoria/Abrigos'}>Abrigos</Link>
    <Link className="nav-link" to={'/categoria/Otros'}>Otros</Link>
    </Nav>
    <Link to={'/cart'}><CartWidget/></Link>
    </Container>
  </Navbar>
</>
    )
}

export default NavBar ;
