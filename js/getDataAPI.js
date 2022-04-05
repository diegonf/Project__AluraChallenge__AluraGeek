export const CallGetData = () => {
  let prodList, response;
  const url = './json/db.json';
  // const url = 'http://127.0.0.1:3000/products';

  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);

  xhr.onload = () => {
    if(xhr.status == 200) {
      response = JSON.parse(xhr.responseText);
      prodList = response.products;
      console.log(prodList);
    } else {
      console.log("erro");
      prodList = [];
    }
  };
  xhr.send();
}