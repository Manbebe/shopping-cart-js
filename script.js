let shoppingCart = []; //creates array for shopping cart
let cartList = document.querySelector("#cart-items");
let appleButton = document.querySelector("#add-apple"); //gets apple button
let porkButton = document.querySelector("#add-pork"); //gets apple button
let gumButton = document.querySelector("#add-gum"); //gets apple button

console.log(shoppingCart);


appleButton.addEventListener("click", () => {
    shoppingCart.push("Apple");
    let li = document.createElement("li");
    li.textContent = "Apple";
    cartList.appendChild(li);
});

porkButton.addEventListener("click", () => {
    shoppingCart.push("Pork");
    let li = document.createElement("li");
    li.textContent = "Pork";
    cartList.appendChild(li);
});
gumButton.addEventListener("click", () => {
    shoppingCart.push("Gum");
    let li = document.createElement("li");
    li.textContent = "Gum";
    cartList.appendChild(li);
});