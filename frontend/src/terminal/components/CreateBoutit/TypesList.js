import React from 'react'
import SingleType from './SingleType'

const typesList = ({
	handleSelect,
	state
}) => (
<div className="height-100 background-white overflow-hidden scrollY relative width-100 padding-top-10">
	<div className="width-100 flex-col">
		<div className="width-100 margin-bottom-10 radius-5 flex-col">
			{state.types.length > 0 ?
			<div>
				{(state.types).map((type, index) =>
					<SingleType
						handleSelect={handleSelect}
						state={state}
						type={type}
						key={index}
						index={index}
					/>
				)}
			</div> :
			<div className="width-100">
					<div className="margin-top-50 margin-bottom-10 centered">
							<div className="text-grey text-20">no results</div>
					</div>
			</div>}
		</div>
	</div>
</div>
)

export default typesList