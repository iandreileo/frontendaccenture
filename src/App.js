import React, { useContext, useEffect, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import "./css/style.scss";

import AOS from "aos";
import { focusHandling } from "cruip-js-toolkit";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import Places from "./pages/Places";
import PlacePage from "./pages/PlacePage";
import { UserContext } from "./providers/UserProvider";
import { Redirect } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Restaurants from "./pages/Restaurants";
import LocalCustoms from "./pages/LocalCustoms";
import LocalLaws from "./pages/LocalLaws";
import Events from "./pages/Events";
import QA from "./pages/QA";
import Loading from "./partials/Loading";
import { LoadingContext } from "./providers/LoadingProvider";
import Dashboard from "./pages/Dashboard";
import RestaurantPage from "./pages/RestaurantPage";
import LocalCustomPage from "./pages/LocalCustomPage";
import LocalLawPage from "./pages/LocalLawPage";
import EventPage from "./pages/EventPage";
import QAPage from "./pages/QAPage";
import AddRestaurant from "./pages/AddRestaurant";
import AddPlace from "./pages/AddPlace";
import AddLocalCustom from "./pages/AddLocalCustom";
import AddLocalLaw from "./pages/AddLocalLaw.js";
import AddEvent from "./pages/AddEvent";
import AddTopic from "./pages/AddTopic";

function App() {
  const [user, setUser] = useContext(UserContext);
  const [isAuth, setIsAuth] = useState(true);
  const location = useLocation();
  const [loading] = useContext(LoadingContext);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
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
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    focusHandling("outline");
  }, [location.pathname]); // triggered on route change

  return loading ? (
    <Loading />
  ) : (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          exact
          path="/profile"
          render={() => (!isAuth ? <Redirect to="/" /> : <Dashboard />)}
        ></Route>
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
          path="/restaurant/:id"
          render={() => (!isAuth ? <Redirect to="/" /> : <RestaurantPage />)}
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
        <Route
          path="/localcustom/:id"
          render={() => (!isAuth ? <Redirect to="/" /> : <LocalCustomPage />)}
        ></Route>
        <Route
          path="/locallaw/:id"
          render={() => (!isAuth ? <Redirect to="/" /> : <LocalLawPage />)}
        ></Route>

        <Route
          path="/event/:id"
          render={() => (!isAuth ? <Redirect to="/" /> : <EventPage />)}
        ></Route>

        <Route
          path="/topic/:id"
          render={() => (!isAuth ? <Redirect to="/" /> : <QAPage />)}
        ></Route>

        <Route
          path="/addPlace"
          render={() => (!isAuth ? <Redirect to="/" /> : <AddPlace />)}
        ></Route>
        <Route
          path="/addRestaurant"
          render={() => (!isAuth ? <Redirect to="/" /> : <AddRestaurant />)}
        ></Route>
        <Route
          path="/addLocalCustom"
          render={() => (!isAuth ? <Redirect to="/" /> : <AddLocalCustom />)}
        ></Route>
        <Route
          path="/addLocalLaw"
          render={() => (!isAuth ? <Redirect to="/" /> : <AddLocalLaw />)}
        ></Route>
        <Route
          path="/addEvent"
          render={() => (!isAuth ? <Redirect to="/" /> : <AddEvent />)}
        ></Route>
        <Route
          path="/addTopic"
          render={() => (!isAuth ? <Redirect to="/" /> : <AddTopic />)}
        ></Route>
      </Switch>
    </>
  );
}

export default App;
