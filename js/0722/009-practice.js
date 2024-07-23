// XHR 코드 실습

let result;
function xhrRequest() {
  const requestObj = new XMLHttpRequest(); //0
  // 요청을 위한 XHR객체 생성
  requestObj.open("GET", "009-practice.txt"); //1
  // 요청 준비 (GET 데이터를 받아올때 ) 첫번째 요소에는 http 메서드, 두번째는 요청을 보낼 URL
  requestObj.onreadystatechange = () => {
    //=>onreadystatechange 정보를 send 받는동안 상태별로 할일을 설정해준다
    // 2,3,4 세 번이 실행
    //요청 보낼때, 요청상태가 바뀔때 마다 실행된 콜백함수 설정
    if (requestObj.readyState === 4 && requestObj.status === 200) {
      result = requestObj.responseText; // 서버로부터 수신된 텍스트를 반환
      document.write(result);
      // console.log(JSON.parse(result)[0]);
      // 요청받아온 데이터는 다 json 형태같은 스트링으로 JSON.parse()로 변환해서 사용
    }
  };
  requestObj.send();
  // 서버로 요청을 보낸다. send 메소드가 실행되어야만 우리가 위에서 설정한 내용들이 의미를 가지게 됩니다.

  // send가 위에있어도 동작은 하고 onreadystatechange()가 없어도 된다.
  // send랑 onreadystatechange는 완전 별개
  // send보다 뒤에 있으면 컴퓨터 속도에 따라 onreadystatechange가 내 컴퓨터만 잘될수도 있다.
  // 비동기 작업으로 순서가 보장되지 않아서.
  // onreadystatechange를 앞에 써줘야 send가 받아오면서 뭘 할지 읽을 수 있다..!!
}
xhrRequest();

const worldOpen = new Promise((resolve, reject) => {
  const requestObj = new XMLHttpRequest();
  requestObj.open("GET", "009-practice.txt");
  requestObj.onreadystatechange = () => {
    if (requestObj.readyState === 4 && requestObj.status === 200) {
      const result = requestObj.responseText;
      resolve(result);
    } else if (requestObj.readyState && requestObj.status !== 200) {
      reject(new Error("에러입니다."));
    }
  };
  requestObj.send();
});

worldOpen
  .then((openWorld) => {
    document.write(`\n 월드가 생성되었습니다`);
    return openWorld; // 다음 then의 인자로 넘어감
  })
  .catch((error) => {
    console.log(error);
  });
