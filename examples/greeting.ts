class User {
  fullName: string;
  fristName: string;
  lastName: string;
  constructor(fristName: string, lastName: string) {
    this.fristName = fristName;
    this.lastName = lastName;
    this.fullName = fristName + ' ' + lastName;
  }
}


interface Person {
  fristName: string;
  lastName: string;
}

function greeting(person: Person) {
  return 'hello' + person.fristName + person.lastName;
};

let user = new User('test', 'wang')


console.log(greeting(user))
