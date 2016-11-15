import React from 'react'
import {Provider} from 'react-redux'
import {browserHistory, Router, Route, IndexRoute, IndexRedirect} from 'react-router'
import Store from './store'
import Container from './comps/container/container'
import Item from './comps/item/item'
import Blog from './comps/blog/blog'

const Routes = props => {

	let apex = <Route key={0} path="/" >
		<IndexRedirect to="/page/home" />
	</Route>

	let blogContainer = <Route key={1} path="/blog/" component={Container}>
		<IndexRoute type="Blog" component={Blog} />
	</Route>

	let errorRoute = <Route key={2} path="*" component={Container}>
		<IndexRedirect to="/page/home" />
	</Route>

	let pages = props.pages.map((page, index) => {
		return (
			<Route key={index + 3} path={"/page/" + page.post_name} component={Container}>
				<IndexRoute item={page} type="Page" component={Item} />
			</Route>
		)
	})

	let posts = props.posts.map((post, index) => {
		return (
			<Route key={index + props.pages.length + 3} path={"/post/" + post.post_name} component={Container}>
				<IndexRoute item={post} type="Post" component={Item} />
			</Route>
		)
	})

	return (
		<Provider store={Store(props)}>
			<Router history={browserHistory}>
				{[apex,blogContainer,...pages,...posts,errorRoute]}
			</Router>
		</Provider>
	)
}

export default Routes