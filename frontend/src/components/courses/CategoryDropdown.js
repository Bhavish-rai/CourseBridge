import "./CategoryDropdown.css";

function CategoryDropdown({

    value,

    onChange

}) {

    const categories = [

        "Programming",

        "Web Development",

        "Data Science",

        "AI",

        "Cloud",

        "DevOps",

        "Cyber Security"

    ];

    return (

        <select

            name="categoryId"

            value={value}

            onChange={onChange}

        >

            <option value="">

                Select Category

            </option>

            {

                categories.map((category, index) => (

                    <option

                        key={index}

                        value={index + 1}

                    >

                        {category}

                    </option>

                ))

            }

        </select>

    );

}

export default CategoryDropdown;