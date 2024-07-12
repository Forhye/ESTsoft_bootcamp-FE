var peter = {
  name: "Peter Parker",
  sayName: function (is, is2) {
    console.log(this.name + " is " + is + " or " + is2);
  },
};

var bruce = {
  name: "Bruce Wayne",
};

peter.sayName.apply(bruce, ["batman", "richman"]);
peter.sayName.apply(peter, ["ironman", "richman"]);

// call에 인수까지 넣어줄 수 있다 => apply
