import React from 'react'
import { FiCamera } from 'react-icons/fi'

const media = ({
	onSelectMedia,
	state
}) => (
<div
	className={state.error_types.includes('pic') ? "max-width-300 width-100 max-height-300 height-90 radius-5 centered flex-row border-red create-pic-hover overflow-hidden" : "max-width-300 width-90 max-height-300 height-90 border-grey radius-5 flex-row centered create-pic-hover overflow-hidden"}
>
	<div style={{
		'width': '100%',
		'overflow': 'hidden',
		'position': 'relative',
		'display': 'flex',
		'alignItems': 'center',
		'justifyContent': 'center',
		'paddingBottom': !state.picture_main_url ? '100%' : null,
		'cursor': 'pointer',
	}}
	>
		{state.picture_main_url ?
			<img
				src={state.picture_main_url}
				className="width-100 flex-row relative centered"
				alt=""
			/>
		:
			<div className="flex-col centered placeholder-pic">
				<FiCamera className="placeholder-icon" />
			</div>
		}
		<input
			className="file-upload"
			label='upload file'
			type='file'
			onChange={onSelectMedia}
		/>
	</div>
</div>
)

export default media