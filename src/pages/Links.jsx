import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import LinksMain from '../layout/LinksMain';
import NavBar from '../components/NavBar';

const Links = () => {
	return (
		<Fragment>
			<NavBar />
			<LinksMain />
			<Footer />
		</Fragment>
	);
};

export default Links;
