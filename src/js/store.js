import {createStore} from 'redux'
import {browserHistory} from 'react-router'

const Store = props => createStore( event => {
	return {
		data:props,
		name:'Evan Jones',
		desc:'Developer',
		mobile:'EJ | Dev',
		logo:'http://www.evansapps.com/src/assets/evansapps.png'
	} 
})

export default Store