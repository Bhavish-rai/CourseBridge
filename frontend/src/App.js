import {

BrowserRouter,

Routes,

Route,

Navigate

} from "react-router-dom";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";

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


</Routes>

</BrowserRouter>

)

}

export default App;