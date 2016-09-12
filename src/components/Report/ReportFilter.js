import React from 'react';
import { Button, Modal, Label } from 'react-bootstrap';
import QuestionOptionList from './QuestionOptionList';
import { canReportTypes } from '../../reducers/data';

class ReportFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  open() {
    this.setState({
      showModal: true
    });
  }

  close() {
    this.setState({
      showModal: false
    });
  }

  toggleSubList() {

  }

  renderModal() {
    let { survey, reportFilter, updateFilter, hasFilterMap } = this.props;

    return (
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <ul>
              {survey.questions.filter(question => canReportTypes.indexOf(question.type) !== -1).map(question => {
                return <li key={question._id}>
                    <QuestionOptionList
                        question={question}
                        reportFilter={reportFilter}
                        isActive={hasFilterMap[question._id]}
                        updateFilter={updateFilter}
                    />
                  </li>;
              })}
            </ul>
          </Modal.Body>
        </Modal>
    )
  }

  filterLabels() {
    let { survey, reportFilter, hasFilterMap } = this.props;
    let labels = [];
    {Object.keys(reportFilter).filter(k => hasFilterMap[k]).forEach(questionId => {
      let question = survey.questions.find(q => q._id === questionId);
      question.options.forEach(option => {
        if (reportFilter[questionId][option._id]) {
          labels.push({
            question: question,
            option: option
          });
        }
      });
    })}
    return labels;
  }

  render() {
    let { updateFilter, reportFilter } = this.props;

    return (
        <div>
          <Button bsStyle="primary" bsSize="xsmall" onClick={this.open.bind(this)}>Filter</Button>
          {this.filterLabels().map(({ question, option }) => {
            return (
                <Label bsStyle="info">{question.title} { ' ' } : { ' ' } {option.content}
                  <span onClick={() => {
                    updateFilter(reportFilter, {question: question._id, option: option._id, value: false});
                  }}>x</span>
                </Label>
            );
          })}
          {this.renderModal()}
        </div>
    );
  }
}

ReportFilter.propTypes = {};
ReportFilter.defaultProps = {};

export default ReportFilter;