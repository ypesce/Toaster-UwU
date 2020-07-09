class User {
    constructor(firstName, lastName, age, sex, friends) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.sex = sex;
        this.friends = friends;
    }

}


let moi = new User("yohan", "pesce", 12, "M", ["Manu", "Natan"])

console.log(moi.firstName, moi.lastName)