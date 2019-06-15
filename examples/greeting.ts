let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;
