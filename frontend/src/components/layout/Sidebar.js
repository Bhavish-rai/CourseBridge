import "./Sidebar.css";

import { NavLink, useNavigate } from "react-router-dom";

import {

FaHome,
FaBookOpen,
FaExchangeAlt,
FaHeart,
FaComments,
FaBell,
FaUser,
FaSignOutAlt

} from "react-icons/fa";

import Logo from "../common/Logo";

function Sidebar(){

const navigate=useNavigate();

function logout(){

localStorage.clear();

navigate("/login");

}

const menus=[

{
name:"Dashboard",
path:"/dashboard",
icon:<FaHome/>
},

{
name:"Courses",
path:"/courses",
icon:<FaBookOpen/>
},

{
name:"Exchange",
path:"/exchange",
icon:<FaExchangeAlt/>
},

{
name:"Wishlist",
path:"/wishlist",
icon:<FaHeart/>
},

{
name:"Chat",
path:"/chat",
icon:<FaComments/>
},

{
name:"Notifications",
path:"/notifications",
icon:<FaBell/>
},

{
name:"Profile",
path:"/profile",
icon:<FaUser/>
}

];

return(

<aside className="sidebar">

<div className="sidebar-logo">

<Logo/>

</div>

<nav>

{

menus.map(menu=>(

<NavLink

key={menu.name}

to={menu.path}

className={({isActive})=>

isActive

?

"menu active"

:

"menu"

}

>

<span>

{menu.icon}

</span>

<p>

{menu.name}

</p>

</NavLink>

))

}

</nav>

<button

className="logout"

onClick={logout}

>

<FaSignOutAlt/>

Logout

</button>

</aside>

)

}

export default Sidebar;