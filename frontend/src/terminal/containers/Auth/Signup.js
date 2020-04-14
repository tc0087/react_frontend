import React, { Component } from 'react'
import { connect } from 'react-redux'
import CustomForm from '../../components/UI/CustomForm'

import * as actions from '../../store/actions/index'

class Signup extends Component{
	state = {
		errorObj: null,
		formFields: {
			full_name: {
				className: 'form-input',
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Full name'
				},
				value: '',
				validationRules: {
					required: true
				},
				valid: {isValid: true, key: null, error_message: null},
				touched: false
			},
			username: {
				className: 'form-input',
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Username'
				},
				value: '',
				validationRules: {
					required: true
				},
				valid: {isValid: true, key: null, error_message: null},
				touched: false
			},
			phone_or_email: {
				className: 'form-input',
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Mobile Number or Email'
				},
				value: '',
				validationRules: {
					required: true,
					email_or_phone: true
				},
				valid: {isValid: true, key: null, error_message: null},
				touched: false
			},
			password: {
				className: 'form-input',
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Password'
				},
				value: '',
				validationRules: {
					required: true,
					minLength: 6
				},
				valid: {isValid: true, key: null, error_message: null},
				touched: false
			}
		},
		formIsValid: false
	}

	errorHandler = (errorObj) => {
		this.setState({errorMessage: errorObj.error_message})
	}
	
	handleSubmission = (formData) => {
		const {history} = this.props
		this.props.onAuth(formData, history)
	}

	updateState = (obj) => {
		this.setState(obj)
	}
	
	render(){
		return(
			<div className="flex-col centered width-100 height-100">
				Signup
				<CustomForm
					errorHandler={this.errorHandler}
					errorMessage={this.state.errorMessage}
					formFields={this.state.formFields}
					formIsValid={this.state.formIsValid}
					submitAction={this.handleSubmission}
					updateState={this.updateState}
				/>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onAuth: (formData, history) => dispatch(actions.auth(formData, history))
	}
}

export default connect(null, mapDispatchToProps)(Signup)