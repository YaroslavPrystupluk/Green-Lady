import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WrapLogoImg, LogoImg } from './styleLogoIcon';

const LogoIcon = () => {
	const navigate = useNavigate();
	return (
		<WrapLogoImg
			onClick={() => {
				navigate('/');
			}}>
			<LogoImg src="/image/logo.png" alt="logo" />
		</WrapLogoImg>
	);
};

export default LogoIcon;
