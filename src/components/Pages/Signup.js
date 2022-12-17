import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, password } = credentials;

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
            localStorage.setItem("token", json.authtoken);
            navigate("/");
        }
        else {
            alert("Enter correct credentials !");
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={credentials.name}
                            onChange={onChange}
                            id="name"
                            name="name"
                            aria-describedby="emailHelp"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            value={credentials.email}
                            onChange={onChange}
                            id="email"
                            name="email"
                            aria-describedby="emailHelp"
                        />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            value={credentials.password}
                            onChange={onChange}
                            minLength={5} required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="cpassword" className="form-label">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            name="cpassword"
                            id="cpassword"
                            onChange={onChange}
                            minLength={5} required
                        />
                    </div>

                    <button type="submit" className="btn btn-info">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

