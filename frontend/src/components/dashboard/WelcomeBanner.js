import "./WelcomeBanner.css";

import Button from "../common/Button";

function WelcomeBanner(){

const user=

JSON.parse(

localStorage.getItem("user")

);

return(

<div className="welcome-banner">

<div>

<h1>

Hello,

{

user?.full_name||

"Student"

}

👋

</h1>

<p>

Continue learning, exchange courses, and grow your skills with CourseBridge.

</p>

<Button>

Browse Courses

</Button>

</div>

<img

src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"

alt="Learning"

/>

</div>

)

}

export default WelcomeBanner;