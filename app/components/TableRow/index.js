/**
 *
 * Widget
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function TableRow(props) {
  return (
    <div style={props.style} className={props.className}>
      {props.children}
    </div>
  );
}

TableRow.propTypes = {};

export default TableRow;
