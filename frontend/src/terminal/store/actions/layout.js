import * as actionTypes from './actionTypes'

export const chooseCreateOption = (history, path)  => {
	/* dispatch is made available by redux-thunk */
	return dispatch => {
		dispatch(hideCreateMenu())
		if(path){
			history.push(path)
		}
	}
}

export const hideCreateMenu = () => {
	return {
		type: actionTypes.HIDE_CREATE_MENU
	}
}

export const toggleCreateMenu = () => {
	return {
		type: actionTypes.TOGGLE_CREATE_MENU
	}
}

export const toggleSearchDropdown = () => {
	return {
		type: actionTypes.TOGGLE_SEARCH_DROPDOWN
	}
}

export const hideSearchDropdown = () => {
	return {
		type: actionTypes.HIDE_SEARCH_DROPDOWN
	}
}

export const toggleSideMenu = () => {
	return {
		type: actionTypes.TOGGLE_SIDE_MENU
	}
}

export const hideSideMenu = () => {
	return {
		type: actionTypes.HIDE_SIDE_MENU
	}
}

export const hideSideMenuAndNavigate = (history, path)  => {
	/* dispatch is made available by redux-thunk */
	return dispatch => {
		dispatch(hideSideMenu())
		if(path){
			history.push(path)
		}
	}
}
