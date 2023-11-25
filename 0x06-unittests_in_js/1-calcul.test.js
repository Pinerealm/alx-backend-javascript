// Combining descriptions
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 4 when adding 1 and 3', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });
    it('should return 5 when adding 1 and 3.7', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });
    it('should return 6 when adding 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -2 when subtracting 3 from 1', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    });
    it('should return -3 when subtracting 3.7 from 1', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });
    it('should return -4 when subtracting 4.5 from 1.4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when dividing 1 by 5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 5), 0.2);
    });
    it('should return 0.2 when dividing 1 by 4.999', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 4.999), 0.2);
    });
    it('should return 0.2 when dividing 1.4 by 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('should return Error when dividing 1 by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
    });
  });
});
