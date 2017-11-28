import React from 'react';

import SectionGoal from './sectionGoal/SectionGoal.js';
import SectionEducation from './sectionEducation/SectionEducation.js';
import SectionExperience from './sectionExperience/SectionExperience.js';

import './Main.scss';

class Main extends React.Component{
	render(){

		return(
			<div className="Main">
				<SectionGoal />
				<SectionEducation />
				<SectionExperience />

			</div>
		);
	}
}
export default Main;
