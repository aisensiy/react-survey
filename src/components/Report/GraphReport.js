import React, { PropTypes } from 'react';
import { BarChart, XAxis, YAxis, Bar, CartesianGrid, Tooltip } from 'recharts';

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
            <Bar dataKey="value" fill="#8884d8" barSize={20} />
          </BarChart>
        </div>
    );
  }
}

GraphReport.propTypes = {
  data: PropTypes.array
};

export default GraphReport;
