import React from 'react';
import PropTypes from "prop-types";
import { Button } from 'react-bootstrap';
import './ResultGrid.css';

class ResultGrid extends React.Component {
  toggleSelectAll() {
    let { onSelectAll, onUnSelectAll, grid: { results } } = this.props;
    if (this.props.allSelected) {
      onUnSelectAll(results);
    } else {
      onSelectAll(results);
    }
  }

  render() {
    let { onClickRow, onSelectRow, rowSelects, allSelected, onDeleteRow, surveyId } = this.props;
    let { columns, results } = this.props.grid;
    let anySelected = Object.keys(rowSelects).some(k => rowSelects[k]);

    return (
        <div className="ResultGrid">
          <div className="grid-wrapper">
            <div className="toolbar">
              <Button className={anySelected ? '' : 'disabled'} bsStyle="primary" bsSize="xsmall" onClick={() => onDeleteRow(surveyId, results.filter(r => rowSelects[r._id]))}>Delete</Button>
            </div>

            <table className="table table-condensed table-hover table-bordered">
              <thead>
              <tr>
                <th className="select-box">
                  <input
                      type="checkbox"
                      onClick={e => e.stopPropagation()}
                      onChange={this.toggleSelectAll.bind(this)}
                      checked={allSelected}
                  />
                </th>
                <th className="index">#</th>
                {columns.map(col => {
                  return <th key={col.id}>{col.displayName}</th>
                })}
              </tr>
              </thead>
              <tbody>
              {results.map((result, index) => {
                return (
                    <tr
                        key={result._id}
                        onClick={() => onClickRow(result, index)}
                    >
                      <td className="select-box">
                        <input
                            type="checkbox"
                            onClick={e => e.stopPropagation()}
                            onChange={() => onSelectRow(result._id)}
                            checked={rowSelects[result._id]}
                        />
                      </td>
                      <td className="index">{index + 1}</td>
                      {columns.map((col, index) => {
                        return <td key={index}>{result[col.columnName]}</td>
                      })}
                    </tr>
                )
              })}
              </tbody>
            </table>
          </div>
        </div>
    );
  }
}

ResultGrid.propTypes = {
  columns: PropTypes.array,
  results: PropTypes.array
};

export default ResultGrid;
