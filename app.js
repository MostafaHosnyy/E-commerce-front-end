
// log API
// fetch('https://fakestoreapi.com/products?limit=5')
//             .then(res=>res.json())
//             .then(json=>console.log(json))


const loadAllProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products?limit=12');
  const allProducts = await response.json();
  return allProducts;
}

const productContainer = document.getElementById('product-container');
const displaySingleProduct = (allProducts) => {
  
  productContainer.textContent = '';
  allProducts.forEach(product => {
      const {category, title, image, price } = product;
      const singleProductDiv = document.createElement('div');
      singleProductDiv.innerHTML = ` <div class="pro">
      <img src=
      ${image} />
      <div class="des">
        <span>${category} </span>
        <h5> ${title.length > 15 ? title.slice(0, 15) : title}</h5>
        <div class="star">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <h4>$ ${price}</h4>
      </div>
      <i class="fa fa-shopping-cart cart"></i>
      
      </div>

      `;
      productContainer.appendChild(singleProductDiv);
  })

}

const displayInitialProduct = async () => {
  const allProducts = await loadAllProducts();
  displaySingleProduct(allProducts);
}

displayInitialProduct();