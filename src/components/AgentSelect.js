'use strict';

import React, {
  Component,
  PropTypes
} from 'react';

export default class AgentSelect extends Component {
  getAgents() {
    return this.props.agents || [];
  }

  render() {
    const agents = this.getAgents().map((agent) => {
      return (
        <li
          className='agent-row'
          key={agent}
          onClick={() => this.props.selectAgent(agent)}>
          {agent}
        </li>
      );
    });

    return (
      <div className='agent-select'>
        <div className='container'>
          <ul className='agent-list'>
            {agents}
          </ul>
        </div>
      </div>
    );
  }
};

AgentSelect.propTypes = {
  agents: PropTypes.array.isRequired
};
