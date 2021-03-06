import React from 'react';
import logoReact from '../../images/logo.svg';
import './SectionAdditional.scss';
import HeadSection from '../../common/headSection/HeadSection.js';

class SectionAdditional extends React.Component{
	render(){

		return(
			<div className="SectionAdditional">
					<HeadSection name="Dodatkowe" />
					<div className="Additional-Wrapper">
							<h3>Języki obce: </h3>
							<p>j.Angielski poziom podstawowy</p>
							<h3>Hobby: </h3>
							<p>Udział w eventach branżowych(IT), nowoczesne technologie, piłka nożna, motoryzacja, podróże.</p>
							<h3>Ulubione strony intenretowe: </h3>
							<p>stackoverflow.com, jsdn.pl, nafrontendzie.pl,  </p>
							<h3>Ulubione ksiązki: </h3>
							<p>Czysty kod, JavaScript The Goog Parts, ES6</p>
					</div>
			</div>
		);
	}
}
export default SectionAdditional;
