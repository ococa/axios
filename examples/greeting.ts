class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}

// 错误：使用'string'索引，有时会得到Animal!
interface NotOkay {
  [x: number]: Animal;
  [x: string]: Dog;
}
