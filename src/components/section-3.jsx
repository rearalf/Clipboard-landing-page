import React from 'react';
import Buttons from './buttons.jsx';
import IconBlacklist from '../img/icon-blacklist.svg';
import IconText from '../img/icon-text.svg';
import IconPreview from '../img/icon-preview.svg';
import LogoGoogle from '../img/logo-google.png';
import LogoHp from '../img/logo-hp.png';
import LogoIbm from '../img/logo-ibm.png';
import LogoMicrosoft from '../img/logo-microsoft.png';
import LogoGraphics from '../img/logo-vector-graphics.png';

const Section_3 = () => {
	return (
		<React.Fragment>
			<section className="services">
				<article className="service">
					<img src={IconBlacklist} alt="Icon Blacklist" />
					<h4 className="title">Create blacklists</h4>
					<p className="text">Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
				</article>
				<article className="service">
					<img src={IconText} alt="Icon Text" />
					<h4 className="title">Plain text snippets</h4>
					<p className="text">Remove unwanted formatting from copied text for a consistent look.</p>
				</article>
				<article className="service">
					<img src={IconPreview} alt="Icon Preview" />
					<h4 className="title">Sneak preview</h4>
					<p className="text">Quick preview of all snippets on your Clipboard for easy access.</p>
				</article>
			</section>
			<div className="brand">
				<img src={LogoGoogle} alt="LogoGoogle" />
				<img src={LogoIbm} alt="LogoGoogle" />
				<img src={LogoMicrosoft} alt="LogoMicrosoft" />
				<img src={LogoHp} alt="LogoGoogle" />
				<img src={LogoGraphics} alt="LogoGraphics" />
			</div>
			<section className="section4">
				<h4 className="title">Clipboard for iOS and Mac OS</h4>
				<p className="text">
					Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.
				</p>
				<Buttons />
			</section>
		</React.Fragment>
	);
};

export default Section_3;
