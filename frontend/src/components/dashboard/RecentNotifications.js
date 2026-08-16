import "./RecentNotifications.css";

import {
    FaBell
} from "react-icons/fa";

function RecentNotifications() {

    const notifications = [

        "A new React course has been added.",

        "Your exchange request has been accepted.",

        "Profile updated successfully."

    ];

    return (

        <div className="dashboard-card">

            <h3>Notifications</h3>

            {

                notifications.map((notification, index) => (

                    <div
                        className="notification-item"
                        key={index}
                    >

                        <FaBell className="notification-icon" />

                        <p>{notification}</p>

                    </div>

                ))

            }

        </div>

    );

}

export default RecentNotifications;