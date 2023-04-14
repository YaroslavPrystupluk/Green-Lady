import styled from 'styled-components';

const WrapperStyled = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const WrapLayout = styled.div`
	max-width: 1200px;
	margin: 0 auto;
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
export { WrapperStyled, WrapLayout };
