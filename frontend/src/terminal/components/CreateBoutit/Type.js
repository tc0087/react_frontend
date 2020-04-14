import React from 'react'
import SelectedType from './SelectedType'
import TypePlaceholder from './TypePlaceholder'

const type = ({
	state,
	toggleOverlay
}) => (
<div>
	{state.type ? 
		<SelectedType
			toggleOverlay={toggleOverlay}
			state={state}
		/>
		: 
		<TypePlaceholder
			toggleOverlay={toggleOverlay}
			state={state}
		/>
	}
</div>
)

export default type