import React from 'react';
import imgComputer from '../img/image-computer.png';

const Section_1 = () => {
	return (
		<React.Fragment>
			<article className="article">
				<h2 className="title"> Keep track of your snippets</h2>
				<p className="text">
					Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices.
					Our Mac and iOS apps will help you organize everything.
				</p>
			</article>
			<section className="section1">
				<img src={imgComputer} className="" alt="Image Computer" />
				<div className="contenArticle">
					<article className="article">
						<h2 className="title">Quick Search</h2>
						<p className="text">Easily search your snippets by content, category, web address, application, and more.</p>
					</article>
					<article className="article">
						<h2 className="title">iCloud Sync</h2>
						<p className="text">Instantly saves and syncs snippets across all your devices.</p>
					</article>
					<article className="article">
						<h2 className="title">Complete History</h2>
						<p className="text">Retrieve any snippets from the first moment you started using the app.</p>
					</article>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Section_1;
