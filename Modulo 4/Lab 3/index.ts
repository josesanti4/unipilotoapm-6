class Person{
    id: number;
    age: number;
    name: string;
    lastname: string;

    constructor(id: number, age: number, name: string, lastname: string){
        this.id = id;
        this.age = age;
        this.name = name;
        this.lastname = lastname;
    }
}

class Students extends Person {
    classes: [string];
    grade: number;
    group: string;

    constructor(id: number, age: number, name: string, lastname: string, classes: [string], grade: number, group: string){
        super(id, age, name, lastname);
        this.classes = classes;
        this.grade = grade;
        this.group = group;
    }    
}

class Teachers extends Person{
    profession: string;
    grades: [number];
    groups: [string];

    constructor(id: number, age: number, name: string, lastname: string, profession: string, grades: [number], groups: [string]){
        super(id, age, name, lastname);
        this.profession = profession;
        this. grades = grades;
        this.groups = groups;
    }
}