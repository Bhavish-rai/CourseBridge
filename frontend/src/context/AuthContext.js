import {

createContext,

useState,

useEffect

} from "react";

export const AuthContext=createContext();

function AuthProvider({

children

}){

const [user,setUser]=useState(null);

const [loading,setLoading]=useState(true);

useEffect(()=>{

const token=localStorage.getItem("token");

const savedUser=localStorage.getItem("user");

if(token && savedUser){

setUser(JSON.parse(savedUser));

}

setLoading(false);

},[]);

function login(data) {

    localStorage.setItem(

        "token",

        data.token

    );

    localStorage.setItem(

        "user",

        JSON.stringify(data.user)

    );

    setUser(data.user);

}

function logout(){

localStorage.clear();

setUser(null);

}

return(

<AuthContext.Provider

value={{

user,

login,

logout,

loading

}}

>

{children}

</AuthContext.Provider>

)

}

export default AuthProvider;