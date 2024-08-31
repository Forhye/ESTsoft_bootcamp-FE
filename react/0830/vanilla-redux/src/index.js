import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number"); // 수량
const quantity = document.getElementById("quantity"); // 페이지 하단에 총 수량
const totalPrice = document.getElementById("total"); // 페이지 하단에 총 가격

const PRICE = 17500;

const countReucer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(countReucer);
// 더이상 권장되지 않는다. 그래도 사용은 가능
// 리덕스 최신판 리덕스 툴킷 configureStore을 사용할 것을 권장
// configureStore 스토어도 만들면서 리듀서들을 합칠 수 있다.

// let count = 0;

// UI Update - text
const updateResult = () => {
  number.innerText = store.getState();
  quantity.innerHTML = store.getState();
  totalPrice.innerHTML = store.getState() * PRICE;
};
store.subscribe(updateResult);

// State Change
const addNumber = () => {
  store.dispatch({ type: "ADD" });
  minus.disabled = false;
};

// State Change
const substractNumber = () => {
  store.dispatch({ type: "MINUS" });
  if (store.getState() <= 0) {
    minus.disabled = true;
  }
};

// // Init
// number.innerHTML = count;
// updateResult(count);

// Event
plus.addEventListener("click", addNumber);
minus.addEventListener("click", substractNumber);
