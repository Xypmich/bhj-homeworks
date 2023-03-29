const products = document.querySelectorAll('.product');
const cart = document.querySelector('.cart__products');

function productInCart(prodId) {
    let cartProducts = document.querySelectorAll('.cart__product');
    cartProducts.forEach(cartProduct => {
        if (cartProduct.data-id == prodId) {return false};
    });
    return true
};

products.forEach(product => {
    let controls = product.querySelectorAll('.product__quantity-control');
    let value = product.querySelector('.product__quantity-value');
    let addBtn = product.querySelector('.product__add');
    let productId = product.getAttribute('data-id');
    let productImg = product.querySelector('.product__image');
    controls.forEach(control => {
        control.onclick = () => {
            if (control.classList.contains('product__quantity-control_inc')) {
                value.innerText = Number(value.innerText) + 1;
            } else if (control.classList.contains('product__quantity-control_dec') && Number(value.innerText) > 1) {
                value.innerText = Number(value.innerText) - 1;
            };
        };
    });
    addBtn.onclick = () => {
        if (cart.querySelector(`[data-id="${productId}"]`) == null) {
            cart.innerHTML += `
            <div class="cart__product" data-id=${productId}>
                <img class="cart__product-image" src=${productImg.src}>
                <div class="cart__product-count">${Number(value.innerText)}</div>
            </div>
            `;
        } else if (cart.querySelector(`[data-id="${productId}"]`)) {
            let counter = cart.querySelector(`[data-id="${productId}"]`).querySelector('.cart__product-count');
            counter.innerText = Number(counter.innerText) + Number(value.innerText);
        };
    };
});