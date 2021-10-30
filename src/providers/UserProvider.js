import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUser, getUsersInfoAsync } from '../Api';
import { LoadingContext } from './LoadingProvider';
import { app } from '../firebaseConfig';
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useContext(LoadingContext);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        app
          .auth()
          .currentUser.getIdToken(/* forceRefresh */ true)
          .then(async function (idToken) {
            getUsersInfoAsync(idToken).then((fullUser) => {
              if (fullUser.freeToday == null) {
                // console.log(true);
                createUser(idToken).then((response) => {
                  if (response) {
                    setUser({ ...user, ...response });
                    setLoading(false);
                  }
                });
              } else {
                // console.log(false);
                setUser({ ...user, ...fullUser });
                setLoading(false);
              }
            });
            // console.log(user);
          })
          .catch(function (error) {
            // Handle error
            console.log(error);
          });
        // console.log(getUsersInfo());
      } else {
        setUser(null);
        setLoading(false);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
