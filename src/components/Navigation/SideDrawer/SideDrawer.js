import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
  const SideDrawerStateClass = (props.open) ? classes.Open : classes.Close;
  const attachedClasses = [classes.SideDrawer, SideDrawerStateClass].join(' ');

  return(
    <React.Fragment>
      <Backdrop
        show={props.open}
        clicked={props.closed}/>
      <div className={attachedClasses}>
      <div className={classes.Logo}>
        <Logo />
      </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;