import React, { Component } from 'react';
import Backdrop from '../Backdrop/Backdrop.js';
import classes from './Modal.css';

class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show
      || nextProps.children !== this.props.children;
  }

  render() {
    return (
      <React.Fragment>
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translate(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>
        <Backdrop
          show={this.props.show}
          clicked={this.props.modalClosed}/>
      </React.Fragment>
    );
  }
}

export default Modal;