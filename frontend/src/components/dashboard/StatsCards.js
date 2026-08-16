import "./StatsCards.css";

import {
    FaBookOpen,
    FaExchangeAlt,
    FaHeart,
    FaComments
} from "react-icons/fa";

function StatsCards() {

    const stats = [

        {
            title: "Courses",
            value: "24",
            icon: <FaBookOpen />,
            color: "#2563EB"
        },

        {
            title: "Exchanges",
            value: "8",
            icon: <FaExchangeAlt />,
            color: "#4F46E5"
        },

        {
            title: "Wishlist",
            value: "15",
            icon: <FaHeart />,
            color: "#EF4444"
        },

        {
            title: "Chats",
            value: "6",
            icon: <FaComments />,
            color: "#22C55E"
        }

    ];

    return (

        <div className="stats-grid">

            {

                stats.map((item, index) => (

                    <div
                        key={index}
                        className="stat-card"
                    >

                        <div
                            className="stat-icon"
                            style={{
                                background: item.color
                            }}
                        >

                            {item.icon}

                        </div>

                        <div>

                            <h2>{item.value}</h2>

                            <p>{item.title}</p>

                        </div>

                    </div>

                ))

            }

        </div>

    );

}

export default StatsCards;