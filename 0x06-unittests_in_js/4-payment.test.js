const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

// Test Suite: sendPaymentRequestToApi
describe('sendPaymentRequestToApi', () => {
  it('Using a stub on Utils.calculateNumber', () => {
    const stubUtils = sinon.stub(Utils, 'calculateNumber');
    stubUtils.withArgs('SUM', 100, 20).returns(10);
    const consoleSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);

    expect(stubUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
    stubUtils.restore();
    consoleSpy.restore();
  });
});
