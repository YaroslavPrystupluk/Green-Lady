import React from 'react';
import { Outlet } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Header from '../Header';
import HeaderMenu from '../HeaderMenu';
import BurgerMenu from '../BurgerMenu';
import Footer from '../Footer';
import { WrapperStyled, WrapLayout } from './styleLayout';

const Layout = () => {
	const isMobile = useMediaQuery({ maxWidth: 768 });
	return (
		<WrapperStyled>
			<Header />
			{isMobile ? <BurgerMenu /> : <HeaderMenu />}
			<WrapLayout>
				<Outlet />
			</WrapLayout>
			<Footer />
		</WrapperStyled>
	);
};

export default Layout;
