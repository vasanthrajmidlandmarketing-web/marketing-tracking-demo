
// Initialise dataLayer for Google Tag Manager
window.dataLayer = window.dataLayer || [];

// View Product Event
function viewProduct(productName, price) {
  window.dataLayer.push({
    event: "view_item",
    ecommerce: {
      currency: "GBP",
      value: price,
      items: [{
        item_name: productName,
        price: price,
        quantity: 1
      }]
    }
  });

  alert("View Product: " + productName);
}

// Add to Cart Event
function addToCart(productName, price) {
  window.dataLayer.push({
    event: "add_to_cart",
    ecommerce: {
      currency: "GBP",
      value: price,
      items: [{
        item_name: productName,
        price: price,
        quantity: 1
      }]
    }
  });

  alert(productName + " added to cart!");
}
// Begin Checkout Event
function beginCheckout() {
  window.dataLayer.push({
    event: "begin_checkout",
    ecommerce: {
      currency: "GBP",
      value: 49.99,
      items: [{
        item_name: "Wireless Headphones",
        price: 49.99,
        quantity: 1
      }]
    }
  });

  alert("Checkout started!");
}

// Purchase Event
function completePurchase() {
  window.dataLayer.push({
    event: "purchase",
    ecommerce: {
      transaction_id: "DEMO-" + Date.now(),
      currency: "GBP",
      value: 49.99,
      tax: 0,
      shipping: 0,
      items: [{
        item_name: "Wireless Headphones",
        price: 49.99,
        quantity: 1
      }]
    }
  });

  alert("Purchase Successful!");
}
