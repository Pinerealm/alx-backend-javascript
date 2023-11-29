// Combining descriptions
const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 4 when adding 1 and 3', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    it('should return 5 when adding 1 and 3.7', () => {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
    it('should return 5 when adding 1.2 and 3.7', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -2 when subtracting 3 from 1', () => {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });
    it('should return -3 when subtracting 3.7 from 1', () => {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    });
    it('should return -3 when subtracting 3.7 from 1.2', () => {
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    });
  });

  describe('DIVIDE', () => {
    it('should return 5 when dividing 10 by 2', () => {
      expect(calculateNumber('DIVIDE', 10, 2)).to.equal(5);
    });
    it('should return 2 when dividing 10 by 4.7', () => {
      expect(calculateNumber('DIVIDE', 10, 4.7)).to.equal(2);
    });
    it('should return Error when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 10, 0)).to.equal('Error');
    });
  });
});
