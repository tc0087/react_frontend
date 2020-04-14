import * as actionTypes from './actionTypes'

export const authStart = () => {
	return {
		type: actionTypes.AUTH_START
	}
}

export const authSuccess = (token, userId) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		token, 
		userId
	}
}

export const authFail = (error) => {
	return {
		type: actionTypes.AUTH_FAIL,
		error
	}
}

export const auth = (formData, history) => {
	return dispatch => {
		let res = {
			data: {
				token: 'asegh98230wgkjasg01gsg98235kjgs98',
				userId: 'adkgaskgaetwt',
				expiresIn: 2000
			}
		}
		const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000)
		localStorage.setItem('boutitToken', res.data.token)
		localStorage.setItem('boutitTokenExpDate', expirationDate)
		localStorage.setItem('boutitUserId', res.data.userId)
		dispatch(authSuccess(res.data.token, res.data.userId))
		history.push('/boutits')
	}
}

export const logout = () => {
	localStorage.removeItem('boutitToken')
	localStorage.removeItem('boutitTokenExpDate')
	localStorage.removeItem('boutitUserId')
	return {
		type: actionTypes.AUTH_LOGOUT
	}
}

export const checkAuthTimeout = (expirationTime) => {
	return dispatch => {
		setTimeout(() => {
			dispatch(logout())
		}, expirationTime * 1000)
	}
}

export const authCheck = (history) => {
	return dispatch => {
		const token = localStorage.getItem('boutitToken')
		if(!token){
			dispatch(logout())
		}else{
			const expirationDate = new Date( localStorage.getItem('boutitTokenExpDate') )
			const userId = localStorage.getItem('boutitUserId')
			if(expirationDate <= new Date()){
				dispatch(logout())
			} else {
				dispatch(authSuccess(token, userId))
				dispatch(checkAuthTimeout( ( expirationDate.getTime() - new Date().getTime() ) / 1000))
			}
		}
	}
}