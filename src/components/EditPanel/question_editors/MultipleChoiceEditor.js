import React, { PropTypes, Component } from "react";
import OptionField from './OptionField';
import ReactDOM from "react-dom";
import { v4 } from 'node-uuid';

class MultipleChoiceEditor extends Component {
  constructor(props) {
    super(props);
    this.inputs = {};
  }

  update() {
    this.props.updateQuestion(this.props._id, {
      title: this.title_node.value
    });
  }

  render() {
    const { _id, title, options } = this.props;
    return (
        <div>
          <form>
            <div className="form-group">
              <label>Field Label</label>
              <input type="text" className="form-control input-sm"
                     value={title}
                     ref={node => {this.title_node = node}}
                     onChange={() => this.update()}/>
            </div>
            <div className="form-group">
              <label>Options</label>
              {options.map((option, index) => {
                return <OptionField
                    canRemove={index !== 0}
                    key={option._id}
                    content={option.content}
                    ref={(input) => this.inputs[option._id] = input}
                    onChange={(e) => {
                      this.props.updateQuestion(_id, {
                        options: [
                          ...options.slice(0, index),
                          {
                            _id: option._id,
                            content: e.target.value
                          },
                          ...options.slice(index + 1)
                        ]
                      })
                    }}
                    onClone={() => {
                      this.props.updateQuestion(_id, {
                        options: [
                          ...options.slice(0, index + 1),
                          {_id: v4(), content: option.content},
                          ...options.slice(index + 1)]
                      })
                    }}
                    onRemove={() => {
                      this.props.updateQuestion(_id, {
                        options: [
                          ...options.slice(0, index),
                          ...options.slice(index + 1)]
                      })
                    }}/>
              })}
            </div>
          </form>
        </div>
    )
  }
}

MultipleChoiceEditor.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  updateQuestion: PropTypes.func.isRequired
};

export default MultipleChoiceEditor;
