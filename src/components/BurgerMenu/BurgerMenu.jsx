import React from 'react';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const CustomizedMenu = styled(Menu)`
	& .MuiMenu-paper {
		width: 100%;
	}
`;

const CustomLink = styled(NavLink)(({ theme }) => ({
	color: 'inherit',
	textDecoration: 'none',
	'&: hover': {
		textDecoration: 'underline',
	},
}));

const BurgerMenu = React.memo(() => {
	const [burgerMenu, setBurgerMenu] = React.useState(null);
	const openBurgerMenu = Boolean(burgerMenu);

	const handleClickBurgerMenu = (event) => {
		setBurgerMenu(event.currentTarget);
	};
	const handleCloseBurgerMenu = () => {
		setBurgerMenu(null);
	};

	return (
		<Box backgroundColor="#75ab37" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<IconButton
				sx={{ m: '15px 0', border: '2px solid #f5f5f5', borderRadius: '5px' }}
				id="button-burgerMenu"
				aria-controls={openBurgerMenu ? 'menu-burgerMenu' : undefined}
				aria-haspopup="true"
				aria-expanded={openBurgerMenu ? 'true' : undefined}
				onClick={handleClickBurgerMenu}>
				{!burgerMenu ? (
					<MenuIcon fontSize="large" sx={{ color: '#f5f5f5' }} />
				) : (
					<CloseIcon fontSize="large" sx={{ color: '#f5f5f5' }} />
				)}
			</IconButton>
			<CustomizedMenu
				id="menu-burgerMenu"
				anchorEl={burgerMenu}
				open={openBurgerMenu}
				onClose={handleCloseBurgerMenu}
				MenuListProps={{
					'aria-labelledby': 'button-burgerMenu',
				}}>
				<CustomLink to="/">
					<MenuItem divider onClick={handleCloseBurgerMenu}>
						Головна
					</MenuItem>
				</CustomLink>
				<CustomLink to="/ourObjects">
					<MenuItem divider onClick={handleCloseBurgerMenu}>
						Наші об&#39;єкти
					</MenuItem>
				</CustomLink>
				<CustomLink to="/servicesAndPrices">
					<MenuItem divider onClick={handleCloseBurgerMenu}>
						Послуги і ціни
					</MenuItem>
				</CustomLink>
				<CustomLink to="/contacts">
					<MenuItem divider onClick={handleCloseBurgerMenu}>
						Контакти
					</MenuItem>
				</CustomLink>
			</CustomizedMenu>
		</Box>
	);
});

export default BurgerMenu;
