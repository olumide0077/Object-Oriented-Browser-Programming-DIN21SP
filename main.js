let products =[
    {name:'helly hansen', price:60, details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', inCart: 0, tag: '1'},
    {name:'twentyfour', price:40, details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', inCart: 0, tag: '2'},
    {name:'vaude', price:140, details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', inCart: 0, tag: 3},
    {name:'neomondo', price:50, details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', inCart: 0, tag: 4},
    {name:'haglofs', price:279, details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', inCart: 0, tag: 5},
    {name:'haglofs', price:199, details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', inCart: 0, tag: 6},
    {name:'haglofs', price:499, details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', inCart: 0, tag: 7},
    {name:'haglofs', price:349, details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', inCart: 0, tag: 8},
    {name:'haglofs', price:189, details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', inCart: 0, tag: 9},
    {name:'mammut', price:269, details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', inCart: 0, tag: 10},
]



let carts = document.querySelectorAll('.buy-button');
let cards = document.querySelectorAll('.card');

for (let i=0; i<carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])

    })
    cards[i].addEventListener('click', () => {
        window.location="Product details.html";
        displayDetails(products[i])
    })
}

function displayDetails(product){
   let cardDiplay = {
        [product.tag]: product
        }
    
    localStorage.setItem('cardDetails', JSON.stringify(cardDiplay));


    
}
function onLoadCardDetails() {
    let imgContainer = document.getElementById('ProductImg');
    let priceContainer = document.getElementById('ProductPrice');
    let detailsContainer = document.getElementById('ProductDscptn');
    let nameContainer = document.getElementById('ProductName');
    cardDiplay = localStorage.getItem('cardDetails');
    cardDiplay = JSON.parse(cardDiplay);

    if(cardDiplay) {
        Object.values(cardDiplay).map(item => {
            console.log(item.details);
                detailsContainer.innerHTML = item.details;
                priceContainer.innerHTML = item.price;
                imgContainer.src = `images/${item.tag}.png`
                nameContainer.textContent = item.name;
                
    })
}
}


function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart-icon').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart-icon').textContent = productNumbers + 1;
    } else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart-icon').textContent = 1;
    }
    setItems(product);

}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if(cartItems != null){
        if(cartItems[product.tag] == undefined) {
           cartItems = {
               ...cartItems, [product.tag]: product
           } 
        }
        cartItems[product.tag].inCart += 1;
    } else{
    product.inCart = 1;
        cartItems = {
        [product.tag]: product
        }
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}
function totalCost(product){
    
    let cartCost = localStorage.getItem('totalCost');
    

    if(cartCost != null){
     cartCost = parseInt(cartCost);   
     localStorage.setItem('totalCost', cartCost + product.price);
        
     console.log(cartCost);
    } else {
        localStorage.setItem('totalCost', product.price);
    }
    
}
function displayCart(){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    
    let productContainer = document.querySelector('.products');
    let cartCost = localStorage.getItem('totalCost');
    if(cartCost && productContainer){
        
            productContainer.innerHTML = '';
            Object.values(cartItems).map(item => {
                productContainer.innerHTML += `
                <div class= 'product'>
                    <ion-icon name='close-circle'></ion-icon>
                    <img src='images/${item.tag}.png'>
                    <span>${item.name}</span>
                </div>
                // <div class='price'> $${item.price}.00</div>
                // <div class='quantity'>
                //     <ion-icon class='decrease'
                //     name='arrow-dropleft-circle'></ion-icon>
                //     <span>${item.inCart}</span>
                //     <ion-icon class='increase'
                //     name='arrow-dropright-circle'></ion-icon>
                // </div>
                // <div class='total'>
                //     $${item.inCart * item.price}.00
                // </div>
                ` 
            });
            productContainer.innerHTML += `
                <div class='basketTotalContainer'>
                    h4 class='basketTotalTitle'>
                        Basket Total    :
                    </h4>
                    <h4 class='basketTotal'>
                        $${cartCost},00
                    </h4>
            `;

    }
}

onLoadCartNumbers();
displayCart();
onLoadCardDetails();


// var ProductImg = document.getElementById("ProductImg");
// var ProductPrice = document.getElementById("ProductPrice");
// var Discription = document.getElementById("ProductDscptn");

// // var ProductImg = document.getElementById("ProductImg");

// function redirect(){
//     window.location="product_details.html";

// }

// var SmallImg = document.getElementsByClassName("small-img");

// SmallImg[0].onclick = function (){
//     ProductImg.src = SmallImg[0].src;
// }
// SmallImg[1].onclick = function (){
//     ProductImg.src = SmallImg[1].src;
// }
// SmallImg[2].onclick = function (){
//     ProductImg.src = SmallImg[2].src;
// }
// SmallImg[3].onclick = function (){
//     ProductImg.src = SmallImg[3].src;
// }


