import React, { PropTypes, Component } from "react";

class TextEditor extends Component {
  update() {
    var value = {
      title: this.title_node.value,
      placeholder: this.place_holder_node.value
    };
    this.props.updateQuestion(this.props._id, value);
  }

  render() {
    const {title, placeholder} = this.props;
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
              <label>Placeholder</label>
              <input type="text" className="form-control input-sm"
                     value={placeholder}
                     ref={node => {this.place_holder_node = node}}
                     onChange={() => this.update()}/>
            </div>
          </form>
        </div>
    )
  }
}

TextEditor.propTypes = {
  title: PropTypes.string.isRequired,
  updateQuestion: PropTypes.func.isRequired
};

export default TextEditor;
