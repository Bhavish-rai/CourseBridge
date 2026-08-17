import "./Courses.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PageHeader from "../../components/common/PageHeader";
import Button from "../../components/common/Button";
import Loader from "../../components/common/Loader";
import ErrorCard from "../../components/common/ErrorCard";
import CourseCard from "../../components/courses/CourseCard";
import CourseFilter from "../../components/courses/CourseFilter";

import { getCourses } from "../../services/courseService";

function Courses() {

    const navigate = useNavigate();

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");

    useEffect(()=>{

loadCourses();

},[search]);

    async function loadCourses() {

        try {

           const response = await getCourses({

page:1,

limit:20,

search

});

setCourses(response.data.courses);

        }

        catch {

            setError("Unable to fetch courses");

        }

        finally {

            setLoading(false);

        }

    }

    if (loading) return <Loader />;

    if (error) return <ErrorCard message={error} />;

    const filteredCourses = Array.isArray(courses)

        ? courses.filter(course =>

            (course.title || "")
                .toLowerCase()
                .includes(search.toLowerCase())

        )

        : [];

    return (

        <div>

            <div className="courses-header">

                <PageHeader

                    title="Courses"

                    subtitle="Browse all available courses"

                />

                <Button

                    onClick={() => navigate("/courses/add")}

                >

                    + Add Course

                </Button>

            </div>

            <CourseFilter

                search={search}

                setSearch={setSearch}

            />

            <div className="courses-grid">

                {

                    filteredCourses.map(course => (

                        <CourseCard

                            key={course.id}

                            course={course}

                        />

                    ))

                }

            </div>

        </div>

    );

}

export default Courses;