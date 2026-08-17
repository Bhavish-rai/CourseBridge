import "./AddCourse.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import PageHeader from "../../components/common/PageHeader";
import Button from "../../components/common/Button";
import CategoryDropdown from "../../components/courses/CategoryDropdown";

import {

getCourseById,

updateCourse

} from "../../services/courseService";

function EditCourse(){

const {id}=useParams();

const navigate=useNavigate();

const [loading,setLoading]=useState(false);

const [form,setForm]=useState({

categoryId:"",

title:"",

description:"",

level:"Beginner",

language:"English",

price:0,

exchangeAvailable:true,

thumbnail:"",

courseLink:"",

tags:""

});

useEffect(()=>{

loadCourse();

},[]);

async function loadCourse(){

const response=

await getCourseById(id);

const course=response.data;

setForm({

categoryId:course.category_id,

title:course.title,

description:course.description,

level:course.level,

language:course.language,

price:course.price,

exchangeAvailable:course.exchange_available,

thumbnail:course.thumbnail,

courseLink:course.course_link,

tags:(course.tags||[]).join(",")

});

}

function handleChange(e){

const {name,value,type,checked}=e.target;

setForm({

...form,

[name]:

type==="checkbox"

?

checked

:

value

});

}

async function handleSubmit(e){

e.preventDefault();

setLoading(true);

await updateCourse(id,{

...form,

tags:form.tags

.split(",")

.map(tag=>tag.trim())

});

navigate("/courses");

}

return(

<div>

<PageHeader

title="Edit Course"

subtitle="Update your course"

/>

<form

className="add-course"

onSubmit={handleSubmit}

>

<div className="left">

<label>Title</label>

<input

name="title"

value={form.title}

onChange={handleChange}

/>

<label>Description</label>

<textarea

name="description"

value={form.description}

onChange={handleChange}

/>

<label>Category</label>

<CategoryDropdown

value={form.categoryId}

onChange={handleChange}

/>

<label>Course Link</label>

<input

name="courseLink"

value={form.courseLink}

onChange={handleChange}

/>

</div>

<div className="right">

<label>Level</label>

<select

name="level"

value={form.level}

onChange={handleChange}

>

<option>Beginner</option>

<option>Intermediate</option>

<option>Advanced</option>

</select>

<label>Language</label>

<select

name="language"

value={form.language}

onChange={handleChange}

>

<option>English</option>

<option>Hindi</option>

</select>

<label>Price</label>

<input

type="number"

name="price"

value={form.price}

onChange={handleChange}

/>

<label>Thumbnail</label>

<input

name="thumbnail"

value={form.thumbnail}

onChange={handleChange}

/>

<label>Tags</label>

<input

name="tags"

value={form.tags}

onChange={handleChange}

/>

<div className="checkbox">

<input

type="checkbox"

name="exchangeAvailable"

checked={form.exchangeAvailable}

onChange={handleChange}

/>

Available For Exchange

</div>

<Button>

{

loading

?

"Updating..."

:

"Update Course"

}

</Button>

</div>

</form>

</div>

)

}

export default EditCourse;