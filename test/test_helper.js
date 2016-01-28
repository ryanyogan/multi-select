'use strict';

import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const jsDocument = jsdom.jsdom('<!doctype html><html><body></body></html>');
const jsWin = jsDocument.defaultView; // defaultView is the "window"

global.document = jsDocument;
global.window = jsWin;

// Take all properties from jsdom (browser) and add them to
// the Node.js global so we can mock a browser inside of Node

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});
