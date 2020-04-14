import React from 'react'
import TypeHeader from './TypeHeader'
import TypeBody from './TypeBody'

const typeOverlay = ({
	changeTextOverlay,
	handleChange,
	handleSelect,
	sendType,
	state,
	toggleOverlay
}) => (
<div className="height-100 width-100 flex-col centered">
	<div className="height-95 width-90 max-width-500 flex-col background-white radius-10 overflow-hidden">
		<TypeHeader
			handleChange={handleChange}
			handleSelect={handleSelect}
			state={state}
			toggleOverlay={toggleOverlay}
		/>
		<TypeBody
			sendType={sendType}
			handleChange={handleChange}
			handleSelect={handleSelect}
			state={state}
		/>
	</div>
</div>
)

export default typeOverlay