import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react";
import { sale, soldOut } from "./../modules/stockCounter";

export default function Massage() {
  const { stock, goods } = useSelector((state) => ({
    stock: state.goodsReducer.stock,
    goods: state.goodsReducer.goods,
    shallowEqual,
  }));

  const { message } = useSelector((state) => {
    return { message: state.stockCounter.message };
  });

  const dispatch = useDispatch();
  const onSale = () => dispatch(sale());
  const onSoldOut = () => dispatch(soldOut());

  useEffect(() => {
    if (stock <= 0) {
      onSoldOut();
    } else {
      onSale();
    }
  }, [stock]);

  return (
    <div>
      <h2></h2>
    </div>
  );
}
