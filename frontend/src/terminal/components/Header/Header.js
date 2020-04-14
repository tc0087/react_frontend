import React from 'react'
import AuthenticatedHeader from './AuthenticatedHeader'

const header = ({
	authenticated
}) => {
	return (
		authenticated ? 
		<AuthenticatedHeader
			authenticated={authenticated}
		/> : 
		null
	)
}

export default header

