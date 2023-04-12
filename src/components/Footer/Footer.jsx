import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WrapFooter, ContainerFooter, WrapLogoImg, Slogan, LogoImg } from './styleFooter';

const Footer = () => {
	const navigate = useNavigate();
	return (
		<WrapFooter>
			<ContainerFooter>
				<Slogan>&copy; Green ledy 2023</Slogan>
				<WrapLogoImg
					onClick={() => {
						navigate('/');
					}}>
					<LogoImg src="/image/logo.png" alt="logo" />
				</WrapLogoImg>
			</ContainerFooter>
		</WrapFooter>
	);
};

export default Footer;
