const getDataUrl = 'http://evanjones.xyz/evanjonesprod/wp-proxy/?type=getJson'

export default props => {
	return new Promise((resolve, reject) => {
		resolve(JSON.parse(window.data))
	})
}