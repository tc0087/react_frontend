import * as actionTypes from '../actions/actionTypes'

const intialState = {
	filterMenu: false,
}

const reducer = (state = intialState, action) => {
	switch(action.type){
		case actionTypes.TOGGLE_FILTER_MENU:
			return {
				...state,
				filterMenu: !state.filterMenu
			}
		case actionTypes.HIDE_FILTER_MENU:
			return {
				...state,
				filterMenu: false
			}
		default:
			return state
	}
}

export default reducer;