import "./QuickActions.css";

import {

FaPlus,

FaExchangeAlt,

FaHeart,

FaComments

} from "react-icons/fa";

function QuickActions(){

const actions=[

{

title:"Add Course",

icon:<FaPlus/>

},

{

title:"Exchange",

icon:<FaExchangeAlt/>

},

{

title:"Wishlist",

icon:<FaHeart/>

},

{

title:"Messages",

icon:<FaComments/>

}

];

return(

<div className="dashboard-card">

<h3>

Quick Actions

</h3>

<div className="action-grid">

{

actions.map((action,index)=>(

<div

className="action-card"

key={index}

>

<div>

{action.icon}

</div>

<p>

{action.title}

</p>

</div>

))

}

</div>

</div>

)

}

export default QuickActions;