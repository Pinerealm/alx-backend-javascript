// Integration test
const request = require('request');
const chai = require('chai');
const { expect } = chai;

describe('Index page', () => {
  it('correct status code', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('correct result', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('correct status code', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('correct result', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('correct error code', (done) => {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('correct error message', (done) => {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(body).to.equal('Cannot GET /cart/hello');
      done();
    });
  });
});

describe('Payment methods', () => {
  it('correct status code', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('correct result', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(body).to.deep.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
      done();
    });
  });
});

describe('Login form', () => {
  it('correct status code', (done) => {
    request.post({
      url: 'http://localhost:7865/login',
      form: {
        userName: 'Betty',
      },
    }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('correct result', (done) => {
    request.post({
      url: 'http://localhost:7865/login',
      json: {
        userName: 'Betty',
      },
    }, (error, response, body) => {
      console.log(response.body);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
