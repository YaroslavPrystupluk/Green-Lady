import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import HeaderMenu from '../HeaderMenu';
import { WrapLayout } from './styleLayout';

const Layout = () => {
	return (
		<>
			<Header />
			<HeaderMenu />
			<WrapLayout>
				<Outlet />
			</WrapLayout>
			<footer>&copy;2023</footer>
		</>
	);
};

export default Layout;
