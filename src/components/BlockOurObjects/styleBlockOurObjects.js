import styled from 'styled-components';

const WrapOurObjects = styled.div`
	width: 50%;
	height: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 50px;
	background-color: ${(props) => props.theme.colors.primary};
	@media ${(props) => props.theme.media.tablet} {
		width: 50%;
		height: 300px;
		padding: 0 15px;
		border-top: 3px solid ${(props) => props.theme.colors.secondary};
	}
	@media ${(props) => props.theme.media.phone} {
		width: 100%;
		height: 400px;
		padding: 0 10px;
		border-top: 3px solid ${(props) => props.theme.colors.secondary};
	}
`;
const TitleBlock = styled.h1`
	font-size: 24px;
	font-weight: 900;
	text-align: center;
	padding: 0 0 30px 0;
	color: ${(props) => props.theme.colors.secondary};
	@media ${(props) => props.theme.media.tablet} {
		font-size: 18px;
		padding: 0 0 15px 0;
	}
	@media ${(props) => props.theme.media.phone} {
		font-size: 18px;
		padding: 0 0 20px 0;
	}
`;

const TextBlock = styled.h1`
	font-size: 18px;
	text-align: center;
	color: ${(props) => props.theme.colors.secondary};
	@media ${(props) => props.theme.media.tablet} {
		font-size: 14px;
	}
	@media ${(props) => props.theme.media.phone} {
		font-size: 16px;
	}
`;

const Button = styled.button`
	background-color: transparent;
	font-size: 18px;
	color: ${(props) => props.theme.colors.secondary};
	border: 2px solid ${(props) => props.theme.colors.secondary};
	padding: 20px 25px;
	margin: 45px 0 0 0;
	cursor: pointer;
	border-radius: 5px;
	&:hover {
		background-color: ${(props) => props.theme.colors.secondary};
		color: ${(props) => props.theme.colors.primary};
	}
	@media ${(props) => props.theme.media.tablet} {
		font-size: 16px;
		margin: 20px 0 0 0;
	}
	@media ${(props) => props.theme.media.phone} {
		font-size: 16px;
		margin: 25px 0 0 0;
	}
`;

export { WrapOurObjects, TitleBlock, TextBlock, Button };
