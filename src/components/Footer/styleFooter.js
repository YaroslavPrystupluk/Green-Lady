import styled from 'styled-components';

const WrapFooter = styled.footer`
	background-color: ${(props) => props.theme.colors.primary};
	margin-top: auto;
`;

const ContainerFooter = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media ${(props) => props.theme.media.tablet} {
		margin: 0 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	@media ${(props) => props.theme.media.phone} {
		margin: 0 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

const Slogan = styled.p`
	text-transform: uppercase;
	font-size: 16px;
	font-weight: 700;
	color: ${(props) => props.theme.colors.secondary};
`;

const WrapLogoImg = styled.div`
	background-color: ${(props) => props.theme.colors.secondary};
	display: block;
	cursor: pointer;
`;

const LogoImg = styled.img`
	padding: 10px;
	width: 70px;
`;
export { WrapFooter, ContainerFooter, WrapLogoImg, Slogan, LogoImg };
