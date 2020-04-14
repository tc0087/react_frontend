import React from 'react'
import { FiZap } from 'react-icons/fi'
var emoji = require('node-emoji')

const selectedType = ({
	state,
	toggleOverlay
}) => (
	<div className="category-wrapper">
		<div
			className={state.error_types.includes('type') ? "category-container-error" : "category-container"}
			onClick={() => toggleOverlay('type')}
		>
			<div className="type-emoji">{state.type.icon ? emoji.get(state.type.icon) : <FiZap />}</div>
			<div className="type-text">{state.type.text}</div>
		</div>
	</div>
)

export default selectedType