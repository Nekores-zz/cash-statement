import React from 'react';
import Widget from '../../components/Widget';
import TableInput from '../../components/TableInput';
import TableRow from '../../components/TableRow';

import useStyles from './styles';

export default function OperatingCashFlow() {
  const classes = useStyles();
  return (
    <Widget>
      <Widget className={classes.header}>
        <h3 className={classes.header_title}>Operating Cash Flow</h3>
        <TableRow
          className={`${classes.header_cell} ${classes.bdrLeft_none}`}
        />
        <TableRow className={classes.header_cell} />
        <TableRow className={classes.header_cell} />
        <TableRow className={classes.header_cell_last} />
      </Widget>
      <Widget className={classes.body}>
        <h4 className={classes.body_title}>Collections</h4>
        <TableRow className={`${classes.body_cell} ${classes.bdrLeft_none}`}>
          <TableInput id="ocf1" dollor="$" />
        </TableRow>
        <TableRow className={classes.body_cell}>
          <TableInput id="ocf2" dollor="$" />
        </TableRow>
        <TableRow className={classes.body_cell}>
          <TableInput id="ocf3" dollor="$" />
        </TableRow>
        <TableRow className={classes.body_cell_last} />
      </Widget>
      <Widget className={classes.body}>
        <h4 className={classes.body_title}>Inventory Paid</h4>
        <TableRow className={`${classes.body_cell} ${classes.bdrLeft_none}`}>
          <TableInput id="ocf4" dollor="$" />
        </TableRow>
        <TableRow className={classes.body_cell}>
          <TableInput id="ocf5" dollor="$" />
        </TableRow>
        <TableRow className={classes.body_cell}>
          <TableInput id="ocf6" dollor="$" />
        </TableRow>
        <TableRow className={classes.body_cell_last} />
      </Widget>
      <Widget className={classes.body}>
        <h4 className={classes.body_title}>SG&A Paid</h4>
        <TableRow className={`${classes.body_cell} ${classes.bdrLeft_none}`}>
          <TableInput id="ocf7" dollor="$" />
        </TableRow>
        <TableRow className={classes.body_cell}>
          <TableInput id="ocf8" dollor="$" />
        </TableRow>
        <TableRow className={classes.body_cell}>
          <TableInput id="ocf9" dollor="$" />
        </TableRow>
        <TableRow className={classes.body_cell_last} />
      </Widget>
      <Widget className={classes.body}>
        <h4 className={classes.body_title}>Interest Paid</h4>
        <TableRow className={`${classes.body_cell} ${classes.bdrLeft_none}`}>
          <TableInput id="ocf10" dollor="$" />
        </TableRow>
        <TableRow className={classes.body_cell}>
          <TableInput id="ocf11" dollor="$" />
        </TableRow>
        <TableRow className={classes.body_cell}>
          <TableInput id="ocf12" dollor="$" />
        </TableRow>
        <TableRow className={classes.body_cell_last} />
      </Widget>
      <Widget className={classes.footer}>
        <h4 className={classes.footer_title}>Total Operating Cash Flow</h4>
        <TableRow
          className={`${classes.footer_cell} ${classes.bdrLeft_none}`}
        />
        <TableRow className={classes.footer_cell} />
        <TableRow className={classes.footer_cell} />
        <TableRow className={classes.footer_cell_last}>
          <TableInput id="ocf13" dollor="$" />
        </TableRow>
      </Widget>
    </Widget>
  );
}
