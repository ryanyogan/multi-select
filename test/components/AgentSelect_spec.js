// 'use strict';

// import React from 'react';
// import {
//   renderIntoDocument,
//   scryRenderedDOMComponentsWithTag as findWithTag,
//   Simulate
//  } from 'react-addons-test-utils';
// import { expect } from 'chai';

// import AgentSelect from '../../src/components/AgentSelect';

// describe('AgentSelect', () => {
//   const agentData = [
//     'Ryan', 'Bob', 'Bill', 'Ted'
//   ];

//   it('renders a list of agents', () => {
//     const component = renderIntoDocument(
//       <AgentSelect agents={['Ryan', 'Bob']} />
//     );
//     const agents = findWithTag(component, 'li');

//     expect(agents.length).to.equal(2);
//     expect(agents[0].textContent).to.equal('Ryan');
//     expect(agents[1].textContent).to.equal('Bob');
//   });

//   it('invokes callback when an agent is clicked', () => {
//     let selectedAgent;
//     const selectAgent = (agent) => selectedAgent = agent;

//     const component = renderIntoDocument(
//       <AgentSelect agents={agentData} selectAgent={selectAgent} />
//     );
//     const agents = findWithTag(component, 'li');
//     Simulate.click(agents[0]);

//     expect(selectedAgent).to.equal('Ryan');
//   });

// });