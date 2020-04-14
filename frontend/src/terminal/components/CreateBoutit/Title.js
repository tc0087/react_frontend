import React from 'react'

const title = ({
	handleChange
}) => (
<div className="width-100 max-width-400 flex-col centered">
	<div className="flex-col centered margin-bottom-10 create-title border-bottom-grey padding-bottom-2">
		<input
			autoComplete="off"
			className="create-input-title create-hover padding-horizontal-10"
			name="title"
			placeholder="Add title"
			onChange={handleChange}
		/>
	</div>
</div>
)

export default title