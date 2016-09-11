import React from 'react';
import ReactDOM from 'react-dom';
import GraphReport from './GraphReport';
import TableReport from './TableReport';

import './Report.css';

const renderCustomizedLabel = ({ percent, x, y, cx}) => {
  return (
      <text x={x} y={y} textAnchor={x > cx ? 'start' : 'end'}>
        {(percent * 100).toFixed(2) + '%'}
      </text>
  );
};

class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0
    }
  }

  componentDidMount() {
    let $container = ReactDOM.findDOMNode(this).querySelector('.GraphContainer');
    this.setState({
      height: $container.offsetHeight,
      width: $container.offsetWidth - 30
    });
  }

  render() {
    let data = [
      {
        title: "Abc",
        stats: [
          {
            name: 'A',
            value: 10
          },
          {
            name: 'B',
            value: 20
          },
          {
            name: 'C',
            value: 30
          }
        ]
      }
    ];
    return (
        <div className="Report">
          {data.map(d => {
            return (
                <div className="row Question" key={d.title}>
                  <div className="col-md-7 GraphContainer">
                    <GraphReport data={d.stats} width={this.state.width} height={this.state.height}/>
                  </div>
                  <div className="col-md-5">
                    <TableReport data={d.stats}/>
                  </div>
                </div>
            )
          })}
        </div>
    );
  }
}

Report.propTypes = {};
Report.defaultProps = {};

export default Report;
