
import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';

import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
export const UserContext = createContext();

const App = () => {
  const [loggedInUser,setLoggedInuser] = useState({});
  const [itemId , setItemId] = useState({})
  return (
    <UserContext.Provider value={{loggedInUser,setLoggedInuser,itemId , setItemId}}>
    <Router>
     <Switch>
       <Route exact path="/">

         <Home></Home>
       </Route>

       <PrivateRoute path="/dashboard">
        <Dashboard> </Dashboard>
       </PrivateRoute>
      <Route path="/login">
        <Login></Login>
      </Route>
     </Switch>
    
    </Router>
    </UserContext.Provider>
    
  );
};

export default App;