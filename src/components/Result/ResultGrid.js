import React, { PropTypes } from 'react';

class ResultGrid extends React.Component {
  render() {
    let { columns, results } = this.props.grid;

    return (
      <div>
        <table className="table table-condensed table-hover table-bordered">
          <thead>
            <tr>
              {columns.map(col => {
                  return <th key={col.id}>{col.title}</th>
              })}
            </tr>
          </thead>
          <tbody>
          {results.map(result => {
            return <tr key={result.id}>
              {result.result.map((d, index) => {
                return <td key={index}>{d}</td>
              })}
            </tr>
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

ResultGrid.propTypes = {
  columns: PropTypes.array,
  results: PropTypes.array
};

export default ResultGrid;
