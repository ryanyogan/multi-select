'use strict';

import { combineReducers } from 'redux';
import {
  ADD_AGENT,
  SELECT_AGENT,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions';

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function agent(state, action) {
  switch (action.type) {
    case ADD_AGENT:
      return {
        id: action.id,
        name: action.name,
        selected: false
      };
    case SELECT_AGENT:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        selected: true
      };
    default:
      return state;
  }
}

function agents(state = [], action) {
  switch (action.type) {
    case ADD_AGENT:
      return [
        ...state,
        agent(undefined, action)
      ];
    case SELECT_AGENT:
      return state.map((selectedAgent) => {
        agent(selectedAgent, action);
      });
    default:
      return state;
  }
}

const agentApp = combineReducers({
  visibilityFilter,
  agents
});

export default agentApp;