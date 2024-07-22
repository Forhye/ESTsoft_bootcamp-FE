// 상속받기 실습

class Sausage {
  constructor(meterial1, meterial2) {
    this.meterial1 = meterial1;
    this.meterial2 = meterial2;
  }

  taste() {
    console.log(`소세지에서 ${this.meterial1}와 ${this.meterial2}맛이 난다`);
  }
}

const flavorSsg = new Sausage("소고기", "파");
flavorSsg.taste();

//--------------------------------------------------

class FireSausage extends Sausage {
  // 부모에서 받아오기 때문에 굳이 constructor를 안써줘도 된다.
  // 만약 추가로 더 받아오거나 부모의 생성자와 다르다면 써줘야 함

  // 예시
  // constructor(meterial1,meterial2,meterial3){
  //   super(meterial1,meterial2)
  //   this.meterial3 = meterial3
  // }
  tasteFire() {
    super.taste();
    // console.log(`${this.meterial1}맛이 난다`);
  }
}

const fireTaste = new FireSausage("🔥🔥🔥", "불");
fireTaste.tasteFire();

// class Sausage {
//   constructor(ingredient1, ingredient2) {
//     this.ingredient1 = ingredient1;
//     this.ingredient2 = ingredient2;
//   }
//   taste() {
//     console.log(`${this.ingredient1}와 ${this.ingredient2}맛이 난다!`);
//   }
// }
// class FireSausage extends Sausage {
//   tasteFire() {
//     this.taste();
//     console.log("불맛🔥");
//   }
// }
// const sausage = new Sausage("사과", "땅콩");
// const fireSausage = new FireSausage("오렌지", "아몬드");
// sausage.taste();
// fireSausage.tasteFire();
