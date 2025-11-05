(function () {

  // 간단한 셀렉터 단축 함수
  const $ = (s, ctx = document) => ctx.querySelector(s);

  // 푸터 연도 자동 업데이트
  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();

  // 모바일 메뉴 토글
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.nav');

  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });
  }

  // 모달 (검색, 로그인)
  const searchDlg = $('#searchDlg');
  const loginDlg = $('#loginDlg');
  const openSearch = $('#openSearch');
  const openLogin = $('#openLogin');
  const closeBtns = document.querySelectorAll('[data-close]');

  // 열기 버튼
  if (openSearch) {
    openSearch.addEventListener('click', () => searchDlg.showModal());
  }

  if (openLogin) {
    openLogin.addEventListener('click', () => loginDlg.showModal());
  }

  // 닫기 버튼
  closeBtns.forEach(btn =>
    btn.addEventListener('click', e => e.target.closest('dialog').close())
  );

  // 바깥 클릭 시 닫기
  [searchDlg, loginDlg].forEach(dlg => {
    if (dlg) {
      dlg.addEventListener('click', e => {
        if (e.target === dlg) dlg.close();
      });
    }
  });

})();