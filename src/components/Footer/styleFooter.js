import styled from 'styled-components';

const ImageDecor = styled.div`
	min-height: 100px;
	background-image: url('/image/footer.jpg');
	background-position: 100% 100%;
	background-repeat: repeat-x;
	background-size: contain;
	border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
`;

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
	@media ${(props) => props.theme.media.desctop} {
		max-width: 80%;
	}
	@media ${(props) => props.theme.media.tablet} {
		max-width: 90%;
	}
	@media ${(props) => props.theme.media.phone} {
		max-width: 100%;
		padding: 0 10px;
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
export { ImageDecor, WrapFooter, ContainerFooter, WrapLogoImg, Slogan, LogoImg };
