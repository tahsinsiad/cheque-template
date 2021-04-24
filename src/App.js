import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import { routes } from './routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<Layout>{<route.main />}</Layout>}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
