interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare(config: SquareConfig) {
  // ...
  return config;
}

let squareOptions: SquareConfig = { colourss: "red", width: 100 };
let mySquare = createSquare(squareOptions);
