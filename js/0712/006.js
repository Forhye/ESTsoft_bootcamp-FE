// const person = {
//   name: "hojun",
//   age: 25,
//   a() {
//     console.log(this);
//     console.log(this.name);
//     function b() {
//       console.log(this);
//       console.log(this.name);
//         function c() {
//           console.log(this);
//           console.log(this.name);
//         }
//         c(); //c를 실행한다
//         // c도 마찬가지로 객체.함수 안의 일반 함수로
//         // this를 호출하면 전역 개체를 반환한다.
//     }
//     b(); // b를 실행한다
//     // b는 객체 안, 함수. 안의 일반 함수로
//     // b안의 this를 호출할 경우 전역 개체를 반환한다.
//   },
// };
// person.a();

// a에서 this = person
// b에서 this = 상위스코프(상위에서 person을 보고있음) 즉 person
// c에서 this = 상위스코프(상위에서 person을 보고있음) 즉 person
const person = {
  name: "hojun",
  age: 25,
  a() {
    console.log(this);
    console.log(this.name);
    let b = () => {
      console.log(this);
      console.log(this.name);
      let c = () => {
        console.log(this);
        console.log(this.name);
      };
      c();
    };
    b();
  },
};
person.a();
