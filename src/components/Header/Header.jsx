import React from 'react';
import LogoIcon from '../LogoIcon/LogoIcon';
import {
	WrapHeader,
	TextHeader,
	CustomLocalPhoneIcon,
	CustomLocationOnIcon,
	CustomAlternateEmailIcon,
	WrapTextHeader,
	WrapBlockInfo,
} from './styleHeader';

const Header = () => {
	return (
		<WrapHeader>
			<LogoIcon />
			<WrapBlockInfo>
				<WrapTextHeader>
					<CustomLocalPhoneIcon />
					<TextHeader>(097)014-25-28</TextHeader>
				</WrapTextHeader>
				<WrapTextHeader>
					<CustomLocationOnIcon />
					<TextHeader>Рівненська область,</TextHeader>
					<TextHeader>с. Біла криниця,</TextHeader>
					<TextHeader>вул. Незалежності, 25</TextHeader>
				</WrapTextHeader>
				<WrapTextHeader>
					<CustomAlternateEmailIcon />
					<TextHeader>support@greenledy.com</TextHeader>
				</WrapTextHeader>
			</WrapBlockInfo>
		</WrapHeader>
	);
};

export default Header;
