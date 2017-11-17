import React, { Component, PropTypes } from 'react';
import './EditTab.css';

var classNames = require('classnames');

class EditTab extends Component {
  render() {
    const { activeTab, onUpdateTab, tabs } = this.props;
    return (
        <div className="EditTab">
          <ul className="nav nav-pills">
            {tabs.map(tab => {
              return (
                  <TabLink
                      key={tab.type}
                      active={activeTab === tab.type}
                      onClick={() => { onUpdateTab(tab.type); }}>
                    {tab.text}
                  </TabLink>
              );
            })}
          </ul>
          {tabs.map(tab => {
            return (
                <TabPanel
                    active={activeTab === tab.type}
                    key={tab.type}>
                  {tab.panel}
                </TabPanel>
            );
          })}
        </div>

    )
  }
}

EditTab.propTypes = {
  tabs: PropTypes.array.isRequired,
  activeTab: PropTypes.string.isRequired,
  onUpdateTab: PropTypes.func.isRequired
};

export default EditTab;

// sub component

const TabLink = ({ active, children, onClick }) => {
  let tabClass = classNames('tab-item', {active: active});
  return (
      <li role="presentation" className={tabClass}>
        <a className="btn btn-sm btn-default" href="#" onClick={e => {
          e.preventDefault();
          onClick();
        }}>
          {children}
        </a>
      </li>
  )
};

TabLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

const TabPanel = ({ active, children }) => {
  if (!active) {
    return (<div></div>);
  } else {
    return (
        <div>
          {children}
        </div>
    );
  }
};

TabPanel.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};
