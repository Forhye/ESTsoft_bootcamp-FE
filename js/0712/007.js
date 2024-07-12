[1, 2, 3].forEach(
  function () {
    console.log(this);
  },
  [10, 20, 30]
);
