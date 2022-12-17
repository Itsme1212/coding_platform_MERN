import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import {
    MDBInput,
} from 'mdb-react-ui-kit';
export const ForgetPassword=()=> {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')

    const handleSubmit = () => {
        console.log(email)
        axios.post('http://localhost:5000/api/auth/sendotp',
            {
                email: email,
            })
            .then(res => {
                console.log(res.data)
                if (res.data.code === 200) {
                    navigate('/otp')
                } else {
                    alert('Email / Server Error.')
                }
            }).catch(err => {
                console.log(err)
            })
    }

    return (<>
        <h1 className="btn-success">  Forget Password</h1>
        <br/>
        <div className="outcard">

        <MDBInput className="form-control" value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }}
                type='email' placeholder="Enter email" required />
            {/* Email  <input
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                className="inputs"
                type="text"
            /> */}

<button type="submit"  onClick={handleSubmit} class="mt-4 border-2 border-black 
                            z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0">Send OTP</button>
            
        </div>
    </>
    )
}
