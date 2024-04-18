const all = document.querySelector('#All')
const burgers = document.querySelector('#Burgers')
const salads = document.querySelector('#Salads')
const drinks = document.querySelector('#Drinks')
const desserts = document.querySelector('#Deserts')
const snacks = document.querySelector('#Snacks')
const main = document.querySelector('Main')
const children = [...main.children]


all.addEventListener('click', (c)=>{
  children.forEach(child => {
       child.style.display = 'grid';
})
})

burgers.addEventListener('click', (c)=>{
  children.forEach(child => {
    child.style.display = 'grid';
    if (child.classList.contains('Burgers')){
      child.style.display = 'grid;';
    }
    else{
      child.style.display = 'none';
    }
})

})
salads.addEventListener('click', (c)=>{
  children.forEach(child => {
    child.style.display = 'grid';
    if (child.classList.contains('Salads')){
      child.style.display = 'grid;';
    }
    else{
      child.style.display = 'none';
    }
})
})

drinks.addEventListener('click', (c)=>{
  children.forEach(child => {
    child.style.display = 'grid';
    if (child.classList.contains('Drinks')){
      child.style.display = 'grid;';
    }
    else{
      child.style.display = 'none';
    }
})
})

desserts.addEventListener('click', (c)=>{
  children.forEach(child => {
    child.style.display = 'grid';
    if (child.classList.contains('Deserts')){
      child.style.display = 'grid;';
    }
    else{
      child.style.display = 'none';
    }
})
})

snacks.addEventListener('click', (c)=>{
  children.forEach(child => {
    child.style.display = 'grid';
    if (child.classList.contains('Snacks')){
      child.style.display = 'grid;';
    }
    else{
      child.style.display = 'none';
    }
})
})



const shopID = document.getElementById('shopID');
const shopCartMenu = document.querySelector('.shopCartMenu');
shopID.addEventListener('click', function() {
    
    if (shopCartMenu.style.display === 'none' || shopCartMenu.style.display === '') {
        shopCartMenu.style.display = 'flex';
    } else {
        shopCartMenu.style.display = 'none';
    }
});



function addToCart(clickedElement) {
  var dishName = clickedElement.querySelector('h2').textContent;
  var priceString = clickedElement.querySelector('p').textContent;
  var price = parseFloat(priceString);
  var tableBody = document.querySelector('#menuTable tbody');
  var totalCell = document.getElementById('total');
  var existingRow = Array.from(tableBody.children).find(row => row.firstElementChild.textContent === dishName);

  if (existingRow) {
      var quantityCell = existingRow.children[2];
      var totalDishCell = existingRow.children[3];
      var quantity = parseInt(quantityCell.textContent);
      quantity++;
      quantityCell.textContent = quantity;
      totalDishCell.textContent = (price * quantity).toFixed(2) + '€';
  } else {
      let newRow = document.createElement('tr');
      newRow.innerHTML = `
          <td>${dishName}</td>
          <td>${price}</td>
          <td>1</td>
          <td>${price}€</td>
      `;
      tableBody.appendChild(newRow);
  }

  let totalPrice = Array.from(tableBody.children).reduce((total, row) => {
      let price = parseFloat(row.children[3].textContent.replace('€', ''));
      return total + price;
  }, 0);
  totalCell.textContent =  totalPrice.toFixed(2)+ '€' ;
}

const imgBox = document.querySelectorAll('.img-box');


imgBox.forEach(function(cart) {
    cart.addEventListener('click', function() {
        addToCart(this);
        shopCartMenu.style.display = 'flex';
    });
});


