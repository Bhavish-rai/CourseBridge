import "./RecentActivity.css";

import {
    FaBookOpen,
    FaExchangeAlt,
    FaHeart
} from "react-icons/fa";

function RecentActivity() {

    const activities = [

        {
            icon: <FaBookOpen />,
            title: "Added React Advanced Course",
            time: "2 hours ago"
        },

        {
            icon: <FaExchangeAlt />,
            title: "Requested a Course Exchange",
            time: "Yesterday"
        },

        {
            icon: <FaHeart />,
            title: "Added Node.js to Wishlist",
            time: "2 days ago"
        }

    ];

    return (

        <div className="dashboard-card">

            <h3>Recent Activity</h3>

            {

                activities.map((activity, index) => (

                    <div
                        className="activity-item"
                        key={index}
                    >

                        <div className="activity-icon">

                            {activity.icon}

                        </div>

                        <div className="activity-content">

                            <h4>{activity.title}</h4>

                            <span>{activity.time}</span>

                        </div>

                    </div>

                ))

            }

        </div>

    );

}

export default RecentActivity;