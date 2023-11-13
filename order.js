// order.js

// Sample pizza data (you can replace this with your actual pizza data)
const pizzaData = [
    { name: "Margherita Pizza", price: 10.99 },
    { name: "Pepperoni Pizza", price: 12.99 },
    // Add more pizza items as needed
];

const cart = [];
const cartTable = document.getElementById("cart");
const totalSpan = document.getElementById("total");
const checkoutButton = document.getElementById("checkout");

// Function to add a pizza item to the cart
function addToCart(itemIndex) {
    const pizza = pizzaData[itemIndex];
    cart.push(pizza);
    displayCart();
    calculateTotal();
}

// Function to remove a pizza item from the cart
function removeFromCart(itemIndex) {
    cart.splice(itemIndex, 1);
    displayCart();
    calculateTotal();
}

// Function to display the cart and calculate the total
function displayCart() {
    cartTable.innerHTML = "";
    cart.forEach((item, index) => {
        const row = cartTable.insertRow();
        row.innerHTML = `
            <td>${item.name}</td>
            <td>1</td>
            <td>$${item.price.toFixed(2)}</td>
            <td><button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button></td>
        `;
    });
}

// Function to calculate the total
function calculateTotal() {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    totalSpan.textContent = total.toFixed(2);
}

// Add event listeners to the pizza buttons for adding to cart
document.addEventListener("DOMContentLoaded", function () {
    const pizzaButtons = document.querySelectorAll(".order-button");
    pizzaButtons.forEach((button, index) => {
        button.addEventListener("click", () => addToCart(index));
    });

    // Add event listener to checkout button
    checkoutButton.addEventListener("click", () => {
        alert("Total Bill: $${parseFloat(totalSpan.textContent).toFixed(2)}");
    });
});