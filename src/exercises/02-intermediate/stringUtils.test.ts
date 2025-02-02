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
    });

    it('should handle single character', () => {
    });
  });

  describe('countWords', () => {
    it('should count word occurrences correctly', () => {
      const text = 'hello';
      const result = stringUtils.countWords(text);
      expect(result.get('hello')).toBe(1);
    });

    it('should handle empty string', () => {
    });

    it('should be case insensitive', () => {
    });
  });

  describe('truncate', () => {
    it('should truncate text with ellipsis', () => {
      expect(stringUtils.truncate('hello world', 5)).toBe('he...');
    });

    it('should not truncate if text is shorter than maxLength', () => {
    });

    it('should handle empty string', () => {
    });
  });
});
