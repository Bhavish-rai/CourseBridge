import "./AddCourse.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PageHeader from "../../components/common/PageHeader";
import Button from "../../components/common/Button";
import CategoryDropdown from "../../components/courses/CategoryDropdown";

import { createCourse } from "../../services/courseService";

function AddCourse() {

    const navigate = useNavigate();

    const [form, setForm] = useState({

        categoryId: "",

        title: "",

        description: "",

        level: "Beginner",

        language: "English",

        price: 0,

        exchangeAvailable: true,

        thumbnail: "",

        courseLink: "",

        tags: ""

    });

    const [loading, setLoading] = useState(false);

    function handleChange(e) {

        const { name, value, type, checked } = e.target;

        setForm({

            ...form,

            [name]: type === "checkbox" ? checked : value

        });

    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            setLoading(true);

            await createCourse({

                ...form,

                tags: form.tags
                    .split(",")
                    .map(tag => tag.trim())
                    .filter(Boolean)

            });

            alert("Course Created Successfully");

            navigate("/courses");

        }

        catch(error){

            console.log(error);

            alert(

                error.response?.data?.message ||

                "Unable to create course"

            );

        }

        finally{

            setLoading(false);

        }

    }

    return (

        <div>

            <PageHeader

                title="Create Course"

                subtitle="Publish a new course"

            />

            <form

                className="add-course"

                onSubmit={handleSubmit}

            >

                <div className="left">

                    <label>

                        Course Title

                    </label>

                    <input

                        name="title"

                        value={form.title}

                        onChange={handleChange}

                        required

                    />

                    <label>

                        Description

                    </label>

                    <textarea

                        name="description"

                        value={form.description}

                        onChange={handleChange}

                        required

                    />

                    <label>

                        Category

                    </label>

                    <CategoryDropdown

                        value={form.categoryId}

                        onChange={handleChange}

                    />

                    <label>

                        Course Link

                    </label>

                    <input

                        name="courseLink"

                        value={form.courseLink}

                        onChange={handleChange}

                    />

                </div>

                <div className="right">

                    <label>

                        Level

                    </label>

                    <select

                        name="level"

                        value={form.level}

                        onChange={handleChange}

                    >

                        <option>Beginner</option>

                        <option>Intermediate</option>

                        <option>Advanced</option>

                    </select>

                    <label>

                        Language

                    </label>

                    <select

                        name="language"

                        value={form.language}

                        onChange={handleChange}

                    >

                        <option>English</option>

                        <option>Hindi</option>

                    </select>

                    <label>

                        Price

                    </label>

                    <input

                        type="number"

                        name="price"

                        value={form.price}

                        onChange={handleChange}

                    />

                    <label>

                        Thumbnail URL

                    </label>

                    <input

                        name="thumbnail"

                        value={form.thumbnail}

                        onChange={handleChange}

                    />

                    <label>

                        Tags

                    </label>

                    <input

                        name="tags"

                        placeholder="React, Node, Express"

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

                    <Button type="submit">

                        {

                            loading

                            ?

                            "Creating..."

                            :

                            "Create Course"

                        }

                    </Button>

                </div>


            </form>


        </div>

    );

}

export default AddCourse;