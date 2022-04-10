import { apiGetData } from "../assets/js/getDataAPI.js";

const loadAllProducts = (productList) => {
  //print all products
  const allProds = document.querySelector('[data-allproducts]');

  productList.forEach(prod => {
      allProds.appendChild(prod.smallProduct);
  });
};

apiGetData(loadAllProducts);