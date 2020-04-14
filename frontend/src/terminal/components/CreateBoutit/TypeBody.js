import React from 'react'
import ChosenType from './ChosenType'
import TypesList from './TypesList'
import TypeCreate from './TypeCreate'

const typeBody = ({
	changeTextOverlay,
	sendType,
	handleChange,
	handleSelect,
	state
}) => (
<div className="flex-col height-100">
	{state.type ?
	<ChosenType
		handleSelect={handleSelect}
		state={state}
	/> : null}
	<div className="flex-100 overflow-hidden">
		{state.typeView === 'search' ?
		<TypesList
			handleSelect={handleSelect}
			state={state}
		/>
		:
		<TypeCreate
			sendType={sendType}
			handleChange={handleChange}
		/>}
	</div>
</div>
)

export default typeBody