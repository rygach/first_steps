class Header {
    constructor (h1, h2) {
        this.h1 = h1;
        this.h2 = h2;
    }
    render (x) {
        let out = '';
        out += `<h1>${this.h1}</h1>`;
        out += `<h2>${this.h2}</h2>`;
        document.getElementById(x).innerHTML = out;
    }
    static hello(a) {
        console.log('work static method ' + a);
    }
}


let header = new Header('Hello', 'world');

//header.render('root');

console.log(header);

// создаём новый класс(Header2), который будет наследоваться от класса Header
// добавляем в новый класс (Header2) новое свойство - hero
class Header2 extends Header {
    constructor(h1, h2, hero) {
        super(h1,h2)
        this.hero = hero;
    }
}

let header2 = new Header2('new hello', 'new site', 'gogogo');

console.log(header2);

header2.render('root');

Header2.hello('hi');

// ДЗ #1
class Man {
    constructor(name, age, passport, sex) {
        this.name = name;
        this.age = age;
        this.passport = passport;
        this.sex = sex;
    }
    render (x) {
        let out = [];
        out += `<h1>${this.name}</h1>`;
        out += `<h1>${this.age}</h1>`;
        out += `<h1>${this.passport}</h1>`;
        out += `<h1>${this.sex}</h1>`;
        document.getElementById(x).innerHTML = out;
        console.log(out);
    }
}

let man = new Man('Mary', '17', '123', 'female');
man.render('root');

// DZ #2
class Employer extends Man {
    constructor(name, age, passport, sex, create, salary) {
        super(name, age, passport, sex);
        this.create = create;
        this.salary = salary;
    }
    outing () {
        console.log(this);
    }
}

let employer = new Employer('Grut', '22', '123', 'tree', '31.02.1995', '$2500');

employer.outing();
