//There is a collection of input strings and a collection of query strings.
//For each query string, determine how many times it occurs in the list of
//input strings. Return an array of the results.
//Constraints
//1<= n <=1000
//1<= q <=1000
//1<= |strings[i]|,|queries[i]<=20

// Complete the matchingStrings function below.
function matchingStrings(strings, queries) {
  let result = [];

  result = queries.map((query) => {
    let count = 0;
    for (let i = 0; i < strings.length; i++) {
      if (query === strings[i]) {
        count++;
      }
    }
    return count;
  });

  return result;
}

matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"])
