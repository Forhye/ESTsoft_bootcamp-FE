const req = fetch("https://koreanjson.com/users");

req
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    const $main = document.querySelector("main");
    const $ul = document.createElement("ul");

    const userData = data;
    $main.append($ul);

    userData.forEach((number) => {
      const $li = document.createElement("li");
      const $p = document.createElement("p");
      $ul.append($li);

      const userNum = number.id;
      const userName = number.name;
      const userId = number.username;
      const userEmail = number.email;
      $li.append(`${userNum}. ${userName}`);
      $li.append($p);
      $p.append(`아이디 : ${userId}`);
      $p.append(`이메일 : ${userEmail}`);

      userData.forEach((web) => {
        const $li = document.createElement("li");
        const $a = document.createElement("a");
        $ul.append($li, $a);

        const userWeb = web.website;
        $a.setAttribute("href", userWeb);
        $a.append("이동하기");
      });
    });
  });

// const req2 = fetch("https://test.api.weniv.co.kr/mall");
// req2
//   .then((res) => {
//     // const data = res.json();
//     return res.json();
//   })
//   .then((value) => {
//     const data = value;
//     const $ol = document.createElement("ol");
//     data.forEach((value) => {
//       let $li = document.createElement("li");
//       let $span = document.createElement("span");
//       let $img = document.createElement("img");

//       $li.id = value.id;
//       $li.textContent = value.productName;
//       $span.textContent = value.modDate;
//       $img.src = "https://test.api.weniv.co.kr/" + value.thumbnailImg;
//       $img.style.width = "100px";

//       $li.append($img, $span);
//       $ol.appendChild($li);
//     });
//     document.body.appendChild($ol);
//     return value; // 필요할 때 넣기 , 추후에 뭔가 요청해야 할 때
//   })
//   .catch((err) => {
//     console.error(err);
//     return err; // 필요할 때 넣기
//   });
