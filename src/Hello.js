import React from 'react';

import 'tachyons';
import './Hello.css';

class Hello extends React.Componenta {
	render() {
		return (
			<div className = "f1 tc bg-yellow">
			<h1 className = "bg-green">Hello Everyone</h1>
			<p>Welcome to React</p>
			</div>
			)

	}

}

export default Hello;