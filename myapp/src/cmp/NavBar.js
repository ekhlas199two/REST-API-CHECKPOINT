import {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { getContact, togglefalse } from '../redux/actions/ContactActions';
import {Link} from 'react-router-dom'
import Home from '../cmp/Home'
import './NavBar.css'




function NavBar(){
    const dispatch= useDispatch()

    return(
        <div>
<>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">My Contacts</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link className='navlink' to='/' href="/" onClick={()=>dispatch(Home())} >Home</Nav.Link>
      <Nav.Link  href="/Contacts">  <Link  className='navlink' to="/contacts"  onClick={()=>dispatch(getContact())} > Contacts  </Link></Nav.Link>
      <Nav.Link  ><Link className='navlink' to="/AddEdit" onClick={()=>togglefalse()} >Add contact </Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
  
</> 

        </div>
    )
}
export default NavBar;