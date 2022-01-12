import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MobileMenu.css';

const MobileMenu = () => {
	const MobileMenuItem = (props) => {
		return (
			<Link to={props.route} className='dropdown_menu_item'>
				{props.children}
			</Link>
		);
	};
	return (
		<Fragment>
			<div className='dropdown_container'>
				<MobileMenuItem route='/about'>About</MobileMenuItem>
				<MobileMenuItem route='/links'>Links</MobileMenuItem>
				<MobileMenuItem route='/merch'>Merch</MobileMenuItem>
			</div>
		</Fragment>
	);
};

export default MobileMenu;
