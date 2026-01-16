// function createMovie(title, desp) {
//   return {
//     title: title,
//     desp: desp,
//   };
// }

class CreateMovie {
  constructor(a, b) {
    this.title = a;
    this.desp = b;
  }

  sayHello() {
    console.log(`Hello, you are watching ${this.title}`);
  }
}

const avator = new CreateMovie("Avatar", "Blue people save their planet");
const frozen = new CreateMovie("Frozen", "Princess with Mr. Freeze powers");

// console.log(avator);
avator.sayHello()
