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

    '@media (max-width: 1024px)': {
      paddingRight: 0,
      paddingTop: '22px',
      height: '72px',
    },
    '@media (max-width: 768px)': {
      paddingTop: 0,
      height: '70px',
    },
    '@media (max-width: 576px)': {
      position: 'relative',
      bottom: '4px',
      paddingTop: 0,
      display: 'block',
      paddingRight: 0,
      height: '30px',
    },
  },
  input_style: {
    border: 'none',
    background: 'transparent',
    paddingLeft: '22px',
    paddingBottom: '15px',
    width: '154px',
    fontSize: '14px',

    '&:focus': {
      outline: 'none',
    },
    '@media (max-width: 1024px)': {
      width: '144px',
    },
    '@media (max-width: 768px)': {
      width: '100px',
      paddingLeft: '10px',
    },
    '@media (max-width: 576px)': {
      width: '51px',
      paddingBottom: '2px',
      paddingLeft: '5px',
      fontSize: '12px',
      position: 'relative',
      bottom: '10px',
      left: '5px',
    },
  },
  dollor: {
    position: 'relative',
    left: 16,
    fontSize: '24px',
    color: '#000',
    paddingBottom: '18px',
    '@media (max-width: 1024px)': {
      margin: 0,
    },
    '@media (max-width: 768px)': {
      left: '7px',
      fontSize: '20px',
    },
    '@media (max-width: 576px)': {
      width: '52px',
      fontSize: '12px',
      left: '2px',
      top: '12px',
      paddingBottom: '0',
      margin: 0,
    },
  },
}));

function TableInput(props) {
  const classes = useStyles();
  return (
    <div className={`${classes.input_box} ${props.inputClass}`}>
      <p className={classes.dollor}>{props.dollor}</p>
      <input
        className={`${props.className} ${classes.input_style}`}
        value={props.value}
        name={props.name}
        style={props.style}
        onChange={props.onChange}
        type={props.type}
      />
    </div>
  );
}

TableInput.propTypes = {};

export default TableInput;
