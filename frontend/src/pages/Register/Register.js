import "./Register.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
    FaUser,
    FaEnvelope,
    FaLock
} from "react-icons/fa";

import Logo from "../../components/common/Logo";
import Button from "../../components/common/Button";

import { registerUser } from "../../services/authService";

function Register() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({

        fullName: "",

        username: "",

        email: "",

        password: ""

    });

    function handleChange(e) {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            setLoading(true);

            await registerUser(form);

            alert("Registration Successful!");

            navigate("/login");

        }

        catch (error) {

            alert(

                error.response?.data?.message ||

                "Registration Failed"

            );

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <div className="auth-page">

            <div className="auth-card">

                <Logo />

                <h1>

                    Create Account

                </h1>

                <p>

                    Join CourseBridge today

                </p>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">

                        <FaUser />

                        <input

                            type="text"

                            name="fullName"

                            placeholder="Full Name"

                            value={form.fullName}

                            onChange={handleChange}

                            required

                        />

                    </div>

                    <div className="input-group">

                        <FaUser />

                        <input

                            type="text"

                            name="username"

                            placeholder="Username"

                            value={form.username}

                            onChange={handleChange}

                            required

                        />

                    </div>

                    <div className="input-group">

                        <FaEnvelope />

                        <input

                            type="email"

                            name="email"

                            placeholder="Email"

                            value={form.email}

                            onChange={handleChange}

                            required

                        />

                    </div>

                    <div className="input-group">

                        <FaLock />

                        <input

                            type="password"

                            name="password"

                            placeholder="Password"

                            value={form.password}

                            onChange={handleChange}

                            required

                        />

                    </div>

                    <Button

                        type="submit"

                    >

                        {

                            loading

                                ?

                                "Creating Account..."

                                :

                                "Register"

                        }

                    </Button>

                </form>

                <span>

                    Already have an account?

                    <Link to="/login">

                        Login

                    </Link>

                </span>

            </div>

        </div>

    );

}

export default Register;