import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import SignIn from "./SignIn";
import SignUp from "./SignUp"; // Asegúrate de importar el componente Register

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const [showSignIn, setShowSignIn] = useState(true); // Nuevo estado para controlar qué componente mostrar

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div>
        {authUser ? (
          <>
            <p>{`Welcome back, ${authUser.email}`}</p>
            <button onClick={userSignOut}>Sign Out</button>
          </>
        ) : (
          <>
            {showSignIn ? <SignIn /> : <SignUp />}
            <button onClick={() => setShowSignIn(true)}>Login</button>
            <button onClick={() => setShowSignIn(false)}>Register</button>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthDetails;
