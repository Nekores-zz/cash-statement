/**
 *
 * CashStatement
 *
 */

import React from 'react';
import Container from '@material-ui/core/Container';
// import Divider from '@material-ui/core/Divider';
// import RevenueTable from './revenueTable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import H2 from '../../components/H2';
import Widget from '../../components/Widget';
// import DatePicker from '../../components/DatePicker';
import Input from '../../components/Input';
// import GrossProfitTable from './grossProfitTable';
import OperatingCashFlow from './operatingCashFlow';
import InvestingCashFlow from './investingCashFlow';
import FinancingCashFlow from './financingCashFlow';
import NetCashStatement from './netCashStatement';
import useStyles from './styles';

export function CashStatement() {
  const classes = useStyles();

  return (
    <Widget className={classes.cash_statement}>
      <H2 className={classes.title}>Cash Statement</H2>
      <Container className={classes.table_container}>
        <Widget className={classes.cash_statement_table}>
          <Widget className={classes.date_box_one}>
            <H2 className={classes.beginning_date}>
              Beginning date: &nbsp; &nbsp;
            </H2>
            <Input />
          </Widget>
          <Widget className={classes.date_box_two}>
            <H2 className={classes.end_date}>Ending date:</H2>
            <Widget className={classes.end_date_input}>
              <Input />
            </Widget>
          </Widget>
        </Widget>
        <OperatingCashFlow />
        <InvestingCashFlow />
        <FinancingCashFlow />
        <NetCashStatement />
      </Container>

      {/* Bottom text */}
      <Container>
        <p>
          <b>Note:</b> The cash statement above uses the ‘Direct Cash Flow’
          method for calculating operating cash flow. Most cash statements
          created by financial professionals use the ‘Indirect Cash Flow’ method
          for calculating operating cash flow. These two methods give the same
          outcome, but arrive at it in different ways. The direct method simply
          keeps track of cash-in and cash-out, similar to a checkbook. You can
          tell if you are looking at the indirect method if the operating cash
          flow section begins with ‘net income’ and then adds back non-cash
          expenses (e.g. depreciation), changes in non-cash current assets
          (e.g., receivables, payables, or inventory), and adjusts for gains and
          losses on the sale of assets during the period (among others).
          Investing and financing cash flows are calculated the same using
          either method.
        </p>
        <br />
        <br />
      </Container>
    </Widget>
  );
}

CashStatement.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(CashStatement);
