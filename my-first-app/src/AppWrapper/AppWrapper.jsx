import Wrapper from './AppWrapper.module.css';
import Content from '../AppWrapper/Content/Content';
import NavBar from '../AppWrapper/Navbar/Navbar.jsx';
import React from 'react';

const AppWrapper = (props) => {
   return (
      <div className={Wrapper.appWrapper}>
         <NavBar />
         <Content />
      </div>
   )
}

export default AppWrapper;