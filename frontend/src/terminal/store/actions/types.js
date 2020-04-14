export const createType = (typeObj) => {
	return dispatch => {
		let method = 'POST'
		return fetch('http://localhost:4001/types/create_type', {
			method,
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify()
		})
			.then(response => {
				if(response.status !== 200 && response.status !== 201){
					throw new Error('Failed to get posts')
				}
				return response.json()
			})
			.then(responseData => {
				const message = responseData.message
				return message
			})
			.catch(error => {
				const error_message = "Type could not be created"
				return error_message
			})
	}
}