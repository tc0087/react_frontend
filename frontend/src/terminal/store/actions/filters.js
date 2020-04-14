import * as actionTypes from './actionTypes'

export const hideFilterMenu = () => {
	return {
		type: actionTypes.HIDE_FILTER_MENU
	}
}

export const toggleFilterMenu = () => {
	return {
		type: actionTypes.TOGGLE_FILTER_MENU
	}
}