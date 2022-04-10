export class Product {
  constructor (photo, name, price, description, category){
    this._photo = photo;
    this._name = name;
    this._price = price;
    this._description = description;
    this.category = category;
    this.smallProduct = this._smallProductHtml();
    this.bigProduct = this._bigProductHtml();
  }

  _smallProductHtml() {
    const small = this._buildDiv('gallery__product');
    small.appendChild(this._buildImg('gallery__product--img'));
    small.appendChild(this._buildName('p', 'gallery__product--name'));
    small.appendChild(this._buildPrice('gallery__product--price'));

    const prodSeeProd = document.createElement('a');
    prodSeeProd.classList.add('gallery__product--seeproduct');
    prodSeeProd.href="#";
    prodSeeProd.innerHTML = 'Ver produto';

    small.appendChild(prodSeeProd);

    return small;
  }

  _bigProductHtml() {
    this._bigProduct = this._buildDiv('product');
    this._bigProduct.appendChild(this._buildImg('product__img'));
    this._bigProduct.appendChild(this._buildName('h1', 'product__title'));
    this._bigProduct.appendChild(this._buildPrice('product__price'));

    const prodDescription = document.createElement('p');
    prodDescription.classList.add('product__description');
    prodDescription.innerHTML = this._description;

    this._bigProduct.appendChild(prodDescription);

    return this._bigProduct;
  }

  _buildDiv(divClass){
    const prodDiv = document.createElement('div');
    prodDiv.classList.add(divClass);
    return prodDiv;
  }

  _buildImg(imgClass) {
    const prodImg = document.createElement('img');
    prodImg.classList.add(imgClass);
    prodImg.src='../assets/imgs/' + this._photo;
    prodImg.alt="Imagem " + this._name;
    return prodImg;
  }
  _buildName(tag, nameClass) {
    const prodName = document.createElement(tag);
    prodName.classList.add(nameClass);
    prodName.innerHTML = this._name;
    return prodName;
  }
  _buildPrice(priceClass) {
    const price = (Math.round(parseFloat(this._price) * 100) / 100).toFixed(2);
    const prodPrice = document.createElement('p');
    prodPrice.classList.add(priceClass);
    prodPrice.innerHTML = 'R$ ' + price;
    return prodPrice;
  }
}

//small product
// <div class="gallery__product">
//   <img class="gallery__product--img" src="../assets/imgs/starwars-img1.png" alt="Imagem do produto XYZ">
//   <p class="gallery__product--name">Produto XYZ</p>
//   <p class="gallery__product--price">R$ 60,00</p>
//   <a class="gallery__product--seeproduct" href="#">Ver produto</a>
// </div>
  
//big product
// <div class="product">
//   <img src="../assets/imgs/product.png" alt="Imagem do produto" class="product__img">
//   <h1 class="product__title">Produto XYZ</h1>
//   <p class="product__price">R$ 60,00</p>
//   <p class="product__description">Voluptas voluptatum quibusdam similique.</p> 
// </div>