// const req = new Promise((resolve, reject) => {
//   const requestObj = new XMLHttpRequest();
//   requestObj.open("GET", "https://test.api.weniv.co.kr/mall");
//   requestObj.onreadystatechange = () => {
//     if (requestObj.readyState === 4 && requestObj.status === 200) {
//       result = requestObj.responseText;
//       resolve(JSON.parse(result));
//     } else if (requestObj.readyState === 4 && requestObj.status !== 200) {
//       reject(new Error("실패하였습니다."));
//     }
//   };
//   requestObj.send();
// });

// req
// .then((successResult) => {
//   // 보통 response로 씀 (응답)
//   console.log(successResult);
//   const data = successResult;
//   const $ol = document.createElement("ol");

//   data.forEach((value) => {
//     let $li = document.createElement("li");
//     let $span = document.createElement("span");
//     let $img = document.createElement("img");

//     $li.id = value.id;
//     $li.textContent = value.productName;
//     $span.textContent = value.modDate;
//     $img.src = "https://test.api.weniv.co.kr/" + value.thumbnailImg;
//     $img.style.width = "100px";
//     console.log(value.thumbnailImg);

//     $li.append($img, $span);
//     $ol.appendChild($li);
//   });
//   document.body.appendChild($ol);
//   // alert(`${successResult} 을 성공적으로 받아왔습니다`);
//   return successResult;
// })
// .catch((failResult) => {
//   console.error(failResult);
//   alert("실패하였습니다.");
//   return failResult;
// });

// => fetch로 바꾸기
const req = fetch("https://test.api.weniv.co.kr/mall");
req
  .then((res) => {
    // const data = res.json();
    return res.json();
  })
  .then((value) => {
    const data = value;
    const $ol = document.createElement("ol");
    data.forEach((value) => {
      let $li = document.createElement("li");
      let $span = document.createElement("span");
      let $img = document.createElement("img");

      $li.id = value.id;
      $li.textContent = value.productName;
      $span.textContent = value.modDate;
      $img.src = "https://test.api.weniv.co.kr/" + value.thumbnailImg;
      $img.style.width = "100px";

      $li.append($img, $span);
      $ol.appendChild($li);
    });
    document.body.appendChild($ol);
    return value; // 필요할 때 넣기 , 추후에 뭔가 요청해야 할 때
  })
  .catch((err) => {
    console.error(err);
    return err; // 필요할 때 넣기
  });

// const req2 = fetch("https://test.api.weniv.co.kr/mall");

// function drawProduct2(product) {
//   const $main = document.querySelector("main");
//   const $div = document.createElement("div");
//   const $h2 = document.createElement("h2");
//   const $img = document.createElement("img");

//   $h2.textContent = product.productName;
//   $img.src = "https://test.api.weniv.co.kr/" + product.thumbnailImg;
//   $main.appendChild($div).append($h2, $img);
// }

// req2
//   .then((response) => {
//     // console.log(response);
//     // console.log(response.json());
//     return response.json();
//   })
//   .then((result) => {
//     console.log(result);
//     result.forEach(drawProduct2);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
