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
        <Layout>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
