import { apiGetData } from "../assets/js/getDataAPI.js";

const seeAll = document.querySelectorAll('[data-seeall]');
seeAll.forEach(category => {
  category.addEventListener('click', (event) => {
    event.preventDefault();
    localStorage.setItem('activecategory', category.dataset.seeall);
    window.location.href = "../produtoscategoria";
  });
});


const starwars = document.querySelector('[data-starwars]');
const devices = document.querySelector('[data-devices]');
const others = document.querySelector('[data-others]');

const loadProductsHome = (productList) => {
  let i = 0, j = 0, k = 0;
  productList.forEach((prod, id) => {
    if (prod.category === 'Star Wars' && i < 6) {
      if ( i >= 4){
        prod.smallProduct.classList.add('gallery__product--desktop');
      }
      prod.addElement(starwars, id);
      i++
    }
    if (prod.category === 'Consoles' && j < 6) {
      if ( j >= 4){
        prod.smallProduct.classList.add('gallery__product--desktop');
      }
      prod.addElement(devices, id);
      j++
    }
    if (prod.category === 'Diversos' && k < 6) {
      if ( k >= 4){
        prod.smallProduct.classList.add('gallery__product--desktop');
      }
      prod.addElement(others, id);
      k++
    }
  });
}

apiGetData(loadProductsHome);
