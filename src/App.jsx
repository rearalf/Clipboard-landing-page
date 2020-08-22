import React from 'react';
import './style.css';
import Footer from './components/footer.jsx';
import Head from './components/head.jsx';
import Section_1 from './components/section-1.jsx';
import Section_2 from './components/section-2.jsx';
import Section_3 from './components/section-3.jsx';

function App(){
	return (
		<React.Fragment>
			<Head />
			<Section_1 />
			<Section_2 />
			<Section_3 />
			<Footer />
		</React.Fragment>
	);
}

export default App;
