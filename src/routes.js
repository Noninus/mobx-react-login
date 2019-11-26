import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ModalContainer } from "react-router-modal";
import "react-router-modal/css/react-router-modal.css";


import Page1 from "./views/Page1";
import Page2 from "./views/Page2";
import LoginPage from "./views/Login/LoginPage";



const Routes = () => (
    <BrowserRouter>
        <Fragment>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route path="/pagina2" component={Page2} />


                <Route path="/pagina1" component={Page1} />


                <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
            <ModalContainer />
        </Fragment>
    </BrowserRouter>
);

export default Routes;