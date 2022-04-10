import { apiGetData } from "../assets/js/getDataAPI.js";

const starwars = document.querySelector('[data-starwars]');
const devices = document.querySelector('[data-devices]');
const others = document.querySelector('[data-others]');

const loadProductsHome = (productList) => {
  let i = 0, j = 0, k = 0;
  productList.forEach((prod, id) => {
    if (prod.category === 'Star Wars') {
      if ( i >= 4){
        prod.smallProduct.classList.add('gallery__product--desktop');
      }
      starwars.appendChild(prod.smallProduct);
      i++
    }
    if (prod.category === 'Consoles') {
      if ( j >= 4){
        prod.smallProduct.classList.add('gallery__product--desktop');
      }
      devices.appendChild(prod.smallProduct);
      j++
    }
    if (prod.category === 'Diversos') {
      if ( k >= 4){
        prod.smallProduct.classList.add('gallery__product--desktop');
      }
      others.appendChild(prod.smallProduct);
      k++
    }

    prod.smallProduct.lastChild.addEventListener('click', (event) => {
      event.preventDefault();
      localStorage.setItem('activeproduct', id);
      window.location.href = "../produto";
    });
  });
}

apiGetData(loadProductsHome);
