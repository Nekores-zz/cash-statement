import React from 'react';
import Widget from '../../components/Widget';
import TableInput from '../../components/TableInput';

import useStyles from './styles';

export default function NetCashStatement() {
  const classes = useStyles();
  return (
    <Widget>
      <Widget className={classes.footer}>
        <h4 className={classes.footer_title}>Beginning Cash</h4>
        <div className={`${classes.footer_cell} ${classes.bdrLeft_none}`} />
        <div className={classes.footer_cell} />
        <div className={classes.footer_cell} />
        <div className={classes.footer_cell_last}>
          <TableInput dollor=" $" />
        </div>
      </Widget>
      <Widget className={classes.footer}>
        <h4 className={classes.footer_title}>Net Change in Cash</h4>
        <div className={`${classes.footer_cell} ${classes.bdrLeft_none}`} />
        <div className={classes.footer_cell} />
        <div className={classes.footer_cell} />
        <div className={classes.footer_cell_last}>
          <TableInput dollor="+/-$" />
        </div>
      </Widget>
      <Widget className={classes.footer}>
        <h4 className={classes.footer_title}>Ending Cash </h4>
        <div className={`${classes.footer_cell} ${classes.bdrLeft_none}`} />
        <div className={classes.footer_cell} />
        <div className={classes.footer_cell} />
        <div className={classes.footer_cell_last}>
          <TableInput dollor="= $" />
        </div>
      </Widget>
    </Widget>
  );
}
