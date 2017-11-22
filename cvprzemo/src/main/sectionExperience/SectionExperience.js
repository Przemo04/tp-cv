import React from 'react';

import './SectionExperience.scss';
import HeadSection from '../../common/headSection/HeadSection.js';
import EducationBox from './educationBox/EducationBox.js';

class SectionExperience extends React.Component{
	render(){

		return(
			<div className="SectionExperience">
				<HeadSection name="Wykształcenie" />
				<EducationBox date="2008-2012" school="Zespół Szkół Technicznych w Suwałkach" spec="kierunek: Elektronika"/>
				<EducationBox date="2008-2012" school="Zespół Szkół Technicznych w Suwałkach" spec="kierunek: Elektronika"/>
			</div>
		);
	}
}
export default SectionExperience;
