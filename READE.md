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
4. 只读数组
```
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!
```
5. 额外的属性检查
[propName: string]: any;
```
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}
```
6. 函数类型
interface 接口类型name {
  (args: type, args2: type): type;     // (参数key：参数类型)： return类型
}
```
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
/**
 * 函数类型的接口描述
 */
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}
/**
 * 简单写法
 */

let mySearch2: SearchFunc;
mySearch2 = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}

```
7. 可索引的类型
不太懂。。。。

8. 类类型
```
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
```
你也可以在接口中描述一个方法，在类里实现它，如同下面的setTime方法一样：
```
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}
```

9. 类静态部分与实例部分的区别
当一个类实现了一个接口时，只对其实例部分进行类型检查。 constructor存在于类的静态部分，所以不在检查的范围内。

```
// 构造器 静态部分接口
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
// 构造器实例部分接口
interface ClockInterface {
  tick();
}

// 工厂模式
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
      console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
      console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

```

10. 继承接口
```
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}
// 单个继承
interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;

// 多个继承
interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square2 = <Square>{};
square2.color = "blue";
square2.sideLength = 10;
square2.penWidth = 5.0;
```
11. 混合类型

希望一个对象可以同时具有上面提到的多种类型.

一个例子就是，一个对象可以同时做为函数和对象使用，并带有额外的属性。
```
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```
12. 接口继承类
当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。
```
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {

}

// Error: Property 'state' is missing in type 'Image'.
class Image implements SelectableControl {
    select() { }
}

class Location {

}
```

## class

1. 类

我们在引用任何一个类成员的时候都用了this。 它表示我们访问的是类的成员。

最后一行，我们使用new构造了Greeter类的一个实例。 它会调用之前定义的构造函数，创建一个Greeter类型的新对象，并执行构造函数初始化它。

```
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    returhn 'hello  ' + this.greeting
  }
}
let greeter = new Greeter('world');
```

2. 继承
```
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
```
3. public, private, protected
- public: 默认
- private: 不能在申明它的类的外部访问
- protected: protected修饰符与private修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问
```
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // 错误Property 'name' is protected and only accessible within class 'Person' and its subclasses.
```
protected的构造函数
这意味着这个类不能在包含它的类外被实例化，但是能被继承

```
class Person {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}

// Employee 能够继承 Person
class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.
```

4. readonly
```
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
```

5. 参数属性
```
class Animal {
    constructor(private name: string) { }   // 参数name增加属性验证
    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
```

6. 存取器
即getter 和 setter
```
let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    alert(employee.fullName);
}
```

