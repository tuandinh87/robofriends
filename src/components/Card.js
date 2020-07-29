import React from 'react';
import 'tachyons';

const Card = ({ id, name, email }) => {
	// Alternative const { id, name, email } = props; //destructuring
	return (
		<div className = "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img className = "bg-yellow" src={`https://robohash.org/${id}`} alt="robots" width="220px" heigh="220px" />
			<div>
				<h3>{name}</h3>
				<p>{email}</p>
			</div>
			{/*name, email is javascript expression, curly bracket required*/}
		</div>
	)
}

export default Card;