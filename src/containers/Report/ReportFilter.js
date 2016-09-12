import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import ReportFilterView from '../../components/Report/ReportFilter';
import { updateFilter } from '../../actions/data';
import { hasFilterMap } from '../../reducers/data';

const mapStateToProps = (state) => {
  return {
    survey: state.data.survey,
    reportFilter: state.data.reportFilter,
    hasFilterMap: hasFilterMap(state.data)
  };
};

const mapDispatchToProps = {
  updateFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportFilterView);
