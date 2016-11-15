import $ from 'jquery'

const getDataUrl = 'http://evanjones.xyz/evanjonesprod/wp-proxy/?type=getJson'

export default props => {
	return new Promise((resolve, reject) => {
		$.get(getDataUrl, data => resolve(JSON.parse(data)))
	})
}