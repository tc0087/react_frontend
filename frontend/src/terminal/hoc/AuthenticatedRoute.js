import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const authenticatedRoute = ({
	authenticated,
	authenticating,
	component,
	exact,
	path,
	...rest
}) => (
	<Route
		path={path}
		exact={exact}
		render={props => (
			authenticated ? 
			(React.createElement(component, {
				authenticated,
				...props,
				...rest
			})) : 
			(<Redirect to="/login" />)
		)}
	/>
)

authenticatedRoute.propTypes = {
	authenticated: PropTypes.bool.isRequired,
	component: PropTypes.any.isRequired,
	exact: PropTypes.bool,
	path: PropTypes.string
}

export default authenticatedRoute