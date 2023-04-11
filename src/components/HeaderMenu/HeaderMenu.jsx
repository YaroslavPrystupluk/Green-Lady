import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMenu = () => {
	return (
		<div>
			<Link to="/">Головна</Link>
			<Link to="/ourObjects">Наші об&#39;єкти</Link>
			<Link to="/servicesAndPrices">Послуги і ціни</Link>
			<Link to="/contacts">Контакти</Link>
		</div>
	);
};

export default HeaderMenu;
