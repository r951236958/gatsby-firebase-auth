import { navigate } from "@reach/router"
import firebase from "gatsby-plugin-firebase"
import React from "react"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import SEO from "../components/SEO"
import Title from "../components/Title"
import { isLoggedIn, setUser } from "../utils/auth"

const Login = () => {
  if (isLoggedIn()) {
    navigate(`/app/profile`)
  }

  function getUiConfig(auth) {
    return {
      signInFlow: "popup",
      signInOptions: [
        auth.GoogleAuthProvider.PROVIDER_ID,
        auth.EmailAuthProvider.PROVIDER_ID,
      ],
      // signInSuccessUrl: '/app/profile',
      callbacks: {
        signInSuccessWithAuthResult: (result) => {
          setUser(result.user)
          navigate("/app/profile")
        },
      },
    }
  }

  return (
    <>
      <SEO title='Your Profile' />
      <Title>Welcome to My Awesome App</Title>
      <p>Please sign-in to access to the private route:</p>
      {firebase && (
        <StyledFirebaseAuth
          uiConfig={getUiConfig(firebase.auth)}
          firebaseAuth={firebase.auth()}
        />
      )}
    </>
  )
}

export default Login
