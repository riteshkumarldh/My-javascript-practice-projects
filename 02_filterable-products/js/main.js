const productContainer = document.querySelector("[data-products]");
const search = document.querySelector("[data-search]");

let data;

const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    data = result;
    displayProducts(result);
    // console.log(result);
}

const displayProducts = (products) => {
    productContainer.innerHTML = products.map((product) =>
        `<div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 text-center bg-white">
                    <img src="${product.image}" class="w-100" alt="pic1">
                    <h3 class="fw-normal fs-6">${product.title}</h3>
                    <h3 class="fw-normal fs-6">$ <span>${product.price}</span></h3>
                    <h3 class="fw-light fs-6">${product.category}</h3>
                    <button class="btn btn-info">Add to cart</button>
        </div>`
    ).join("");
}

// searching products on input typed
search.addEventListener("input", (e) => {
    const searchValue = e.target.value.toLowerCase();

    if(searchValue){
        displayProducts(
            data.filter((item) => item.title.toLowerCase().indexOf(searchValue) > -1 || item.category.toLowerCase().indexOf(searchValue) > -1)
        );
    } else {
        displayProducts(data);
    }
});

document.addEventListener("DOMContentLoaded", fetchProducts);