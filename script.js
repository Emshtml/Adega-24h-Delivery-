/*
═══════════════════════════════════════════════

  Adega 24h Delivery
  Proprietary Software

  @author Thereza Candida
  @organization Emshtml
  @copyright 2026
  @license Proprietary

  Copyright (c) 2026 Thereza Candida / Emshtml

  Todos os direitos reservados.

  É proibida a cópia, redistribuição,
  modificação, revenda ou reutilização
  parcial ou integral deste sistema sem
  autorização formal do autor.

═══════════════════════════════════════════════
*/

const products = [

{
  name:'Jack Daniels',
  price:129.90,
  image:'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=1200&auto=format&fit=crop'
}

];onst products = [

{
  name:'Jack Daniels',
  price:129.90,
  image:'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=1200&auto=format&fit=crop'
},

{
  name:'Red Label',
  price:99.90,
  image:'https://images.unsplash.com/photo-1582819509237-df9c0f1a8b4b?q=80&w=1200&auto=format&fit=crop'
},

{
  name:'Smirnoff Vodka',
  price:54.90,
  image:'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop'
},

{
  name:'Combo Gin + Energético',
  price:89.90,
  image:'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop'
},

{
  name:'Heineken Pack',
  price:34.90,
  image:'https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=1200&auto=format&fit=crop'
}

];

const productsContainer = document.getElementById('products');
const cartItems = document.getElementById('cart-items');
const totalElement = document.getElementById('total');
const cartCount = document.getElementById('cart-count');
const deliveryPrice = document.getElementById('delivery-price');

let cart = [];
let delivery = 5;
let discount = 0;

window.onload = ()=>{

  renderProducts(products);

  setTimeout(()=>{
    document.getElementById('loading-screen').style.display='none';
  },1800);
}  setTimeout(()=>{
function renderProducts(items){

  productsContainer.innerHTML='';

  items.forEach((product,index)=>{

    productsContainer.innerHTML += `

    <div class="card">

      <img src="${product.image}">

      <div class="card-content">

        <h3>${product.name}</h3>

        <p class="price">
          R$ ${product.price.toFixed(2)}
        </p>

        <button class="buy-btn"
        onclick="addToCart(${index})">
          Adicionar
        </button>

      </div>

    </div>

    `;

  });

}function addToCart(index){

  cart.push(products[index]);

  updateCart();

}

function updateCart(){

  cartItems.innerHTML='';

  let total = 0;

  cart.forEach(item=>{

    total += item.price;

    cartItems.innerHTML += `

    <div class="cart-item">
      <h4>${item.name}</h4>
      <p>R$ ${item.price.toFixed(2)}</p>
    </div>

    `;

  });

  total = total + delivery - discount;

  totalElement.innerText = total.toFixed(2);

  cartCount.innerText = cart.length;

}function toggleCart(){

  document.getElementById('cart')
  .classList.toggle('open');

}

function clearCart(){

  cart=[];

  updateCart();

}

function checkout(){

  if(cart.length===0){
    alert('Carrinho vazio');
    return;
  }let message='🍷 *Pedido Adega 24h* %0A%0A';

  let total=0;

  cart.forEach(item=>{

    message += `• ${item.name} - R$ ${item.price.toFixed(2)}%0A`;

    total += item.price;

  });

  total = total + delivery - discount;

  message += `%0A🚚 Entrega: R$ ${delivery.toFixed(2)}`;
  message += `%0A💰 Total: R$ ${total.toFixed(2)}`;

  window.open(`https://wa.me/5511999999999?text=${message}`,'_blank');

}  message += `%0A💰 Total: R$ ${total.toFixed(2)}`;

  window.open(`https://wa.me/5511999999999?text=${message}`,'_blank');

}

function scrollMenu(){

  document.getElementById('products')
  .scrollIntoView({
    behavior:'smooth'
  });

}

function confirmAge(){

  document.getElementById('age-modal')
  .style.display='none';

}function updateTax(){

  delivery = parseFloat(
    document.getElementById('bairro').value
  );

  deliveryPrice.innerText = delivery.toFixed(2);

  updateCart();

}

function applyCoupon(){

  const coupon = document.getElementById('coupon').value;

  if(coupon==='ADEGA10'){

    discount = 10;

    alert('Cupom aplicado');

  }else{

    discount = 0;

    alert('Cupom inválido');

  }

  updateCart();

}function searchProducts(){

  const value = document
  .getElementById('searchInput')
  .value.toLowerCase();

  const filtered = products.filter(product=>
    product.name.toLowerCase().includes(value)
  );

  renderProducts(filtered);

}

if('serviceWorker' in navigator){

  navigator.serviceWorker
  .register('sw.js');

}

