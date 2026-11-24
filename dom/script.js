/*
 Array
 Object
 Classes
 OOP


 Pseronel => name,id,phone number , email
 Teacher=> name,id,phone number , email
 Student=> name,id,phone number , email
 Manager=> name,id,phone number , email
*/

class Animal {
    makeSound() {
        console.log("Animal Sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof!")
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Meow!")
    }
}











// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     introduce() {
//         console.log(`My name is ${this.name}`);
//     }
// }

// class Student extends Person {
//     constructor(name, id, phone, number, email) {
//         this.name = name;
//         this.age = age;
//         this.score = score;
//     }

//     introduce() {
//         console.log(`My name is ${this.name}`);
//     }

//     isPassed() {
//         console.log(this.score >= 50 ? "Passed" : "Failed");
//         return 0;
//     }
// }

// class Teacher extends Person {
//     constructor(name, id, phone, number, email) {
//         this.name = name;
//         this.age = age;
//         this.score = score;
//     }

//     introduce() {
//         console.log(`My name is ${this.name}`);
//     }

//     isPassed() {
//         console.log(this.score >= 50 ? "Passed" : "Failed");
//         return 0;
//     }
// }



// let student1 = new Student("Ahmed", 22, 50, "test@gmail@com");
// let student2 = new Student("Sara", 20, 95, "test@gmail@com");

// student1.introduce();

// console.log(student1.isPassed() ? "Passed" : "Failed");

// student2.introduce();


// let students = [
//     { id: 1, name: "Ahmed", age: 20 },
//     { id: 2, name: "Ahmed 2", age: 20 },
//     { id: 3, name: "Ahmed 3", age: 20 },
// ];

// let names = students.map(function (value) {
//     return value.name
// });

// console.log("names : ", names);


// student1.introduce();

// student1.age = 23;
// delete student1.city;

console.log("Student Name : ");

// students[1] = "ffff";

// for (let index = 0; index < students.length; index++) {
//     const element = students[index];
//     console.log(element);
// }

// students.forEach(function (value) {
//     console.log(value);
// })

// const mapList = students.map(function (value) {
//     return value * 2;
// });

// const filterList = students.filter(function (value) {
//     return value >= 20;
// });

// console.log("mapList : ", mapList);
// console.log("filterList : ", filterList);

// // console.log(students[1]);
// // console.log(students[students.length - 1]);


// // const posts = document.getElementById("posts");




// // fetch("https://jsonplaceholder.typicode.com/posts").then(res => {
// //     return res.json();
// // }).then(data => {
// //     console.log("data  : ", data);
// //     let articles = ``;

// //     for (let index = 0; index < data.length; index++) {
// //         const post = data[index];
// //         articles += `
// //                 <article>
// //                 <img
// //                 src="https://www.freecodecamp.org/news/content/images/2021/09/Document.jpg"
// //                 alt=""
// //                 />
// //                 <div>
// //                 <h1>${post.title}</h1>
// //                 <p>${post.body}</p>
// //                 </div>
// //             </article>`;
// //         console.log("post : ", post);
// //     }

// //     posts.innerHTML = articles;
// // });
