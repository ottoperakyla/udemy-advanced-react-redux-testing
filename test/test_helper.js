import jsdom from 'jsdom'
import jquery from 'jquery'
import TestUtils from 'react-addons-test-utils'
import React from 'react'
import ReactDOM from 'react-dom'
import chai, { expect } from 'chai'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../src/reducers'
import chaiJquery from 'chai-jquery'

// Goals of the test helper
// 1. set up testing environment to run like a browser in the command line
// "global" in node.js is the same as "window" in the browser

// global.document will be used by libraries like jQuery
// to do things like searching for dom elements
global.document = jsdom.jsdom('<!doctype html><body></body></html>') // creates a fake dom
global.window = global.document.defaultView // creates fake a "window" -property
const $ = jquery(global.window) // set up jQuery to wrap around our fake dom instead of the browsers

// 2. build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
  // calling <ComponentClass /> creates an instance of the react component
  // TestUtils.renderIntoDocument renders it to the global.document
  // <ComponentClass /> must be wrapped within a redux <Provider> so 
  // that components that are connected to the redux state will work with our tests
  const componentInstance = TestUtils.renderIntoDocument(
   <Provider store={createStore(reducers, state)}> 
    <ComponentClass {...props}/>
   </Provider>
  )

  // get a reference to the HTML that we produced with renderIntoDocument
  // and wrap it with jQuery to make use of the helpful chai-jquery matchers
  return $(ReactDOM.findDOMNode(componentInstance)) 
}

// 3. build helper for simulating events 
// add "simulate" function to all jQuery elements
$.fn.simulate = function(eventName, value) {  
  // "this" in here is a refecence to the previously wrapped jQuery element
  if (value) {
    this.val(value)
  }

  // since for example a: $('div') -selector returns an array, we just select the first match here
  TestUtils.Simulate[eventName](this[0])
}

// 4. set up chai-jquery
chaiJquery(chai, chai.util, $)

export { renderComponent, expect }
