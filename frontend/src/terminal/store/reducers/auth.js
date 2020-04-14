import * as actionTypes from '../actions/actionTypes'

const initialState = {
	authenticated: false,
	authenticating: true,
	token: null,
	userId: null,
	error: null,
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case actionTypes.AUTH_START:
			return {
				...state,
				error: false
			}
		case actionTypes.AUTH_SUCCESS:
			return {
				...state,
				authenticated: true,
				error: false,
				authenticating: false,
				token: action.idToken,
				userId: action.userId,
			}
		case actionTypes.AUTH_FAIL:
			return {
				...state,
				error: action.error,
				authenticating: false
			}
		case actionTypes.AUTH_LOGOUT:
			return {
				...state,
				authenticated: false,
				authenticating: false,
				token: null,
				userId: null
			}
		default:
			return state
	}
}

export default reducer