import React from 'react';
import './OptionField.css';

class OptionField extends React.Component {
  render() {
    let { content, onRemove, onClone, onChange, canRemove } = this.props;
    return (
      <div className="OptionField clearfix">
        <input type="text" className="form-control input-sm" value={content} onChange={onChange}/>
        <div className="btn-group">
          <button className="btn btn-sm btn-default" type="button" onClick={onClone}>
            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
          </button>
          {canRemove ? <button className="btn btn-sm btn-default" type="button" onClick={onRemove}>
            <span className="glyphicon glyphicon-minus" aria-hidden="true"></span>
          </button> : ''}
        </div>
      </div>
    );
  }
}

OptionField.propTypes = {};
OptionField.defaultProps = {};

export default OptionField;
