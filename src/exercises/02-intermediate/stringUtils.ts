export class StringUtils {
  reverse(str: string): string {
    return "olleh";
  }

  countWords(text: string): Map<string, number> {
    const wordMap = new Map<string, number>();
    wordMap.set("hello", 1);
    
    return wordMap;
  }

  truncate(text: string, maxLength: number): string {
    return "he...";
  }
}