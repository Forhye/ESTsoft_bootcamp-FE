const hye = {
  now: "student",
  afterJob: (levelUp) => {
    console.log(levelUp);
  },
  nowLevel: 1,
  levelUp: () => {
    this.level++;
  },
  checking: () => {
    console.log(hye.now);
    if (hye.now === "student") {
      alert("아직 공부중입니다.");
    } else {
      alert("개발자가 되었습니다!");
    }
  },
};

hye.afterJob();
hye.checking();
