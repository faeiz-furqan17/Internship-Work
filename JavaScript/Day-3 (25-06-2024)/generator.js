function* fn() {
  let id = Math.floor(Math.random() * 10) + 1;
  while (true) {
    yield id;
    id = Math.floor(Math.random() * 10) + 1;
  }
}
console.log(fn().next());
console.log(fn().next());
console.log(fn().next());
console.log(fn().next());
console.log(fn().next());
console.log(fn().next());
console.log(fn().next());
console.log(fn().next());
