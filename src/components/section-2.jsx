import React from 'react';
import ImgDevices from '../img/image-devices.png';

const Section_2 = () => {
	return (
		<section className="section2">
			<article className="article">
				<h2 className="title">Access Clipboard anywhere</h2>
				<p className="text">
					Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.
				</p>
			</article>
			<img src={ImgDevices} alt="Image devices" />
			<article className="article">
				<h2 className="title">Supercharge your workflow</h2>
				<p className="text">We’ve got the tools to boost your productivity.</p>
			</article>
		</section>
	);
};

export default Section_2;
