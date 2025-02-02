import { Calculator } from './calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    it('should add two positive numbers correctly', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    it('should return the same number when adding zero', () => {
    });

    it('should handle negative numbers', () => {
    });
  });

  describe('subtract', () => {
    it('should subtract two positive numbers correctly', () => {
    });

    it('should handle negative numbers', () => {
    });

    it('should return the same number when subtracting zero', () => {
    });
  });

  describe('multiply', () => {
    it('should multiply two positive numbers correctly', () => {
    });

    it('should handle negative numbers', () => {
    });

    it('should return zero when multiplying by zero', () => {
    });
  });

  describe('divide', () => {
    it('should divide two positive numbers correctly', () => {
    });

    it('should handle negative numbers', () => {
    });

    it('should throw error when dividing by zero', () => {
    });
  });
});
