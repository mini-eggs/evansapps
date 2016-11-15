import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import $ from 'jquery'

class MobileEvent extends React.Component{
	componentDidMount(){
		$('.mobileMenuToggleShow')
			.on('click', event => {
				$('.mobileMenuToggle')
					.toggleClass('show')
			})
	}
	render(){return(<span />)}
}

const AbsoluteHeader = props => <nav className="mobile mobileMenuToggle">
	<div className="padding">
		<div className="inline left">
			{
				props.data.pages.map((page,index) => <Link className="mobileMenuToggleShow" key={index} to={'/page/' + page.post_name}>
						{page.post_title}
					</Link>
				)
			}
			<Link className="mobileMenuToggleShow" key={props.data.pages.length} to={'/blog/'}>
				Blog
			</Link>
		</div>
	</div>
</nav>

const Header = props => <header className="desktop-hide mobile-show center">
	<i className="mobileMenuToggle mobileMenuToggleShow"
		dangerouslySetInnerHTML={{ __html:'&times;'}}
	/>
	<div className="padding">
		<div className="inner">
			<div className="half desktop-left inline">
				<Link to="/">{props.mobile}</Link>
			</div>
			<div className="half desktop-right inline mobileMenuToggleShow">
				menu
			</div>
		</div>
	</div>
	<AbsoluteHeader data={props.data}/>
	<MobileEvent />
</header>

export default connect( state => state )(Header)