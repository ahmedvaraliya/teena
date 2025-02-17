document.querySelector("header h1").style.animation = "fadeIn 2s ease-in-out";

const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}`;
document.head.appendChild(styleSheet);

/////////////////////////
let cart = [];
let wishlist = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        let productId = this.getAttribute('data-id');
        addToCart(productId);
    });
});

document.querySelectorAll('.add-to-wishlist').forEach(button => {
    button.addEventListener('click', function () {
        let productId = this.getAttribute('data-id');
        addToWishlist(productId);
    });
});

function addToCart(productId) {
    if (!cart.includes(productId)) {
        cart.push(productId);
        console.log(`Product ${productId} added to cart.`);
        updateCart();
    } else {
        console.log(`Product ${productId} is already in the cart.`);
    }
}

function addToWishlist(productId) {
    if (!wishlist.includes(productId)) {
        wishlist.push(productId);
        console.log(`Product ${productId} added to wishlist.`);
        updateWishlist();
    } else {
        console.log(`Product ${productId} is already in the wishlist.`);
    }
}

function updateCart() {
    document.getElementById('cart-count').textContent = cart.length;
}

function updateWishlist() {
    document.getElementById('wishlist-count').textContent = wishlist.length;
}
function toggleWishlist(element) {
    element.classList.toggle('liked');
}
