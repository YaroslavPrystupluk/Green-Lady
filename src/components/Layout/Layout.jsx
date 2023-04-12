import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import HeaderMenu from '../HeaderMenu';
import BurgerMenu from '../BurgerMenu';
import Footer from '../Footer';
import { WrapperStyled, WrapLayout } from './styleLayout';

const Layout = () => {
	return (
		<WrapperStyled>
			<Header />
			<HeaderMenu />
			<BurgerMenu />
			<WrapLayout>
				<Outlet />
			</WrapLayout>
			<Footer />
		</WrapperStyled>
	);
};

export default Layout;
