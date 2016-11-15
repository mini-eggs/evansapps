import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

const NavComp = props => <nav className="inline">
	{
		props.data.pages.map((page,index) => <Link key={index} to={'/page/' + page.post_name}>
				{page.post_title}
			</Link>
		)
	}
	<Link key={props.data.pages.length} to={'/blog/'}>
		Blog
	</Link>
</nav>

const Header = props => <header className="padding desktop-show mobile-hide">
	<div className="inner">
		<div className="half desktop-left inline">
			<Link to="/">{props.name} | {props.desc}</Link>
		</div>
		<div className="half desktop-right inline">
			<NavComp data={props.data} />
		</div>
	</div>
</header>

export default connect( state => state )(Header)