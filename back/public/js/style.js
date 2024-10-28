document.addEventListener('DOMContentLoaded', function() {
  // 폼 제출 이벤트 리스너 추가
  document.getElementById('petition-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼의 기본 제출 동작을 막음

    // 입력된 제목과 내용을 가져옴
    const title = document.getElementById('petitionTitle').value;
    const content = document.getElementById('petitionContent').value;

    // 새로운 청원 항목을 생성
    const newItem = document.createElement('li');
    newItem.innerHTML = `
      <h5>${title}</h5>
      <p>${content}</p>
      <a href="#" class="btn btn-primary">자세히 보기</a>
    `;

    // 청원 목록에 추가
    const list = document.getElementById('petitionList');
    list.appendChild(newItem);

    // 폼 초기화
    document.getElementById('petition-form').reset();
  });
});
