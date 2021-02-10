// html 안에 있는 class 노드 중에 이 클래스 이름을 가진 아이를 찾아서 변수에 연결해준다.
const toggleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icorns');

// 실행할 때 active가 없다면 실행 있다면 빼줄거임
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
