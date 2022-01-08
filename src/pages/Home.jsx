import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import HomeMain from '../layout/HomeMain';
import NavBar from '../components/NavBar';

const Home = () => {
	return (
		<Fragment>
			<NavBar />
			<HomeMain />
			<Footer />
		</Fragment>
	);
};

export default Home;
