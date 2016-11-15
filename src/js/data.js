import $ from 'jquery'

const url = 'https://evanjones.xyz/evanjonesprod/wp-proxy/?type=getJson'

export default props => new Promise(resolve => {
	$.getJSON({
		url:url,
		success: data => resolve(data)
	})
})