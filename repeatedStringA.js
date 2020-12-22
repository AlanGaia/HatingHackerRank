function repeatedString(s, n) {
  let charsInString = s.length;
  let AsesInString  = s.split('').sort().lastIndexOf('a')+1;
  let restOfString = n % charsInString;
  let extraLetters = s.slice(0,restOfString);
  extraLetters = extraLetters.split('').sort().lastIndexOf('a')+1;

  let result = Math.round((n / charsInString))* AsesInString + extraLetters;

  return result



}

console.log(repeatedString("aba", 10)); 