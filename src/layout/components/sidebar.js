import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import './sidebar.css';
import 'src/style.css';

export class Sidebar extends React.Component {

  static propTypes = {
    location: React.PropTypes.shape({
      pathname: React.PropTypes.string.isRequired,
      query: React.PropTypes.object.isRequired,
    }),
  }

  state = {
    navItems: [
      { pathname: '/', label: 'Home', icon: 'home' },
      { pathname: '/about', label: 'Meus Investimentos', icon: 'bar-chart' },
      { pathname: '/table-demo', label: 'Produtos', icon: 'star' },
      { pathname: '/button-demo', label: 'Analise', icon: 'dot-circle-o' },
      { pathname: '/progress-bars', label: 'Home Broker', icon: 'star'},
      { pathname: '/modal-demo', label: 'Educacional', icon: 'clipboard' },
      { pathname: '/tabs-demo', label: 'E-Commerce', icon: 'list-ul' },
      { pathname: '/input-demo', label: 'Ajuda', icon: 'check-square' },
      // { pathname: '/notifications-demo', label: 'Notifications', icon: 'exclamation' },
    ]
    // sidebarSections: [
    //   {textLabel: 'IBOVESPA', textColor: 'sidebar-text-color' ,percentText: ' +0.14%', textLabel1: '64000 pts',id:1},
    //   {textLabel: 'DOLAR', textColor: 'sidebar-text-color' ,percentText: ' -1.53%', textLabel1: 'R$ 3.15', id: 2},
    //   {textLabel: 'CDI', textColor: 'sidebar-text-color' ,textLabel1: '12.13% a a'},
    //   {textLabel: 'SELIC', textColor: 'sidebar-text-color' , textLabel1: '12.97%'},
    //   {textLabel: 'IBOVESPA', textColor: 'sidebar-text-color', textLabel1: '12.97%'},     
    // ]

  }

  isSelected(navItem) {
    return this.props.location.pathname === navItem.pathname ? 'selected' : '';
  }

  renderLinks() {
    return _.map(this.state.navItems, (navItem) => {
      return (
        <li className={`al-sidebar-list-item ${this.isSelected(navItem)}`} key={navItem.pathname} onClick={()=>this.props.getTitle(navItem.label)}>
          <Link className="al-sidebar-list-link" to={{ pathname: navItem.pathname, query: navItem.query }}>
            <i className={`fa fa-${navItem.icon}`}></i>
            <span>{navItem.label}</span>
          </Link>
        </li>
      );
    });
  }
  /*renderstate() {
    return _.map(this.state.sidebarSections, (sidebarSection) => {
      return (                
        <div className="row">
          <div className="col-lg-4">
            <h6 className = "sidebar-text-color">{sidebarSection.textLabel}</h6>
          </div>
          <div className="col-lg-8 fontcontrol">
            <h6 className = "text-right">
              <span className = {`sidebar-percent-text${sidebarSection.id}`}>{sidebarSection.percentText}</span>
              <span className="sidebar-text-color1">&nbsp;&nbsp;{sidebarSection.textLabel1}</span>
            </h6>
          </div>        
          <br />
          <hr />
        </div>              
      );    
    });
  }*/

  render() {
    
    return (
      <aside className="al-sidebar" ng-swipe-right="menuExpand()" ng-swipe-left="menuCollapse()"
        ng-mouseleave="hoverElemTop=selectElemTop">
         <ul className="al-sidebar-list">
           {this.renderLinks()}
         </ul>
              {/*<div className="show-grid">
                this.renderstate()
              </div>*/}         
      </aside>
    );
  }
}
