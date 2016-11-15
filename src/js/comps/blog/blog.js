import React from 'react'
import Helmet from 'react-helmet'
import {connect} from 'react-redux'
import {Link} from 'react-router'

const BlogPosts = props => <div>
	{
		props.data.posts.map((post,index) => <Link to={"/post/" + post.post_name}>
				<h3>
					{post.post_title}
				</h3>
			</Link>
		)
	}
</div>

const Blog = props => {
	return (
		<div className="padding">
			<Helmet title={props.name + ' | ' + 'Blog'}/>
			<div className="inner">
				<h1>Blog</h1>
				<hr/>
				<BlogPosts data={props.data} />
			</div>
		</div>
	)
}

export default connect( state => state )(Blog)