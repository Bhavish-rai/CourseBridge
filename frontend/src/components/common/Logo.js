import "./Logo.css";

import { FaGraduationCap } from "react-icons/fa";

function Logo() {

    return (

        <div className="logo">

            <div className="logo-icon">

                <FaGraduationCap />

            </div>

            <div className="logo-text">

                <h2>CourseBridge</h2>

                <span>Learn • Share • Exchange</span>

            </div>

        </div>

    );

}

export default Logo;