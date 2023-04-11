import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom/client';
import App from './App';

const Global = createGlobalStyle`
 *{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Roboto', sans-serif;
	font-size: 14px;
	font-weight: 500;
}
`;

const theme = {
	colors: {
		primary: '#75ab37',
		secondary: '#f5f5f5',
	},
	media: {
		phone: '(max-width: 426px)',
		tablet: ' (min-width: 426px) and (max-width: 1200px)',
	},
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<Global />
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
