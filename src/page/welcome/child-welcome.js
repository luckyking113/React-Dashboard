import _ from 'lodash';
import React from 'react';
import './welcome.css';
import {PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';




export class ChildWelcome extends React.Component {     
     state = {
            data:  [{name: 'Group A', value: 6}, {name: 'Group B', value: 9},
                         {name: 'Group C', value: 5}, {name: 'Group D', value: 16},
                         {name: 'Group E', value: 13}, {name: 'Group F', value: 14},
                         {name: 'Group F', value: 8},{name: 'Group F', value: 12},
                         {name: 'Group F', value: 10},{name: 'Group F', value: 7}],

            COLORS : ['#5df9bf','#22cfb5','#0de2d0','#18beaa','#5df9bf','#c48a54','#9e7847','#7f6039','#dbd9de','#8e8c8e'],          
                         
            chartValues: [{name: 'Saido em conta corrente', value:'30', chartFontColor:'#5df9bf'},
                          {name: 'Lancamentos Futuros', value:'45', chartFontColor:'#22cfb5'},
                          {name: 'Renda Fixa', value:'28', chartFontColor:'#0de2d0'},
                          {name: 'Tesouro Direto', value:'85', chartFontColor:'#18beaa'},
                          {name: 'Tesouro Direto', value:'70', chartFontColor:'#5df9bf'},
                          {name: 'Funos', value:'76', chartFontColor:'#c48a54'},
                          {name: 'Clubes', value:'40', chartFontColor:'#9e7847'},
                          {name: 'Posicao em custodia Bovespa', value:'67', chartFontColor:'#7f6039'},
                          {name: 'Posicao em custodia Bovespa', value:'50', chartFontColor:'#dbd9de'},
                          {name: 'Margense Carantias', value:'38', chartFontColor:'#8e8c8e'}  ]
        }

    WelcomeChatContent() {
        return _.map(this.state.chartValues, (chartValue) => {
            return (                
                <div className="chartText">
                    <div className="col-md-11 col-sm-11" style = {{paddingLeft:"44px;"}}>
                        <b><i className="fa fa-circle-o fa-1x" aria-hidden="true" style = {{color: chartValue.chartFontColor}}></i></b>
                        <span>&nbsp;&nbsp;{chartValue.name}</span>
                    </div>
                    <div className="col-md-1 col-sm-1"><h4>{chartValue.value}</h4></div>
                </div>
            ); 
        });   
    }

    render() {
        return (
            <div className = "Row">
                <div className = "col-md-6 col-sm-6" style = {{marginBottom:'40px !important'}}>
                    <h3 style = {{marginTop:'31px'}}>Patrimonio Cosolidado</h3>
                    {this.WelcomeChatContent()}
                </div>
                <div className = "col-md-6 col-sm-6">
                    <div className = "circle-position">
                        <PieChart  width={350} height={350}>
                            <Pie
                                innerRadius={130}
                                outerRadius={160}
                                color={'#43A19E'}
                                data = {this.state.data}
                                fill="#8884d8"
                                startAngle = {75}
                                endAngle = {-285}
                                cx={'50%'} cy={'50%'}>                       
                                {
                                    this.state.data.map((entry, index) => <Cell fill={this.state.COLORS[index]}/>)
                                }
                            </Pie>           
                            <text x={175} y={175} dy={8} textAnchor="middle" fill={"#d5d6d9"} style ={{fontSize:'30px'}}>R$ 12.986.00</text>
                        </PieChart>                    
                   </div>
                </div>
            </div>
        );    
    }    
}
