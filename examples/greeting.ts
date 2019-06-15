interface Hello {
  name: number
}
function printa(hello: Hello): void {
  console.log(hello.name)
}
let obj = {name: 123};
printa(obj);
