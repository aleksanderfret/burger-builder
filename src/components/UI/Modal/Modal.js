import React from 'react';
import Backdrop from '../Backdrop/Backdrop.js';
import classes from './Modal.css';

const modal = (props) => (
  <React.Fragment>
  <div
    className={classes.Modal}
    style={{
      transform: props.show ? 'translate(0)' : 'translateY(-100vh)',
      opacity: props.show ? '1' : '0'
    }}>
    {props.children}
  </div>
  <Backdrop
    show={props.show}
    clicked={props.modalClosed}/>
  </React.Fragment>
);

export default modal;