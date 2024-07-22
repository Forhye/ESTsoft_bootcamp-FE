class Robot {
  constructor(name) {
    this.name = name;
  }
  sayYourName() {
    console.log(`제 이름은 ${name} 입니다 :)`);
  }
}

const robot = new Robot("hehe");
console.log(robot);
