const products = [
  { id: 1, title: 'Notebook', price: 1000, },
  { id: 2, title: 'Mouse', price: 100, },
  { id: 3, title: 'Keyboard', price: 250 },
  { id: 4, title: 'Gamepad', price: 150 }

];

const renderProduct = (product, img = 'https://via.placeholder.com/200x150') => {
  return `<div class="product-item">
            <img src="${img}">
            <h3>${product.title}</h3>
            <p>${product.price}</p>
            <button class="by-btn">Добавить</button>
  </div>`;
};

const renderProducts = list => {
  document.querySelector('.products').innerHTML = list.map(product => renderProduct(product)).join('') //убираем запятые (join)
};

renderProducts(products);
