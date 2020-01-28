/**
 *
 * CashStatement
 *
 */

import React from 'react';
import Container from '@material-ui/core/Container';
// import Divider from '@material-ui/core/Divider';
// import RevenueTable from './revenueTable';
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
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { compose } from 'redux';

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
