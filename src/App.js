import React, { useState, useEffect } from "react";

import theme from "./config/theme.js";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./config/GlobalStyles";

import Loader from "./Components/Loader";
import GoogleApiWrapper from "./Components/Map"
import Header from "./Components/Header";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";

import Dash from "./Views/Dash";
import Join from "./Views/Join";
import Calender from "./Views/Calender";
import Profile from "./Views/Profile";
import Login from "./Views/Login";
import Messages from "./Views/Messages";
import NewMessage from "./Views/NewMessage";

import useAuth from "./services/firebase/useAuth";

import useChallenge from "./services/firebase/useChallenge";

import firebase from "firebase/app"; // the firbase core lib
import "firebase/auth"; // specific products
import "firebase/firestore";
import firebaseConfig from "./config/firebase"; // the firebase config we set up ealier

let initAttemptedRoute = "/";

function Protected({ authenticated, children, ...rest }) {
  initAttemptedRoute = useLocation().pathname;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function RedirectToDash({ authenticated, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: initAttemptedRoute,
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function App() {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const {
    isAuthenticated,
    createEmailUser,
    signInEmailUser,
    signInWithProvider,
    signOut,
    user,
    loading
  } = useAuth(firebase.auth);


  const {readChallenges} = useChallenge(firebase.firestore);

  const handleClick = e => {
    setMenuOpen(!menuOpen);
  };

  const handleOuterWrapperClick = e => {
    setMenuOpen(false);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        {location.pathname !== "/join" && location.pathname !== "/login" && (
          <Header
            onClick={handleClick}
            signOut={signOut}
            user={user}
            open={menuOpen}
          />
        )}
        <GlobalStyles />
        <div
          onClick={handleOuterWrapperClick}
          style={{
            width: "100%",
            horizontalScroll: "none",
            overflowX: "hidden",
            height: "100%",
            
          }}
        >
          <Switch>
            <Protected authenticated={isAuthenticated} exact path="/">
              <Dash   />
            </Protected>
            <RedirectToDash authenticated={isAuthenticated} path="/join">
              {/**
               * I have set up these loaders to handle the social sign-in redirect
               * which redirects back to the page you initiated it from
               * as such we only want to show the page after the redirect has authenticated
               */}

              <Join
                signInWithProvider={signInWithProvider}
                createEmailUser={createEmailUser}
              />
            </RedirectToDash>
            <RedirectToDash authenticated={isAuthenticated} path="/login">
              <Login
                signInWithProvider={signInWithProvider}
                signInEmailUser={signInEmailUser}
              />
            </RedirectToDash>
            <Protected authenticated={isAuthenticated} path="/profile">
              <Profile user={user} />
            </Protected>
            <Route path="/calender">
              <Calender/>
            </Route>
            <Route path="/messages">
              <Messages/>
            </Route>
            <Route path="/map">
              <GoogleApiWrapper/>
            </Route>
            <Route path="/newmessage">
              <NewMessage/>
            </Route>
            
          </Switch>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
