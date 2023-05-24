import React from "react";

const Auth = ({ children }) => {
 let token1= localStorage.getItem("Token");
  
if(token1){
    return(
        <>
        {children}
        </>
    )
}


return(
    <h1>Please login...</h1>
)
};

export default Auth;
