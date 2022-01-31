" use strict";

const id = document.querySelector("#id"),
  username = document.querySelector("#name"),
  psword = document.querySelector("#psword"),
  confirmPsword = document.querySelector("#confirm-psword"),
  registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);
function register(e) {
  e.preventDefault();

  if (!id.value) {
    return alert("아이디를 입력해주세요.");
  }
  if (!username.value) {
    return alert("이름을 입력해주세요.");
  }
  if (psword.value !== confirmPsword.value) {
    return alert("비밀번호가 일치하지 않습니다.");
  }
  const req = {
    id: id.value,
    name: username.value,
    psword: psword.value,
    confirmPsword: confirmPsword.value,
  };

  fetch("/register", {
    // REST API: 자원의 표현을 가지고 상태를 전달한다.
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(`${res.msg}`);
      }
    });
}
