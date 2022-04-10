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

    productList.forEach(prod => {
        if (prod.category === activeCategory){
          prodsCategory.appendChild(prod.smallProduct);
          categoryTitle.innerHTML = activeCategory;
        }
      
    });
  }
  apiGetData(treatData);
};

preLoadProdsCategory();