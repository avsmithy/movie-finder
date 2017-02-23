import React from 'react';
import './Container.css';

export default function Container(props) {
	return (
		<div className="Container">
			{props.children}
		</div>
	);
}

Container.propTypes = {
	children: React.PropTypes.node,
};