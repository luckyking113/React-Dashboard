import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import { noop } from 'lodash';
import Person from 'react-blur-admin/dist/assets/img/person.svg';

import {SearchBar} from 'src/layout/components/search-bar';

// Lib
import eventBus from 'src/lib/event-bus';
import {MessagesAlert, MessagesAlertContainer, NotificationsAlert, NotificationAlert} from 'react-blur-admin';
import {Row, Col} from 'react-flex-proto';
import 'src/style.css';
import './page-top.css'

export class PageTop extends React.Component {

  static propTypes = {
    user: React.PropTypes.object,
    location: React.PropTypes.shape({
      pathname: React.PropTypes.string.isRequired,
      query: React.PropTypes.object.isRequired,
    }),
  }

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.renderLogo = this.renderLogo.bind(this);
    this.state = {
      dropdownOpen: true,
      title : 'Home',
      notifications: [{
        user: {
          name: 'Ashley',
          picture: Person,
        },
        subject: 'This is a notification alert',
        timeStamp: '02/13/95 9:00',
        relativeTime: moment('02/13/95').fromNow(),
      },
      {
        user: {
          name: 'Nick',
          picture: Person,
        },
        subject: 'This is a notification alert',
        timeStamp: '07/13/16 12:00',
        relativeTime: moment('07/13/16 12:00').fromNow(),
      },
      {
        user: {
          name: 'Matt',
          picture: Person,
        },
        subject: 'This is a notification alert',
        timeStamp: '04/20/15 9:00',
        relativeTime: moment('04/20/15 9:00').fromNow(),
      },
      {
        user: {
          name: 'Jon',
          picture: Person,
        },
        subject: 'This is a notification alert',
        timeStamp: '07/19/16 8:00',
        relativeTime: moment('07/19/16 8:00').fromNow(),
      },
      {
        user: {
          name: 'Jacob',
          picture: Person,
        },
        subject: 'This is a notification alert',
        timeStamp: '05/23/16 2:00',
        relativeTime: moment('05/23/16 2:00').fromNow(),
      },
      {
        user: {
          name: 'Jason',
          picture: Person,
        },
        subject: 'This is a notification alert',
        timeStamp: '05/01/16 4:00',
        relativeTime: moment('05/01/16 4:00').fromNow(),
      }],
      messages: [{
        user: {
          name: 'Ashley',
          picture: Person,
        },
        subject: 'This is a message alert',
        timeStamp: '02/13/95 9:00',
        relativeTime: moment('02/13/16').fromNow(),
      },
      {
        user: {
          name: 'Nick',
          picture: Person,
        },
        subject: 'This is a message alert',
        timeStamp: '07/13/16 12:00',
        relativeTime: moment('07/13/16 12:00').fromNow(),
      }],
    };
  }

  state = {
    isMenuOpen: false,
    appName: process.env.APP_NAME,
  }


  componentWillMount() {

  }

  componentWillReceiveProps(nextProps) {
    if(this.props.pagetitle != nextProps.pagetitle) this.setState({title: nextProps.pagetitle})
  }

  toggle(e) {
    e.preventDefault();
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  // sidebarMinimize(e) {
  //   e.preventDefault();
  //   document.body.classList.toggle('sidebar-minimized');
  // }

  componentDidMount() {    
    
  }

  onToggleMenu() {
    this.setState({ isMenuOpen: ! this.state.isMenuOpen });
  }

  onLogout() {
    eventBus.emit('logout');
  }

  renderLogo() {
    
    return (
      <Link to={{ pathname: '/' }} className="al-logo clearfix" onClick = {() => this.setState({title: 'Home'})}>{this.state.appName}
        <div className="logo" />         
                        
        <h4>&nbsp;TERRA &nbsp;<span style = {{opacity:'0.7', fontSize:'12px', fontWeight: '100'}}>|&nbsp; investimentos</span></h4>  
      </Link>      
    );
  }
  renderHamburgerMenu() {
    return (
      <a href className="collapse-menu-link ion-navicon" id="menu-toggle" onClick={this.sidebarToggle} ng-click="isMenuCollapsed=!isMenuCollapsed"></a>
      
    );
  }

  renderTitle() {
    let _this = this;
    return (  
        <h4>{_this.state.title}</h4>
    )      
  }
  
  renderMessages() {
    let message = _.assign({}, this.state.messages);
    return _.map(message, (messages, index) => {
      return (
        <MessagesAlert {...messages} key={index}/>
      );
    });
  }

  renderNotifications() {
    let notifications = _.assign({}, this.state.notifications);
    return _.map(notifications, (notification, index) => {
      return (
        <NotificationAlert {...notification} key={index}/>
      );
    });
  }

  renderUserSection() {
    return (
      <div className="user-profile clearfix">
        <div className={`al-user-profile dropdown ${this.state.isMenuOpen ? 'open' : ''}`}>
          <a className="profile-toggle-link dropdown-toggle" onClick={this.onToggleMenu.bind(this)}>
            <img src={this.props.user && this.props.user.picture ? this.props.user.picture : Person}><span  style ={{color:'#fff !important'}}>Ronaldo Alves</span></img>
             {/*<div className="logImage"><span  style ={{color:'#fff !important'}}>Ronaldo Alves</span></div>*/}
          </a>
          <ul className="top-dropdown-menu profile-dropdown dropdown-menu">
            <li><i className="dropdown-arr"></i></li>
            <li><Link to="/"><i className="fa fa-user"></i>Profile</Link></li>
            <li><Link to="/'"><i className="fa fa-cog"></i>Settings</Link></li>
            <li>
              <a href={this.props.location.pathname} className="signout" onClick={e => this.onLogout()}>
                <i className="fa fa-power-off"></i>Sign out
              </a>
            </li>
          </ul>
        </div>
        <Row>
          <Col padding='5px 2px'>
            {/*<MessagesAlertContainer mailCount={this.state.messages.length} markAllAsReadOnClick={noop} allMessagesOnClick={noop} settingsOnClick={noop} >
              {this.renderMessages()}
            </MessagesAlertContainer>*/}
            <NotificationsAlert
              notificationCount={this.state.notifications.length}
              markAllAsReadOnClick={noop}
              allNotificationsOnClick={noop}
              settingsOnClick={noop} >
                {this.renderNotifications()}
            </NotificationsAlert>
          </Col>
        </Row>
        <div className = "hamburgerMenu">{this.renderHamburgerMenu()}</div>
      </div>
      
    );
  }

  render() {
    return (
      <div className="page-top clearfix" scroll-position="scrolled" max-height="50" style = {{backgroundColor:'#213641', border:'1px solid #2d4552', left:'0px'}}>
        <div className="logoImg">
          {this.renderLogo()}        
        </div>
        <div>
          {/*<div className = "col-lg-2 col-md-2 headerTitle">  
            {this.renderTitle()}
          </div>*/}
          <div className="userHeader">
            <div className = "headerTitle">  
              {this.renderTitle()}
            </div>
            <div className="userSection">  
              <div>{this.renderUserSection()}</div>         
            </div>
            {/*<div className = "hamburgerMenu">{this.renderHamburgerMenu()}</div>*/}
          </div>
        </div>
      </div>
    );
  }
}

