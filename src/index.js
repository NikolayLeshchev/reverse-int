module.exports = function reverse (n) {
  n = Math.abs(n);
  n = String(n);
  return [...n].reverse().join("");
}
