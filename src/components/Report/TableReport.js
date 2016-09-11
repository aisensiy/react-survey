import React, { PropTypes } from 'react';

class TableReport extends React.Component {
  render() {
    return (
      <div>
        <table className="table table-condensed">
          <thead>
            <tr>
              <th>Options</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
          {this.props.data.map((row, index) => {
            return (
                <tr key={index}>
                  <td>{row.name}</td>
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
