function Person(name, age, password, gender, vehicleKind, haveBike) {
    this.name = name;
    this.age = age;
    this.password = password;
    this.gender = gender;
    this.vehicleKind = vehicleKind;
    this.haveBike = haveBike;

    this.toString = () => {
        const { name, age, password, gender, vehicleKind, haveBike } = this;
        return `name: ${name}, age: ${age}, password: ${password}, gender: ${gender}, vehicleKind: ${vehicleKind}, haveBike: ${haveBike}`;
    };
}