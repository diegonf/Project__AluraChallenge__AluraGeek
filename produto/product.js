import { apiGetData } from "../assets/js/getDataAPI.js";

const loadProductSelected = (productList) => {
  //print main product
  const prodSection = document.querySelector('[data-prodsection]');
  let prodID = JSON.parse(localStorage.getItem('activeproduct'));
  if (prodID === null || prodID === ''){
    prodID = 0;
    localStorage.setItem('activeproduct', prodID);
  }
  const activeProd = productList[prodID].bigProduct
  prodSection.appendChild(activeProd);

  //print similar products
  const similarProds = document.querySelector('[data-similarprods]');

  let i = 0
  const currentCategory = productList[prodID].category
  productList.forEach((prod, id) => {
    if (prod.category == currentCategory && i < 6) {
      if ( i >= 4){
        prod.smallProduct.classList.add('gallery__product--desktop');
      }
      similarProds.appendChild(prod.smallProduct);
      i++
    }

    prod.smallProduct.lastChild.addEventListener('click', (event) => {
      event.preventDefault();
      localStorage.setItem('activeproduct', id);
      window.location.replace("../produto");
    });
  });
}

apiGetData(loadProductSelected);