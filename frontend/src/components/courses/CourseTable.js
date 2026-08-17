import "./CourseTable.css";

import { FaEdit, FaTrash } from "react-icons/fa";

function CourseTable({

    courses,

    onEdit,

    onDelete

}){

    return(

<table className="course-table">

<thead>

<tr>

<th>Title</th>

<th>Category</th>

<th>Owner</th>

<th>Actions</th>

</tr>

</thead>

<tbody>

{

courses.map(course=>(

<tr key={course.id}>

<td>{course.title}</td>

<td>{course.category}</td>

<td>{course.owner}</td>

<td>

<button

onClick={()=>onEdit(course.id)}

>

<FaEdit/>

</button>

<button

onClick={()=>onDelete(course.id)}

>

<FaTrash/>

</button>

</td>

</tr>

))

}

</tbody>

</table>

)

}

export default CourseTable;