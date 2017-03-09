import React, { Component, PropTypes } from 'react';
import styles from './tabs.sass';

export default class Tabs extends Component {
  static propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
      onClick: PropTypes.func
    }))
  }

  render() {
    const { tabs } = this.props;
    const tabList = tabs.map((tab, i) => {
      return (
        <span key={ `tab-${i}` } className={ styles.tab } onClick={ tab.onClick }>
          { tab.text }
        </span>
      )
    });
    return (
      <div className={ styles.tabs }>
        { tabList }
      </div>
    )
  }
}
