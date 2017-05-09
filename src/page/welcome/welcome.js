import React from 'react';
import { Page, Panel } from 'react-blur-admin';
import { Row, Col } from 'react-flex-proto';
import { GMap } from 'src/layout/components/gmap';
//import { Row, Col } from 'react-bootstrap';
import { ChildWelcome }  from './child-welcome.js';
import { ChildWelcome1 }  from './child-welcome1.js';
import { ChildWelcome2 }  from './child-welcome2.js';
import './welcome.css';



export class Welcome extends React.Component {
  render() {
    return (
      <Page title={process.env.APP_NAME}  style = {{marginLeft:'30px'}}>
          <div className="row" style = {{margin:'10px 15px !important'}}>
            <div className = "col-md-9 col-sm-9 welcome-chart1">
              <ChildWelcome />          
            </div>
            <div className = "col-md-3 col-sm-3 welcome-chart2">
              <ChildWelcome1 />            
            </div>      
          </div>
          <div className="lineControl">
            <h6>INVESTIMENTO EM UM CLIQUE</h6>
            <hr className = "hr1" />
            <hr className = "hr2" />
          </div>
          {/*<hr />*/}
          <div className="row">
             <ChildWelcome2 />   
          </div>            
      </Page>
    );
  }
}

