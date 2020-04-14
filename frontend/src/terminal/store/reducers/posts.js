import * as actionTypes from '../actions/actionTypes'

const initialState = {
	loading: true,
	posts: null,
	error: false
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case actionTypes.FETCH_POSTS_START:
			return {
				...state,
				error: false,
				loading: true
			}
		case actionTypes.FETCH_POSTS_SUCCESS:
			return {
				...state,
				error: false,
				loading: false,
				posts: action.posts
			}
		case actionTypes.FETCH_POSTS_FAIL:
			return {
				...state,
				error: true,
				loading: false
			}
		default:
			return state
	}
}

export default reducer