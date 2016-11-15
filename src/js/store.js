import {createStore} from 'redux'
import {browserHistory} from 'react-router'

const Store = props => createStore( event => {
	return {
		data:props,
		name:'Evan Jones',
		desc:'Developer',
		mobile:'EJ | Dev',
		logo:'https://i.imgur.com/jpdzBFV.png'
	} 
})

export default Store