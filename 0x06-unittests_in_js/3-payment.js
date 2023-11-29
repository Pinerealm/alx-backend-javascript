const Utils = require('./utils.js');

// Fxn: sendPaymentRequestToApi
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${total}`);
}
module.exports = sendPaymentRequestToApi;
