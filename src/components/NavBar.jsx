import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';
import '../styles/NavBar.css';

const NavBar = () => {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth <= 600) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		});
	});
	return (
		<Fragment>
			<nav className='navbar_container'>
				<section className='navbar_logo_section'>
					<Link className='navbar_logo_section_link_wrapper' to='/'>
						<img className='navbar_logo' src={Logo} alt='Bay Takes Logo' />
						<header className='navbar_header'>Bay Takes</header>
					</Link>
				</section>
				{!isMobile && (
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
				)}
				{isMobile && (
					<section className='navbar_dropdown'>
						<i
							className='navbar_dropdown_btn far fa-caret-square-down'
							onClick={() => {}}
						/>
					</section>
				)}
			</nav>
		</Fragment>
	);
};

export default NavBar;
