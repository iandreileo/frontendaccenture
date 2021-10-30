import React, { useContext, useEffect, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import './css/style.scss';

import AOS from 'aos';
import { focusHandling } from 'cruip-js-toolkit';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import Places from './pages/Places';
import PlacePage from './pages/PlacePage';
import { UserContext } from './providers/UserProvider';
import { Redirect } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Restaurants from './pages/Restaurants';
import LocalCustoms from './pages/LocalCustoms';
import LocalLaws from './pages/LocalLaws';
import Events from './pages/Events';
import QA from './pages/QA';
import Loading from './partials/Loading';
import { LoadingContext } from './providers/LoadingProvider';
import Dashboard from './pages/Dashboard';

function App() {
  const [user, setUser] = useContext(UserContext);
  const [isAuth, setIsAuth] = useState(true);
  const location = useLocation();
  const [loading] = useContext(LoadingContext);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
    if (user) {
      console.log(user);
      setIsAuth(true);
    } else {
      console.log(user);

      setIsAuth(false);
    }
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  return (
    loading ? <Loading /> :
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profile">
          <Dashboard />
        </Route>
        <Route
          path="/signin"
          render={() => (isAuth ? <Redirect to="/" /> : <SignIn />)}
        ></Route>
        <Route
          path="/signup"
          render={() => (isAuth ? <Redirect to="/" /> : <SignUp />)}
        ></Route>
        <Route path="/reset-password">
          <ResetPassword />
        </Route>
        <Route
          path="/places"
          render={() => (!isAuth ? <Redirect to="/" /> : <Places />)}
        ></Route>
        <Route
          path="/place/:id"
          render={() => (!isAuth ? <Redirect to="/" /> : <PlacePage />)}
        ></Route>
        <Route
          path="/main"
          render={() => (!isAuth ? <Redirect to="/" /> : <MainPage />)}
        ></Route>
          <Route
          path="/restaurants"
          render={() => (!isAuth ? <Redirect to="/" /> : <Restaurants />)}
        ></Route>
                  <Route
          path="/localcustoms"
          render={() => (!isAuth ? <Redirect to="/" /> : <LocalCustoms />)}
        ></Route>
                          <Route
          path="/locallaws"
          render={() => (!isAuth ? <Redirect to="/" /> : <LocalLaws />)}
        ></Route>
                                 <Route
          path="/events"
          render={() => (!isAuth ? <Redirect to="/" /> : <Events />)}
        ></Route>
                                         <Route
          path="/qa"
          render={() => (!isAuth ? <Redirect to="/" /> : <QA />)}
        ></Route>
      </Switch>
    </>
  );
}

export default App;
