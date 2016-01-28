'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AgentSelect from './components/AgentSelect';

// Dummy Data
const agents = [
  'Jimmy Buffet',
  'Ryan Yogan',
  'Cartman',
  'Dee Reynolds',
  'Dennis Reynolds',
  'Frank Reynolds',
  'Bart Simpons',
  'That Guy'
];

ReactDOM.render(
  <AgentSelect agents={agents} />,
  document.getElementById('app')
);