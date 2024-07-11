const data = [
  {
    _id: "642ba3980785cecff3f39a8d",
    index: 0,
    age: 28,
    name: "Annette Middleton",
  },
  {
    _id: "642ba398d0fed6e17f2f50c9",
    index: 1,
    age: 37,
    name: "Kidd Roman",
  },
  {
    _id: "642ba39827d809511d00dd8d",
    index: 2,
    age: 39,
    name: "Best Ratliff",
  },
];

const ageSum = data.reduce((a, c) => -a + c.age, 0);

console.log(ageSum);
