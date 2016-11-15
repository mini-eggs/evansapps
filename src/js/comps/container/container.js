import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import HeaderComp from '../header/header'
import HeaderCompMobile from '../header/mobileHeader'
import FooterComp from '../footer/footer'

const container = props => <MuiThemeProvider>
	<div className="page">
		<div className="fold">
			<HeaderComp/>
			<HeaderCompMobile/>
			{props.children}
		</div>
		<FooterComp/>
	</div>
</MuiThemeProvider>

export default container