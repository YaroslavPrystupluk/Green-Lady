import styled from 'styled-components';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const WrapHeader = styled.header`
	background-color: ${(props) => props.theme.colors.secondary};
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const WrapBlockInfo = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 0 0 20px 0;
`;

const WrapTextHeader = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;
	gap: 5px;
	margin: 0 10px;
`;

const TextHeader = styled.p`
	font-size: 16px;
	color: ${(props) => props.theme.colors.primary};
`;

const CustomLocationOnIcon = styled(LocationOnIcon)`
	color: ${(props) => props.theme.colors.primary};
`;

const CustomAlternateEmailIcon = styled(AlternateEmailIcon)`
	color: ${(props) => props.theme.colors.primary};
`;

const CustomLocalPhoneIcon = styled(LocalPhoneIcon)`
	color: ${(props) => props.theme.colors.primary};
`;
export {
	WrapHeader,
	WrapBlockInfo,
	WrapTextHeader,
	TextHeader,
	CustomLocalPhoneIcon,
	CustomLocationOnIcon,
	CustomAlternateEmailIcon,
};
