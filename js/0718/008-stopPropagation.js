// stopPropagation :이벤트 흐름(이벤트 전파) 자체를 막음

const submit = document.querySelector(".submit");
submit.addEventListener("click", (event) => {
  console.log("clicked");
  event.preventDefault();
  event.stopPropagation();
});

document.body.addEventListener("click", () => {
  console.log("event still alive!");
});
