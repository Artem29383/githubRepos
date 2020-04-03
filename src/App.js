import React from 'react';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Alert from './components/Alert';
import AlertState from './context/alert/AlertState';
import GithubState from './context/github/GithubState';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className='container pt-4'>
            <Alert alert={{ text: 'gh pages' }} />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/profile/:name' component={Profile} />
              <Route path='/about' component={About} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};

export default App;
