import React from 'react';
import Widget from '../../components/Widget';
import TableInput from '../../components/TableInput';

import useStyles from './styles';

export default function OperatingCashFlow() {
  const classes = useStyles();
  return (
    <Widget>
      <Widget className={classes.header}>
        <h3 className={classes.header_title}>OPERATING CASH FLOW</h3>
        <div className={`${classes.header_cell} ${classes.bdrLeft_none}`} />
        <div className={classes.header_cell} />
        <div className={classes.header_cell} />
        <div className={classes.header_cell_last} />
      </Widget>
      <Widget className={classes.body}>
        <h4 className={classes.body_title}>Collections</h4>
        <div className={`${classes.body_cell} ${classes.bdrLeft_none}`}>
          <TableInput dollor="$" />
        </div>
        <div className={classes.body_cell}>
          <TableInput dollor="$" />
        </div>
        <div className={classes.body_cell}>
          <TableInput dollor="$" />
        </div>
        <div className={classes.body_cell_last} />
      </Widget>
      <Widget className={classes.body}>
        <h4 className={classes.body_title}>Inventory Paid</h4>
        <div className={`${classes.body_cell} ${classes.bdrLeft_none}`}>
          <TableInput dollor="$" />
        </div>
        <div className={classes.body_cell}>
          <TableInput dollor="$" />
        </div>
        <div className={classes.body_cell}>
          <TableInput dollor="$" />
        </div>
        <div className={classes.body_cell_last} />
      </Widget>
      <Widget className={classes.body}>
        <h4 className={classes.body_title}>SG&A Paid</h4>
        <div className={`${classes.body_cell} ${classes.bdrLeft_none}`}>
          <TableInput dollor="$" />
        </div>
        <div className={classes.body_cell}>
          <TableInput dollor="$" />
        </div>
        <div className={classes.body_cell}>
          <TableInput dollor="$" />
        </div>
        <div className={classes.body_cell_last} />
      </Widget>
      <Widget className={classes.body}>
        <h4 className={classes.body_title}>Interest Paid</h4>
        <div className={`${classes.body_cell} ${classes.bdrLeft_none}`}>
          <TableInput dollor="$" />
        </div>
        <div className={classes.body_cell}>
          <TableInput dollor="$" />
        </div>
        <div className={classes.body_cell}>
          <TableInput dollor="$" />
        </div>
        <div className={classes.body_cell_last} />
      </Widget>
      <Widget className={classes.footer}>
        <h4 className={classes.footer_title}>Total Operating Cash Flow</h4>
        <div className={`${classes.footer_cell} ${classes.bdrLeft_none}`} />
        <div className={classes.footer_cell} />
        <div className={classes.footer_cell} />
        <div className={classes.footer_cell_last}>
          <TableInput dollor="$" />
        </div>
      </Widget>
    </Widget>
  );
}
