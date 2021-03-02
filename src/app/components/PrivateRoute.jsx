import { navigate } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { isLoggedIn } from "../../utils/auth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {

  useEffect(() => {
  if (!isLoggedIn() && location.pathname !== `/app/login`) {
    // If we’re not logged in, redirect to the home page.
    navigate(`/app/login`, { replace: true })
    return null
  }
 
  }, [location])

  return <Component {...rest} />
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute
