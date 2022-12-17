import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavBar from '../NavBar'
import Chat from './Chat';
import './Home.css'
import image from './image.jpg';

export const Home = (user) => {


  // useEffect(()=>{
  //   const token = localStorage.getItem('token')
  //   if (!token) {
  //     navigate('/')    // to show pls login because you cant access this page
  // }
  // },[])
  return (
    <div className="Home-Main-1">
     
  

  
     <Navbar bg="dark" variant='dark' expand="lg">
      <Container fluid>
        
        <Navbar.Brand href="/">JKODER'Z</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >


{/* <Nav.Link className='float-right ' href='/about'>LOGIN</Nav.Link> */}

<Nav.Link className='mx-3 position-absolute top-1 end-0' href='/loginform'>LOGIN / SIGNUP</Nav.Link>



  


          </Nav>
          
      {/* <Button className="btn btn-primary mx-2" variant="outline-warning" href="/login">LOGIN</Button>  */}


      
      
     
        </Navbar.Collapse>
      </Container>
   


   

    </Navbar>
    <div className='Home-Main'>
      <h1 className="h1-1">Enhance Your Career,</h1>
      <h1 className="h1-2">Skillify Your brain</h1>
      <br/>
      {/* <button id='starter'>SignUp & Code</button> */}
      <div className="description-Main">
        
<p className="p-1">We help students develop the strongest tech foundation around the subject.
 We help candidates sharpen their tech skills and pursue job opportunities.</p>

      <img src={image} alt="boy sitting" width="50%"/>
      </div>
    </div>
    <Chat/>

    </div>
  );
};