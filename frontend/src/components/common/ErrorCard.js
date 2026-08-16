import "./ErrorCard.css";

function ErrorCard({

message

}){

return(

<div className="error-card">

<h2>

Something went wrong

</h2>

<p>

{message}

</p>

</div>

)

}

export default ErrorCard;