import React from 'react';
import './Home.css'
import './Fonts.css'

function Home() {
	return(
		<section className="home">
			<div className="container">
				<h2 className="home-title">creative digital solutions</h2>
				<p className="home-subtitle">Proin iaculis purus consequat sem cure.</p>
				<a className="home-button" href="portfolio">view portfolio</a>
			</div>
		</section>
	);
}

export default Home;
