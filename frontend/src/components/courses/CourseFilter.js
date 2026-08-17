import "./CourseFilter.css";

function CourseFilter({

    search,

    setSearch

}){

    return(

        <div className="course-filter">

            <input

                type="text"

                placeholder="Search courses..."

                value={search}

                onChange={(e)=>

                    setSearch(e.target.value)

                }

            />

        </div>

    )

}

export default CourseFilter;