import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./Firebase.confiq";
import { userContext } from "../../App";
import { useHistory, useLocation } from "react-router";
// import fbIcon from "../Login/image/Facebook.png";
import "./Login.css";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: ""
  });

  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  const handleChanged = (event) => {
    // console.log(event.target.name, event.target.value)
    let isFieldValid = true;
    if (event.target.name === "email") {
      isFieldValid = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(
        event.target.value
      );
    }
    if (event.target.value === "password") {
      isFieldValid =
        event.target.value.length > 5 && event.target.value.length < 9;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  };
  const handleSubmit = (event) => {
    if (
      newUser &&
      user.email &&
      user.password &&
      user.name &&
      user.password === user.confirmPassword
    ) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          setUser(newUserInfo);
        });
    }
    event.preventDefault();
  };
  if (!newUser && user.name && user.email) {
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((res) => {
        const newUserInfo = { ...user };
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo);
        history.replace(from);
      });
  }

  var fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleFbSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((result) => {
        var user = result.user;
        setUser(user);
        setLoggedInUser(user);
        history.replace(from);
      });
  };

  return (
    <div className="container form-back">
      <div className="style-form">
        <button className="fb-button" onClick={handleFbSignIn}>
          Log in with facebook
        </button>
        <p style={{ color: "red" }}>{user.error}</p>
      </div>
    </div>
  );
};

export default Login;
