// XHR 코드 실습

let result;
function xhrRequest() {
  const requestObj = new XMLHttpRequest();
  requestObj.open("GET", "009-practice.txt");
  requestObj.onreadystatechange = () => {
    if (requestObj.readyState === 4 && requestObj.status === 200) {
      result = requestObj.responseText; // 서버로부터 수신된 텍스트를 반환
      document.write(result);
    }
  };
  requestObj.send();
}

xhrRequest();

const worldOpen = new Promise((resolve, reject) => {
  const requestObj = new XMLHttpRequest();
  requestObj.open("GET", "009-practice.txt");
  requestObj.onreadystatechange = () => {
    if (requestObj.readyState === 4) {
      if (requestObj.status === 200) {
        const result = requestObj.responseText;
        resolve(result);
      } else {
        reject(reject);
      }
    }
  };
  requestObj.send();
});

worldOpen
  .then((asyncResult) => {
    // document.write("월드가 생성되었습니다");
    return asyncResult;
  })
  .catch((error) => {
    alert("월드가 생성되지 않았습니다.");
    return error;
  });
