import "./CourseDetails.css";

import {

useEffect,

useState

} from "react";

import {

useNavigate,

useParams

} from "react-router-dom";

import {

FaUser,

FaGlobe,

FaLayerGroup,

FaTag,

FaExchangeAlt

} from "react-icons/fa";

import Button from "../../components/common/Button";

import {

getCourseById,

deleteCourse

} from "../../services/courseService";

function CourseDetails(){

const {id}=useParams();

const navigate=useNavigate();

const [course,setCourse]=useState(null);

useEffect(()=>{

loadCourse();

},[]);

async function loadCourse(){

const response=

await getCourseById(id);

setCourse(response.data);

}

async function handleDelete(){

if(!window.confirm("Delete this course?")){

return;

}

await deleteCourse(id);

navigate("/courses");

}

if(!course){

return <h2>Loading...</h2>;

}

return(

<div className="course-details">

<img

src={

course.thumbnail||

"https://placehold.co/1200x500"

}

alt={course.title}

/>

<div className="details-content">

<h1>{course.title}</h1>

<p>{course.description}</p>

<div className="details-grid">

<div>

<FaUser/>

{course.full_name}

</div>

<div>

<FaTag/>

{course.category}

</div>

<div>

<FaLayerGroup/>

{course.level}

</div>

<div>

<FaGlobe/>

{course.language}

</div>

<div>

₹ {course.price}

</div>

{

course.exchange_available&&

<div>

<FaExchangeAlt/>

Exchange Available

</div>

}

</div>

<div className="action-buttons">

<Button

onClick={()=>

navigate(

`/courses/edit/${course.id}`

)

}

>

Edit

</Button>

<Button

variant="danger"

onClick={handleDelete}

>

Delete

</Button>

</div>

</div>

</div>

)

}

export default CourseDetails;