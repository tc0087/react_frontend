import React from 'react'

const typeCreate = ({
	sendType,
	handleChange
}) => (
<div className="width-100 height-100 flex-col centered-vertical">
	<input
		autoFocus
		className="margin-bottom-20 margin-top-50 input-standard text-centered text-grey"
		placeholder="Enter type"
		maxLength={12}
		name="typeText"
		onChange={handleChange}
	/>
	{/* {(state.uiLoading.label === 'type' && state.uiLoading.value === true) ?
	<div className="create-button centered height-30p radius-5 padding-horizontal-20">
		<ButtonLoading />
	</div> : */}
	<button
		className="button max-width-100"
		onClick={sendType}
	>
		<div className="text-white text-16 text-500">create</div>
	</button>
</div>
)

export default typeCreate