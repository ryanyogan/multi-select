'use strict';

import React from 'react';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag as findWithTag
 } from 'react-addons-test-utils';
import { expect } from 'chai';

import AgentSelect from '../../src/components/AgentSelect';

describe('AgentSelect', () => {

  it('renders a list of agents', () => {
    const component = renderIntoDocument(
      <AgentSelect agents={['Ryan', 'Bob']} />
    );
    const agents = findWithTag(component, 'li');

    expect(agents.length).to.equal(2);
    expect(agents[0].textContent).to.equal('Ryan');
    expect(agents[1].textContent).to.equal('Bob');
  });

});