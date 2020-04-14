import React from 'react'
import { 
	MdClose,
	MdAddCircleOutline,
	MdArrowBack 
} from 'react-icons/md'

const typeHeader = ({
	handleChange,
	handleSelect,
	state,
	toggleOverlay
}) => (
<div className={`width-100 padding-horizontal-10 height-60p flex-row space-between centered ${state.type ? null : "shadow-bottom"}`}>
	<div className=" centered-vertical height-100">
	{state.typeView === 'search' ?
		<MdAddCircleOutline
			className="text-30 text-pink pointer"
			onClick={() => handleSelect('typeView', 'create')}
		/>
	:
		<MdArrowBack
			className="text-30 pointer-pink-text-hover"
			onClick={() => handleSelect('typeView', 'search')}
		/>
	}
	</div>
	<div className=" centered height-100 width-100">
		{state.typeView === 'search' ?
		<input
			className="text-16 height-40p width-90 padding-horizontal-10 background-grey-light border-grey text-center radius-5"
			name="filterTypesText"
			placeholder="Search"
			onChange={handleChange}
		/> : null}
	</div>
	<div className="centered height-100 flex-row centered space-between">
		<div></div>
		<MdClose
			className="text-30 pointer-pink-text-hover"
			onClick={toggleOverlay} 
		/>
	</div>
</div>
)

export default typeHeader