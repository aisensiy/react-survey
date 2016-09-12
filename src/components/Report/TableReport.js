import React, { PropTypes } from 'react';
import './TableReport.css';

class TableReport extends React.Component {
  render() {
    return (
      <div className="TableReport">
        <table className="table table-condensed">
          <thead>
            <tr>
              <th className="option">Options</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
          {this.props.data.map((row, index) => {
            return (
                <tr key={index}>
                  <td className="option">{row.name}</td>
                  <td>{row.value}</td>
                </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

TableReport.propTypes = {
  data: PropTypes.array
};

export default TableReport;
