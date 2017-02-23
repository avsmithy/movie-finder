import React from 'react';
import './SearchBox.css'

export default class SearchBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			value: '',
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const value = event.target.value;
		this.setState({
			value,
		});
		this.props.onChange(value);
	}

	render() {
		return (
			<div className="SearchBox">
				<input
					className="SearchBox-input"
					placeholder="Search..."
					type="text"
					value={this.state.value}
					onChange={this.handleChange}
				/>
			</div>
		);
	}

}

SearchBox.propTypes = {
	onChange: React.PropTypes.func.isRequired,
};
