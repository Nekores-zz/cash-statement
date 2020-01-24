import React from 'react';
import Widget from '../../components/Widget';
import TableInput from '../../components/TableInput';
import TableRow from '../../components/TableRow';

import useStyles from './styles';

export default function InvestingCashFlow() {
  const classes = useStyles();
  return (
    <Widget>
      <Widget className={classes.header}>
        <h3 className={classes.header_title}>INVESTING CASH FLOW</h3>
        <TableRow
          className={`${classes.header_cell} ${classes.bdrLeft_none}`}
        />
        <TableRow className={classes.header_cell} />
        <TableRow className={classes.header_cell} />
        <TableRow className={classes.header_cell_last} />
      </Widget>
      <Widget className={classes.body}>
        <h4 className={classes.body_title}>
          Fixed Asset Investment/ <br /> Divestment
        </h4>
        <TableRow className={`${classes.body_cell} ${classes.bdrLeft_none}`}>
          <TableInput dollor="$" />
        </TableRow>
        <TableRow className={classes.body_cell}>
          <TableInput dollor="$" />
        </TableRow>
        <TableRow className={classes.body_cell}>
          <TableInput dollor="$" />
        </TableRow>
        <TableRow className={classes.body_cell_last} />
      </Widget>
      <Widget className={classes.body}>
        <h4 className={classes.body_title}>Other Investments</h4>
        <TableRow className={`${classes.body_cell} ${classes.bdrLeft_none}`}>
          <TableInput dollor="$" />
        </TableRow>
        <TableRow className={classes.body_cell}>
          <TableInput dollor="$" />
        </TableRow>
        <TableRow className={classes.body_cell}>
          <TableInput dollor="$" />
        </TableRow>
        <TableRow className={classes.body_cell_last} />
      </Widget>
      <Widget className={classes.footer}>
        <h4 className={classes.footer_title}>Total Investing Cash Flow</h4>
        <TableRow
          className={`${classes.footer_cell} ${classes.bdrLeft_none}`}
        />
        <TableRow className={classes.footer_cell} />
        <TableRow className={classes.footer_cell} />
        <TableRow className={classes.footer_cell_last}>
          <TableInput dollor="$" />
        </TableRow>
      </Widget>
    </Widget>
  );
}
