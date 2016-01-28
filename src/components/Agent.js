'use strict';

import React, {
  Component,
  PropTypes
} from 'react';

export default class Agent extends Component {
  render() {
    return (
      <li
        onCLick={this.props.onClick}
        style={{
          textDecoration: this.props.selected ? 'line-through' : 'none',
          cursor: this.props.selected ? 'default' : 'pointer'
        }}>
        {this.props.name}
      </li>
    );
  }
}

Agent.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired
};