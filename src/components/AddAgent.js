'use strict';

import React, {
  Component,
  PropTypes
} from 'react';

export default class AddAgent extends Component {
  render() {
    return (
      <div className='add-agent'>
        <input type='text' ref='input' />
        <button onClick={(e) => this.handleClick(e)}>
          Add
        </button>
      </div>
    );
  }

  handleClick(e) {
    const node = this.refs.input;
    const name = node.value.trim();
    this.props.onAddClick(name);
    node.value = '';
  }
}

AddAgent.propTypes = {
  onAddClick: PropTypes.func.isRequired
};