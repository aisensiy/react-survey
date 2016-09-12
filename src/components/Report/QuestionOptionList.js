import React from 'react';

class QuestionOptionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    let { question, question: { _id, title, options }, isActive, reportFilter, updateFilter } = this.props;
    console.log("At question");
    console.log(question);
    console.log(reportFilter);
    console.log("===========");
    return (
        <div className={isActive ? 'active' : ''}>
          <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                this.toggle();
              }}>
            {title}
          </a>
          <ul className={this.state.open ? '' : 'hidden'}>
            {options.map(option => {
              console.log("Option");
              console.log(_id);
              console.log(reportFilter[_id]);
              console.log(option._id);
              console.log(reportFilter[_id] && reportFilter[_id][option._id]);
              console.log("-==========-");
              let isActive = reportFilter[_id] && reportFilter[_id][option._id];
              return <li key={option._id}><label><input type="checkbox" checked={isActive} onChange={() => {
                updateFilter(reportFilter, {question: _id, option: option._id, value: !isActive})
              }} /> {' '} {option.content}</label></li>
            })}
          </ul>
        </div>
    );
  }
}

QuestionOptionList.propTypes = {};
QuestionOptionList.defaultProps = {};

export default QuestionOptionList;
