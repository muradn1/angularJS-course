
// also works
// angular.module("myTimerApp").controller("timeCtrl", () => { alert("hello from time controller")})

//module.controller("timeCtrl", () => { alert("hello from time controller")})

module.controller("formCtrl", FormCtrl)


// DI dependency injection - IOC
function FormCtrl($scope) {
    $scope.person = new Person();
    $scope.isVisible = false;

    $scope.resetName = function() {
        $scope.person.name='';  
    }
}

class Person {
    constructor(name, age, password, gender, vehicleKind, haveBike) {
        this.name = name;
        this.age = age;
        this.password = password;
        this.gender = gender;
        this.vehicleKind = vehicleKind;
        this.haveBike = haveBike;
    }

    toString() {
        const { name, age, password, gender, vehicleKind, haveBike } = this;
        return `name: ${name}, age: ${age}, password: ${password}, gender: ${gender}, vehicleKind: ${vehicleKind}, haveBike: ${haveBike}`;
    }
}