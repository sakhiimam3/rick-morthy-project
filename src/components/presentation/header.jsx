import { Container, Nav, Navbar ,Offcanvas} from "react-bootstrap"
import Styles from "../../styles/header.module.scss"
import { NavLink,useNavigate } from "react-router-dom"
const Header = () => {
  const Navigate=useNavigate()
  return ( 
        <> 
        <Navbar bg="light" expand={false}>
  <Container >
  
  <Navbar.Brand  onClick={()=>Navigate("/")} className={Styles.logo} >Rick & Morty  <span className="text-primary fs-4 fw-bold">WiKi</span> </Navbar.Brand>
    <Nav className={`${Styles.menu}  d-flex justifu-content-end flex-row gap-5`}>
     <Nav.Link>  <NavLink  to="/"> character  </NavLink> </Nav.Link>
     <Nav.Link>  <NavLink  to="/episode"> episode   </NavLink></Nav.Link>
     <Nav.Link > <NavLink to="/location"> location  </NavLink></Nav.Link>
    </Nav>
   
  <Navbar.Toggle aria-controls="offcanvasNavbar"  className={Styles.toogle_btn}  /> 
    
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
 
      <Offcanvas.Header  onClick={()=>Navigate("/")} closeButton>
      <Offcanvas.Title id="offcanvasNavbarLabel"> Rick & Morty WiKi </Offcanvas.Title> 
      </Offcanvas.Header>
      <style jsx>
    
   
      </style>

      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
        <Nav.Link>  <NavLink  ActiveClassName="active"   to="/"> character  </NavLink> </Nav.Link>
     <Nav.Link>  <NavLink     to="/episode"> episode   </NavLink></Nav.Link>
     <Nav.Link > <NavLink     to="/location"> location  </NavLink></Nav.Link>


        </Nav>
      </Offcanvas.Body>

    </Navbar.Offcanvas>

  </Container>
</Navbar>

        </>

    )
}

export default Header