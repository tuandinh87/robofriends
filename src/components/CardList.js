import React from 'react';
import 'tachyons';
//import { robots } from './robots'; No need as CardList already has access to robots in the index.js
import Card from './Card';

const CardList = ({ robots }) => {
/* Create a loop through the robots list*/
	const cardsArray = robots.map((user, index) => {
		return (<Card 
		key={robots[index].id} 
		id={robots[index].id} 
		name={robots[index].name} 
		username={robots[index].username} 
		email={robots[index].email}/>
		)
	})
		return (
			<div>
				{cardsArray}
	    	</div>
		)
}

export default CardList;