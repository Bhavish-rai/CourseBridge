import "./EmptyState.css";

import { FaInbox } from "react-icons/fa";

function EmptyState({

title,

description

}){

return(

<div className="empty-state">

<div className="empty-icon">

<FaInbox/>

</div>

<h2>

{title}

</h2>

<p>

{description}

</p>

</div>

)

}

export default EmptyState;