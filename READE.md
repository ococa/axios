# typescript 学习

## 环境
node
typescript
## typescript 类型注解
## 常用语法

### 基础类型

1. 布尔：boolean
2. 数字：number
3. 字符串：string
4. 单类型数组：  number[]      ->  [1, 2, 3] 
5. 单类型数组：  Array[number] -> [1, 2, 3] 
6. 元组：  [number, string]          // 元组 由字符串和数字组成的数组
```
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
```
7. 枚举类型：
```    
enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}
let c: Color = Color.Greem; 
let colorName: string = Color[2];
console.log(colorName);     // Green
```
8. 任意值： any
```
let c: any = 4;
```
9. void：
```
```
10. null:

11. undefined:

12. never：
```
function error(message: string): nerver {
  thorw new Errow(message);
}
function fail() {
  return errot('somethind errot');
}
// 无限循环 没有返回 没终点
function inifiniteLoop(): never {
  while(true) {

  }
}
```
13. object类型
```
declare function create(o: object | null): void;
create({props: 0});
create(null);
create(42);
create(false);
```


### 类型断言（类型转换）
```
let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;       // <> 断言
let strLength: number = (someValue as string).length;     // as 断言
```

## 接口

1. 接口basic
interface 变量对象 {
  key: type
}
```
interface Hello {
  name: number
}
function printa(hello: Hello): void {
  console.log(hello.name)
}
let obj = {name: 123};
printa(obj);
``` 

2. 可选属性
key?: type
```
interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number;} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({color: "black"});

```
3. 只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}
```
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
```
