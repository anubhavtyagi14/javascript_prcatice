function hasRequiredDistinctChar(s, k) {
  let freq = {};
  for (const char of s) {
    if (!(char in freq)) {
      freq[char] = 0;
    }
    freq[char] += 1;
  }

  return Object.keys(freq).length > k;
}
function longest_substring_with_k_distinct(str, k) {
  if (!hasRequiredDistinctChar(str, k)) {
    console.log('Not enough unique characters');
    return 0;
  }
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

  // in the following loop we'll try to extend the range [window_start, window_end]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;
    // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      windowStart += 1; // shrink the window
    }
    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}


console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('aaaaa', 2)}`);
  // console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 1)}`);
  // console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('cbbebi', 3)}`);