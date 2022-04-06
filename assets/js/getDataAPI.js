import { Product } from './Product.js'

export const apiGetData = () => {
  const prodListLS = JSON.parse(localStorage.getItem('products')) || [];

  if (prodListLS[0] == null || prodListLS[0] == ''){
    let prodList, response;
    const url = '../assets/json/db.json';

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onload = () => {
      if(xhr.status == 200) {
        response = JSON.parse(xhr.responseText);
        prodList = response.products;
      } else {
        console.log("erro");
        prodList = [];
      }
      localStorage.setItem('products',JSON.stringify(prodList));
      return productList(prodList);
    };
    xhr.send();
  } else {
    return productList(prodListLS)
  }
}

const productList = (prodList) => {
  let i = 0;
  let prodListObj = [];
  prodList.forEach(prod => {
    prodListObj[i] = new Product(prod.image, prod.name, prod.price, prod.description, prod.category);
    i++;
  });

  return prodListObj;
}

// apiGetData();