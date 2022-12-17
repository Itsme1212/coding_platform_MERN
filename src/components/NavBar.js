


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState , useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';




function NavScrollExample() {

    useEffect(()=>{
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/')    // to show pls login because you cant access this page
  }
  },[])

  // const [show, hide] = useState(true);

  // const [isLoggedin, setIsLoggedin] = useState(false);



    // useEffect(() => {
    //     const notify = () => toast("Fetching the Model Do not Close", {
    //       position: toast.POSITION.TOP_CENTER,
    //       autoClose: 60000
    //     });
    
    //     notify();
    //   }, [])

    const token=localStorage.getItem('email');

    const navigate = useNavigate();
    useEffect(()=>{
      const token = localStorage.getItem('token')
      if (!token) {
        navigate('/nav')
    }
    },[])

  return (

  
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container fluid>
        
        <Navbar.Brand href="/mainapp">JKODER'Z</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

{/* <Button variant="outline-warning" href="/home">HOME</Button>  */}



<Nav.Link className='mx-1 ' href='/editor'>Code editor</Nav.Link>

<Nav.Link className='mx-1' href='/hackathon'>Organize hackathon</Nav.Link>


<NavDropdown className='mx-1'
              id="nav-dropdown-dark-example"
              title="Explore"
              menuVariant="dark"
            >
              <NavDropdown.Item href="https://leetcode.com/contest/">Live contests</NavDropdown.Item>
              <NavDropdown.Item href="/placement">
Placement preparation
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/fresher">
Solve Problems                            </NavDropdown.Item>
            </NavDropdown>

            {/* <Nav.Link href="/about"></Nav.Link>
            <Button variant="outline-warning" href="/about">ABOUT US</Button> 

            <Nav.Link href="/login"></Nav.Link>

             */}
            
            
            {/* <Button variant="outline-warning" href="/editor">OPEN CODE EDITOR</Button>  */}
            {/* <Nav.Link href="/login"></Nav.Link> */}

            {/* <Button variant="outline-warning" href="/hackathon">ORGANIZE HACAKATHON</Button>  */}
            {/* <Nav.Link href="/login"></Nav.Link> */}

            {/* <Button variant="outline-warning" href="/lpage">REGISTER</Button> 
            <Nav.Link href="/login"></Nav.Link> */}

            

            {/* <Button variant="outline-warning" href="/signup">SIGN-UP</Button>  */}
            


            {/* <Button variant="outline-warning" href="/chat">CHAT WITH US</Button>  */}



            {/* <Button variant="outline-warning" href="/login">REGISTER</Button>  */}
            {/* <Nav.Link href="/login"></Nav.Link> */}

            {/* <Button variant="outline-warning" href="/auth">SIGN IN</Button> */}

            {/* <Nav.Link href="/login"></Nav.Link> */}

{/* <Button variant="outline-warning" href="/dashboard">dash</Button>

<Nav.Link href="/login"></Nav.Link>

<Button variant="outline-warning" href="/preferences">pref</Button> */}

{/* <Nav.Link href="/login"></Nav.Link> */}

{/* <Button variant="outline-warning" href="/lpage">SIGN IN</Button> */}



           {/* <NavDropdown title="Check here" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> 
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
            {/* <Nav.Link href="#"></Nav.Link> */}

          
    
{/* <Dropdown >
      <Dropdown.Toggle variant="outline-warning" id="dropdown-basic" >
        TECHNICAL
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/editor">Open code editor</Dropdown.Item>
        <Dropdown.Item href="/hackathon">Organize Hackathon</Dropdown.Item>
        <Dropdown.Item href="/certificate">Certificate</Dropdown.Item>

         
      </Dropdown.Menu>
    </Dropdown> */}


          </Nav>
          
      {/* <Button className="btn btn-primary mx-2" variant="outline-warning" href="/login">LOGIN</Button>  */}

      <i class="fa-regular fa-user fa-lg"></i>

      
      
      <Dropdown>
      
      <Dropdown.Toggle id="dropdown-basic">
      {token}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => {
                        localStorage.clear()
                        navigate('/')
                    }}>Log-out</Dropdown.Item>
        <Dropdown.Item href="#">Settings</Dropdown.Item>
        <Dropdown.Item href="#">Home</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
{/* <Button className="btn btn-primary mx-2" variant="outline-warning" onClick={() => {
                        localStorage.clear()
                        navigate('/')
                    }}>LOGOUT</Button>   */}

{/* <Button className="btn btn-primary mx-2" variant="outline-warning" href="/in">LOGIN MACHA</Button>  */}





          
        </Navbar.Collapse>
      </Container>
   

    </Navbar>

    




     
  );
}

export default NavScrollExample;




// import React, { Component } from "react";
// import { HashRouter as Router, Route, NavLink } from "react-router-dom";
// import SignUpForm from "./Pages/SignUpForm";
// import SignInForm from "./Pages/SignInForm";

// import "./Pages/nav.css";



// class NavBar extends Component {
//   render() {
//     return ( 
    
//     <Router basename="/react-auth-ui/">
//     <div className="App">
//       <div className="appAside" />
//       <div className="appForm">
//         <div className="pageSwitcher">
//           <NavLink to="/sign-in" activeClassName="pageSwitcherItem-active" className="pageSwitcherItem">
//             Sign In
//           </NavLink>

//           <NavLink
//             exact
//             to="/"
//             activeClassName="pageSwitcherItem-active"
//             className="pageSwitcherItem"
//           >
//             Sign Up
//           </NavLink>
//         </div>

//         <div className="formTitle">
//           <NavLink
//             to="/sign-in"
//             activeClassName="formTitleLink-active"
//             className="formTitleLink"
//           >
//             Sign In
//           </NavLink>{" "}
//           or{" "}
//           <NavLink
//             exact
//             to="/"
//             activeClassName="formTitleLink-active"
//             className="formTitleLink"
//           >
//             Sign Up
//           </NavLink>
//         </div>

        
//       </div>
//     </div>
//   </Router>
//     );
//   }
// }

// export default NavBar;
