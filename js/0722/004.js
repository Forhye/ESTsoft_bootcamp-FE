// 비공개 프로퍼티

class Robot {
  #password;

  constructor(name, pw) {
    this.name = name;
    this.#password = pw;
  }

  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }

  getPassword() {
    return this.#password;
  }

  setPassword(pw) {
    this.#password = pw;
  }
}

const robot = new Robot("로봇", "1234");
// console.log(robot.#password);
// vsc에서는 오류로 패스워드 값에 접근할 수 없다고 뜬다
//SyntaxError: Private field '#password' must be declared in an enclosing class

// 브라우저 개발자 도구에서는 접근이 가능

// 로봇 객체가 준것
// 로봇을 파헤쳐서 끄집어 내는게 아니라
console.log(robot.getPassword(), "private 변수를 가져오기");
robot.setPassword("456789");
console.log(robot.getPassword(), "변경된 private 변수 가져오기");
