import "./Layout.css";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout({ children }) {

    return (

        <div className="layout">

            <Sidebar />

            <div className="main-container">

                <Navbar />

                <main className="content">

                    {children}

                </main>

            </div>

        </div>

    );

}

export default Layout;