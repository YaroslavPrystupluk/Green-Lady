import React from 'react';
import { Link } from 'react-router-dom';

const NotFaundPage = () => {
	return (
		<div>
			{' '}
			This Not Faund Page
			<p className="page-title">This page has been abducted.</p>
			<p className="page-desc">Let’s head back home and try that again.</p>
			<p>
				<Link to="/">Home</Link>
			</p>
		</div>
	);
};

export default NotFaundPage;
