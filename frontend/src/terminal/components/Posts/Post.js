import React from 'react'
import PicturePost from './PicturePost'
import VideoPost from './VideoPost'
import TextPost from './TextPost'

const post = ({ post }) => (
	<div className="margin-top-20">
		{post.type === 'picture' ? <PicturePost post={post} /> : null}
		{post.type === 'video' ? <VideoPost post={post} /> : null}
		{post.type === 'text' ? <TextPost post={post} /> : null}
	</div>
)

export default post