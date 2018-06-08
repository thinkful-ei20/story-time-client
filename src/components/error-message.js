import React from 'react';

import './styles/error-message.css';

export function ErroMessage(props) {
	return(
		<div className="error-message">
			<p>
				Oops! Something went wrong!
			</p>
			<br/>
			<p><span><strong>500 Internal Server Error</strong></span></p>
			<br/>
			<p>
				Please try loading the page again.
			</p>
		</div>
	);
}

export default ErroMessage;

