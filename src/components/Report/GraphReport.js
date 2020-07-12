import React from 'react';
import PropTypes from "prop-types";
import BarChart from 'recharts/lib/chart/BarChart';
import Bar from 'recharts/lib/cartesian/Bar';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';


class GraphReport extends React.Component {
  render() {
    let { width, height, data } = this.props;

    return (
        <div>
          <BarChart data={data} width={width} height={height}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3"/>
            <Bar dataKey="value" fill="#337ab7" barSize={20} />
          </BarChart>
        </div>
    );
  }
}

GraphReport.propTypes = {
  data: PropTypes.array
};

export default GraphReport;
