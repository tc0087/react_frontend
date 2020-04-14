import React from 'react'
import { FiZap } from 'react-icons/fi'
var emoji = require('emoji')

const singleType = ({
	handleSelect,
	type
}) => (
<div
	className="height-80p width-100 flex-row centered-vertical padding-horizontal-20 border-transparent background-light-grey-hover pointer"
	onClick={() => handleSelect('type', type)}
>
	<div className="height-80p width-80p centered">
		<div className="height-60p width-60p radius-5 overflow-hidden centered background-grey-light border-grey">
			{type.icon ? 
			<div className="text-18">
				{emoji.get(type.icon)}
			</div> : 
			<FiZap className="text-18" />}
		</div>
	</div>
	<div className="width-100 padding-horizontal-20 height-100 centered-horizontal flex-col">
		<div className="text-heavy text-grey text-20">{type.text}</div>
	</div>
</div>
)

export default singleType