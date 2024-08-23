import React from "react";
import PriceFormatter from "./PriceFormatter";

function App2() {
  const ProductImage = ({ src, alt }) => {
    return <img src={src} alt={alt}></img>;
  };

  const ProductTitle = ({ children }) => <h2>{children}</h2>;

  const ProductSubTitle = ({ children }) => <h3>{children}</h3>;

  const ProductDescription = ({ children }) => <p>{children}</p>;

  //   const ProductPrice = (props) => {
  //     return (
  //       <p>
  //         가격 : {props.price}
  //         {props.currencyCode}
  //       </p>
  //     );
  //   };

  const ProductPrice = ({ children, currency }) => (
    <p>
      가격 : {children} {currency}
    </p>
  );

  const ContCard = ({ children }) => (
    <div className="cont-card">{children}</div>
  );

  return (
    <ContCard>
      <ProductImage
        src={"https://picsum.photos/id/237/200/300"}
        alt={"검은강아지"}
      />
      <ProductTitle>검은 강아지를 놀아줄 장난감을 사세요!</ProductTitle>
      <ProductSubTitle>핸드볼_검은 강아지용</ProductSubTitle>
      <ProductDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        distinctio sed molestias saepe reiciendis fugit illum enim et inventore,
        aliquam esse non nam consectetur minima atque consequuntur voluptates,
        eum quia.
      </ProductDescription>
      {/* <ProductPrice price={1000} currencyCode={"KRW"} /> */}
      <ProductPrice currency={"KRW"}>{1000}</ProductPrice>
      <PriceFormatter price={100} currencyCode={"GBP"} />
    </ContCard>
  );
}

export default App2;
