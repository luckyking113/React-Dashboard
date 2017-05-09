// import _ from 'lodash';
import React from 'react';
import './welcome.css';
import 'src/style.css';

export class ChildWelcome1 extends React.Component { 
    render() {
        return (
            <div className = "welcomeContext">
                <div className="row">   
                    <div className="welcomeContext1">
                        <i><h1>Debentures</h1></i>
                        <p>Incentivadas</p>
                        <p>da Terra</p>
                        <button className = "btn btn-default">Titulos de credito privado com<br />
                        isencao fiscal. <b>Clique aqui</b></button>                
                    </div>      
                </div>
                <div className="row"> 
                    <div className="welcomeContext2">
                        <i><h1>Debentures</h1></i>
                        <p>Incentivadas</p>
                        <p>da Terra</p>
                        <button className = "btn btn-default">Aproveite tambem<br />
                        <b>CDI 124% LC  Clique aqui</b></button>                
                    </div>   
                </div>    
            </div>
        );    
    }    
}