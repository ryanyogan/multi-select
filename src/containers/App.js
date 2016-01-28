'use strict';

import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import {
  addAgent,
  selectAgent,
  setVisibiltyFilter,
  VisibilityFilter
} from '../actions';
import AddAgent from '../components/AddAgent';
import AgentList from '../components/AgentList';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    const { dispatch, visibleAgents, visibilityFilter } = this.props;

    return (
      <div>
        <AddAgent
          onAddClick={(name) => dispatch(addAgent(name))}
        />

        <AgentList
          agents={visibleAgents}
          onAgentClick={(id) => dispatch(selectAgent(id))}
        />

        <Footer
          filter={visibilityFilter}
          onFilterChange={(nextFilter) => dispatch(setVisibiltyFilter(nextFilter))}
        />
      </div>
    );
  }
}

// Prop Type validation, these are the required props for this
// component
App.propTypes = {
  visibleAgents: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_SELECTED',
    'SHOW_UNSELECTED'
  ]).isRequired
};

function selectAgents(agents, filter) {
  switch (filter) {
    case VisibilityFilter.SHOW_ALL:
      return agents;
    case VisibilityFilter.SHOW_SELECTED:
      return agents.filter(agent => agent.selected);
    case VisibilityFilter.SHOW_UNSELECTED:
      return agents.filter(agent => !agent.selected);
  }
};

function select(state) {
  return {
    visibleAgents: selectAgents(state.agents, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
};

export default connect(select)(App);
