var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
        this.name2 = theName + 'hh';
    }
    return Animal;
}());
console.log(new Animal("Cat").name);
console.log(new Animal("Cat").name2);
