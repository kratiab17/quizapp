import logo from '../../assets/logo.png'
import './Header.css';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from '../../pages/Login';
import insta from '../../assets/insta.png';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../../store/modalSlice';
const Header = () => {
  const show = useSelector(state=>state.modal.show);
  const login = useSelector(state=>state.register.login);
  const dispatch = useDispatch();
  return (
    <>
    <Navbar bg="white"  expand="lg" className='py-4 col-lg-12'>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='mx-3'/>
      <Navbar.Brand as={Link} to=""  className='m-auto m-lg-0 col-lg-2 col-6'>
        <img
          src={logo}
          width="90"
          height="90"
          className="d-block img-fluid align-top mx-5"
          alt="Logo"
        />
      </Navbar.Brand>
      
      <Navbar.Collapse id="basic-navbar-nav" className='col-lg-8'>
        <Nav className="mx-auto " >
          <Nav.Link as={Link} to="quiz" className=' mx-4  custom-color fw-bold'>Quiz</Nav.Link>
          <Nav.Link as={Link} to="whiteboard" className='mx-4  fw-bold custom-color' >Whiteboard</Nav.Link>
          <Nav.Link as={Link} to="about-us"  className='mx-4 fw-bold  custom-color' >About Us</Nav.Link>
          </Nav>
          <Nav>
          
          {!login && <Nav.Link  onClick={()=>dispatch(modalActions.handleShow())} className='mx-4 mx-lg-5  custom-color fw-bold' >Login / Sign-up</Nav.Link>}
          
        </Nav>
      </Navbar.Collapse>  
      {login && <Nav.Link  className='col-4 mx-3' ><img src={insta} width="90" alt='profile'
          height="90" className={`mx-5 border-0 custom `} /></Nav.Link>}
    </Navbar>
    <Login show={show} handleClose={()=>dispatch(modalActions.handleClose())} />
    </>
  );
};

export default Header;
