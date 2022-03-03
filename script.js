


let store =[
    {name:'helly hansen', price:'60'},
    {name:'twentyfour', price:'40'},
    {name:'vaude', price:'140'},
    {name:'neomondo', price:'50'},
    {name:'haglofs', price:'279'},
    {name:'haglofs', price:'199'},
    {name:'haglofs', price:'499'},
    {name:'haglofs', price:'349'},
    {name:'haglofs', price:'189'},
    {name:'mammut', price:'269'},
]
    document.write('<section class="product-list align-center">');
    document.write('<h1>Products</h1>');
    document.write('<div class="product-container">');
for(i = 0; i < store.length; i++){
    let j=i+1;
    document.write(`<div class="card">
                    <div class="title">${store[i].name}</div>
                    <div class="image"><img id="${i}"src="images/${j}.png"></div>
                    <div class="text "> $ ${store[i].price} </div>
                    <!-- <div> -->
                    <button class="buy-button">Buy Now</button>
                    <!-- </div> -->
                    </div>`);

     
}
document.write('</div>');
document.write('</section>'); 
