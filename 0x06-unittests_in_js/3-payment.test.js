const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

// Test Suite: sendPaymentRequestToApi
describe('sendPaymentRequestToApi', () => {
  it('...', () => {
    const spyUtils = sinon.spy(Utils, 'calculateNumber');
    const consoleSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);

    expect(spyUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    spyUtils.restore();
    consoleSpy.restore();
  });
});
