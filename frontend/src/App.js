import {

BrowserRouter,

Routes,

Route,

Navigate

} from "react-router-dom";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Courses from "./pages/Courses/Courses";
import CourseDetails from "./pages/Courses/CourseDetails";
import AddCourse from "./pages/Courses/AddCourse";
import EditCourse from "./pages/Courses/EditCourse";
import Layout from "./components/layout/Layout";

import ProtectedRoute from "./routes/ProtectedRoute";

function App(){

return(

<BrowserRouter>

<Routes>

<Route

path="/"

element={<Navigate to="/login" replace/>}

/>

<Route

path="/login"

element={<Login/>}

/>

<Route

path="/register"

element={<Register/>}

/>

<Route

path="/dashboard"

element={

<ProtectedRoute>

<Layout>

<Dashboard/>

</Layout>

</ProtectedRoute>

}

/>
<Route
    path="/courses"
    element={
        <ProtectedRoute>
            <Layout>
                <Courses />
            </Layout>
        </ProtectedRoute>
    }
/>

<Route
    path="/courses/add"
    element={
        <ProtectedRoute>
            <Layout>
                <AddCourse />
            </Layout>
        </ProtectedRoute>
    }
/>

<Route
    path="/courses/:id"
    element={
        <ProtectedRoute>
            <Layout>
                <CourseDetails />
            </Layout>
        </ProtectedRoute>
    }
/>

<Route
    path="/courses/edit/:id"
    element={
        <ProtectedRoute>
            <Layout>
                <EditCourse />
            </Layout>
        </ProtectedRoute>
    }
/>


</Routes>

</BrowserRouter>

)

}

export default App;