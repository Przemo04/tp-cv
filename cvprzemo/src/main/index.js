import React from 'react';

import SectionGoal from './sectionGoal/SectionGoal.js';
import SectionEducation from './sectionEducation/SectionEducation.js';

import './Main.scss';

class Main extends React.Component{
	render(){

		return(
			<div className="Main">
				<SectionGoal />
				<SectionEducation />
			</div>
		);
	}
}
export default Main;
