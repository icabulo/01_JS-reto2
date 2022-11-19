console.log(myFunction({ a: 1, b: 2, c: 3 }, 'b'));
console.log(myFunction({ x: 'a', y: 'b', z: 'c' }, 'a'));
console.log(myFunction({ x: 'a', y: 'b', z: undefined }, 'z'));
function myFunction(a, b) {
  if (a[b] == undefined) {
    return false;
  }
  else return true
}
