var peter = {
  name: "Peter Parker",
  sayName: function () {
    console.log(this.name);
  },
};

var bruce = {
  name: "Bruce Wayne",
};
peter.sayName.call(bruce);

peter.sayName.call(peter);
peter.sayName(this);

// call을 부를때는 동일 키값을 넣어줘야 제대로 찾는다
