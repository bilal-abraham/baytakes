import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles/DropdownMenu.css';

const DropdownMenu = () => {
	const DropdownItem = (props) => {
		return (
			<Link to={props.route} className='dropdown_menu_item'>
				{props.children}
			</Link>
		);
	};
	return (
		<Fragment>
			<div className='dropdown_container'>
				<DropdownItem route='/about'>About</DropdownItem>
				<DropdownItem route='/links'>Links</DropdownItem>
				<DropdownItem route='/merch'>Merch</DropdownItem>
			</div>
		</Fragment>
	);
};

export default DropdownMenu;
