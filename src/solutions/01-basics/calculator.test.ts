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

    it('should handle negative numbers', () => {
      expect(calculator.add(-1, -2)).toBe(-3);
    });

    it('should return the same number when adding zero', () => {
      expect(calculator.add(5, 0)).toBe(5);
    });
  });

  describe('subtract', () => {
    it('should subtract two positive numbers correctly', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    it('should handle negative numbers', () => {
      expect(calculator.subtract(-1, -2)).toBe(1);
    });

    it('should return the same number when subtracting zero', () => {
      expect(calculator.subtract(5, 0)).toBe(5);
    });
  });

  describe('multiply', () => {
    it('should multiply two positive numbers correctly', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    it('should handle negative numbers', () => {
      expect(calculator.multiply(-2, 3)).toBe(-6);
    });

    it('should return zero when multiplying by zero', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    it('should divide two positive numbers correctly', () => {
      expect(calculator.divide(6, 2)).toBe(3);
    });

    it('should handle negative numbers', () => {
      expect(calculator.divide(-6, 2)).toBe(-3);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Division by zero');
    });
  });
});
