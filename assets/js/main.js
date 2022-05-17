import { searchProducts } from "../../pesquisa/search.js";

//function - show footer and header
(function () {
  const header = document.querySelector('[data-header]');
  const url = '../assets/header.html';
  fetch(url)
  .then (res => res.text())
  .then (data => {
        header.innerHTML = data;
        searchListeners();
  });
  const footer = document.querySelector('[data-footer]');
  const url2 = '../assets/footer.html';
  fetch(url2)
  .then (res => res.text())
  .then (data => {
        footer.innerHTML = data;
  });
}());

//function - search products
const searchListeners = () => {
      const searchInput = document.querySelector('[data-searchinput]');
      const submBtt = document.querySelector('[data-submbtt]');

      submBtt.addEventListener('click', () => {
         callSearchProducts(searchInput);   
      })

      searchInput.addEventListener('keydown', (event) => {
            if (event.key == "Enter"){
                  callSearchProducts(searchInput); 
            }
      });
}

const callSearchProducts = (searchInput) => {
   const domMain = document.querySelector('main');
   domMain.textContent="";

   const url = '../../pesquisa/index.html';
   fetch(url)
      .then (res => res.text())
      .then (data => {
         domMain.innerHTML = data;
         searchProducts(searchInput.value);
      }); 
}



