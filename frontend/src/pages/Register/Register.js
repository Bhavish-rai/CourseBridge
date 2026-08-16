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

import {

registerUser

} from "../../services/authService";

function Register(){

const navigate=useNavigate();

const [form,setForm]=useState({

full_name:"",

email:"",

password:""

});

async function handleSubmit(e){

e.preventDefault();

try{

await registerUser(form);

alert("Registration Successful");

navigate("/login");

}

catch(err){

alert(

err.response?.data?.message||

"Registration Failed"

);

}

}

function handleChange(e){

setForm({

...form,

[e.target.name]:e.target.value

});

}

return(

<div className="auth-page">

<div className="auth-card">

<Logo/>

<h1>Create Account</h1>

<p>Join CourseBridge today</p>

<form onSubmit={handleSubmit}>

<div className="input-group">

<FaUser/>

<input
name="full_name"
placeholder="Full Name"
onChange={handleChange}
/>

</div>

<div className="input-group">

<FaEnvelope/>

<input
name="email"
type="email"
placeholder="Email"
onChange={handleChange}
/>

</div>

<div className="input-group">

<FaLock/>

<input
name="password"
type="password"
placeholder="Password"
onChange={handleChange}
/>

</div>

<Button type="submit">

Register

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

)

}

export default Register;