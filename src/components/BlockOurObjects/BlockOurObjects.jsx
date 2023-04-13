import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WrapOurObjects, TitleBlock, TextBlock, Button } from './styleBlockOurObjects';

const BlockOurObjects = () => {
	const navigate = useNavigate();
	return (
		<WrapOurObjects>
			<TitleBlock>Ландшафтні роботи будь-якої складності</TitleBlock>
			<TextBlock>
				Вже понад 10 років наша компанія займається наданням послуг у сфері створення ландшафтного дизайну,
				проектування, благоустрою та озеленення дачних ділянок. Ми створюємо зручні та красиві ландшафти, які прослужать
				вам дуже довго.
			</TextBlock>
			<Button
				onClick={() => {
					navigate('/ourObjects');
				}}
				type="button">
				Наші об&#39;єкти
			</Button>
		</WrapOurObjects>
	);
};

export default BlockOurObjects;
