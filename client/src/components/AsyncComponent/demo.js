// npm i react-loadable -S
//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

const MyLoadingComponent = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    // Handle the error state
    return <div>Sorry, there was a problem loading the page.</div>;
  } else {
    return null;
  }
};

const AsyncHome = Loadable({
  loader: () => import('./containers/Home'),
  loading: MyLoadingComponent,
});

const AsyncPosts = Loadable({
  loader: () => import('./containers/Posts'),
  loading: MyLoadingComponent,
});

const AsyncNotFound = Loadable({
  loader: () => import('./containers/NotFound'),
  loading: MyLoadingComponent,
});

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={AsyncHome} />
      <Route path="/posts/:id" exact component={AsyncPosts} />
      <Route component={AsyncNotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
