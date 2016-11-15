import React from 'react'
import Helmet from 'react-helmet'
import {connect} from 'react-redux'

const Item = props => {
	return (
		<div className="padding">
			<Helmet title={props.name + ' | ' + props.route.item.post_title}/>
			<div className="inner">
				<h1>{props.route.item.post_title}</h1>
				<hr/>
				<div className="content" dangerouslySetInnerHTML={{ __html:props.route.item.post_content}} />
			</div>
		</div>
	)
}

export default connect( state => state )(Item)