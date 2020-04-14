import React, { Component } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from '../components/Header/Header'
import Subheader from '../components/Subheader/Subheader'
import SideBar from '../components/SideBars/SideBar'
import NotFound from '../components/UI/NotFound'
import AuthenticatedRoute from '../hoc/AuthenticatedRoute'
import PublicRoute from '../hoc/PublicRoute'

import * as actionCreators from '../store/actions/index'

class Layout extends Component{

	componentDidMount() {
		this.props.authCheck()
	}

	render() {
		const {
			authenticated,
			authenticating,
			authenticatedRoutes, 
			location,
			history,
			publicRoutes,
		} = this.props
		const filterableRouteArr = ['/boutits', '/posts', '/people', '/products'] 
		return (
			<div>
				{!authenticating ? (
					<div className="height-100v width-100 relative flex-row">
						{authenticated && 
						!location.pathname.includes('create') && 
						<SideBar />}
						<div className="flex-100 flex-col overflow-hidden">
							<Header
								authenticated={authenticated}
							/>
							{authenticated && filterableRouteArr.includes(location.pathname) &&
							<Subheader
								location={location}
							/>}
							<Switch>
								{authenticatedRoutes.map((route, i) => 
									<AuthenticatedRoute
										authenticated={authenticated}
										component={route.component}
										exact={route.exact}
										key={i + route.path}
										path={route.path}
									/>
								)}
								{publicRoutes.map((route, i) => 
									<PublicRoute
										authenticated={false}
										component={route.component}
										exact={false}
										history={history}
										key={i + route.path}
										path={route.path}
									/>
								)}
								<Route component={NotFound} />
							</Switch>
						</div>
					</div>
				) : ' '}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		authenticated: state.auth.authenticated && !state.auth.authenticating,
		authenticating: state.auth.authenticating,
		authenticatedRoutes: state.layout.authenticatedRoutes,
		publicRoutes: state.layout.publicRoutes,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		authCheck: () => dispatch(actionCreators.authCheck()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Layout))