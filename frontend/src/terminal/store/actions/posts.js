import * as actionTypes from './actionTypes'

export const fetchPosts = () => {
	return dispatch => {
		dispatch(fetchPostsStart())
		fetch('http://localhost:4001/posts/feed')
			.then(response => {
				if(response.status !== 200){
					throw new Error('Failed to get posts')
				}
				return response.json()
			})
			.then(resData => {
				const posts = resData.posts
				dispatch(fetchPostsSuccess(posts))
			})
			.catch(error => {
				dispatch(fetchPostsFail())
			})
	}
}

export const fetchPostsStart = () => {
	return {
		type: actionTypes.FETCH_POSTS_START
	}
}

export const fetchPostsSuccess = (posts) => {
	return {
		type: actionTypes.FETCH_POSTS_SUCCESS,
		posts
	}
}

export const fetchPostsFail = () => {
	return {
		type: actionTypes.FETCH_POSTS_FAIL
	}
}