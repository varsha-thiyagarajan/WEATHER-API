document.addEventListener('DOMContentLoaded',()=>
{
    const products=[
        {id: 1,name:"product 1",price:29.99},
        {id:2,name:"product 2",price:19.99},
        {id:3,name:"product 3",price:59.99},
    ];
    const cart=[]
    const productList=document.getElementById("product-list");
    const cartItems=document.getElementById("cart-items")
    const emptyCartMessage=document.getElementById("empty-cart")
    const cartTotalMessage=document.getElementById("cart-total")
    const totalpriceDisplay=document.getElementById("total-price");
    const checkOutBtn=document.getElementById("checkout-btn")
    products.forEach(product =>
    {
        const productDiv=document.createElement('div')
        productDiv.classList.add('product')
        productDiv.innerHTML=`
        <span>${product.name} -$${product.price.toFixed(2)} </span>
        <button data-id="${product.id}">Add to cart</button>`
        productList.appendChild(productDiv);
    }
    )
    productList.addEventListener('click',(e)=>
    {
        if(e.target.tagName ==='BUTTON')
        {
            const productId=parseInt(e.target.getAttribute('data-id'))
            const product=products.find(p=>p.id ===productId)
            addToCart(product)

        }
    })
    function addToCart(product)
    {
        cart.push(product)
        renderCart()
    }
    function renderCart()
    {
        cartItems.innerText="";
        let totalprice=0
        if(cart.length)
        {
              
               emptyCartMessage.classList.add("hidden")
               cartTotalMessage.classList.remove("hidden")
               cart.forEach((item,index)=>
               {
                totalprice+=item.price
                const cartItem=document.createElement('div')
                cartItem.innerHTML=`
                ${item.name} -$${item.price.toFixed(2)}
                
                `
                cartItems.appendChild(cartItem)
                totalpriceDisplay.textContent = `$${totalprice.toFixed(2)}`;
               })
        }else{
            emptyCartMessage.classList.remove("hidden")
            cartTotalMessage.classList.add("hidden");
            

        }
    }
    checkOutBtn.addEventListener('click',()=>
    {
        cart.length=0
        alert("Checkout Sucessfully");
        renderCart();
    })
})