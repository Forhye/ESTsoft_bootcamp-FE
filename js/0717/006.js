// DOM

// 속성제어하기

const target = document.querySelector("p");
const txtColor = target.style.color;
// 현재 스타일 정보를 가져옵니다.
target.style.color = "royalblue";
// 현재 스타일 정보를 변경합니다.
target.style.fontWeight = "bold";
// 현재 스타일 정보에 font-weight 속성이 없다면 추가합니다.
target.style.color = null;
// 현재 스타일 정보를 제거(초기화)합니다.
target.style.fontWeight = null;

// getAttribute, setAttribute
/**
 * 
<p id='myTxt'>hello lions</p>
<img src='https://static.ebs.co.kr/images/public/lectures/2014/06/19/10/bhpImg/44deb98d-1c50-4073-9bd7-2c2c28d65f9e.jpg'>
<script>
	const target = document.querySelector('p');
	const myimg = document.querySelector('img');
	const idAttr = target.getAttribute('id');
	console.log(idAttr);
	myimg.setAttribute("src", "https://img.wendybook.com/image_detail/img159/159599_01.jpg");
</script>
 */
