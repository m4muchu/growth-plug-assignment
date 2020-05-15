import React from 'react';
import { Route, Switch, Router } from "react-router-dom";
import { IndexRoutes } from "js/routes/index";
import { history } from "js/helpers/history";
import { AuthWrapper, ModalWrapper } from 'js/contexts';
import { ModalContainer } from 'js/components/common';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure({
  position: toast.POSITION.BOTTOM_RIGHT
})


const App = () => {
  return (
    <Router history={history} >
      <AuthWrapper>
        <ModalWrapper>
          <Switch>
            {IndexRoutes.map((prop, key) => {
              return <Route path={prop.path} component={prop.component} key={key} />;
            })}
          </Switch>
          <ModalContainer />
        </ModalWrapper>
      </AuthWrapper>
    </Router>
  );
}

export default App;
