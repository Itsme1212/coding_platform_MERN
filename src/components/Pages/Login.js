import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Alert} from './Alert'
import { ToastContainer, toast } from "react-toastify"; // npm part
import "react-toastify/dist/ReactToastify.css"; // npm part
import {Home} from './Home'

import { createContext, useContext } from "react";


export const Login = () => {

    const UserContext = createContext();


    const showToastMessage = () => {
        toast.error('Invalid credentials!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const [user, setUser] = useState("Jesse Hall");


    const showsucmsg=()=>{
        toast.success('Successfully logged in !',{
            position: toast.POSITION.TOP_RIGHT
        })
    }

    const [credentials, setCredentials] = useState({email: "", password: ""})
    const navigate = useNavigate();
 const showSuccessToast = (msg) => {
    toast.success(msg || `Compiled Successfully!`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });

        const json = await response.json()
        console.log(json);


        if (json.success)
        {

            localStorage.setItem('token', json.authtoken);
            navigate('/');
            
            // Save the auth token and redirect
           
            

        }
        else{
            
            // showSuccessToast(`please enter correct credentials!`);
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

   

    return (

        <>
         
       
        
        <div>
            <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>

                <button type="submit" className="btn btn-outline-primary" >Submit</button>

            </form>
            
        </div>

        </>
    )
}

