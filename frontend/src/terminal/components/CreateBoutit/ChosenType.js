import React from 'react'
import { FiZap, FiXCircle } from 'react-icons/fi'
var emoji = require('node-emoji')

const chosenType = ({
	handleSelect,
	state
}) => (
<div className={`height-80p width-100 flex-row centered-vertical padding-horizontal-20 ${state.type ? "shadow-bottom" : null}`}>
	<div className="height-80p width-80p centered">
		<div className="height-60p width-60p radius-5 overflow-hidden centered background-grey-light border-grey">
			{state.type.icon ? 
			<div className="text-18">
				{emoji.get(state.type.icon)}
			</div> : 
			<FiZap
				className="text-18"
			/>}
		</div>
	</div>
	<div className="width-100 padding-horizontal-20 height-100 centered-horizontal flex-col">
		<div
			className="text-heavy text-grey text-20"
		>
			{state.type.text}
		</div>
	</div>
	<FiXCircle
		className="text-24 text-red pointer"
		onClick={() => handleSelect('type', null)}
	/>
</div>
)

export default chosenType