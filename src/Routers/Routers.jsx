import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import OurObjects from '../Pages/OurObjects';
import ServicesAndPrices from '../Pages/ServicesAndPrices';
import Contacts from '../Pages/Contacts';
import NotFaundPage from '../Pages/NotFaundPage';

const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/ourObjects" element={<OurObjects />} />
			<Route path="/servicesAndPrices" element={<ServicesAndPrices />} />
			<Route path="/contacts" element={<Contacts />} />
			<Route path="*" element={<NotFaundPage />} />
		</Routes>
	);
};

export default Routers;
