import React from 'react';
import './Header.css'
import './Fonts.css'

function Header() {
	return(
		<header className="header">
			<div className="container">
				<nav className="navbar">
					<a href="#">treehouse</a>
					<ul>
						<li>
							<a href="home">home</a>
						</li>
						<li>
							<a href="about">about</a>
						</li>
						<li>
							<a href="blog">blog</a>
						</li>
						<li>
							<a href="portfolio">portfolio</a>
						</li>
						<li>
							<a href="contact">contact</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
