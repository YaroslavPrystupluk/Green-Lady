import styled from 'styled-components';

const Burger = styled.div`
	width: 30px;
	height: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	cursor: pointer;
	div {
		width: 100%;
		height: 2px;
		background-color: black;
		transition: all 0.3s ease-in-out;
		&:nth-child(1) {
			transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0deg)')};
		}
		&:nth-child(2) {
			opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
		}
		&:nth-child(3) {
			transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0deg)')};
		}
	}
`;

const Menu = styled.ul`
	position: absolute;
	top: 0;
	left: 0;
	background-color: white;
	width: 100%;
	padding: 20px;
	transition: all 0.3s ease-in-out;
	transform: ${({ isOpen }) => (isOpen ? 'translateY(0%)' : 'translateY(-100%)')};
	li {
		margin: 10px 0;
		font-size: 20px;
		text-align: center;
		cursor: pointer;
	}
`;

export { Menu, Burger };
