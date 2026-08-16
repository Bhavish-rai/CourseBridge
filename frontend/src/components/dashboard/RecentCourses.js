import "./RecentCourses.css";

function RecentCourses(){

const courses=[

"React Masterclass",

"Node.js API",

"MongoDB Complete Guide",

"Java DSA"

];

return(

<div className="dashboard-card">

<h3>

Recent Courses

</h3>

{

courses.map((course,index)=>(

<div

className="course-item"

key={index}

>

<div>

<h4>

{course}

</h4>

<span>

Updated today

</span>

</div>

<button>

View

</button>

</div>

))

}


</div>

)

}

export default RecentCourses;