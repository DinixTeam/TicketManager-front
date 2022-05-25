import React, { useContext } from "react";
import Login from "./Pages/Login";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const R = () => {
  
  
//   function PrivateRoute({isPrivate,  ...rest}){
//     let {auth, loading} = useContext(Context);
//     console.log(auth);
//     console.log(loading);
//     if(loading){
//       return <h1>loading</h1>
//     }
//     if(!auth && isPrivate){
//       return <Redirect to="/" />
//     }
//     return <Route {...rest} />
//   }

    return (
      <Router>
      <Switch>
          <Route exact path="/" component={Login} /> 
         
        </Switch>
      </Router>

    );
  };
  
  export default R;