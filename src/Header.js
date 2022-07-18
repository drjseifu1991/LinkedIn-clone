import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOption from './HeaderOption';
function Header() {
  return (
    <div className='header'> 
      <div className='header_left'>
        <img src='https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg' alt=''/>
        <div className='header_search'>
            <SearchIcon/>
            <input type='text'/>
        </div>
      </div>
      <div className='header_right'>
        <HeaderOption Icon = {HomeIcon} title='Home'/>
        <HeaderOption Icon = {SupervisorAccountIcon} title='My Network'/>
        <HeaderOption Icon ={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon ={ChatIcon} title='Messaging' />
        <HeaderOption Icon ={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar= 'https://avatars.githubusercontent.com/u/51210918?v=4' title='Me'/>
      </div>


    </div>
  )
}

export default Header

