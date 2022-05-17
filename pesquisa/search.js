import { apiGetData } from "../assets/js/getDataAPI.js";


export const loadSearchedProducts = (productList, searchName) => {
  const searchedProducts = document.querySelector('[data-search]');

  productList.forEach((prod, id) => {

    if(matchSearch(prod._name, searchName)){
      prod.addElement(searchedProducts, id);
    }
  });
}

export const searchProducts = (searchName) => {
  apiGetData(loadSearchedProducts, searchName);
}

const matchSearch = (prodName, searchInput) => {

  let status = false;
  const searchNames = searchInput.split(/[\t\s\n]/i);
  searchNames.forEach(name => {
    const rexp = '.*' + name + '.*';
    const testRegex = new RegExp(rexp, 'i');
    status = testRegex.test(prodName);
  });

  return status;
}