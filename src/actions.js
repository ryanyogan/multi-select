'use strict';

/**
 * Action Types
 */

export const ADD_AGENT = 'ADD_AGENT';
export const SELECT_AGENT = 'SELECT_AGENT';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/**
 * Additional Constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_SELECTED: 'SHOW_SELECTED',
  SHOW_UNSELECTED: 'SHOW_UNSELECTED'
};

/**
 * Action Creators
 */

let nextAgentId = 0; // Obviously for example usage

export function addAgent(name) {
  return {
    type: ADD_AGENT,
    id: nextAgentId++,
    name
  };
}

export function selectAgent(id) {
  return { type: SELECT_AGENT, id }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}