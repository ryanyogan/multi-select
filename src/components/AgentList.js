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
        {this.props.agents.map(agent =>
          <Agent
            key={agent.id}
            {...agent}
            onClick={() => this.props.onAgentClick(agent.id)}
          />
        )}
      </ul>
    );
  }
};

AgentList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
};