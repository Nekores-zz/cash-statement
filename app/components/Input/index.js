/**
 *
 * Input
 *
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  input_box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'safe',
    paddingRight: '10px',
    height: '94px',
    '@media (max-width: 768px)': {
      // paddingRight: '6px',
      height: '70px',
    },
    '@media (max-width: 576px)': {
      paddingRight: '6px',
      height: '30px',
    },
  },
  input_style: {
    border: 'none',
    borderBottom: '1px solid #000 ',
    background: 'transparent',
    fontStyle: '22px',
    fontSize: '14px',
    '&:focus': {
      outline: 'none',
    },
    '@media (max-width: 768px)': {
      width: '100px',
    },
    '@media (max-width: 576px)': {
      width: '52px',
      paddingBottom: '2px',
      paddingLeft: '8px',
      paddingTop: '4px',
      fontSize: '10px',
    },
  },
  dollor: {
    position: 'relative',
    left: 16,
    fontSize: '20px',
    color: '#000',
    paddingBottom: '18px',
    '@media (max-width: 576px)': {
      fontSize: '12px',
      left: 11,
      paddingBottom: '0',
      margin: 0,
    },
  },
}));

function Input(props) {
  const classes = useStyles();
  return (
    <div className={`${classes.input_box} ${props.inputClass}`}>
      <p className={classes.dollor}>{props.dollor}</p>
      <input
        className={`${props.className} ${classes.input_style}`}
        value={props.value}
        style={props.style}
        name={props.name}
        onChange={props.onChange}
        type={props.type}
      />
    </div>
  );
}

Input.propTypes = {};

export default Input;
