'use strict';

class ProductList {
    constructor(container = '.products') { // параметр container обозначает блок, в который мы хотим поместить наши товары products (селектор из вёрстки .products)
        this._container = document.querySelector(container); // Если в переменной(поле класса) стоит this. это значит, что данная переменная(поле класса) доступна в каждом методе
        this._goods = []; //поле класса//
        this._allProducts = []; //поле класса//

        this._fetchGoods(); //поле класса//
        this._render(); //поле класса//
    }

    _fetchGoods() { //метод класса//
        this._goods = [
            { id: 1, title: 'Notebook', price: 20000 },
            { id: 2, title: 'Mouse', price: 1500 },
            { id: 3, title: 'Keyboard', price: 5000 },
            { id: 4, title: 'Gamepad', price: 4500 },
        ];
    }

    _render() { //метод класса//
        for (const product of this._goods) {
            const productObject = new ProductItem(product);

            this._allProducts.push(productObject);
            this._container.insertAdjacentHTML('beforeend', productObject.getHTMLString());
        }
    }

    getSum() {
        for (let product of this.goods) {
            s += product.price;
        }
    }
}


class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = img;
    }

    getHTMLString() {
        return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
    }
}

let list = new ProductsList();
list.render();
list.getSum();

class Basket {
    addGoods() {

    }
    removeGoods() {

    }
    changeGoods() {

    }

    render() {

    }
}

class ElemBasket {
    render() { }

}

// const products = [
//   {id: 1, title: 'Notebook', price: 20000},
//   {id: 2, title: 'Mouse', price: 1500},
//   {id: 3, title: 'Keyboard', price: 5000},
//   {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = (item, img='https://via.placeholder.com/200x150') => `<div class="product-item" data-id="${this.id}">
//               <img src="${img}" alt="Some img">
//               <div class="desc">
//                   <h3>${item.title}</h3>
//                   <p>${item.price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//           </div>`;
//
// const renderProducts = list => {
//   document.querySelector('.products')
//       .insertAdjacentHTML(
//           'beforeend',
//           list.map(item => renderProduct(item)).join('')
//       );
// };
//
// renderProducts(products);
//
