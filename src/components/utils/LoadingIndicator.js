import React from 'react';
import './LoadingIndicator.css';

// SpinKit http://tobiasahlin.com/spinkit/
export default function LoadingIndicator(props) {
	return (
		<div className="LoadingIndicator">
			<div className="spinner">
				<div className="double-bounce1"></div>
				<div className="double-bounce2"></div>
			</div>
		</div>
	);
}