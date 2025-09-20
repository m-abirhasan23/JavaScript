function repeatVowels(str) {
  const vowels = "aeiou";
  let res = "";
  let vowelCount = 0; // counts how many vowels we’ve seen so far

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (vowels.includes(ch.toLowerCase())) {
      vowelCount++; 
      res += ch + ch.toLowerCase().repeat(vowelCount - 1);
    } else {
      res += ch;
    }
  }
  return res;
}

console.log(repeatVowels("hello")); 

