import React, {Component} from 'react'
import classes from './Layout.module.css'
import earth from './earth.png'

class Layout extends Component {
	render() {
		return (
			<div className={classes.Layout}>
				<main>
					<div className={classes.Header}>
						<img 
							alt=""
							className={classes.Logo}
							src={earth}
						/>
						<h1 className={classes.Title}>Adventure Club</h1>
					</div>
					{ this.props.children }
				</main>
			</div>
		)
	}
}

export default Layout