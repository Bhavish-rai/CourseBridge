import "./Login.css";

import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaEnvelope, FaLock } from "react-icons/fa";

import Button from "../../components/common/Button";
import Logo from "../../components/common/Logo";

import { loginUser } from "../../services/authService";
import { AuthContext } from "../../context/AuthContext";

function Login() {

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            setLoading(true);

            const response = await loginUser(form);

login(response.data);

navigate("/dashboard");

        }

        catch (err) {

            alert(
                err.response?.data?.message ||
                "Login failed"
            );

        }

        finally {

            setLoading(false);

        }

    }

    function handleChange(e) {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    }

    return (

        <div className="auth-page">

            <div className="auth-card">

                <Logo />

                <h1>

                    Welcome Back

                </h1>

                <p>

                    Login to continue

                </p>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">

                        <FaEnvelope />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                        />

                    </div>

                    <div className="input-group">

                        <FaLock />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                        />

                    </div>

                    <Button type="submit">

                        {loading ? "Logging in..." : "Login"}

                    </Button>

                </form>

                <span>

                    Don't have an account?

                    <Link to="/register">

                        Register

                    </Link>

                </span>

            </div>

        </div>

    );

}

export default Login;