import React, { useState, useEffect } from "react";
import Header from "./component/UI/Header";
import { ThemeProvider } from "@material-ui/styles";
import Signup from "./component/Signup";
import Signin from "./component/Signin";
import Home from "./component/Home";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import theme from "./component/UI/Theme";
import {useDispatch,useSelector} from 'react-redux'
import Private from './component/HOC/Private'
import {isUserLogged} from './actions'
import Reports from "./component/Reports";



function App() {
  const auth = useSelector((state) => state.auth);
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

useEffect(() => {
  if (!auth.authenticate) {
    dispatch(isUserLogged());
  }
  

}, []);





  return (
    <ThemeProvider theme={theme}>
      
          <Header />
          <Switch>
          <Private path="/" exact component={Home} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
          <Private path="/report" exact component={Reports} />

          </Switch>
    
    </ThemeProvider>
  );
}

export default App;
