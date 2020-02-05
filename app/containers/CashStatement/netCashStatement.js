import React from 'react';
import Widget from '../../components/Widget';
import TableInput from '../../components/TableInput';
import TableRow from '../../components/TableRow';

import useStyles from './styles';

export default function NetCashStatement() {
  const classes = useStyles();
  return (
    <Widget>
      <Widget className={classes.footer}>
        <h4 className={classes.footer_title}>Beginning Cash</h4>
        <TableRow
          className={`${classes.footer_cell} ${classes.bdrLeft_none}`}
        />
        <TableRow className={classes.footer_cell} />
        <TableRow className={classes.footer_cell} />
        <TableRow className={classes.footer_cell_last}>
          <TableInput id="ncs1" dollor=" $" />
        </TableRow>
      </Widget>
      <Widget className={classes.footer}>
        <h4 className={classes.footer_title}>Net Change in Cash</h4>
        <TableRow
          className={`${classes.footer_cell} ${classes.bdrLeft_none}`}
        />
        <TableRow className={classes.footer_cell} />
        <TableRow className={classes.footer_cell} />
        <TableRow className={classes.footer_cell_last}>
          <TableInput id="ncs2" style={{ paddingLeft: '22px' }} dollor="+/-$" />
        </TableRow>
      </Widget>
      <Widget className={classes.footer}>
        <h4 className={classes.footer_title}>Ending Cash </h4>
        <TableRow
          className={`${classes.footer_cell} ${classes.bdrLeft_none}`}
        />
        <TableRow className={classes.footer_cell} />
        <TableRow className={classes.footer_cell} />
        <TableRow className={classes.footer_cell_last}>
          <TableInput id="ncs3" style={{ paddingLeft: '18px' }} dollor="= $" />
        </TableRow>
      </Widget>
    </Widget>
  );
}
