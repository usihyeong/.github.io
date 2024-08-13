const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});


signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});


fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

document.querySelector('.btn.submit').addEventListener('click', function(event) {
  // 입력 필드 값 가져오기
  const name = document.querySelector('.input.name').value.trim();
  const age = document.querySelector('.input.age').value.trim();
  
  // 이름이 공백이 아닌 경우
  if (name && age !== '') {
     
      alert('동참해 주셔서 감사합니다.');
      window.location.href = 'index.html';
      
      // 나이가 공백인 경우
     
  }
  else if
   (name === '') {
    alert('이름을 입력하세요');
}

  else if (age === '') {
    alert('나이를 입력하세요');
}




  
});

