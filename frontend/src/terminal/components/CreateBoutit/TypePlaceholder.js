import React from 'react'
import { FiGrid } from 'react-icons/fi'

const typePlaceholder = ({
	state,
	toggleOverlay
}) => (
<div className="category-body">
	<div
		className={state.error_types.includes('type') ? "category-container-error" : "category-container"}
		onClick={() => toggleOverlay('type')}
	>
		<div className="type-emoji-placeholder">
			<FiGrid />
		</div>
	</div>
</div>
)

export default typePlaceholder