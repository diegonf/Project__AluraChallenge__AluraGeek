import { apiGetData } from "../assets/js/getDataAPI.js";

const preLoadProdsCategory = () => {
  const treatData = (productList) => {
    const categoryTitle = document.querySelector('[data-categorytitle]');
    const prodsCategory = document.querySelector('[data-prodscategory]');
    let activeCategory = localStorage.getItem('activecategory');
    if (activeCategory === null || activeCategory === ''){
      activeCategory = 'Star Wars';
      localStorage.setItem('activecategory', activeCategory);
    }

    productList.forEach((prod, id) => {
        if (prod.category === activeCategory){
          prod.addElement(prodsCategory, id);
          categoryTitle.innerHTML = activeCategory;
        }
      
    });
  }
  apiGetData(treatData);
};

preLoadProdsCategory();