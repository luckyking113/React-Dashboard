import _ from 'lodash';
import React from 'react';
import './welcome.css';

export class ChildWelcome2 extends React.Component { 
    state = {     
            welcome2Sections: [
                {childWelcome2Img: 'child-welcome-img1', childWelcome2label: 'CDB AGIPLAN'},
                {childWelcome2Img: 'child-welcome-img2', childWelcome2label: 'CDB BANCO BMG'},
                {childWelcome2Img: 'child-welcome-img3', childWelcome2label: 'TESOURO'},
                {childWelcome2Img: 'child-welcome-img4', childWelcome2label: 'CDB BANCO BMG'},
                {childWelcome2Img: 'child-welcome-img5', childWelcome2label: 'CDB BANCO BMG'},
                {childWelcome2Img: 'child-welcome-img6', childWelcome2label: 'TESOURO'},
                {childWelcome2Img: 'child-welcome-img7', childWelcome2label: 'TESOURO'},
                {childWelcome2Img: 'child-welcome-img8', childWelcome2label: 'CDB AGIPLAN'},
            ]
        }
 

    renderWelcome() {
        return _.map(this.state.welcome2Sections, (welcome2Section) => {
            return (
                <div className = "equal-height">
                    <div className = "col-md-3 ChildWelcome2 equal-height-child"> 
                        <div className = "childHeight">
                            <div className={`childWelcome ${welcome2Section.childWelcome2Img}`} alt=""/> 
                            <h3>{welcome2Section.childWelcome2label}</h3>
                            <p>110% do CDI | Prazo 1 ano</p>
                            <button className="btn btn-success">Investir</button>
                        </div>
                    </div>     
                </div>     
            ); 
        });   
    }

    render() {
        return (
             <div className="col-padding">
                {this.renderWelcome()}
             </div>   
        );
    }    
}