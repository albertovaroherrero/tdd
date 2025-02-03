export class StringUtils {
  reverse(str: string): string {
    return str.split('').reverse().join('');
  }

  countWords(text: string): Map<string, number> {
    const words = text.toLowerCase().split(/\s+/).filter(word => word.length > 0);
    const wordMap = new Map<string, number>();
    
    for (const word of words) {
      wordMap.set(word, (wordMap.get(word) || 0) + 1);
    }
    
    return wordMap;
  }

  isPalindrome(str: string): boolean {
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return normalized === normalized.split('').reverse().join('');
  }

  truncate(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength - 3) + '...';
  }
}
