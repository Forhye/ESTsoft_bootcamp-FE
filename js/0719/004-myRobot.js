// 리턴값이 없으면 undifiend가 들어간다

// 로봇이라는 객체가 만들어지는 과정
function Robot(menu) {
  // 인자로 생성할때 필요한거
  this.menu = menu; // 생성할때 생기는 속성 = 생성할때 필요한거
  this.randMenu = function () {
    // this.밥먹기 = 함수(음식)
    const randomFoodIndex = Math.floor(Math.random() * this.menu.length);
    console.log(`오늘 저녁은 ${this.menu[randomFoodIndex]}입니다.`);
  };
}

let menus = ["족발", "피자", "아이스크림", "닭고기솥밥"];
let food = new Robot(menus);

food.randMenu();

// 프로토타입 : 로봇의 속성을 이어받게 해주는 것
