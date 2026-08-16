import "./Navbar.css";

import { FaBell, FaSearch } from "react-icons/fa";

function Navbar(){

const user=

JSON.parse(

localStorage.getItem("user")

);

return(

<header className="navbar">

<div className="search-box">

<FaSearch/>

<input

type="text"

placeholder="Search courses..."

 />

</div>

<div className="nav-right">

<button className="notification-btn">

<FaBell/>

</button>

<div className="user-box">

<div className="avatar">

{

user?.full_name

?

user.full_name.charAt(0).toUpperCase()

:

"U"

}

</div>

<div>

<h4>

{

user?.full_name||

"User"

}

</h4>

<span>

Student

</span>

</div>

</div>

</div>

</header>

)

}

export default Navbar;