import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import AboutMain from '../layout/AboutMain';
import NavBar from '../components/NavBar';

const About = () => {
	return (
		<Fragment>
			<NavBar />
			<AboutMain />
			<Footer />
		</Fragment>
	);
};

export default About;
