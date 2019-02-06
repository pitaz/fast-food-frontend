import React from "react";
import { Route, Switch } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import Landing from '../components/Pages/Landing.jsx';
import Menu from "../components/Pages/Menu.jsx";
import Header from '../components/UI/header/Header.jsx';
import Footer from '../components/UI/footer/Footer.jsx';
import SignIn from "../components/Pages/SignIn.jsx";
import SignUp from "../components/Pages/SignUp.jsx";

const routes = () => (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/menu' component={Menu} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
      </Switch>
      <Footer />
      <ReduxToastr />
    </div>
);

export default routes;
