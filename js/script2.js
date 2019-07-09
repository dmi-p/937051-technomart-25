var linkBuy = document.querySelectorAll(".item-buy");
var linkBookmark = document.querySelectorAll(".item-mark");
var modalPurchase = document.querySelector(".modal-purchase");
var modalClose = modalPurchase.querySelector(".modal-close");
var cart = document.querySelector(".header-cart");
var bookmark_main = document.querySelector(".header-bookmark");

for (var i = 0; i < linkBuy.length; i++) {
  linkBuy[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modalPurchase.classList.add("modal-show");
    cart.classList.add("header-cart-full");
  });
}

for (var i = 0; i < linkBookmark.length; i++) {
  linkBookmark[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    bookmark.classList.add("header-cart-full");
  });
}
modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPurchase.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalPurchase.classList.contains("modal-show")) {
      modalPurchase.classList.remove("modal-show");
    }
  }
});
