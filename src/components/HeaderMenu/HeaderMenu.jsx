import React from 'react';
import { CustomLink, WrapMenu } from './styleHeaderMenu';

const HeaderMenu = () => {
	return (
		<WrapMenu>
			<CustomLink to="/">Головна</CustomLink>
			<CustomLink to="/ourObjects">Наші об&#39;єкти</CustomLink>
			<CustomLink to="/servicesAndPrices">Послуги і ціни</CustomLink>
			<CustomLink to="/contacts">Контакти</CustomLink>
		</WrapMenu>
	);
};

export default HeaderMenu;
