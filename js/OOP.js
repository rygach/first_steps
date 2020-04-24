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

//console.log(header);

// создаём новый класс(Header2), который будет наследоваться от класса Header
// добавляем в новый класс (Header2) новое свойство - hero
class Header2 extends Header {
    constructor(h1, h2, hero) {
        super(h1,h2)
        this.hero = hero;
    }
}

let header2 = new Header2('new hello', 'new site', 'gogogo');

//console.log(header2);

//header2.render('OOP');

//Header2.hello('hi');

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
        out += `<li>${this.name}</li>`;
        out += `<li>${this.age}</li>`;
        out += `<li>${this.passport}</li>`;
        out += `<li>${this.sex}</li>`;
        document.getElementById(x).innerHTML = out;
        console.log(out);
    }
}

let man = new Man('Mary', '17', '123', 'female');
//man.render('OOP');

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

//employer.outing();


// ката1 [COMPLETE]
// function generateIntegers(m, n) {
//     let arr = [];
//     let spec = ((n - m) + 1);
//     for (i = 0; i < spec; i++) {
//         arr.push(i);
//     }
//     let a = 0;
//     for (m; m <= n; m++) {
//         arr[a] = m;
//         a++;
//     }
//     console.log(arr);
// }

// generateIntegers(0,0);

// ката2 [NON COMPLETE]
// function missingValues(arr) {
//     between = new Set(arr);
//     result = Array.from(between);
//     let a = 0;
//     let spec = [];
//     for (i=0;i<result.length;i++) {
//         if (arr.indexOf(result[i])) {a++;}
//     }
//     return console.log(a);
// }
// let looking = [1, 2, 3, 3];

// missingValues(looking);