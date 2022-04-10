import { apiGetData } from "../assets/js/getDataAPI.js";

const preLoadAllProducts = () => {
  //print all products
  const productList = apiGetData();
  const allProds = document.querySelector('[data-allproducts]');

  productList.forEach(prod => {
      allProds.appendChild(prod.smallProduct);
  });
};

preLoadAllProducts();