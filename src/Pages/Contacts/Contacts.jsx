import React from 'react';
import {
	TextHeader,
	CustomLocalPhoneIcon,
	CustomLocationOnIcon,
	CustomAlternateEmailIcon,
	WrapTextHeader,
	WrapBlockInfo,
} from './styleContacts';

const Contacts = () => {
	return (
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
	);
};

export default Contacts;
