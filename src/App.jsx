import React from 'react';
import Header from './components/Header';
import HeaderMenu from './components/HeaderMenu';
import RootRouters from './Routers';

const App = () => {
	return (
		<>
			<Header />
			<HeaderMenu />
			<RootRouters />
		</>
	);
};

export default App;
