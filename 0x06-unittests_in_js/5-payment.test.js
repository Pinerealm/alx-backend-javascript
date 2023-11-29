const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

// Test Suite: sendPaymentRequestToApi
describe('sendPaymentRequestToApi', () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.spy(console, 'log');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('will call sendPaymentRequestToApi with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledOnceWithExactly('The total is: 120')).to.be.true;
  });
  it('will call sendPaymentRequestToApi with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
