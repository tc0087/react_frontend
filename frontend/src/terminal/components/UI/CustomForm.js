import React, { Component } from 'react'
import Input from './Input'
import Button from './Button'

import { checkValValidity } from '../../util/utility'

class CustomForm extends Component{

	inputChangedHandler = (e, inputIdentifier) => {
		const updatedForm = {
			...this.props.formFields
		}
		const updatedFormElement = { 
			...updatedForm[inputIdentifier]
		}
		updatedFormElement.value = e.target.value
		updatedForm[inputIdentifier] = updatedFormElement
		this.props.updateState({formFields: updatedForm})
	}

	submitHandler = (e) => {
		e.preventDefault()
		let formIsValid = true
		const formData = {}
		const updatedForm = {
			...this.props.formFields
		}
		for (let formElementIdentifier in this.props.formFields){
			const updatedFormElement = { 
				...updatedForm[formElementIdentifier]
			}
			let updatedFormElementValid = { 
				...updatedForm[formElementIdentifier].valid
			}
			let isValid = checkValValidity(updatedFormElement, updatedFormElement.value, updatedFormElement.validationRules)
			console.log(!isValid.isValid)
			updatedFormElementValid = isValid
			if(!isValid.isValid && formIsValid){
				formIsValid = false
				this.props.errorHandler(isValid)
			}
			updatedFormElement.valid = updatedFormElementValid
			formData[formElementIdentifier] = updatedFormElement
			this.props.updateState({formFields: formData})
		}
		if(formIsValid){
			this.props.submitAction()
		}
	}

	render() {
		const {errorMessage} = this.props
		const formElementsArray = []
		for (let key in this.props.formFields){
			formElementsArray.push({
				id: key,
				config: this.props.formFields[key]
			})
		}
		const form = formElementsArray.map(formElement => 
			<Input
				changed={(e) => this.inputChangedHandler(e, formElement.id)}
				className={formElement.config.className}
				elementType={formElement.config.elementType}
				elementConfig={formElement.config.elementConfig}
				invalid={!formElement.config.valid.isValid}
				value={formElement.value}
				key={formElement.id}
				shouldValidate={formElement.config.validationRules}
				touched={formElement.config.touched}
			/>
		)
		return(
			<form
				className="width-90 max-width-400 flex-col centered"
				onSubmit={this.submitHandler}
			>
				{form}
				<Button
					className={['button', 'button-text', 'margin-bottom-10'].join(' ')}
				>
					Sign up
				</Button>
				<div className="height-20p text-red text-12">{errorMessage}</div>
			</form>
		)
	}
}

export default CustomForm 