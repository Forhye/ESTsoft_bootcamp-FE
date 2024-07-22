// super

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

class BabaRobot extends Robot {
  constructor(name, age) {
    super(name);
    // this.name = name;
    this.age = age;
  }
  sayYourName() {
    //상속받아서 자동 완성 됨
  }
}

const BabyRobot = new BabaRobot("hehee", 1);
console.log(BabyRobot);
