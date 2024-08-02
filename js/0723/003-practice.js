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

    userData.forEach((value) => {
      const $ol = document.createElement("ol");
      const $li = document.createElement("li");
      const $liName = document.createElement("li");
      const $liId = document.createElement("li");
      const $liPhone = document.createElement("li");
      const $liEmail = document.createElement("li");
      const $liWeb = document.createElement("li");
      const $a = document.createElement("a");

      $ul.append($li);
      $li.append($ol);
      $ol.appendChild($liName);
      $ol.appendChild($liId);
      $ol.appendChild($liPhone);
      $ol.appendChild($liEmail);
      $ol.appendChild($liWeb);
      $liWeb.appendChild($a);

      const userName = value.name;
      const userPhone = value.phone;
      const userId = value.username;
      const userEmail = value.email;
      const userWeb = value.website;

      $a.setAttribute("href", userWeb);
      // const aLink = $a.getAttribute("href");

      $liName.append(`이름 : ${userName}`);
      $liPhone.append(`연락처 : ${userPhone}`);
      $liId.append(`아이디 : ${userId}`);
      $liEmail.append(`이메일 : ${userEmail}`);
      $liWeb.append(`웹페이지 : `);
      $liWeb.appendChild($a);
      $a.append("이동하기");
    });
  });

// 최적화
async function fetchAndDisplayUsers() {
  try {
    const res = await fetch("https://koreanjson.com/users");
    const userData = await res.json();

    const $main = document.querySelector("main");
    const $ul = document.createElement("ul");
    const fragment = new DocumentFragment();

    userData.forEach(({ name, phone, username, email, website }) => {
      const $li = document.createElement("li");

      // 템플릿 리터럴
      $li.innerHTML = `
          <ol>
            <li>이름 : ${name}</li>
            <li>아이디 : ${username}</li>
            <li>연락처 : ${phone}</li>
            <li>이메일 : ${email}</li>
            <li>웹페이지 : <a href="${website}">이동하기</a></li>
          </ol>
        `;
      fragment.appendChild($li);
    });

    $ul.appendChild(fragment);
    $main.appendChild($ul);
  } catch (error) {
    console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
  }
}

fetchAndDisplayUsers();
