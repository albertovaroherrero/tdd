import { StringUtils } from './stringUtils';

describe('StringUtils', () => {
  let stringUtils: StringUtils;

  beforeEach(() => {
    stringUtils = new StringUtils();
  });

  describe('reverse', () => {
    it('should reverse a simple string', () => {
      expect(stringUtils.reverse('hello')).toBe('olleh');
    });

    it('should handle empty string', () => {
      expect(stringUtils.reverse('')).toBe('');
    });

    it('should handle single character', () => {
      expect(stringUtils.reverse('a')).toBe('a');
    });
  });

  describe('countWords', () => {
    it('should count word occurrences correctly', () => {
      const text = 'hello world hello';
      const result = stringUtils.countWords(text);
      expect(result.get('hello')).toBe(2);
      expect(result.get('world')).toBe(1);
    });

    it('should handle empty string', () => {
      const result = stringUtils.countWords('');
      expect(result.size).toBe(0);
    });

    it('should be case insensitive', () => {
      const result = stringUtils.countWords('Hello HELLO hello');
      expect(result.get('hello')).toBe(3);
    });
  });

  describe('isPalindrome', () => {
    it('should identify palindrome correctly', () => {
      expect(stringUtils.isPalindrome('racecar')).toBe(true);
    });

    it('should handle non-palindrome', () => {
      expect(stringUtils.isPalindrome('hello')).toBe(false);
    });

    it('should handle empty string', () => {
      expect(stringUtils.isPalindrome('')).toBe(true);
    });
  });

  describe('truncate', () => {
    it('should truncate text with ellipsis', () => {
      expect(stringUtils.truncate('hello world', 5)).toBe('he...');
    });

    it('should not truncate if text is shorter than maxLength', () => {
      expect(stringUtils.truncate('hello', 10)).toBe('hello');
    });

    it('should handle empty string', () => {
      expect(stringUtils.truncate('', 5)).toBe('');
    });
  });
});
