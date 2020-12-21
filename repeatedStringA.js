function repeatedString(s, n) {
  const range = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );
  let positions = range(0, s.length - 1, 1);

  positions.forEach((position) => {
 
      if (s.length + 1 !== n) {
        s = s + s[position];
      }
    
  });

  console.log(s);
}

repeatedString("ab", 10);
