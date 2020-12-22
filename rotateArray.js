function rotLeft(a, d) {
// a = [1,2,3,4,5];
// d = 4;
// Result should be = [5,1,2,3,4]
let moves = d;
while (moves > a.length) {
  moves = moves - a.length;
}

let lastElements = a.slice(0,moves)


a.splice(0, moves);
a.push(...lastElements)


return a;

}

rotLeft([1,2,3,4,5],3);