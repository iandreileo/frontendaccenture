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
// import Profile from './pages/Profile';
// import MainPage from './pages/MainPage';
import Dashboard from './pages/Dashboard';

function App() {
  const [user, setUser] = useContext(UserContext);
  const [isAuth, setIsAuth] = useState(true);
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
    // if (user) {
    //   console.log(user);
    //   setIsAuth(true);
    // } else {
    //   console.log(user);

    //   setIsAuth(false);
    // }
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/dashboard">
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
        {/* <Route
          path="/main"
          render={() => (!isAuth ? <Redirect to="/" /> : <MainPage />)}
        ></Route> */}
      </Switch>
    </>
  );
}

export default App;
