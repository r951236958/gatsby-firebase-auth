import { navigate } from '@reach/router';
import firebase from "gatsby-plugin-firebase";
import React from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { isLoggedIn, setUser } from "../utils/auth";
import SEO from "./SEO";

const Login = () => {

  if (isLoggedIn()) {
    navigate(`/app/profile`)
  }

  function getUiConfig(auth) {
    return {
      signInFlow: 'popup',
      signInOptions: [
        auth.GoogleAuthProvider.PROVIDER_ID,
        auth.EmailAuthProvider.PROVIDER_ID
      ],
      // signInSuccessUrl: '/app/profile',
      callbacks: {
        signInSuccessWithAuthResult: (result) => {
          setUser(result.user);
          navigate('/app/profile');
        }
      }
    };
  }

  return (
    <SEO title="Log In">
      <p>Please sign-in to access to the private route:</p>
      {firebase && <StyledFirebaseAuth uiConfig={getUiConfig(firebase.auth)} firebaseAuth={firebase.auth()}/>}
    </SEO>
  );

}

export default Login
