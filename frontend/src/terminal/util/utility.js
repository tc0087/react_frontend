var validator = require('validator')

export const checkValidity = (val, rules) => {
	let isValid = true
	if(rules.required && val.trim() === '' && isValid){
		isValid = false
	}
	if(rules.minLength && val.length <= rules.minLength && isValid){
		isValid = false
	}
	return isValid

}

export const checkValValidity = (key, val, rules) => {
	let isValid = true
	let validationObj = {isValid: true, key, error_message: null}
	if(rules.required && val.trim() === ''){
		validationObj = {isValid: false, key, error_message: 'Field is required'}
	}
	if(rules.minLength && val.length <= rules.minLength && isValid){
		validationObj = {isValid: false, key, error_message: `Must be at least ${rules.minLength} characters`}
	}
	if(rules.boolean && validator.isBoolean(val) && isValid){
		validationObj = {isValid: false, key, error_message: `Must be a boolean`}
	}
	if(rules.email_or_phone && (!validator.isEmail(val) && !validator.isMobilePhone(val)) && isValid){
		validationObj = {isValid: false, key, error_message: 'Please enter a valid email or phone number'}
	}
	return validationObj
}

export const checkObjValidity = (obj) => {
	// const objectKeys = Object.keys(obj)
	// // let returnObj = {isValid: true, key: null, error_message: null}
	// // for(let i in objectKeys){
	// // 	let key = objectKeys[i]
	// // 	let val = obj[key].value
	// // 	let objRules = rules[key].rules
	// // 	returnObj = checkValValidity(key, val, objRules)
	// // 	if(!returnObj.isValid){
	// // 		break
	// // 	}
	// // }	
	// // return returnObj
}
