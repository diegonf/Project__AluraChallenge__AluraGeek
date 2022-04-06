//função para renderizar header e footer
(function () {
  const header = document.querySelector('[data-header]');
  const url = '../assets/header.html';
  fetch(url)
  .then (res => res.text())
  .then (data => {
        header.innerHTML = data;
  });
  const footer = document.querySelector('[data-footer]');
  const url2 = '../assets/footer.html';
  fetch(url2)
  .then (res => res.text())
  .then (data => {
        footer.innerHTML = data;
  });
}());

