var User = /** @class */ (function () {
    function User(fristName, lastName) {
        this.fristName = fristName;
        this.lastName = lastName;
        this.fullName = fristName + ' ' + lastName;
    }
    return User;
}());
function greeting(person) {
    return 'hello' + person.fristName + person.lastName;
}
;
var user = new User(fristName, 1, lastName, 'wang');
console.log(greeting(user));
