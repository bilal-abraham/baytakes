import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';
import '../styles/NavBar.css';

const NavBar = () => {
	return (
		<Fragment>
			<nav className='navbar_container'>
				<section className='navbar_logo_section'>
					<img className='navbar_logo' src={Logo} alt='Bay Takes Logo' />
					<header className='navbar_header'>Bay Takes</header>
				</section>
				<ul className='navbar_links'>
					<li className='navbar_element'>
						<Link className='navbar_link' to='/'>
							Home
						</Link>
					</li>
					<li className='navbar_element'>
						<Link className='navbar_link' to='/about'>
							About
						</Link>
					</li>
					<li className='navbar_element'>
						<Link className='navbar_link' to='/links'>
							Links
						</Link>
					</li>
				</ul>
			</nav>
		</Fragment>
	);
};

export default NavBar;
