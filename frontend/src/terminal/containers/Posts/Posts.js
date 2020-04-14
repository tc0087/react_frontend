import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Post from '../../components/Posts/Post'
import BigLoading from '../../components/Loading/BigLoading'

import * as actionCreators from '../../store/actions/index'

class Posts extends React.Component {
	state = {
		loaded: false
	}

	componentDidMount(){
		this.props.fetchPosts()	
	}


  render() {
		const {
			error,
			loading,
			posts
		} = this.props
    return (
			<div className="flex-100">
			{!loading && !error ? posts.length > 0 ?
				<div>
					{posts.map(post => <Post key={post._id} post={post} />)}
				</div>
			: <div>No posts</div> : <BigLoading />}
			</div>
    );
  }
}

const mapStateToProps = state => {
	return {
		error: state.posts.error,
		loading: state.posts.loading,
		posts: state.posts.posts,
	}
}
const mapDispatchToProps = dispatch => {
	return {
		fetchPosts: () => dispatch(actionCreators.fetchPosts())
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Posts))
