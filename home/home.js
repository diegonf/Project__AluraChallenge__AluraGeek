import { apiGetData } from "../assets/js/getDataAPI.js";

const starwars = document.querySelector('[data-starwars]');
const devices = document.querySelector('[data-devices]');
const others = document.querySelector('[data-others]');
const productList = apiGetData();

let i = 0, j = 0, k = 0;
productList.forEach(prod => {

  if (prod.category == 'starwars') {
    if ( i >= 4){
      prod.smallProduct.classList.add('gallery__product--desktop');
    }
    starwars.appendChild(prod.smallProduct);
    i++
  }
  if (prod.category == 'consoles') {
    if ( j >= 4){
      prod.smallProduct.classList.add('gallery__product--desktop');
    }
    devices.appendChild(prod.smallProduct);
    j++
  }
  if (prod.category == 'diversos') {
    if ( k >= 4){
      prod.smallProduct.classList.add('gallery__product--desktop');
    }
    others.appendChild(prod.smallProduct);
    k++
  }  
});