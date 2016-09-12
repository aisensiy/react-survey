import React from 'react';
import ReactDOM from 'react-dom';
import GraphReport from './GraphReport';
import TableReport from './TableReport';

class ReportItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0
    }
  }

  componentDidMount() {
    setTimeout(() => {
      let $container = ReactDOM.findDOMNode(this).querySelector('.GraphContainer');
      if ($container) {
        this.setState({
          height: $container.offsetHeight - 10,
          width: $container.offsetWidth - 20
        });
      }
    }, 100);
  }

  render() {
    let { data } = this.props;
    return (
        <div className="container">
          <div className="row">
            <div>{data.title}</div>
          </div>
          <div className="row Question" key={data.title}>
            <div className="col-md-7 GraphContainer">
              <GraphReport data={data.stats} width={this.state.width} height={this.state.height}/>
            </div>
            <div className="col-md-5 TableContainer">
              <TableReport data={data.stats}/>
            </div>
          </div>
        </div>
    );
  }
}

ReportItem.propTypes = {};
ReportItem.defaultProps = {};

export default ReportItem;
