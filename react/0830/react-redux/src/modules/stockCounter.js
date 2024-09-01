export const sale = () => {
  return { type: "SALE" };
};

export const soldOut = () => {
  return { type: "SOLD_OUT" };
};

const initialState = {
  message: "판매중입니다.",
};

const stockCounter = (state = initialState, action) => {
  switch (action.type) {
    case "SALE":
      return { ...state, message: "할인중입니다." };
    case "SOLD_OUT":
      return { ...state, message: "매진되었습니다." };
    default:
      return state;
  }
};

export default stockCounter;
