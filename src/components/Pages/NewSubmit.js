import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export const NewSubmit=()=> {

    const navigate = useNavigate()
    const [otp, setOtp] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log(otp, password)
        axios.post('http://localhost:5000/api/auth/submitotp',
            {
                otp: otp,
                password: password,
            })
            .then(res => {
                console.log(res.data)
                if (res.data.code === 200) {
                    navigate('/')
                    alert('Password Updated.')
                } else {
                    alert('server err / wrong OTP')
                }
            }).catch(err => {
                console.log(err)
            })
    }


    return (
        <>
            <h1 className="center">  FORGET PASSWORD </h1>




            <label htmlFor="number" className="form-label">Enter OTP</label>
                    <input type="number" className="form-control"
                     onChange={(e) => {
                        setOtp(e.target.value)
                    }}
                    value={otp}
                    />



            <div className="outcard">
                
                <br/>

                <label htmlFor="number" className="form-label">New Password: </label>
                    <input type="password" className="form-control"
                     onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    />
                    
               
               <br/>

<button onClick={handleSubmit} class="mt-4 border-2 border-black 
                            z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0">CHANGE PASSWORD</button>


            </div>
        </>
    )
}

