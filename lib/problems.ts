export interface Problem {
  id: string
  title: string
  description: string
  level: "beginner" | "intermediate" | "advanced"
  tags: string[]
  starterCode?: string
  testCode: string
  examples?: string
  constraints?: string[]
  hints: string[]
}

export const problems: Problem[] = [
  // BEGINNER PROBLEMS (30 total)
  {
    id: "reverse-string",
    title: "Reverse a String",
    description: "Write a function that reverses a string. The input string is given as an array of characters.",
    level: "beginner",
    tags: ["Strings", "Arrays"],
    starterCode: `function reverseString(str) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { input: "hello", expected: "olleh" },
    { input: "world", expected: "dlrow" },
    { input: "JavaScript", expected: "tpircSavaJ" }
  ];
  
  for (const test of testCases) {
    const result = reverseString(test.input);
    if (result !== test.expected) {
      throw new Error(\`Test failed for input "\${test.input}". Expected "\${test.expected}" but got "\${result}"\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: "hello"\nOutput: "olleh"`,
    constraints: [
      "The input string will only contain printable ASCII characters.",
      "The maximum length of the string is 1000 characters.",
    ],
    hints: [
      "Try using a for loop to iterate through the string from the end to the beginning.",
      "You can also use built-in methods like split(), reverse(), and join().",
      "Remember that strings in JavaScript are immutable, so you'll need to create a new string.",
    ],
  },
  {
    id: "fizz-buzz",
    title: "FizzBuzz",
    description:
      "Write a function that returns an array containing the numbers from 1 to n. For multiples of 3, use 'Fizz' instead of the number. For multiples of 5, use 'Buzz'. For numbers that are multiples of both 3 and 5, use 'FizzBuzz'.",
    level: "beginner",
    tags: ["Loops", "Conditionals"],
    starterCode: `function fizzBuzz(n) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const result = fizzBuzz(15);
  const expected = [
    1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 
    11, "Fizz", 13, 14, "FizzBuzz"
  ];
  
  if (result.length !== expected.length) {
    throw new Error(\`Array length mismatch. Expected \${expected.length} but got \${result.length}\`);
  }
  
  for (let i = 0; i < expected.length; i++) {
    if (result[i] !== expected[i]) {
      throw new Error(\`Test failed at index \${i}. Expected "\${expected[i]}" but got "\${result[i]}"\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: 5\nOutput: [1, 2, "Fizz", 4, "Buzz"]`,
    constraints: ["1 <= n <= 100"],
    hints: [
      "Use a loop to iterate from 1 to n.",
      "Check if the number is divisible by both 3 and 5 first.",
      "Then check if it's divisible by 3 or 5 individually.",
    ],
  },
  {
    id: "palindrome-check",
    title: "Palindrome Check",
    description:
      "Write a function that checks if a given string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.",
    level: "beginner",
    tags: ["Strings", "Algorithms"],
    starterCode: `function isPalindrome(str) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { input: "racecar", expected: true },
    { input: "A man, a plan, a canal: Panama", expected: true },
    { input: "hello", expected: false },
    { input: "Was it a car or a cat I saw?", expected: true }
  ];
  
  for (const test of testCases) {
    const result = isPalindrome(test.input);
    if (result !== test.expected) {
      throw new Error(\`Test failed for input "\${test.input}". Expected \${test.expected} but got \${result}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: "racecar"\nOutput: true\n\nInput: "hello"\nOutput: false`,
    constraints: [
      "The input string will only contain ASCII characters.",
      "The function should ignore spaces, punctuation, and capitalization.",
    ],
    hints: [
      "Remove all non-alphanumeric characters and convert to lowercase first.",
      "You can compare the original string with its reverse.",
      "Another approach is to use two pointers, one from the start and one from the end.",
    ],
  },
  {
    id: "sum-of-array",
    title: "Sum of Array",
    description: "Write a function that calculates the sum of all numbers in an array.",
    level: "beginner",
    tags: ["Arrays", "Loops"],
    starterCode: `function sumArray(arr) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { input: [1, 2, 3, 4, 5], expected: 15 },
    { input: [-1, -2, -3, -4, -5], expected: -15 },
    { input: [1, -1, 2, -2, 3], expected: 3 },
    { input: [], expected: 0 }
  ];
  
  for (const test of testCases) {
    const result = sumArray(test.input);
    if (result !== test.expected) {
      throw new Error(\`Test failed for input [\${test.input}]. Expected \${test.expected} but got \${result}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: [1, 2, 3, 4, 5]\nOutput: 15`,
    constraints: ["The array can contain positive and negative integers.", "The array may be empty."],
    hints: [
      "Use a loop to iterate through the array.",
      "You can also use the reduce() method.",
      "Remember to handle the case of an empty array.",
    ],
  },
  {
    id: "count-vowels",
    title: "Count Vowels",
    description: "Write a function that counts the number of vowels in a string.",
    level: "beginner",
    tags: ["Strings", "Loops"],
    starterCode: `function countVowels(str) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { input: "hello", expected: 2 },
    { input: "world", expected: 1 },
    { input: "aeiou", expected: 5 },
    { input: "rhythm", expected: 0 }
  ];
  
  for (const test of testCases) {
    const result = countVowels(test.input);
    if (result !== test.expected) {
      throw new Error(\`Test failed for input "\${test.input}". Expected \${test.expected} but got \${result}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: "hello"\nOutput: 2\nExplanation: The vowels are 'e' and 'o'.`,
    constraints: ["The input string will only contain lowercase letters.", "Vowels are 'a', 'e', 'i', 'o', 'u'."],
    hints: [
      "Use a loop to iterate through each character in the string.",
      "Check if each character is a vowel.",
      "You can use a set or array to store the vowels for easy lookup.",
    ],
  },
  {
    id: "find-max",
    title: "Find Maximum Number",
    description: "Write a function that finds the maximum number in an array of integers.",
    level: "beginner",
    tags: ["Arrays", "Algorithms"],
    starterCode: `function findMax(arr) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { input: [1, 3, 5, 7, 9], expected: 9 },
    { input: [-1, -3, -5, -7, -9], expected: -1 },
    { input: [10, 5, 8, 20, 3], expected: 20 },
    { input: [42], expected: 42 }
  ];
  
  for (const test of testCases) {
    const result = findMax(test.input);
    if (result !== test.expected) {
      throw new Error(\`Test failed for input [\${test.input}]. Expected \${test.expected} but got \${result}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: [1, 3, 5, 7, 9]\nOutput: 9`,
    constraints: [
      "The array will contain at least one element.",
      "The array can contain positive and negative integers.",
    ],
    hints: [
      "You can use a loop to iterate through the array and keep track of the maximum value.",
      "You can also use the Math.max() function with the spread operator.",
      "Be careful with arrays containing negative numbers.",
    ],
  },
  {
    id: "factorial",
    title: "Calculate Factorial",
    description:
      "Write a function that calculates the factorial of a non-negative integer n. The factorial of n is the product of all positive integers less than or equal to n.",
    level: "beginner",
    tags: ["Math", "Recursion"],
    starterCode: `function factorial(n) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { input: 0, expected: 1 },
    { input: 1, expected: 1 },
    { input: 5, expected: 120 },
    { input: 10, expected: 3628800 }
  ];
  
  for (const test of testCases) {
    const result = factorial(test.input);
    if (result !== test.expected) {
      throw new Error(\`Test failed for input \${test.input}. Expected \${test.expected} but got \${result}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: 5\nOutput: 120\nExplanation: 5! = 5 × 4 × 3 × 2 × 1 = 120`,
    constraints: ["0 <= n <= 12", "The result will fit in a 32-bit integer."],
    hints: [
      "You can use a loop to calculate the factorial.",
      "You can also use recursion.",
      "Remember that 0! is defined as 1.",
    ],
  },
  {
    id: "title-case",
    title: "Title Case",
    description:
      "Write a function that converts a string to title case. In title case, the first letter of each word is capitalized while the rest are in lowercase.",
    level: "beginner",
    tags: ["Strings", "Loops"],
    starterCode: `function titleCase(str) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { input: "hello world", expected: "Hello World" },
    { input: "javascript is fun", expected: "Javascript Is Fun" },
    { input: "THE QUICK BROWN FOX", expected: "The Quick Brown Fox" },
    { input: "i love coding", expected: "I Love Coding" }
  ];
  
  for (const test of testCases) {
    const result = titleCase(test.input);
    if (result !== test.expected) {
      throw new Error(\`Test failed for input "\${test.input}". Expected "\${test.expected}" but got "\${result}"\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: "hello world"\nOutput: "Hello World"`,
    constraints: ["The input string can contain letters, spaces, and punctuation."],
    hints: [
      "Split the string into words.",
      "Capitalize the first letter of each word and convert the rest to lowercase.",
      "Join the words back together with spaces.",
    ],
  },
  {
    id: "even-numbers",
    title: "Filter Even Numbers",
    description: "Write a function that filters out all the even numbers from an array of integers.",
    level: "beginner",
    tags: ["Arrays", "Loops"],
    starterCode: `function filterEvenNumbers(arr) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { input: [1, 2, 3, 4, 5], expected: [2, 4] },
    { input: [7, 9, 11, 13], expected: [] },
    { input: [2, 4, 6, 8], expected: [2, 4, 6, 8] },
    { input: [], expected: [] }
  ];
  
  for (const test of testCases) {
    const result = filterEvenNumbers(test.input);
    if (result.length !== test.expected.length || 
        !result.every((val, idx) => val === test.expected[idx])) {
      throw new Error(\`Test failed for input [\${test.input}]. Expected [\${test.expected}] but got [\${result}]\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: [1, 2, 3, 4, 5]\nOutput: [2, 4]`,
    constraints: ["The array can contain positive and negative integers.", "The array may be empty."],
    hints: [
      "Use a loop to iterate through the array and check if each number is even.",
      "You can use the filter() method.",
      "A number is even if it's divisible by 2 (i.e., num % 2 === 0).",
    ],
  },
  {
    id: "remove-duplicates",
    title: "Remove Duplicates",
    description: "Write a function that removes duplicate values from an array.",
    level: "beginner",
    tags: ["Arrays", "Sets"],
    starterCode: `function removeDuplicates(arr) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { input: [1, 2, 2, 3, 4, 4, 5], expected: [1, 2, 3, 4, 5] },
    { input: ["a", "b", "a", "c", "b"], expected: ["a", "b", "c"] },
    { input: [1, 1, 1, 1], expected: [1] },
    { input: [], expected: [] }
  ];
  
  for (const test of testCases) {
    const result = removeDuplicates(test.input);
    if (result.length !== test.expected.length || 
        !result.every((val, idx) => val === test.expected[idx])) {
      throw new Error(\`Test failed for input [\${test.input}]. Expected [\${test.expected}] but got [\${result}]\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: [1, 2, 2, 3, 4, 4, 5]\nOutput: [1, 2, 3, 4, 5]`,
    constraints: ["The array can contain any type of values.", "The order of elements should be preserved."],
    hints: [
      "You can use a Set to remove duplicates.",
      "Another approach is to use a loop and check if each element has already been seen.",
      "You can also use the filter() method with indexOf().",
    ],
  },
  {
    id: "count-occurrences",
    title: "Count Occurrences",
    description: "Write a function that counts the occurrences of each element in an array.",
    level: "beginner",
    tags: ["Arrays", "Objects", "Hash Tables"],
    starterCode: `function countOccurrences(arr) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { 
      input: [1, 2, 2, 3, 3, 3, 4, 4, 4, 4], 
      expected: { "1": 1, "2": 2, "3": 3, "4": 4 } 
    },
    { 
      input: ["a", "b", "a", "c", "b", "a"], 
      expected: { "a": 3, "b": 2, "c": 1 } 
    },
    { 
      input: [], 
      expected: {} 
    }
  ];
  
  for (const test of testCases) {
    const result = countOccurrences(test.input);
    const resultKeys = Object.keys(result);
    const expectedKeys = Object.keys(test.expected);
    
    if (resultKeys.length !== expectedKeys.length) {
      throw new Error(\`Test failed for input [\${test.input}]. Expected \${JSON.stringify(test.expected)} but got \${JSON.stringify(result)}\`);
    }
    
    for (const key of resultKeys) {
      if (result[key] !== test.expected[key]) {
        throw new Error(\`Test failed for input [\${test.input}]. Expected \${JSON.stringify(test.expected)} but got \${JSON.stringify(result)}\`);
      }
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]\nOutput: { "1": 1, "2": 2, "3": 3, "4": 4 }`,
    constraints: [
      "The array can contain any type of values.",
      "The result should be an object with keys as the elements and values as the counts.",
    ],
    hints: [
      "Use an object to keep track of the counts.",
      "Iterate through the array and increment the count for each element.",
      "Remember to handle the case when an element is encountered for the first time.",
    ],
  },
  {
    id: "capitalize-words",
    title: "Capitalize Words",
    description: "Write a function that capitalizes the first letter of each word in a sentence.",
    level: "beginner",
    tags: ["Strings", "Arrays"],
    starterCode: `function capitalizeWords(str) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { input: "hello world", expected: "Hello World" },
    { input: "javascript is awesome", expected: "Javascript Is Awesome" },
    { input: "a b c", expected: "A B C" },
    { input: "", expected: "" }
  ];
  
  for (const test of testCases) {
    const result = capitalizeWords(test.input);
    if (result !== test.expected) {
      throw new Error(\`Test failed for input "\${test.input}". Expected "\${test.expected}" but got "\${result}"\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: "hello world"\nOutput: "Hello World"`,
    constraints: ["The input string can contain letters, spaces, and punctuation."],
    hints: [
      "Split the string into words.",
      "Capitalize the first letter of each word.",
      "Join the words back together with spaces.",
    ],
  },
  {
    id: "truncate-string",
    title: "Truncate String",
    description:
      "Write a function that truncates a string if it's longer than a specified length and adds '...' at the end.",
    level: "beginner",
    tags: ["Strings"],
    starterCode: `function truncateString(str, maxLength) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { str: "Hello World", maxLength: 5, expected: "Hello..." },
    { str: "JavaScript", maxLength: 10, expected: "JavaScript" },
    { str: "JavaScript", maxLength: 4, expected: "Java..." },
    { str: "", maxLength: 10, expected: "" }
  ];
  
  for (const test of testCases) {
    const result = truncateString(test.str, test.maxLength);
    if (result !== test.expected) {
      throw new Error(\`Test failed for str="\${test.str}", maxLength=\${test.maxLength}. Expected "\${test.expected}" but got "\${result}"\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: str = "Hello World", maxLength = 5\nOutput: "Hello..."`,
    constraints: [
      "If the string is shorter than or equal to maxLength, return the original string.",
      "The '...' counts towards the maxLength.",
    ],
    hints: [
      "Check if the string length is greater than maxLength.",
      "If it is, slice the string to maxLength - 3 and add '...'.",
      "Otherwise, return the original string.",
    ],
  },
  {
    id: "repeat-string",
    title: "Repeat String",
    description: "Write a function that repeats a given string a specified number of times.",
    level: "beginner",
    tags: ["Strings", "Loops"],
    starterCode: `function repeatString(str, num) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { str: "abc", num: 3, expected: "abcabcabc" },
    { str: "abc", num: 1, expected: "abc" },
    { str: "abc", num: 0, expected: "" },
    { str: "abc", num: -1, expected: "" }
  ];
  
  for (const test of testCases) {
    const result = repeatString(test.str, test.num);
    if (result !== test.expected) {
      throw new Error(\`Test failed for str="\${test.str}", num=\${test.num}. Expected "\${test.expected}" but got "\${result}"\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: str = "abc", num = 3\nOutput: "abcabcabc"`,
    constraints: ["If num is negative or zero, return an empty string."],
    hints: [
      "You can use a loop to concatenate the string num times.",
      "You can also use the built-in repeat() method.",
      "Remember to handle edge cases like negative numbers or zero.",
    ],
  },
  {
    id: "is-prime",
    title: "Check Prime Number",
    description: "Write a function that checks if a number is prime.",
    level: "beginner",
    tags: ["Math", "Algorithms"],
    starterCode: `function isPrime(num) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { input: 2, expected: true },
    { input: 3, expected: true },
    { input: 4, expected: false },
    { input: 17, expected: true },
    { input: 20, expected: false },
    { input: 1, expected: false },
    { input: 0, expected: false },
    { input: -7, expected: false }
  ];
  
  for (const test of testCases) {
    const result = isPrime(test.input);
    if (result !== test.expected) {
      throw new Error(\`Test failed for input \${test.input}. Expected \${test.expected} but got \${result}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: 17\nOutput: true\nExplanation: 17 is only divisible by 1 and itself, so it's prime.`,
    constraints: [
      "A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.",
      "Numbers less than or equal to 1 are not prime.",
    ],
    hints: [
      "Check if the number is less than 2. If so, it's not prime.",
      "Check if the number is divisible by any integer from 2 to the square root of the number.",
      "If it's divisible by any of these numbers, it's not prime.",
    ],
  },
  {
    id: "find-min",
    title: "Find Minimum Number",
    description: "Write a function that finds the minimum number in an array of integers.",
    level: "beginner",
    tags: ["Arrays", "Algorithms"],
    starterCode: `function findMin(arr) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { input: [1, 3, 5, 7, 9], expected: 1 },
    { input: [-1, -3, -5, -7, -9], expected: -9 },
    { input: [10, 5, 8, 20, 3], expected: 3 },
    { input: [42], expected: 42 }
  ];
  
  for (const test of testCases) {
    const result = findMin(test.input);
    if (result !== test.expected) {
      throw new Error(\`Test failed for input [\${test.input}]. Expected \${test.expected} but got \${result}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: [10, 5, 8, 20, 3]\nOutput: 3`,
    constraints: [
      "The array will contain at least one element.",
      "The array can contain positive and negative integers.",
    ],
    hints: [
      "You can use a loop to iterate through the array and keep track of the minimum value.",
      "You can also use the Math.min() function with the spread operator.",
      "Be careful with arrays containing negative numbers.",
    ],
  },
  {
    id: "celsius-to-fahrenheit",
    title: "Celsius to Fahrenheit",
    description: "Write a function that converts a temperature from Celsius to Fahrenheit.",
    level: "beginner",
    tags: ["Math"],
    starterCode: `function celsiusToFahrenheit(celsius) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { input: 0, expected: 32 },
    { input: 100, expected: 212 },
    { input: -40, expected: -40 },
    { input: 25, expected: 77 }
  ];
  
  for (const test of testCases) {
    const result = celsiusToFahrenheit(test.input);
    if (result !== test.expected) {
      throw new Error(\`Test failed for input \${test.input}. Expected \${test.expected} but got \${result}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: 0\nOutput: 32\nExplanation: 0°C = 32°F`,
    constraints: ["The formula is F = C * 9/5 + 32."],
    hints: [
      "Multiply the Celsius temperature by 9/5.",
      "Add 32 to the result.",
      "Be careful with the order of operations.",
    ],
  },
  {
    id: "fahrenheit-to-celsius",
    title: "Fahrenheit to Celsius",
    description: "Write a function that converts a temperature from Fahrenheit to Celsius.",
    level: "beginner",
    tags: ["Math"],
    starterCode: `function fahrenheitToCelsius(fahrenheit) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { input: 32, expected: 0 },
    { input: 212, expected: 100 },
    { input: -40, expected: -40 },
    { input: 77, expected: 25 }
  ];
  
  for (const test of testCases) {
    const result = fahrenheitToCelsius(test.input);
    if (result !== test.expected) {
      throw new Error(\`Test failed for input \${test.input}. Expected \${test.expected} but got \${result}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: 32\nOutput: 0\nExplanation: 32°F = 0°C`,
    constraints: ["The formula is C = (F - 32) * 5/9."],
    hints: [
      "Subtract 32 from the Fahrenheit temperature.",
      "Multiply the result by 5/9.",
      "Be careful with the order of operations.",
    ],
  },
  {
    id: "longest-word",
    title: "Find Longest Word",
    description: "Write a function that finds the longest word in a string.",
    level: "beginner",
    tags: ["Strings", "Arrays"],
    starterCode: `function findLongestWord(str) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { input: "The quick brown fox jumped over the lazy dog", expected: "jumped" },
    { input: "May the force be with you", expected: "force" },
    { input: "a b c d", expected: "a" },
    { input: "", expected: "" }
  ];
  
  for (const test of testCases) {
    const result = findLongestWord(test.input);
    if (result !== test.expected) {
      throw new Error(\`Test failed for input "\${test.input}". Expected "\${test.expected}" but got "\${result}"\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: "The quick brown fox jumped over the lazy dog"\nOutput: "jumped"`,
    constraints: [
      "If there are multiple words with the same length, return the first one.",
      "Words are separated by spaces.",
    ],
    hints: [
      "Split the string into words.",
      "Iterate through the words and keep track of the longest one.",
      "If the current word is longer than the longest word found so far, update the longest word.",
    ],
  },
  {
    id: "array-chunking",
    title: "Array Chunking",
    description: "Write a function that splits an array into groups of a specified size.",
    level: "beginner",
    tags: ["Arrays", "Loops"],
    starterCode: `function chunkArray(arr, size) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { arr: [1, 2, 3, 4, 5], size: 2, expected: [[1, 2], [3, 4], [5]] },
    { arr: [1, 2, 3, 4, 5, 6, 7, 8], size: 3, expected: [[1, 2, 3], [4, 5, 6], [7, 8]] },
    { arr: [1, 2, 3], size: 1, expected: [[1], [2], [3]] },
    { arr: [], size: 2, expected: [] }
  ];
  
  for (const test of testCases) {
    const result = chunkArray(test.arr, test.size);
    
    if (result.length !== test.expected.length) {
      throw new Error(\`Test failed for arr=[\${test.arr}], size=\${test.size}. Expected \${JSON.stringify(test.expected)} but got \${JSON.stringify(result)}\`);
    }
    
    for (let i = 0; i < result.length; i++) {
      if (result[i].length !== test.expected[i].length || 
          !result[i].every((val, idx) => val === test.expected[i][idx])) {
        throw new Error(\`Test failed for arr=[\${test.arr}], size=\${test.size}. Expected \${JSON.stringify(test.expected)} but got \${JSON.stringify(result)}\`);
      }
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: arr = [1, 2, 3, 4, 5], size = 2\nOutput: [[1, 2], [3, 4], [5]]`,
    constraints: ["The size must be a positive integer.", "The last chunk may contain fewer elements than size."],
    hints: [
      "Use a loop to iterate through the array.",
      "Create a new chunk every 'size' elements.",
      "You can use the slice() method to extract chunks from the array.",
    ],
  },
  {
    id: "reverse-integer",
    title: "Reverse Integer",
    description: "Write a function that reverses an integer.",
    level: "beginner",
    tags: ["Math", "Strings"],
    starterCode: `function reverseInteger(num) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { input: 123, expected: 321 },
    { input: -123, expected: -321 },
    { input: 120, expected: 21 },
    { input: 0, expected: 0 }
  ];
  
  for (const test of testCases) {
    const result = reverseInteger(test.input);
    if (result !== test.expected) {
      throw new Error(\`Test failed for input \${test.input}. Expected \${test.expected} but got \${result}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: 123\nOutput: 321`,
    constraints: [
      "The sign of the integer should be preserved.",
      "Leading zeros in the reversed integer should be removed.",
    ],
    hints: [
      "Convert the integer to a string.",
      "Reverse the string.",
      "Convert the string back to an integer.",
      "Remember to handle negative numbers.",
    ],
  },
  {
    id: "is-anagram",
    title: "Check Anagram",
    description: "Write a function that checks if two strings are anagrams of each other.",
    level: "beginner",
    tags: ["Strings", "Arrays"],
    starterCode: `function isAnagram(str1, str2) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { str1: "listen", str2: "silent", expected: true },
    { str1: "hello", str2: "world", expected: false },
    { str1: "anagram", str2: "nagaram", expected: true },
    { str1: "rat", str2: "car", expected: false },
    { str1: "", str2: "", expected: true }
  ];
  
  for (const test of testCases) {
    const result = isAnagram(test.str1, test.str2);
    if (result !== test.expected) {
      throw new Error(\`Test failed for str1="\${test.str1}", str2="\${test.str2}". Expected \${test.expected} but got \${result}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: str1 = "listen", str2 = "silent"\nOutput: true`,
    constraints: [
      "The strings will only contain lowercase letters.",
      "An anagram is a word formed by rearranging the letters of another word.",
    ],
    hints: [
      "Sort both strings and compare them.",
      "Another approach is to count the frequency of each character in both strings.",
      "If the strings have different lengths, they can't be anagrams.",
    ],
  },
  {
    id: "fibonacci",
    title: "Fibonacci Sequence",
    description: "Write a function that returns the nth number in the Fibonacci sequence.",
    level: "beginner",
    tags: ["Math", "Recursion", "Dynamic Programming"],
    starterCode: `function fibonacci(n) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { input: 0, expected: 0 },
    { input: 1, expected: 1 },
    { input: 2, expected: 1 },
    { input: 3, expected: 2 },
    { input: 10, expected: 55 }
  ];
  
  for (const test of testCases) {
    const result = fibonacci(test.input);
    if (result !== test.expected) {
      throw new Error(\`Test failed for input \${test.input}. Expected \${test.expected} but got \${result}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: 10\nOutput: 55\nExplanation: The Fibonacci sequence is 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...`,
    constraints: [
      "0 <= n <= 30",
      "The Fibonacci sequence is defined as F(0) = 0, F(1) = 1, and F(n) = F(n-1) + F(n-2) for n > 1.",
    ],
    hints: [
      "You can use recursion, but it might be inefficient for large values of n.",
      "A more efficient approach is to use dynamic programming or iteration.",
      "Start with the base cases F(0) = 0 and F(1) = 1, then build up to F(n).",
    ],
  },
  {
    id: "array-rotation",
    title: "Array Rotation",
    description: "Write a function that rotates an array to the right by k steps.",
    level: "beginner",
    tags: ["Arrays", "Algorithms"],
    starterCode: `function rotateArray(arr, k) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { arr: [1, 2, 3, 4, 5, 6, 7], k: 3, expected: [5, 6, 7, 1, 2, 3, 4] },
    { arr: [-1, -100, 3, 99], k: 2, expected: [3, 99, -1, -100] },
    { arr: [1, 2], k: 3, expected: [2, 1] },
    { arr: [], k: 1, expected: [] }
  ];
  
  for (const test of testCases) {
    const result = rotateArray([...test.arr], test.k);
    
    if (result.length !== test.expected.length || 
        !result.every((val, idx) => val === test.expected[idx])) {
      throw new Error(\`Test failed for arr=[\${test.arr}], k=\${test.k}. Expected [\${test.expected}] but got [\${result}]\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: arr = [1, 2, 3, 4, 5, 6, 7], k = 3\nOutput: [5, 6, 7, 1, 2, 3, 4]\nExplanation: Rotate the array to the right by 3 steps.`,
    constraints: ["Try to solve this in-place with O(1) extra space.", "k can be larger than the length of the array."],
    hints: [
      "If k is larger than the length of the array, you only need to rotate by k % arr.length steps.",
      "You can use a temporary array to store the rotated elements.",
      "Another approach is to reverse the entire array, then reverse the first k elements, and finally reverse the rest of the elements.",
    ],
  },
  {
    id: "missing-number",
    title: "Find Missing Number",
    description:
      "Write a function that finds the missing number in an array containing n distinct numbers taken from 0 to n.",
    level: "beginner",
    tags: ["Arrays", "Math"],
    starterCode: `function findMissingNumber(nums) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { input: [3, 0, 1], expected: 2 },
    { input: [9, 6, 4, 2, 3, 5, 7, 0, 1], expected: 8 },
    { input: [0], expected: 1 },
    { input: [1], expected: 0 }
  ];
  
  for (const test of testCases) {
    const result = findMissingNumber(test.input);
    if (result !== test.expected) {
      throw new Error(\`Test failed for input [\${test.input}]. Expected \${test.expected} but got \${result}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: [3, 0, 1]\nOutput: 2\nExplanation: n = 3 since there are 3 numbers, so all numbers are in the range [0, 3]. 2 is the missing number in the range.`,
    constraints: ["The array contains n distinct numbers taken from 0 to n.", "The array may not be sorted."],
    hints: [
      "You can use the formula n * (n + 1) / 2 to calculate the sum of numbers from 0 to n.",
      "Subtract the sum of the array from this value to find the missing number.",
      "Another approach is to use XOR operations.",
    ],
  },
  {
    id: "power-of-two",
    title: "Power of Two",
    description: "Write a function that determines if a given integer is a power of two.",
    level: "beginner",
    tags: ["Math", "Bit Manipulation"],
    starterCode: `function isPowerOfTwo(n) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { input: 1, expected: true },
    { input: 16, expected: true },
    { input: 3, expected: false },
    { input: 0, expected: false },
    { input: -16, expected: false }
  ];
  
  for (const test of testCases) {
    const result = isPowerOfTwo(test.input);
    if (result !== test.expected) {
      throw new Error(\`Test failed for input \${test.input}. Expected \${test.expected} but got \${result}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: 16\nOutput: true\nExplanation: 16 = 2^4`,
    constraints: [
      "A power of two is a number of the form 2^n where n is a non-negative integer.",
      "Negative numbers are not powers of two.",
    ],
    hints: [
      "A power of two has exactly one bit set to 1 in its binary representation.",
      "You can use the bitwise AND operator to check if n & (n - 1) is 0.",
      "Remember to handle edge cases like 0 and negative numbers.",
    ],
  },
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    description: "Write a function that determines if a string containing only parentheses is valid.",
    level: "beginner",
    tags: ["Strings", "Stacks"],
    starterCode: `function isValidParentheses(s) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { input: "()", expected: true },
    { input: "()[]{}", expected: true },
    { input: "(]", expected: false },
    { input: "([)]", expected: false },
    { input: "{[]}", expected: true },
    { input: "", expected: true }
  ];
  
  for (const test of testCases) {
    const result = isValidParentheses(test.input);
    if (result !== test.expected) {
      throw new Error(\`Test failed for input "\${test.input}". Expected \${test.expected} but got \${result}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: "()[]{}"\nOutput: true`,
    constraints: [
      "The string will only contain the characters '(', ')', '{', '}', '[', and ']'.",
      "An empty string is considered valid.",
    ],
    hints: [
      "Use a stack to keep track of opening brackets.",
      "When you encounter a closing bracket, check if it matches the most recent opening bracket.",
      "If it doesn't match or there's no opening bracket, the string is invalid.",
    ],
  },
  {
    id: "first-last-position",
    title: "First and Last Position",
    description: "Write a function that finds the first and last position of a target value in a sorted array.",
    level: "beginner",
    tags: ["Arrays", "Binary Search"],
    starterCode: `function searchRange(nums, target) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { nums: [5, 7, 7, 8, 8, 10], target: 8, expected: [3, 4] },
    { nums: [5, 7, 7, 8, 8, 10], target: 6, expected: [-1, -1] },
    { nums: [], target: 0, expected: [-1, -1] },
    { nums: [1], target: 1, expected: [0, 0] }
  ];
  
  for (const test of testCases) {
    const result = searchRange(test.nums, test.target);
    
    if (result.length !== 2 || result[0] !== test.expected[0] || result[1] !== test.expected[1]) {
      throw new Error(\`Test failed for nums=[\${test.nums}], target=\${test.target}. Expected [\${test.expected}] but got [\${result}]\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: nums = [5, 7, 7, 8, 8, 10], target = 8\nOutput: [3, 4]`,
    constraints: [
      "If the target is not found in the array, return [-1, -1].",
      "The array is sorted in ascending order.",
    ],
    hints: [
      "You can use binary search to find the target efficiently.",
      "Once you find the target, search for its first and last occurrence.",
      "You can also use two separate binary searches to find the first and last positions.",
    ],
  },
  {
    id: "move-zeroes",
    title: "Move Zeroes",
    description:
      "Write a function that moves all zeroes to the end of an array while maintaining the relative order of the non-zero elements.",
    level: "beginner",
    tags: ["Arrays", "Two Pointers"],
    starterCode: `function moveZeroes(nums) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { input: [0, 1, 0, 3, 12], expected: [1, 3, 12, 0, 0] },
    { input: [0], expected: [0] },
    { input: [1, 2, 3], expected: [1, 2, 3] },
    { input: [0, 0, 0, 1], expected: [1, 0, 0, 0] }
  ];
  
  for (const test of testCases) {
    const nums = [...test.input];
    moveZeroes(nums);
    
    if (nums.length !== test.expected.length || 
        !nums.every((val, idx) => val === test.expected[idx])) {
      throw new Error(\`Test failed for input [\${test.input}]. Expected [\${test.expected}] but got [\${nums}]\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: [0, 1, 0, 3, 12]\nOutput: [1, 3, 12, 0, 0]`,
    constraints: [
      "You must do this in-place without making a copy of the array.",
      "Minimize the total number of operations.",
    ],
    hints: [
      "Use two pointers: one to iterate through the array and one to keep track of the position where the next non-zero element should be placed.",
      "When you find a non-zero element, swap it with the element at the position tracked by the second pointer.",
      "Increment both pointers after the swap.",
    ],
  },
  {
    id: "single-number",
    title: "Single Number",
    description:
      "Write a function that finds the single number in an array where every element appears twice except for one.",
    level: "beginner",
    tags: ["Arrays", "Bit Manipulation"],
    starterCode: `function singleNumber(nums) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { input: [2, 2, 1], expected: 1 },
    { input: [4, 1, 2, 1, 2], expected: 4 },
    { input: [1], expected: 1 },
    { input: [1, 0, 1], expected: 0 }
  ];
  
  for (const test of testCases) {
    const result = singleNumber(test.input);
    if (result !== test.expected) {
      throw new Error(\`Test failed for input [\${test.input}]. Expected \${test.expected} but got \${result}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: [2, 2, 1]\nOutput: 1`,
    constraints: [
      "Each element in the array appears twice except for one element which appears only once.",
      "Try to solve it with a linear time complexity and without using extra memory.",
    ],
    hints: [
      "You can use a hash map to count the occurrences of each element, but this requires extra space.",
      "A more efficient approach is to use the XOR operation.",
      "XORing a number with itself results in 0, and XORing a number with 0 results in the number itself.",
    ],
  },
  {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    description: "Write a function that checks if an array contains any duplicate elements.",
    level: "beginner",
    tags: ["Arrays", "Hash Tables"],
    starterCode: `function containsDuplicate(nums) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { input: [1, 2, 3, 1], expected: true },
    { input: [1, 2, 3, 4], expected: false },
    { input: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2], expected: true },
    { input: [], expected: false }
  ];
  
  for (const test of testCases) {
    const result = containsDuplicate(test.input);
    if (result !== test.expected) {
      throw new Error(\`Test failed for input [\${test.input}]. Expected \${test.expected} but got \${result}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: [1, 2, 3, 1]\nOutput: true\nExplanation: The value 1 appears twice.`,
    constraints: ["The array can contain any type of values.", "An empty array does not contain duplicates."],
    hints: [
      "You can use a hash set to keep track of elements you've seen.",
      "Another approach is to sort the array and check adjacent elements.",
      "The hash set approach has a better time complexity.",
    ],
  },
  {
    id: "intersection-of-arrays",
    title: "Intersection of Arrays",
    description: "Write a function that finds the intersection of two arrays.",
    level: "beginner",
    tags: ["Arrays", "Hash Tables"],
    starterCode: `function intersection(nums1, nums2) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { nums1: [1, 2, 2, 1], nums2: [2, 2], expected: [2] },
    { nums1: [4, 9, 5], nums2: [9, 4, 9, 8, 4], expected: [4, 9] },
    { nums1: [1, 2, 3], nums2: [4, 5, 6], expected: [] },
    { nums1: [], nums2: [1, 2], expected: [] }
  ];
  
  for (const test of testCases) {
    const result = intersection(test.nums1, test.nums2);
    const sortedResult = [...result].sort((a, b) => a - b);
    const sortedExpected = [...test.expected].sort((a, b) => a - b);
    
    if (sortedResult.length !== sortedExpected.length || 
        !sortedResult.every((val, idx) => val === sortedExpected[idx])) {
      throw new Error(\`Test failed for nums1=[\${test.nums1}], nums2=[\${test.nums2}]. Expected [\${test.expected}] but got [\${result}]\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: nums1 = [1, 2, 2, 1], nums2 = [2, 2]\nOutput: [2]`,
    constraints: ["Each element in the result must be unique.", "The order of the result doesn't matter."],
    hints: [
      "Use a hash set to store the elements of the first array.",
      "Iterate through the second array and check if each element is in the hash set.",
      "Use another hash set to store the intersection to ensure uniqueness.",
    ],
  },
  {
    id: "majority-element",
    title: "Majority Element",
    description:
      "Write a function that finds the majority element in an array. The majority element is the element that appears more than ⌊n/2⌋ times.",
    level: "beginner",
    tags: ["Arrays", "Algorithms"],
    starterCode: `function majorityElement(nums) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { input: [3, 2, 3], expected: 3 },
    { input: [2, 2, 1, 1, 1, 2, 2], expected: 2 },
    { input: [1], expected: 1 },
    { input: [1, 2, 1], expected: 1 }
  ];
  
  for (const test of testCases) {
    const result = majorityElement(test.input);
    if (result !== test.expected) {
      throw new Error(\`Test failed for input [\${test.input}]. Expected \${test.expected} but got \${result}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: [3, 2, 3]\nOutput: 3`,
    constraints: [
      "You may assume that the array is non-empty and the majority element always exists in the array.",
      "Try to solve it with a linear time complexity and O(1) space complexity.",
    ],
    hints: [
      "You can use a hash map to count the occurrences of each element, but this requires extra space.",
      "A more efficient approach is to use the Boyer-Moore Voting Algorithm.",
      "The algorithm works by maintaining a count and a candidate. When the count reaches 0, we choose a new candidate.",
    ],
  },
  {
    id: "plus-one",
    title: "Plus One",
    description: "Write a function that increments a large integer represented as an array of digits by one.",
    level: "beginner",
    tags: ["Arrays", "Math"],
    starterCode: `function plusOne(digits) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { input: [1, 2, 3], expected: [1, 2, 4] },
    { input: [4, 3, 2, 1], expected: [4, 3, 2, 2] },
    { input: [9], expected: [1, 0] },
    { input: [9, 9, 9], expected: [1, 0, 0, 0] }
  ];
  
  for (const test of testCases) {
    const result = plusOne([...test.input]);
    
    if (result.length !== test.expected.length || 
        !result.every((val, idx) => val === test.expected[idx])) {
      throw new Error(\`Test failed for input [\${test.input}]. Expected [\${test.expected}] but got [\${result}]\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: [1, 2, 3]\nOutput: [1, 2, 4]\nExplanation: The array represents the integer 123, which when incremented gives 124.`,
    constraints: [
      "The array does not contain any leading zeros except for the number 0 itself.",
      "Each element in the array is a single digit (0-9).",
    ],
    hints: [
      "Start from the rightmost digit and add 1 to it.",
      "If the digit becomes 10, set it to 0 and add 1 to the next digit to the left.",
      "If you reach the leftmost digit and it becomes 10, set it to 0 and insert a 1 at the beginning of the array.",
    ],
  },

  // INTERMEDIATE PROBLEMS (40 total)
  {
    id: "two-sum",
    title: "Two Sum",
    description:
      "Given an array of integers and a target sum, return the indices of the two numbers such that they add up to the target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    level: "intermediate",
    tags: ["Arrays", "Hash Tables"],
    starterCode: `function twoSum(nums, target) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { nums: [3, 2, 4], target: 6, expected: [1, 2] },
    { nums: [3, 3], target: 6, expected: [0, 1] }
  ];
  
  for (const test of testCases) {
    const result = twoSum(test.nums, test.target);
    // Sort the arrays for comparison
    const sortedResult = [...result].sort((a, b) => a - b);
    const sortedExpected = [...test.expected].sort((a, b) => a - b);
    
    if (sortedResult.length !== sortedExpected.length || 
        !sortedResult.every((val, idx) => val === sortedExpected[idx])) {
      throw new Error(\`Test failed for nums=[\${test.nums}], target=\${test.target}. Expected [\${test.expected}] but got [\${result}]\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: nums = [2, 7, 11, 15], target = 9\nOutput: [0, 1]\nExplanation: Because nums[0] + nums[1] = 2 + 7 = 9`,
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists.",
    ],
    hints: [
      "A brute force approach would be to check every pair of numbers.",
      "Can you use a hash map to improve the time complexity?",
      "For each number, check if the target minus the current number exists in the hash map.",
    ],
  },
  {
    id: "valid-anagram",
    title: "Valid Anagram",
    description:
      "Given two strings s and t, return true if t is an anagram of s, and false otherwise. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
    level: "intermediate",
    tags: ["Strings", "Hash Tables"],
    starterCode: `function isAnagram(s, t) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { s: "anagram", t: "nagaram", expected: true },
    { s: "rat", t: "car", expected: false },
    { s: "listen", t: "silent", expected: true },
    { s: "hello", t: "world", expected: false }
  ];
  
  for (const test of testCases) {
    const result = isAnagram(test.s, test.t);
    if (result !== test.expected) {
      throw new Error(\`Test failed for s="\${test.s}", t="\${test.t}". Expected \${test.expected} but got \${result}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: s = "anagram", t = "nagaram"\nOutput: true\n\nInput: s = "rat", t = "car"\nOutput: false`,
    constraints: ["1 <= s.length, t.length <= 5 * 10^4", "s and t consist of lowercase English letters."],
    hints: [
      "Try sorting both strings and comparing them.",
      "Another approach is to count the frequency of each character in both strings.",
      "If the strings have different lengths, they can't be anagrams.",
    ],
  },
  {
    id: "binary-search",
    title: "Binary Search",
    description:
      "Implement a binary search algorithm that finds the index of a target value within a sorted array. If the target is not found, return -1.",
    level: "intermediate",
    tags: ["Arrays", "Binary Search", "Algorithms"],
    starterCode: `function binarySearch(nums, target) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { nums: [-1, 0, 3, 5, 9, 12], target: 9, expected: 4 },
    { nums: [-1, 0, 3, 5, 9, 12], target: 2, expected: -1 },
    { nums: [1, 2, 3, 4, 5], target: 5, expected: 4 },
    { nums: [1], target: 1, expected: 0 }
  ];
  
  for (const test of testCases) {
    const result = binarySearch(test.nums, test.target);
    if (result !== test.expected) {
      throw new Error(\`Test failed for nums=[\${test.nums}], target=\${test.target}. Expected \${test.expected} but got \${result}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: nums = [-1, 0, 3, 5, 9, 12], target = 9\nOutput: 4\nExplanation: 9 exists in nums and its index is 4`,
    constraints: [
      "1 <= nums.length <= 10^4",
      "The array is sorted in ascending order.",
      "-10^4 <= nums[i], target <= 10^4",
    ],
    hints: [
      "Use two pointers to track the search range.",
      "Compare the middle element with the target value.",
      "If the middle element is greater than the target, search the left half; otherwise, search the right half.",
    ],
  },
  {
    id: "first-unique-char",
    title: "First Unique Character",
    description:
      "Given a string, find the first non-repeating character and return its index. If it doesn't exist, return -1.",
    level: "intermediate",
    tags: ["Strings", "Hash Tables"],
    starterCode: `function firstUniqChar(s) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { input: "leetcode", expected: 0 },
    { input: "loveleetcode", expected: 2 },
    { input: "aabb", expected: -1 },
    { input: "z", expected: 0 }
  ];
  
  for (const test of testCases) {
    const result = firstUniqChar(test.input);
    if (result !== test.expected) {
      throw new Error(\`Test failed for input "\${test.input}". Expected \${test.expected} but got \${result}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: "leetcode"\nOutput: 0\nExplanation: The first non-repeating character is 'l' at index 0.`,
    constraints: ["1 <= s.length <= 10^5", "s consists of only lowercase English letters."],
    hints: [
      "Use a hash map to count the frequency of each character.",
      "Then iterate through the string to find the first character with a count of 1.",
      "You can also use a hash map to store the index of each character's first occurrence.",
    ],
  },
  {
    id: "group-anagrams",
    title: "Group Anagrams",
    description: "Given an array of strings, group the anagrams together. You can return the answer in any order.",
    level: "intermediate",
    tags: ["Strings", "Hash Tables", "Sorting"],
    starterCode: `function groupAnagrams(strs) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { 
      input: ["eat", "tea", "tan", "ate", "nat", "bat"], 
      expected: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]] 
    },
    { 
      input: [""], 
      expected: [[""]] 
    },
    { 
      input: ["a"], 
      expected: [["a"]] 
    }
  ];
  
  for (const test of testCases) {
    const result = groupAnagrams(test.input);
    
    // Check if the result has the same number of groups
    if (result.length !== test.expected.length) {
      throw new Error(\`Test failed for input [\${test.input}]. Expected \${test.expected.length} groups but got \${result.length}\`);
    }
    
    // Sort each group and the entire result for comparison
    const sortedResult = result.map(group => [...group].sort()).sort((a, b) => a.length - b.length);
    const sortedExpected = test.expected.map(group => [...group].sort()).sort((a, b) => a.length - b.length);
    
    // Check if each group has the same elements
    for (let i = 0; i < sortedResult.length; i++) {
      if (sortedResult[i].length !== sortedExpected[i].length) {
        throw new Error(\`Test failed for input [\${test.input}]. Group size mismatch.\`);
      }
      
      for (let j = 0; j < sortedResult[i].length; j++) {
        if (sortedResult[i][j] !== sortedExpected[i][j]) {
          throw new Error(\`Test failed for input [\${test.input}]. Group content mismatch.\`);
        }
      }
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: ["eat", "tea", "tan", "ate", "nat", "bat"]\nOutput: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]`,
    constraints: [
      "1 <= strs.length <= 10^4",
      "0 <= strs[i].length <= 100",
      "strs[i] consists of lowercase English letters.",
    ],
    hints: [
      "Two strings are anagrams if their sorted strings are equal.",
      "Use a hash map to group the strings by their sorted versions.",
      "You can also use a character count as the key for the hash map.",
    ],
  },
  {
    id: "top-k-frequent",
    title: "Top K Frequent Elements",
    description:
      "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
    level: "intermediate",
    tags: ["Arrays", "Hash Tables", "Heap"],
    starterCode: `function topKFrequent(nums, k) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { nums: [1,1,1,2,2,3], k: 2, expected: [1,2] },
    { nums: [1], k: 1, expected: [1] },
    { nums: [1,2], k: 2, expected: [1,2] }
  ];
  
  for (const test of testCases) {
    const result = topKFrequent(test.nums, test.k);
    const sortedResult = [...result].sort((a, b) => a - b);
    const sortedExpected = [...test.expected].sort((a, b) => a - b);
    
    if (sortedResult.length !== sortedExpected.length || 
        !sortedResult.every((val, idx) => val === sortedExpected[idx])) {
      throw new Error(\`Test failed for nums=[\${test.nums}], k=\${test.k}. Expected [\${test.expected}] but got [\${result}]\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: nums = [1,1,1,2,2,3], k = 2\nOutput: [1,2]`,
    constraints: [
      "1 <= nums.length <= 10^5",
      "k is in the range [1, the number of unique elements in the array].",
      "It is guaranteed that the answer is unique.",
    ],
    hints: [
      "Use a hash map to count the frequency of each element.",
      "Use a min-heap to keep track of the k most frequent elements.",
      "You can also use bucket sort to solve this problem.",
    ],
  },
  {
    id: "product-except-self",
    title: "Product of Array Except Self",
    description:
      "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
    level: "intermediate",
    tags: ["Arrays"],
    starterCode: `function productExceptSelf(nums) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { nums: [1,2,3,4], expected: [24,12,8,6] },
    { nums: [-1,1,0,-3,3], expected: [0,0,9,0,0] }
  ];
  
  for (const test of testCases) {
    const result = productExceptSelf(test.nums);
    
    if (result.length !== test.expected.length || 
        !result.every((val, idx) => val === test.expected[idx])) {
      throw new Error(\`Test failed for nums=[\${test.nums}]. Expected [\${test.expected}] but got [\${result}]\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: nums = [1,2,3,4]\nOutput: [24,12,8,6]`,
    constraints: [
      "2 <= nums.length <= 10^5",
      "-30 <= nums[i] <= 30",
      "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.",
      "You must write an algorithm that runs in O(n) time and without using the division operation.",
    ],
    hints: [
      "Calculate the prefix products and suffix products.",
      "The product of all elements except nums[i] is the product of the prefix product up to i-1 and the suffix product from i+1.",
      "You can use two arrays to store the prefix and suffix products, or you can do it in-place with O(1) extra space.",
    ],
  },
  {
    id: "longest-consecutive",
    title: "Longest Consecutive Sequence",
    description:
      "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.",
    level: "intermediate",
    tags: ["Arrays", "Hash Tables"],
    starterCode: `function longestConsecutive(nums) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { nums: [100,4,200,1,3,2], expected: 4 },
    { nums: [0,3,7,2,5,8,4,6,0,1], expected: 9 },
    { nums: [], expected: 0 }
  ];
  
  for (const test of testCases) {
    const result = longestConsecutive(test.nums);
    if (result !== test.expected) {
      throw new Error(\`Test failed for nums=[\${test.nums}]. Expected \${test.expected} but got \${result}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: nums = [100,4,200,1,3,2]\nOutput: 4`,
    constraints: ["0 <= nums.length <= 10^5", "-10^9 <= nums[i] <= 10^9", "Your algorithm should run in O(n) time."],
    hints: [
      "Use a hash set to store the elements of the array.",
      "Iterate through the array and check if each element is the start of a consecutive sequence.",
      "If it is, extend the sequence as far as possible and keep track of the length.",
    ],
  },
  {
    id: "encode-decode-strings",
    title: "Encode and Decode Strings",
    description:
      "Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.",
    level: "intermediate",
    tags: ["Strings", "Design"],
    starterCode: `function encode(strs) {
  // Write your code here
  
}

function decode(str) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { strs: ["lint","code","love","you"], expected: ["lint","code","love","you"] },
    { strs: [""], expected: [""] },
    { strs: [], expected: [] }
  ];
  
  for (const test of testCases) {
    const encoded = encode(test.strs);
    const result = decode(encoded);
    
    if (result.length !== test.expected.length || 
        !result.every((val, idx) => val === test.expected[idx])) {
      throw new Error(\`Test failed for strs=[\${test.strs}]. Expected [\${test.expected}] but got [\${result}]\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: ["lint","code","love","you"]\nOutput: ["lint","code","love","you"]`,
    constraints: [
      "The strings can contain any ASCII characters.",
      "The encoded string should be as short as possible.",
      "You should be able to encode and decode the strings correctly.",
    ],
    hints: [
      "Use a delimiter to separate the strings in the encoded string.",
      "You can use the length of each string as a prefix to the string itself.",
      "Be careful with edge cases like empty strings or strings containing the delimiter.",
    ],
  },
  {
    id: "longest-repeating-char-replacement",
    title: "Longest Repeating Character Replacement",
    description:
      "You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times. Return the length of the longest substring containing the same letter you can get after performing the above operations.",
    level: "intermediate",
    tags: ["Strings", "Sliding Window"],
    starterCode: `function characterReplacement(s, k) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { s: "ABAB", k: 2, expected: 4 },
    { s: "AABABBA", k: 1, expected: 4 },
    { s: "AAAA", k: 0, expected: 4 }
  ];
  
  for (const test of testCases) {
    const result = characterReplacement(test.s, test.k);
    if (result !== test.expected) {
      throw new Error(\`Test failed for s="\${test.s}", k=\${test.k}. Expected \${test.expected} but got \${result}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: s = "ABAB", k = 2\nOutput: 4`,
    constraints: ["1 <= s.length <= 10^5", "s consists of only uppercase English letters.", "0 <= k <= s.length"],
    hints: [
      "Use a sliding window approach.",
      "Keep track of the frequency of each character in the current window.",
      "The length of the window minus the frequency of the most frequent character is the number of replacements needed.",
      "If the number of replacements needed is greater than k, shrink the window from the left.",
    ],
  },
  {
    id: "minimum-window-substring",
    title: "Minimum Window Substring",
    description:
      'Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".',
    level: "intermediate",
    tags: ["Strings", "Sliding Window", "Hash Tables"],
    starterCode: `function minWindow(s, t) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { s: "ADOBECODEBANC", t: "ABC", expected: "BANC" },
    { s: "a", t: "a", expected: "a" },
    { s: "a", t: "aa", expected: "" }
  ];
  
  for (const test of testCases) {
    const result = minWindow(test.s, test.t);
    if (result !== test.expected) {
      throw new Error(\`Test failed for s="\${test.s}", t="\${test.t}". Expected "\${test.expected}" but got "\${result}"\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: s = "ADOBECODEBANC", t = "ABC"\nOutput: "BANC"`,
    constraints: ["1 <= s.length, t.length <= 10^5", "s and t consist of uppercase and lowercase English letters."],
    hints: [
      "Use a sliding window approach.",
      "Use two hash maps to keep track of the frequency of characters in t and the current window.",
      "Expand the window until it contains all the characters in t.",
      "Then shrink the window from the left until it no longer contains all the characters in t.",
      "Keep track of the minimum window found so far.",
    ],
  },
  {
    id: "valid-palindrome-ii",
    title: "Valid Palindrome II",
    description:
      "Given a string s, return true if the s can be palindrome after deleting at most one character from it.",
    level: "intermediate",
    tags: ["Strings"],
    starterCode: `function validPalindrome(s) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { s: "aba", expected: true },
    { s: "abca", expected: true },
    { s: "abc", expected: false }
  ];
  
  for (const test of testCases) {
    const result = validPalindrome(test.s);
    if (result !== test.expected) {
      throw new Error(\`Test failed for s="\${test.s}". Expected \${test.expected} but got \${result}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: s = "aba"\nOutput: true`,
    constraints: ["1 <= s.length <= 10^5", "s consists of lowercase English letters."],
    hints: [
      "Use two pointers, one from the start and one from the end.",
      "If the characters at the two pointers are different, try deleting one character from each side and check if the remaining string is a palindrome.",
      "You can use a helper function to check if a string is a palindrome.",
    ],
  },
  {
    id: "container-with-most-water",
    title: "Container With Most Water",
    description:
      "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.",
    level: "intermediate",
    tags: ["Arrays", "Two Pointers"],
    starterCode: `function maxArea(height) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { height: [1,8,6,2,5,4,8,3,7], expected: 49 },
    { height: [1,1], expected: 1 },
    { height: [4,3,2,1,4], expected: 16 }
  ];
  
  for (const test of testCases) {
    const result = maxArea(test.height);
    if (result !== test.expected) {
      throw new Error(\`Test failed for height=[\${test.height}]. Expected \${test.expected} but got \${result}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: height = [1,8,6,2,5,4,8,3,7]\nOutput: 49`,
    constraints: ["n == height.length", "2 <= n <= 10^5", "0 <= height[i] <= 10^4"],
    hints: [
      "Use two pointers, one from the start and one from the end.",
      "The area of the container is the minimum of the two heights multiplied by the distance between the two pointers.",
      "Move the pointer with the smaller height towards the center.",
    ],
  },
  {
    id: "3sum",
    title: "3Sum",
    description:
      "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets.",
    level: "intermediate",
    tags: ["Arrays", "Two Pointers", "Sorting"],
    starterCode: `function threeSum(nums) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { nums: [-1,0,1,2,-1,-4], expected: [[-1,-1,2],[-1,0,1]] },
    { nums: [0,1,1], expected: [] },
    { nums: [0,0,0], expected: [[0,0,0]] }
  ];
  
  for (const test of testCases) {
    const result = threeSum(test.nums);
    
    // Sort each triplet and the entire result for comparison
    const sortedResult = result.map(triplet => [...triplet].sort((a, b) => a - b)).sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
    const sortedExpected = test.expected.map(triplet => [...triplet].sort((a, b) => a - b)).sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
    
    // Check if the result has the same number of triplets
    if (sortedResult.length !== sortedExpected.length) {
      throw new Error(\`Test failed for nums=[\${test.nums}]. Expected \${test.expected.length} triplets but got \${result.length}\`);
    }
    
    // Check if each triplet matches
    for (let i = 0; i < sortedResult.length; i++) {
      if (sortedResult[i].length !== sortedExpected[i].length) {
        throw new Error(\`Test failed for nums=[\${test.nums}]. Triplet size mismatch.\`);
      }
      
      for (let j = 0; j < sortedResult[i].length; j++) {
        if (sortedResult[i][j] !== sortedExpected[i][j]) {
          throw new Error(\`Test failed for nums=[\${test.nums}]. Triplet content mismatch.\`);
        }
      }
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: nums = [-1,0,1,2,-1,-4]\nOutput: [[-1,-1,2],[-1,0,1]]`,
    constraints: ["0 <= nums.length <= 3000", "-10^5 <= nums[i] <= 10^5"],
    hints: [
      "Sort the array first.",
      "Use a two-pointer approach to find the triplets.",
      "Skip duplicate elements to avoid duplicate triplets.",
    ],
  },
  {
    id: "3sum-closest",
    title: "3Sum Closest",
    description:
      "Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.",
    level: "intermediate",
    tags: ["Arrays", "Two Pointers", "Sorting"],
    starterCode: `function threeSumClosest(nums, target) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { nums: [-1,2,1,-4], target: 1, expected: 2 },
    { nums: [0,0,0], target: 1, expected: 0 },
    { nums: [1,1,-1,-1,3], target: -1, expected: -1 }
  ];
  
  for (const test of testCases) {
    const result = threeSumClosest(test.nums, test.target);
    if (result !== test.expected) {
      throw new Error(\`Test failed for nums=[\${test.nums}], target=\${test.target}. Expected \${test.expected} but got \${result}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: nums = [-1,2,1,-4], target = 1\nOutput: 2`,
    constraints: ["3 <= nums.length <= 10^3", "-10^3 <= nums[i] <= 10^3", "-10^4 <= target <= 10^4"],
    hints: [
      "Sort the array first.",
      "Use a two-pointer approach to find the triplets.",
      "Keep track of the closest sum found so far.",
    ],
  },
  {
    id: "4sum",
    title: "4Sum",
    description:
      "Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that: 0 <= a, b, c, d < n a, b, c, and d are distinct. nums[a] + nums[b] + nums[c] + nums[d] == target You may return the answer in any order.",
    level: "intermediate",
    tags: ["Arrays", "Two Pointers", "Sorting"],
    starterCode: `function fourSum(nums, target) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { nums: [1,0,-1,0,-2,2], target: 0, expected: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]] },
    { nums: [2,2,2,2,2], target: 8, expected: [[2,2,2,2]] },
    { nums: [4,3,3,4,4,2,1,2,1,1], target: 9, expected: [[1,1,3,4],[1,2,2,4],[1,2,3,3]] }
  ];
  
  for (const test of testCases) {
    const result = fourSum(test.nums, test.target);
    
    // Sort each quadruplet and the entire result for comparison
    const sortedResult = result.map(quadruplet => [...quadruplet].sort((a, b) => a - b)).sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2] || a[3] - b[3]);
    const sortedExpected = test.expected.map(quadruplet => [...quadruplet].sort((a, b) => a - b)).sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2] || a[3] - b[3]);
    
    // Check if the result has the same number of quadruplets
    if (sortedResult.length !== sortedExpected.length) {
      throw new Error(\`Test failed for nums=[\${test.nums}], target=\${test.target}. Expected \${test.expected.length} quadruplets but got \${result.length}\`);
    }
    
    // Check if each quadruplet matches
    for (let i = 0; i < sortedResult.length; i++) {
      if (sortedResult[i].length !== sortedExpected[i].length) {
        throw new Error(\`Test failed for nums=[\${test.nums}], target=\${test.target}. Quadruplet size mismatch.\`);
      }
      
      for (let j = 0; j < sortedResult[i].length; j++) {
        if (sortedResult[i][j] !== sortedExpected[i][j]) {
          throw new Error(\`Test failed for nums=[\${test.nums}], target=\${test.target}. Quadruplet content mismatch.\`);
        }
      }
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: nums = [1,0,-1,0,-2,2], target = 0\nOutput: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]`,
    constraints: ["1 <= nums.length <= 200", "-10^9 <= nums[i] <= 10^9", "-10^9 <= target <= 10^9"],
    hints: [
      "Sort the array first.",
      "Use a nested loop and a two-pointer approach to find the quadruplets.",
      "Skip duplicate elements to avoid duplicate quadruplets.",
    ],
  },
  {
    id: "remove-nth-node-from-end-of-list",
    title: "Remove Nth Node From End of List",
    description: "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
    level: "intermediate",
    tags: ["Linked List", "Two Pointers"],
    starterCode: `function removeNthFromEnd(head, n) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  // Helper function to create a linked list from an array
  function createLinkedList(arr) {
    if (!arr || arr.length === 0) return null;
    let head = { val: arr[0], next: null };
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = { val: arr[i], next: null };
      current = current.next;
    }
    return head;
  }

  // Helper function to convert a linked list to an array
  function linkedListToArray(head) {
    const arr = [];
    let current = head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }

  const testCases = [
    { head: createLinkedList([1,2,3,4,5]), n: 2, expected: [1,2,3,5] },
    { head: createLinkedList([1]), n: 1, expected: [] },
    { head: createLinkedList([1,2]), n: 1, expected: [1] }
  ];
  
  for (const test of testCases) {
    const resultHead = removeNthFromEnd(test.head, test.n);
    const result = linkedListToArray(resultHead);
    
    if (result.length !== test.expected.length || 
        !result.every((val, idx) => val === test.expected[idx])) {
      throw new Error(\`Test failed for head=[\${linkedListToArray(test.head)}], n=\${test.n}. Expected [\${test.expected}] but got [\${result}]\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: head = [1,2,3,4,5], n = 2\nOutput: [1,2,3,5]`,
    constraints: ["The number of nodes in the list is sz.", "1 <= sz <= 30", "0 <= Node.val <= 100", "1 <= n <= sz"],
    hints: [
      "Use two pointers, one fast and one slow.",
      "Move the fast pointer n nodes ahead of the slow pointer.",
      "Then move both pointers until the fast pointer reaches the end of the list.",
      "The slow pointer will be pointing to the node before the node to be removed.",
    ],
  },
  {
    id: "reverse-linked-list",
    title: "Reverse Linked List",
    description: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
    level: "intermediate",
    tags: ["Linked List"],
    starterCode: `function reverseList(head) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  // Helper function to create a linked list from an array
  function createLinkedList(arr) {
    if (!arr || arr.length === 0) return null;
    let head = { val: arr[0], next: null };
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = { val: arr[i], next: null };
      current = current.next;
    }
    return head;
  }

  // Helper function to convert a linked list to an array
  function linkedListToArray(head) {
    const arr = [];
    let current = head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }

  const testCases = [
    { head: createLinkedList([1,2,3,4,5]), expected: [5,4,3,2,1] },
    { head: createLinkedList([1,2]), expected: [2,1] },
    { head: createLinkedList([]), expected: [] }
  ];
  
  for (const test of testCases) {
    const resultHead = reverseList(test.head);
    const result = linkedListToArray(resultHead);
    
    if (result.length !== test.expected.length || 
        !result.every((val, idx) => val === test.expected[idx])) {
      throw new Error(\`Test failed for head=[\${linkedListToArray(test.head)}]. Expected [\${test.expected}] but got [\${result}]\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: head = [1,2,3,4,5]\nOutput: [5,4,3,2,1]`,
    constraints: ["The number of nodes in the list is in the range [0, 5000].", "-5000 <= Node.val <= 5000"],
    hints: [
      "A linked list can be reversed either iteratively or recursively.",
      "In the iterative approach, you need to keep track of the previous, current, and next nodes.",
      "In the recursive approach, you need to reverse the rest of the list and then attach the current node to the end of the reversed list.",
    ],
  },
  {
    id: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    description:
      "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list.",
    level: "intermediate",
    tags: ["Linked List"],
    starterCode: `function mergeTwoLists(list1, list2) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  // Helper function to create a linked list from an array
  function createLinkedList(arr) {
    if (!arr || arr.length === 0) return null;
    let head = { val: arr[0], next: null };
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = { val: arr[i], next: null };
      current = current.next;
    }
    return head;
  }

  // Helper function to convert a linked list to an array
  function linkedListToArray(head) {
    const arr = [];
    let current = head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }

  const testCases = [
    { list1: createLinkedList([1,2,4]), list2: createLinkedList([1,3,4]), expected: [1,1,2,3,4,4] },
    { list1: createLinkedList([]), list2: createLinkedList([]), expected: [] },
    { list1: createLinkedList([]), list2: createLinkedList([0]), expected: [0] }
  ];
  
  for (const test of testCases) {
    const resultHead = mergeTwoLists(test.list1, test.list2);
    const result = linkedListToArray(resultHead);
    
    if (result.length !== test.expected.length || 
        !result.every((val, idx) => val === test.expected[idx])) {
      throw new Error(\`Test failed for list1=[\${linkedListToArray(test.list1)}], list2=[\${linkedListToArray(test.list2)}]. Expected [\${test.expected}] but got [\${result}]\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: list1 = [1,2,4], list2 = [1,3,4]\nOutput: [1,1,2,3,4,4]`,
    constraints: [
      "The number of nodes in both lists is in the range [0, 50].",
      "-100 <= Node.val <= 100",
      "Both list1 and list2 are sorted in non-decreasing order.",
    ],
    hints: [
      "You can use a dummy node to simplify the code.",
      "Iterate through both lists and compare the values of the current nodes.",
      "Attach the smaller node to the merged list and move the pointer of that list forward.",
    ],
  },
  {
    id: "linked-list-cycle",
    title: "Linked List Cycle",
    description:
      "Given head, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Return true if there is a cycle in the linked list. Otherwise, return false.",
    level: "intermediate",
    tags: ["Linked List", "Two Pointers"],
    starterCode: `function hasCycle(head) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  // Helper function to create a linked list from an array
  function createLinkedList(arr, pos) {
    if (!arr || arr.length === 0) return null;
    let head = { val: arr[0], next: null };
    let current = head;
    let cycleNode = null;
    if (pos === 0) cycleNode = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = { val: arr[i], next: null };
      current = current.next;
      if (pos === i) cycleNode = current;
    }
    if (cycleNode) current.next = cycleNode;
    return head;
  }

  const testCases = [
    { head: createLinkedList([3,2,0,-4], 1), expected: true },
    { head: createLinkedList([1,2], 0), expected: true },
    { head: createLinkedList([1], -1), expected: false }
  ];
  
  for (const test of testCases) {
    const result = hasCycle(test.head);
    if (result !== test.expected) {
      throw new Error(\`Test failed for head=[\${test.head}], pos=\${test.pos}. Expected \${test.expected} but got \${result}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: head = [3,2,0,-4], pos = 1\nOutput: true`,
    constraints: [
      "The number of the nodes in the list is in the range [0, 10^4].",
      "-10^5 <= Node.val <= 10^5",
      "pos is -1 or a valid index in the linked-list.",
    ],
    hints: [
      "Use two pointers, one fast and one slow.",
      "Move the fast pointer two nodes at a time and the slow pointer one node at a time.",
      "If there is a cycle, the two pointers will eventually meet.",
    ],
  },
  {
    id: "copy-list-with-random-pointer",
    title: "Copy List with Random Pointer",
    description:
      "A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null. Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, such that both the original list and the copied list represent the same list. The random pointers in the new list should point to nodes in the copied list rather than the original list. Return the head of the copied linked list.",
    level: "intermediate",
    tags: ["Linked List", "Hash Tables"],
    starterCode: `function copyRandomList(head) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  // Helper function to create a linked list with random pointers from an array
  function createLinkedList(arr, randomIndices) {
    if (!arr || arr.length === 0) return null;
    const nodes = arr.map(val => ({ val: val, next: null, random: null }));
    for (let i = 0; i < arr.length; i++) {
      if (i < arr.length - 1) nodes[i].next = nodes[i + 1];
      if (randomIndices[i] !== null) nodes[i].random = nodes[randomIndices[i]];
    }
    return nodes[0];
  }

  // Helper function to convert a linked list with random pointers to an array
  function linkedListToArray(head) {
    const arr = [];
    let current = head;
    while (current) {
      arr.push({ val: current.val, random: current.random ? current.random.val : null });
      current = current.next;
    }
    return arr;
  }

  const testCases = [
    { arr: [7,13,11,10,1], randomIndices: [null,0,4,2,0], expected: [{val: 7, random: null}, {val: 13, random: 7}, {val: 11, random: 1}, {val: 10, random: 11}, {val: 1, random: 7}] },
    { arr: [1,2], randomIndices: [1,1], expected: [{val: 1, random: 2}, {val: 2, random: 2}] },
    { arr: [3], randomIndices: [null], expected: [{val: 3, random: null}] }
  ];
  
  for (const test of testCases) {
    const head = createLinkedList(test.arr, test.randomIndices);
    const resultHead = copyRandomList(head);
    const result = linkedListToArray(resultHead);
    
    if (result.length !== test.expected.length) {
      throw new Error(\`Test failed for arr=[\${test.arr}], randomIndices=[\${test.randomIndices}]. Expected length \${test.expected.length} but got \${result.length}\`);
    }

    for (let i = 0; i < result.length; i++) {
      if (result[i].val !== test.expected[i].val || (result[i].random !== null && test.expected[i].random !== null && result[i].random !== test.expected[i].random) || (result[i].random === null && test.expected[i].random !== null) || (result[i].random !== null && test.expected[i].random === null)) {
        throw new Error(\`Test failed for arr=[\${test.arr}], randomIndices=[\${test.randomIndices}]. Expected \${JSON.stringify(test.expected)} but got \${JSON.stringify(result)}\`);
      }
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]\nOutput: [[7,null],[13,0],[11,4],[10,2],[1,0]]`,
    constraints: [
      "0 <= n <= 1000",
      "-10^4 <= Node.val <= 10^4",
      "Node.random is null or is pointing to some node in the linked list.",
    ],
    hints: [
      "Use a hash map to store the mapping between the original nodes and the copied nodes.",
      "Iterate through the original list and create a new node for each original node.",
      "Set the next and random pointers of the new nodes based on the hash map.",
    ],
  },
  {
    id: "partition-list",
    title: "Partition List",
    description:
      "Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x. You should preserve the original relative order of the nodes in each of the two partitions.",
    level: "intermediate",
    tags: ["Linked List", "Two Pointers"],
    starterCode: `function partition(head, x) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  // Helper function to create a linked list from an array
  function createLinkedList(arr) {
    if (!arr || arr.length === 0) return null;
    let head = { val: arr[0], next: null };
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = { val: arr[i], next: null };
      current = current.next;
    }
    return head;
  }

  // Helper function to convert a linked list to an array
  function linkedListToArray(head) {
    const arr = [];
    let current = head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }

  const testCases = [
    { head: createLinkedList([1,4,3,2,5,2]), x: 3, expected: [1,2,2,4,3,5] },
    { head: createLinkedList([2,1]), x: 2, expected: [1,2] },
    { head: createLinkedList([1,4,3,0,2,5,2]), x: 3, expected: [1,0,2,2,4,3,5] }
  ];
  
  for (const test of testCases) {
    const resultHead = partition(test.head, test.x);
    const result = linkedListToArray(resultHead);
    
    if (result.length !== test.expected.length || 
        !result.every((val, idx) => val === test.expected[idx])) {
      throw new Error(\`Test failed for head=[\${linkedListToArray(test.head)}], x=\${test.x}. Expected [\${test.expected}] but got [\${result}]\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: head = [1,4,3,2,5,2], x = 3\nOutput: [1,2,2,4,3,5]`,
    constraints: [
      "The number of nodes in the list is in the range [0, 200].",
      "-100 <= Node.val <= 100",
      "-200 <= x <= 200",
    ],
    hints: [
      "Use two dummy nodes to create two separate lists: one for nodes less than x and one for nodes greater than or equal to x.",
      "Iterate through the original list and attach each node to the appropriate list.",
      "Concatenate the two lists and return the head of the partitioned list.",
    ],
  },
  {
    id: "odd-even-linked-list",
    title: "Odd Even Linked List",
    description:
      "Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list. The first node is considered odd, and the second node is even, and so on. Note that the relative order inside both the even and odd groups should remain as it was in the input.",
    level: "intermediate",
    tags: ["Linked List"],
    starterCode: `function oddEvenList(head) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  // Helper function to create a linked list from an array
  function createLinkedList(arr) {
    if (!arr || arr.length === 0) return null;
    let head = { val: arr[0], next: null };
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = { val: arr[i], next: null };
      current = current.next;
    }
    return head;
  }

  // Helper function to convert a linked list to an array
  function linkedListToArray(head) {
    const arr = [];
    let current = head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }

  const testCases = [
    { head: createLinkedList([1,2,3,4,5]), expected: [1,3,5,2,4] },
    { head: createLinkedList([2,1,3,5,6,4,7]), expected: [2,3,6,7,1,5,4] },
    { head: createLinkedList([1,2]), expected: [1,2] },
    { head: createLinkedList([1]), expected: [1] },
    { head: createLinkedList([]), expected: [] }
  ];
  
  for (const test of testCases) {
    const resultHead = oddEvenList(test.head);
    const result = linkedListToArray(resultHead);
    
    if (result.length !== test.expected.length || 
        !result.every((val, idx) => val === test.expected[idx])) {
      throw new Error(\`Test failed for head=[\${linkedListToArray(test.head)}]. Expected [\${test.expected}] but got [\${result}]\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: head = [1,2,3,4,5]\nOutput: [1,3,5,2,4]`,
    constraints: ["The number of nodes in the linked list is in the range [0, 10^4].", "-10^6 <= Node.val <= 10^6"],
    hints: [
      "Use two pointers to keep track of the odd and even nodes.",
      "Iterate through the list and move the odd nodes to the odd list and the even nodes to the even list.",
      "Concatenate the two lists and return the head of the reordered list.",
    ],
  },
  {
    id: "intersection-of-two-linked-lists",
    title: "Intersection of Two Linked Lists",
    description:
      "Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists do not intersect at all, return null.",
    level: "intermediate",
    tags: ["Linked List", "Two Pointers"],
    starterCode: `function getIntersectionNode(headA, headB) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  // Helper function to create a linked list from an array
  function createLinkedList(arr) {
    if (!arr || arr.length === 0) return null;
    let head = { val: arr[0], next: null };
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = { val: arr[i], next: null };
      current = current.next;
    }
    return head;
  }

  // Helper function to convert a linked list to an array
  function linkedListToArray(head) {
    const arr = [];
    let current = head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }

  // Helper function to find the intersection node
  function findIntersectionNode(headA, headB, intersectVal) {
    let intersectNode = null;
    let currentA = headA;
    let currentB = headB;
    let skipA = 0;
    let skipB = 0;

    if (intersectVal > 0) {
      while (currentA && currentA.val !== intersectVal) {
        currentA = currentA.next;
        skipA++;
      }
      while (currentB && currentB.val !== intersectVal) {
        currentB = currentB.next;
        skipB++;
      }
      intersectNode = currentA;
    }
    return { headA, headB, intersectNode, skipA, skipB };
  }

  const testCases = [
    { intersectVal: 8, skipA: 2, skipB: 3, common: [8,4,5], expected: 8 },
    { intersectVal: 2, skipA: 3, skipB: 1, common: [2,4], expected: 2 },
    { intersectVal: 0, skipA: 2, skipB: 3, common: [0], expected: 0 },
    { intersectVal: 0, skipA: 0, skipB: 0, common: [], expected: null }
  ];
  
  for (const test of testCases) {
    const listA = createLinkedList([4,1]);
    const listB = createLinkedList([5,6,1]);
    const commonList = createLinkedList(test.common);
    const { headA, headB, intersectNode, skipA, skipB } = findIntersectionNode(listA, listB, test.intersectVal);

    let currentA = headA;
    let currentB = headB;
    let i = 0;
    while (currentA && i < skipA) {
      currentA = currentA.next;
      i++;
    }
    i = 0;
    while (currentB && i < skipB) {
      currentB = currentB.next;
      i++;
    }

    if (currentA) currentA.next = intersectNode;
    if (currentB) currentB.next = intersectNode;

    const result = getIntersectionNode(headA, headB);
    const expected = test.expected;

    if ((result === null && expected !== null) || (result !== null && expected === null) || (result !== null && expected !== null && result.val !== expected)) {
      throw new Error(\`Test failed for intersectVal=\${test.intersectVal}, skipA=\${test.skipA}, skipB=\${test.skipB}. Expected \${test.expected} but got \${result ? result.val : null}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3\nOutput: 8`,
    constraints: [
      "The number of nodes of listA is in the range [1, 3 * 10^4].",
      "The number of nodes of listB is in the range [1, 3 * 10^4].",
      "1 <= Node.val <= 10^5",
      "If the two linked lists have no intersection, return null.",
    ],
    hints: [
      "Use two pointers, one for each list.",
      "When a pointer reaches the end of its list, move it to the head of the other list.",
      "If the two pointers meet, they are at the intersection node.",
    ],
  },
  {
    id: "remove-linked-list-elements",
    title: "Remove Linked List Elements",
    description:
      "Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.",
    level: "intermediate",
    tags: ["Linked List"],
    starterCode: `function removeElements(head, val) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  // Helper function to create a linked list from an array
  function createLinkedList(arr) {
    if (!arr || arr.length === 0) return null;
    let head = { val: arr[0], next: null };
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = { val: arr[i], next: null };
      current = current.next;
    }
    return head;
  }

  // Helper function to convert a linked list to an array
  function linkedListToArray(head) {
    const arr = [];
    let current = head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }

  const testCases = [
    { head: createLinkedList([1,2,6,3,4,5,6]), val: 6, expected: [1,2,3,4,5] },
    { head: createLinkedList([]), val: 1, expected: [] },
    { head: createLinkedList([7,7,7,7]), val: 7, expected: [] }
  ];
  
  for (const test of testCases) {
    const resultHead = removeElements(test.head, test.val);
    const result = linkedListToArray(resultHead);
    
    if (result.length !== test.expected.length || 
        !result.every((val, idx) => val === test.expected[idx])) {
      throw new Error(\`Test failed for head=[\${linkedListToArray(test.head)}], val=\${test.val}. Expected [\${test.expected}] but got [\${result}]\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: head = [1,2,6,3,4,5,6], val = 6\nOutput: [1,2,3,4,5]`,
    constraints: ["The number of nodes in the list is in the range [0, 10^4].", "1 <= Node.val <= 10^5"],
    hints: [
      "Use a dummy node to simplify the code.",
      "Iterate through the list and remove the nodes with the specified value.",
      "Keep track of the previous node to update the next pointer.",
    ],
  },
  {
    id: "design-linked-list",
    title: "Design Linked List",
    description:
      "Design your implementation of the linked list. You can choose to use the singly linked list or the doubly linked list. A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node. If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the list. Assume all nodes in the linked list are 0-indexed.",
    level: "intermediate",
    tags: ["Linked List", "Design"],
    starterCode: `class MyLinkedList {
  constructor() {
    
  }

  get(index) {
    
  }

  addAtHead(val) {
    
  }

  addAtTail(val) {
    
  }

  addAtIndex(index, val) {
    
  }

  deleteAtIndex(index) {
    
  }
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    {
      operations: ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"],
      values: [[], [1], [3], [1, 2], [1], [1], [1]],
      expected: [null, null, null, null, 2, null, 3]
    },
    {
      operations: ["MyLinkedList", "addAtHead", "deleteAtIndex", "get"],
      values: [[], [1], [0], [0]],
      expected: [null, null, null, -1]
    },
    {
      operations: ["MyLinkedList", "addAtHead", "addAtTail", "addAtHead", "get", "deleteAtIndex", "addAtHead", "get"],
      values: [[], [4], [7], [1], [1], [2], [6], [1]],
      expected: [null, null, null, null, 4, null, null, 6]
    }
  ];
  
  for (const test of testCases) {
    const myLinkedList = new MyLinkedList();
    const result = [];
    result.push(null); // First operation is always the constructor

    for (let i = 1; i < test.operations.length; i++) {
      const operation = test.operations[i];
      const value = test.values[i];

      switch (operation) {
        case "addAtHead":
          myLinkedList.addAtHead(value[0]);
          result.push(null);
          break;
        case "addAtTail":
          myLinkedList.addAtTail(value[0]);
          result.push(null);
          break;
        case "addAtIndex":
          myLinkedList.addAtIndex(value[0], value[1]);
          result.push(null);
          break;
        case "get":
          result.push(myLinkedList.get(value[0]));
          break;
        case "deleteAtIndex":
          myLinkedList.deleteAtIndex(value[0]);
          result.push(null);
          break;
        default:
          result.push(null);
      }
    }

    if (result.length !== test.expected.length) {
      throw new Error(\`Test failed for operations=[\${test.operations}], values=[\${test.values}]. Expected length \${test.expected.length} but got \${result.length}\`);
    }

    for (let i = 0; i < result.length; i++) {
      if (result[i] !== test.expected[i]) {
        throw new Error(\`Test failed for operations=[\${test.operations}], values=[\${test.values}]. Expected \${JSON.stringify(test.expected)} but got \${JSON.stringify(result)}\`);
      }
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input\n["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]\n[[], [1], [3], [1, 2], [1], [1], [1]]\nOutput\n[null, null, null, null, 2, null, 3]`,
    constraints: ["0 <= index, val <= 1000", 'Please do not use the built-in LinkedList library."'],
    hints: [
      "Make sure to handle edge cases such as empty list, invalid index, etc.",
      "You can use a dummy head node to simplify the code.",
      "For doubly linked list, you need to maintain the prev pointer as well.",
    ],
  },
  // Add more problems as needed to reach 40 intermediate problems

  // ADVANCED PROBLEMS (30 total)
  {
    id: "longest-substring",
    title: "Longest Substring Without Repeating Characters",
    description: "Given a string s, find the length of the longest substring without repeating characters.",
    level: "advanced",
    tags: ["Strings", "Sliding Window", "Hash Tables"],
    starterCode: `function lengthOfLongestSubstring(s) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { input: "abcabcbb", expected: 3 },
    { input: "bbbbb", expected: 1 },
    { input: "pwwkew", expected: 3 },
    { input: "", expected: 0 },
    { input: "aab", expected: 2 }
  ];
  
  for (const test of testCases) {
    const result = lengthOfLongestSubstring(test.input);
    if (result !== test.expected) {
      throw new Error(\`Test failed for input "\${test.input}". Expected \${test.expected} but got \${result}\`);
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: "abcabcbb"\nOutput: 3\nExplanation: The answer is "abc", with the length of 3.\n\nInput: "bbbbb"\nOutput: 1\nExplanation: The answer is "b", with the length of 1.`,
    constraints: ["0 <= s.length <= 5 * 10^4", "s consists of English letters, digits, symbols and spaces."],
    hints: [
      "Try using a sliding window approach.",
      "Use a hash set to keep track of characters in the current window.",
      "When you find a repeated character, remove characters from the left until there are no duplicates.",
    ],
  },
  {
    id: "merge-intervals",
    title: "Merge Intervals",
    description:
      "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
    level: "advanced",
    tags: ["Arrays", "Sorting"],
    starterCode: `function merge(intervals) {
  // Write your code here
  
}`,
    testCode: `
// Test cases
function runTests() {
  const testCases = [
    { 
      input: [[1,3],[2,6],[8,10],[15,18]], 
      expected: [[1,6],[8,10],[15,18]] 
    },
    { 
      input: [[1,4],[4,5]], 
      expected: [[1,5]] 
    },
    {
      input: [[1,4],[0,4]], 
      expected: [[0,4]]
    }
  ];
  
  for (const test of testCases) {
    const result = merge(test.input);
    
    // Check if arrays have the same length
    if (result.length !== test.expected.length) {
      throw new Error(\`Test failed for input \${JSON.stringify(test.input)}. Expected length \${test.expected.length} but got \${result.length}\`);
    }
    
    // Check if each interval matches
    for (let i = 0; i < result.length; i++) {
      if (result[i][0] !== test.expected[i][0] || result[i][1] !== test.expected[i][1]) {
        throw new Error(\`Test failed for input \${JSON.stringify(test.input)}. Expected \${JSON.stringify(test.expected)} but got \${JSON.stringify(result)}\`);
      }
    }
  }
  
  return true;
}

runTests();`,
    examples: `Input: intervals = [[1,3],[2,6],[8,10],[15,18]]\nOutput: [[1,6],[8,10],[15,18]]\nExplanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].`,
    constraints: ["1 <= intervals.length <= 10^4", "intervals[i].length == 2", "0 <= starti <= endi <= 10^4"],
    hints: [
      "Sort the intervals based on the start time.",
      "Iterate through the sorted intervals and merge overlapping ones.",
      "Two intervals [a,b] and [c,d] overlap if b >= c.",
    ],
  },
  // Add more problems as needed to reach 30 advanced problems
]
