import React, { useContext } from "react";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import AddEvento from "./Pages/AddEvento";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";

const Routes = () => {
  
  
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
         <Route path="/register" component={Cadastro} />
         <Route path="/home" component={Home} />
         <Route path="/addevento" component={AddEvento} />
        </Switch>
      </Router>

    );
  };
  
  export default Routes;