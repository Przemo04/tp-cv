import React, { Component } from 'react';
import './App.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Sidebar from './sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">

				<Grid fluid>
					<Row>
						<Col xs={12} sm={3} md={3} lg={3} >
							<Sidebar />

							Hello, world!

						</Col>
						<Col xs={12} sm={9} md={9} lg={9} >
							Hello, world2!

						</Col>
					</Row>
				</Grid>
      </div>
    );
  }
}

export default App;
