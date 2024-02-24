const hangul = require('korean-unpacker');

const strokeCounts = {
  // 자음(Consonants)
  'ㄱ': 2, 'ㄲ': 4, 'ㄳ': 4, 'ㄴ': 2, 'ㄵ': 5, 'ㄶ': 5, 'ㄷ': 3,
  'ㄹ': 5, 'ㄺ': 7, 'ㄻ': 9, 'ㄼ': 9, 'ㄽ': 7, 'ㄾ': 9, 'ㄿ': 9,
  'ㅀ': 8, 'ㅁ': 4, 'ㅂ': 4, 'ㅄ': 6, 'ㅅ': 2, 'ㅆ': 4, 'ㅇ': 1,
  'ㅈ': 3, 'ㅊ': 4, 'ㅋ': 3, 'ㅌ': 4, 'ㅍ': 4, 'ㅎ': 3,
  // 모음(Vowels)
  'ㅏ': 2, 'ㅐ': 3, 'ㅑ': 3, 'ㅒ': 4, 'ㅓ': 2, 'ㅔ': 3, 'ㅕ': 3, 
  'ㅖ': 4, 'ㅗ': 2, 'ㅘ': 4, 'ㅙ': 5, 'ㅚ': 3, 'ㅛ': 3, 'ㅜ': 2, 
  'ㅝ': 4, 'ㅞ': 5, 'ㅟ': 3, 'ㅠ': 3, 'ㅡ': 1, 'ㅢ': 2, 'ㅣ': 1
};

/**
 * Calculates the total number of strokes for all the Hangul characters in a given Korean string.
 * 
 * Utilizes the `korean-unpacker` library to decompose the given Korean string into individual Jamo (Korean characters),
 * and sums up the stroke counts for each character based on the `strokeCounts` mapping.
 * 
 * @param {string} korean - The Korean string to calculate stroke counts for.
 * @returns {number} The total stroke count for all characters in the input string.
 * 
 * @example
 * strokeCounter("안녕하세요"); // returns the total stroke count, e.g., 22
 */
function strokeCounter(korean){
  const unpackKorean = hangul.unpack(korean)
  return unpackKorean.split('').reduce((sum, char) => sum + (strokeCounts[char] || 0), 0);
}

module.exports = strokeCounter;