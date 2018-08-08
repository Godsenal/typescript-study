"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
/* Simple types example */
function getAllDevelopers() {
    const developers = [
        { id: 0, name: "James", skill: enums_1.Category.Angular, age: 24 },
        { id: 1, name: "John", skill: enums_1.Category.React },
        { id: 2, name: "Max", skill: enums_1.Category.Angular, age: 36 },
        { id: 3, name: "Ryan", skill: enums_1.Category.Vue, age: 20 },
        { id: 4, name: "Merrill", skill: enums_1.Category.Vue, age: 21 }
    ];
    return developers;
}
function isBelow(standard) {
    return (value) => standard > value;
}
function findBySkill(developers, skill) {
    return developers.filter(developer => developer.skill === skill);
}
function findByAgeLimit(developers, limit) {
    return developers.filter(developer => developer.age && isBelow(limit)(developer.age));
}
function findById(items, id) {
    return items.filter(item => item.id === id);
}
function consoleField(items, field) {
    items.map(item => console.log(item[field]));
}
const developers = getAllDevelopers();
const wantedSkill = enums_1.Category.React;
console.info(`-- ${enums_1.Category[wantedSkill]} Developers -- `);
consoleField(findBySkill(developers, wantedSkill), "name");
const wantedAge = 30;
console.info(`-- Developers under age ${wantedAge} -- `);
consoleField(findByAgeLimit(developers, wantedAge), "name");
const wantedId = 2;
console.info(`-- ID ${wantedId} developer -- `);
consoleField(findById(developers, wantedId), "name");
/* Class example */
class CoDeveloper {
    constructor(id, name, skill, career, age) {
        this.id = id;
        this.name = name;
        this.skill = skill;
        this.career = career;
        this.age = age;
        this.printInfo();
        setInterval(() => {
            console.log('After a year...');
            this.updateYear();
            this.printInfo();
        }, 3000);
    }
    get class() {
        if (this.career > 5) {
            return 'senior';
        }
        return 'junior';
    }
    get salary() {
        return this.career * 1000;
    }
    printInfo() {
        console.log(`-- Hello. ${this.name}! Your salary is ${this.salary}. And your ${this.class} Developer! --`);
    }
    updateYear() {
        ++this.career;
    }
}
developers.map((developer, i) => {
    const { id, name, skill, age } = developer;
    new CoDeveloper(id, name, skill, i, age);
    return;
});
//# sourceMappingURL=app.js.map