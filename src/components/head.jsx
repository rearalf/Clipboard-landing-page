import React from 'react';
import bgMovil from '../img/bg-header-mobile.png';
import bgDesktop from '../img/bg-header-desktop.png';
import Logo from '../img/logo.svg';
import Buttons from './buttons.jsx';

const Head = () => {
	const toRender = () => {
		if (window.innerWidth >= 1024) {
			return <img src={bgDesktop} className="img_head" alt="bg-header" />;
		}
		else {
			return <img src={bgMovil} className="img_head" alt="bg-header" />;
		}
	};
	return (
		<React.Fragment>
			{toRender()}
			<header className="head">
				<img src={Logo} alt="logo" className="logo_head" />
				<h1 className="title">A history of everything you copy</h1>
				<p className="text">Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</p>
				<Buttons />
			</header>
		</React.Fragment>
	);
};

export default Head;
