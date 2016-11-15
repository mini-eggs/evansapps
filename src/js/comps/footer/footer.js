import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

const Footer = props => <footer className="padding">
	<div className="center">
		<Link to="/">
			<img src={props.logo} />
		</Link>
		<br/>
		<a href="https://github.com/mini-eggs">Github</a>
		•
		<a href="https://twitter.com/minieggs40">Twitter</a>
		•
		<a href="mailto:evanjones4040@gmail.com">Email</a>
		•
		<a href="https://www.linkedin.com/in/evan-jones-59462512a?trk=hp-identity-name">Linkedin</a>
	</div>
</footer>

export default connect( state => state )(Footer)