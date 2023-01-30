import {Navbar,Nav} from 'react-bootstrap';
import logo from '../../Images/logo.png';
import "./Navbar.css";
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';


function NavbarMenu() {
  const [show,setShow] = useState(true);
  const controlNavbar = () =>{
    if(window.scrollY > 40)
    {
      if(window.innerWidth >= 1200){
        setShow(false)
      }
    }

    else{
      setShow(true)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll",controlNavbar)
    window.addEventListener("resize",controlNavbar)
    window.addEventListener("load",controlNavbar)
    return () =>{
      window.removeEventListener("scroll",controlNavbar)
      window.removeEventListener("resize",controlNavbar)
      window.removeEventListener("load",controlNavbar)
    }
  },[])
  return (
    <>
      <Navbar collapseOnSelect expand="xl" fixed="top"  className={`navbar ${show && "navbar-up"}`} bg="custom">
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                width= "auto"
                height={30}
                className="d-inline-block align-top"
                alt="farl"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll">
                <span className="toggler-icon top-bar" />
                <span className="toggler-icon middle-bar" />
                <span className="toggler-icon bottom-bar" />
          </Navbar.Toggle>  
          <NavbarCollapse id="navbarScroll" className="justify-content-end">
            <Nav className={`link-none ${show && "link-padding"}`} id='active' navbarScroll>
              <LinkContainer activeStyle={{color: "#FFED00",textDecoration:"none"}}  to="/">
              <Nav.Link className='link-color2'>ÚVOD</Nav.Link>
              </LinkContainer>
              <NavItem>
                <DropdownMenu></DropdownMenu>
              </NavItem>
              <LinkContainer activeStyle={{color: "#FFED00",textDecoration:"none"}}  to="/textil">
              <Nav.Link className='link-color2'>TEXTIL</Nav.Link>
              </LinkContainer>
              <a id='link-eshop' className='link-color' activeStyle={{color: "#FFED00",textDecoration:"none"}} href="https://www.shoptet.cz/">
                E-SHOP
              </a>
              <LinkContainer activeStyle={{color: "#FFED00",textDecoration:"none"}}  to="/kontakt">
              <Nav.Link className='link-color'>KONTAKT</Nav.Link>
              </LinkContainer>
            </Nav>
          </NavbarCollapse>
      </Navbar>
    </>
  );
  function NavItem(props){
    const [open, setOpen] = useState(false);
    return(<>
          <li sclassName="nav-item" onMouseOver={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onClick={() => setOpen(!open)}>
            <div id='drop' className="nav-link">
              SLUŽBY ▼
            </div>
            {open && props.children}
      </li>
    </>);
  }
  function DropdownMenu(){
  
    return(<>
      <div className={`dropdown ${show && "dropdown-bg"}`}>
        <LinkContainer activeStyle={{color: "#FFED00",textDecoration:"none"}} to="/vysivka">
          <Nav.Link id='drop-item' className='dropdown-item'>
            Výšivka
          </Nav.Link>
        </LinkContainer>
        <LinkContainer activeStyle={{color: "#FFED00",textDecoration:"none"}} to="/tisk">
          <Nav.Link id='drop-item' className='dropdown-item'>
            TISK
          </Nav.Link>
        </LinkContainer>
        <LinkContainer activeStyle={{color: "#FFED00",textDecoration:"none"}} to="/laser">
          <Nav.Link id='drop-item' className='dropdown-item'>
            LASER
          </Nav.Link>
        </LinkContainer>
      </div>
    </>);
  }
  
}

export default NavbarMenu;

