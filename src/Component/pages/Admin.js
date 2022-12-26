import React, { useState, useEffect } from "react";
import { app } from "../../firebase/config";
// import { NavLink } from "react-router-dom";
import Login from "../Login";
import { ToastContainer, toast } from "react-toastify";
import AdminPanel from "./AdminPanel";

function Admin() {
  //Auth State
  const [isLogined, setIsLogined] = useState(false);
  const [user, setUser] = useState({});

  // Hook for Auth
  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLogined(true);
        return setUser(user);
      }
    });
  }, [setIsLogined, user]);

  // register user
  const registerUser = ({ email, password }) => {
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((data) => data.JSON())
      .then((res) => {
        setUser(res.user);
        setIsLogined(true);
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          return toast.warning("This user is alredy register!");
        } else {
          return toast.error("Something went wrong!");
        }
      });
  };

  //Login User
  const loginUser = ({ email, password }) => {
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        setUser(res.user);
        setIsLogined(true);
      })
      .catch((err) => {
        if (err.code === "auth/wrong-password") {
          return toast.error("Email or password is invaild!");
        } else if (err.code === "auth/user-not-found") {
          return toast.error("Email or password is invaild!");
        } else {
          return toast.error("Something went wrong!");
        }
      });
  };

  //Logout User
  const logOut = () => {
    app
      .auth()
      .signOut()
      .then((res) => {
        setIsLogined(false);
        setUser(false);
        return toast.info("Log Out");
      })
      .catch((err) => {
        return toast.error(err.message);
      });
  };

  return (
    <div>
      <ToastContainer />
      <div>
        {isLogined ? (
          <>
            {/* Render Admin Console  */}
            <AdminPanel />
            <button className="logoutbtn" onClick={logOut}>
              logOut
            </button>
          </>
        ) : (
          //Or

          <>
            {/* Render Login Screen */}
            <Login loginUser={loginUser} />

            {/* Register User */}
            {/* <Register registerUser={registerUser} /> */}
          </>
        )}
      </div>
    </div>
  );
}

export default Admin;
