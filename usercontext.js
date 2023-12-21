// // usercontext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, onAuthStateChanged } from '@firebase/auth';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Your authentication logic to check and set the user
//     const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
//       if (userAuth) {
//         setUser(userAuth); // Set the user in your context
//       } else {
//         setUser(null); // Set user to null or perform any other actions
//       }
//     });

//     return () => {
//       // Cleanup the subscription when the component unmounts
//       unsubscribe();
//     };
//   }, []);

  const value = {
    user,
    setUser,
  };

  return <UserContext.Provider value={{value:value}}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
