'use strict';

import React, {
  Component
} from 'react';

export default class AgentSelect extends Component {
  getAgents() {
    return this.props.agents || [];
  }

  render() {
    const agents = this.getAgents().map((agent) => {
      return (
        <li className='agent-row' key={agent}>{agent}</li>
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
}
