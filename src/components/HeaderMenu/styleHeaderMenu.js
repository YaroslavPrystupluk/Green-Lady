import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const WrapMenu = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 70px;
	background-color: ${(props) => props.theme.colors.primary};
	border-bottom: 3px solid ${(props) => props.theme.colors.secondary};
	@media ${(props) => props.theme.media.phone} {
		display: none;
	}
`;

const CustomLink = styled(NavLink)`
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	text-transform: uppercase;
	font-size: 16px;
	font-weight: 700;
	color: ${(props) => props.theme.colors.secondary};
	padding: 30px 0;
	&.active {
		padding: 0 0 3px 0;
		border-bottom: 3px solid ${(props) => props.theme.colors.secondary};
	}
`;
export { CustomLink, WrapMenu };
