import React from 'react'

import MediaOverlay from './MediaOverlay'
import TypeOverlay from './TypeOverlay'

const overlay = ({
	getMediaUrl,
	handleChange,
	handleSelect,
	sendType,
	sliderChange,
	state,
	toggleOverlay,
}) => (
	<div
		className="absolute-top background-overlay width-100 flex-col overflow-hidden"
	>
		{state.overlayCategory === 'type' ?
			<TypeOverlay
				handleChange={handleChange}
				handleSelect={handleSelect}
				sendType={sendType}
				state={state}
				toggleOverlay={toggleOverlay}
			/> : null
		}
		{state.overlayCategory === 'media' ?
			<MediaOverlay
				getMediaUrl={getMediaUrl}
				handleChange={handleChange}
				handleSelect={handleSelect}
				sendType={sendType}
				sliderChange={sliderChange}
				state={state}
				toggleOverlay={toggleOverlay}
			/> : null
		}
	</div>
)

export default overlay