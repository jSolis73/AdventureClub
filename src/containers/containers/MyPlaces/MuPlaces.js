import React, {Component} from 'react'
import classes from './MyPlaces.module.css'

class Myplaces extends Component {
	state = {
		places: []
	}
	render() {
		return (
			<div className={classes.MyPlaces}>
				<h1>Мои места</h1>
			</div>
		)
	}
}

export default Myplaces