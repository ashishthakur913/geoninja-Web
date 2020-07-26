import React from 'react'

export default class LoaderComponent extends React.Component {
	render () {
		return (
			<>
				{
					this.props.loader.get('visible') &&
						<div className="loader-container">
								<div className="geo-loader"></div>
						</div>
				}
			</>
		)
	}
}