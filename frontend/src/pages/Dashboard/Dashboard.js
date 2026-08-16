import "./Dashboard.css";

import PageHeader from "../../components/common/PageHeader";

import WelcomeBanner from "../../components/dashboard/WelcomeBanner";

import StatsCards from "../../components/dashboard/StatsCards";

import RecentCourses from "../../components/dashboard/RecentCourses";

import RecentActivity from "../../components/dashboard/RecentActivity";

import RecentNotifications from "../../components/dashboard/RecentNotifications";

import QuickActions from "../../components/dashboard/QuickActions";

function Dashboard(){

return(

<div>

<PageHeader

title="Dashboard"

subtitle="Welcome back to CourseBridge"

/>

<WelcomeBanner/>

<StatsCards/>

<div className="dashboard-grid">

<div>

<RecentCourses/>

<RecentActivity/>

</div>

<div>

<QuickActions/>

<RecentNotifications/>

</div>

</div>

</div>

)

}

export default Dashboard;