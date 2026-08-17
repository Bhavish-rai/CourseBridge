import "./CourseCard.css";

import { Link } from "react-router-dom";

import {

FaUser,

FaGlobe,

FaLayerGroup,

FaExchangeAlt,

FaTag

} from "react-icons/fa";

function CourseCard({ course }) {

return (

<div className="course-card">

<div className="course-image">

<img

src={

course.thumbnail ||

"https://placehold.co/600x400?text=Course"

}

alt={course.title}

/>

</div>

<div className="course-content">

<div className="course-category">

{course.category}

</div>

<h2>

{course.title}

</h2>

<p>

{

course.description?.length > 120

?

course.description.substring(0,120)+"..."

:

course.description

}

</p>

<div className="course-info">

<div>

<FaUser/>

<span>

{course.full_name}

</span>

</div>

<div>

<FaLayerGroup/>

<span>

{course.level}

</span>

</div>

<div>

<FaGlobe/>

<span>

{course.language}

</span>

</div>

</div>

<div className="course-footer">

<div className="price">

₹ {course.price}

</div>

{

course.exchange_available &&

<div className="exchange">

<FaExchangeAlt/>

Exchange

</div>

}

</div>

<Link

to={`/courses/${course.id}`}

className="course-btn"

>

View Details

</Link>

</div>

</div>

)

}

export default CourseCard;