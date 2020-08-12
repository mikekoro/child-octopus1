import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

// render micro frontend function

const SubPage = () => {
  return (
    <h3>SubPage!!!</h3>
  )
}

window.rendercreatereactapp = (containerId, history) => {
  ReactDOM.render(
    <Provider store={history.store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/createreactapp" render={() => <App {...history}/>} />
          <Route exact path="/createreactapp/subpage" component={SubPage} />
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.getElementById(containerId)
  );
  serviceWorker.unregister();
};

// unmount micro frontend function
window.unmountcreatereactapp = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

// Mount to root if it is not a micro frontend
if (!document.getElementById('createreactapp-container')) {
  ReactDOM.render(
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SubPage} />
        </Switch>
      </BrowserRouter>, 
    document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
