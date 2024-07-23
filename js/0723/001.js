// 프로미스

const req = new Promise((resolve, reject) => {
  const requestObj = new XMLHttpRequest();
  requestObj.open("GET", "https://test.api.weniv.co.kr/mall");
  requestObj.onreadystatechange = () => {
    if (requestObj.readyState === 4 && requestObj.status === 200) {
      result = requestObj.responseText;
      resolve(JSON.parse(result));
    } else if (requestObj.readyState === 4 && requestObj.status !== 200) {
      reject(new Error("실패하였습니다."));
    }
  };
  requestObj.send();
});

req
  .then((successResult) => {
    // 보통 response로 씀 (응답)
    console.log(successResult);
    const data = successResult;
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
      console.log(value.thumbnailImg);

      $li.append($img, $span);
      $ol.appendChild($li);
    });
    document.body.appendChild($ol);
    // alert(`${successResult} 을 성공적으로 받아왔습니다`);
    return successResult;
  })
  .catch((failResult) => {
    console.error(failResult);
    alert("실패하였습니다.");
    return failResult;
  });

// 모든 데이터를 가져오는 방법
// const parsedData = JSON.parse(result);
// const displayData = JSON.stringify(parsedData, null, 3); // JSON 문자열로 변환할값, 문자열화 동작방식을 변경하는 함수 등(null이나 빈값이면 객체의 모든 속성들이 JSON 문자열과 결과에 포함된다), 공백 삽입 들여쓰기 숫자인거 같다 10이 최대
// document.body.innerHTML = `<pre>${displayData}</pre>`;

// const req = new Promise((resolve, reject) => {
//     const requestObj = new XMLHttpRequest();
//     requestObj.open("GET", "https://test.api.weniv.co.kr/mall");
//     requestObj.onreadystatechange = () => {
//       if (requestObj.readyState === 4 && requestObj.status === 200) {
//         resolve(requestObj.responseText);
//       } else if (requestObj.readyState === 4 && requestObj.status !== 200) {
//         reject(requestObj.response);
//       }
//     };
//     requestObj.send();
//   });

//   req
//     .then((result) => {
//       const parsedData = JSON.parse(result);
//       const displayData = JSON.stringify(parsedData, null, 3);
//       document.body.innerHTML = `<pre>${displayData}</pre>`;
//     })
//     .catch((error) => {
//       console.log(`에러: ${error}`);
//       document.body.innerText = error;
//     });
