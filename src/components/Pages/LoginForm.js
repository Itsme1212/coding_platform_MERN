import React, { useState , useEffect} from 'react';
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import NavBar from '../NavBar';
import Button from 'react-bootstrap/Button';
import Chat from './Chat'


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';


export const LoginForm = () => {

    const token=localStorage.getItem('email');

    const [isLoggedin, setIsLoggedin] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const logout = () => {

        localStorage.removeItem('token');
        setIsLoggedin(false);
        
      };
     
    const showToastMessage = () => {
        toast.success('Account created !', {
            position: toast.POSITION.TOP_RIGHT,
        });
    };

    const showToastMessage2 = () => {
        toast('Welcome User !', {
            position: toast.POSITION.TOP_RIGHT,
            className: 'toast-message'
        });
    };


    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const navigate = useNavigate();


    const [justifyActive, setJustifyActive] = useState('tab1');;

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };
    const showToastMessages = () => {
        toast.error('Invalid credentials!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    /* Handle submit method for LOGIN*/
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers:
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });

        const json = await response.json()
        console.log(json);


        if (json.success) {


            localStorage.setItem('token', json.authtoken);
            localStorage.setItem('email', json.email);

            navigate('/mainapp');
            // setIsLoggedin(true);
            // Save the auth token and redirect

        }
        else {

            // showSuccessToast(`please enter correct credentials!`);
        }
    }

    // const logout = () => {
    //     localStorage.removeItem('token-info');
    //     setIsLoggedin(false);
    //   };
     

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }



    const [credentials2, setCredentials2] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
    });



    const handleSubmit2 = async (e) => {
        e.preventDefault();

        const { name, email, password } = credentials2;

        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        });
        const json = await response.json();
        console.log(json);

        if (json) {
            // Save the auth token and redirect
            // localStorage.setItem("token", json.authtoken);
           alert('Signup success.')
        //    navigate('/')
        }
        else {
            alert("Enter correct credentials !");
        }
    };

    const onChange2 = (e) => {
        setCredentials2({ ...credentials2, [e.target.name]: e.target.value });
    };

    
    return (




<>


<div>

{/* nav bar */}

  
<Navbar bg="dark" variant='dark' expand="lg">
      <Container fluid>
        
        <Navbar.Brand href="/">JKoderzz</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >


{/* <Nav.Link className='float-right ' href='/about'>LOGIN</Nav.Link> */}

{/* <Nav.Link className='mx-2 position-absolute top-2 end-0' href='/about'>ABOUT US</Nav.Link> */}



  


          </Nav>
          
      {/* <Button className="btn btn-primary mx-2" variant="outline-warning" href="/login">LOGIN</Button>  */}


      
      
     
        </Navbar.Collapse>
      </Container>
   

    </Navbar>



</div>    

{/* end here */}
        <div>

            <MDBContainer className="p-3 my-4 d-flex flex-column w-50">

                <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                            LOGIN
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                            REGISTER
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent>

                    <MDBTabsPane show={justifyActive === 'tab1'}>

                        <div className="text-center mb-3">


                            {/* <p>Sign in with:</p> */}
                            

                            <p className="text-center mt-3"></p>
                            <br/>
                        </div>



                        <form onSubmit={handleSubmit}>

                        <br/>
                        <div class="form-group">

                            
                        <i class="fa fa-envelope fa-lg"></i>

                            <MDBInput className="form-control" value={credentials.email} onChange={onChange} 
                            id="email" name="email" wrapperClass='mb-4' label="" type='email' placeholder="Enter email" required />


</div>

<i class="fa fa-key fa-lg"></i>
                            <MDBInput className="form-control" value={credentials.password} onChange={onChange} 
                            name="password" id="password" wrapperClass='mb-4' label='' placeholder="Password" type='password' required/>

                            <div className="d-flex justify-content-between mx-4 mb-4">
                          

                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='confirm' required /> 
                                <Button variant="warning" href="/forget-pass">Forgot password</Button> 

                            </div>
                            <div class="col-md-12 text-center">
                            <button type="submit" class="mt-1 border-2 border-black 
                            z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0">Log in</button>
                            {/* <ToastContainer /> */}

                          


                        </div>
                        </form>

                        

                        


                        






                        {/*   
            <MDBBtn type="submit"  className="mb-0 px-5" size='lg'>Sign in</MDBBtn>

            <MDBBtn type="submit" className="mb-4 w-100">Sign in</MDBBtn> */}
            <br/>
                        <p className="text-center"> <button class="btn" onClick={() => handleJustifyClick('tab2')} >Not a member ? Register</button></p>

                        <br/>
                        <br/>

                        <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='facebook-f' size="lg" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='twitter' size="lg" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='google' size="lg" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='github' size="lg" />
                                </MDBBtn>
                            </div>
                    </MDBTabsPane>

                   

                    <MDBTabsPane show={justifyActive === 'tab2'}>

                        <div className="text-center mb-3">


                            <br/>
                        </div>

                        <form onSubmit={handleSubmit2}>

                        <i class="fa fa-user fa-lg"></i>

                            <MDBInput type="text" className="form-control" value={credentials2.name} onChange={onChange2} id="name"
                                name="name" wrapperClass='mb-4' label='' placeholder="Enter name"/>

<i class="fa fa-envelope fa-lg"></i>

                            <MDBInput
                                type="email"
                                className="form-control"
                                value={credentials2.email}
                                onChange={onChange2} wrapperClass='mb-4' label='' placeholder="Enter email" id='form1' name="email" />
                     
                     <i class="fa fa-key fa-lg"></i>

                            <MDBInput className="form-control"
                                name="password"
                                id="password"
                                value={credentials2.password}
                                onChange={onChange2}
                                minLength={5} required wrapperClass='mb-4'placeholder="Enter password"  label='' type='password' />
                          <i class="fa fa-lock fa-lg"></i>

                            <MDBInput type="password"
                                className="form-control"
                                name="cpassword"
                                id="cpassword"
                                onChange={onChange2}
                                minLength={5} required wrapperClass='mb-4' placeholder="re-enter password" label='' />

                            <div className='d-flex justify-content-between mx-4 mb-4'>
                            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Agree to terms and conditions'required /> 
                            </div>

                            <div class="col-md-12 text-center">

                            <button type="submit" class="mt-1 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0">Sign up</button>                            
                                </div>

                        </form>


                        <br/>
                        <br/>

                        <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='facebook-f' size="lg" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='twitter' size="lg" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='google' size="lg" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='github' size="lg" />
                                </MDBBtn>
                            </div>
                        
                    </MDBTabsPane>



                </MDBTabsContent>

            </MDBContainer>

        </div>

        <Chat/>


        </> 
    );
};
