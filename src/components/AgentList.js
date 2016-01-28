'use strict';

import React, {
  Component,
  PropTypes
} from 'react';
import Agent from './Agent';

export default class AgentList extends Component {
  render() {
    return (
      <ul className='agent-list'>
        {this.props.agents.map((agent) => {
          console.log(agent);
          return (
            <Agent
              key={agent.id}
              {...agent}
              onClick={() => this.props.onAgentClick(agent.id)}
            />
          );
        })}
      </ul>
    );
  }
};

AgentList.propTypes = {
  onAgentClick: PropTypes.func.isRequired,
  agents: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired
  }).isRequired).isRequired
};