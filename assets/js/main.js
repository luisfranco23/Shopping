
// console.log(navbar)

// evento directamente en el html
// <button onclick="alert('hola')" id="navbarBtn" class="navbar__btn-link">

// navbarBtn.onclick = function () {
//   alert('desde una propiedad del elemento en el html')
// }

// handler
// const fn = function (e) {
//   console.log(navbarNav)
//   navbarNav.classList.toggle('active')
// }

// start navbar btn menu
const navbarBtn = document.getElementById('navbarBtn')
const navbarNav = document.querySelector('.navbar__nav')

navbarBtn.addEventListener('click', function (e) {
  console.log(navbarNav)
  navbarNav.classList.toggle('active')
})
// end navbar btn menu

// navbarBtn.removeEventListener('click', fn)

// Arreglo de Productos
const products = [
  {
    id: 1,
    name: 'Lenovo Legion 5 Pro (16" AMD)',
    price: 7799001,
    image: 'https://http2.mlstatic.com/D_NQ_NP_638942-MLA49937651999_052022-V.jpg',
    description: `Rendimiento épico por dentro y por fuera
    Procesamiento AMD Ryzen™ y tarjeta gráfica NVIDIA® GeForce RTX™
    Primera laptop de 16” del mundo con hasta 165 Hz
    Tecnología de audio 3D de Nahimic: podrás ver y oír a cualquier enemigo acercándose a ti.`
  },
  {
    id: 2,
    name: 'Lenovo Yoga Slim 7 Pro',
    price: 7500200,
    image: 'https://i.blogs.es/51e72d/lenovo/1366_2000.jpg',
    description: `AMD Ryzen 5 4600H, el Ryzen 7 4800H o el Ryzen 9 4900H. La gráfica
    RAM serán de 8 o 16 GB Dual Channel, mientras que el almacenamiento interno irá desde 256 GB a 1 TB SSD PCIe M.2.`
  },
  {
    id: 3,
    name: 'Alienware Laptop',
    price: 8500212,
    image: 'https://www.pngarts.com/files/12/Alienware-Laptop-PNG-Pic.png',
    description: `Está equipado con la última generación de procesadores Intel Core i7 con hasta 8 GB de RAM y 1 TB en formato de disco duro.`
  },
  {
    id: 3,
    name: 'LENOVO YOGA BOOK',
    price: 4769331,
    image: 'https://www.tuexperto.com/wp-content/uploads/2018/09/lenovo-yoga-s730-02.jpg',
    description: `En su interior encontramos un procesador Intel Atom  X5 – Z8550 de cuatro núcleos, acompañado de 4 GB de RAM y 64 GB de almacenamiento interno (ampliables mediante tarjeta microSD).`
  },
  {
    id: 3,
    name: 'LENOVO THINKPAD X1 YOGA',
    price: 8460012,
    image: 'https://www.tuexperto.com/wp-content/uploads/2018/09/captura-de-pantalla-2018-09-12-a-las-12-45-03.png',
    description: ` El portátil también cuenta con un panel de 14 pulgadas con una resolución de hasta WQHD o 2.560 x 1.440 pixeles. No falta reconocimiento facial para aumentar la seguridad o una batería para hasta 12 horas`
  },
  {
    id: 3,
    name: 'Lenovo Laptop S145',
    price: 5894002,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9A5nJ1PpZfvWutOgDrYQIu8Wh_4cWK0AnZzoDouGOh2fzt6GPphUvHTU1Z8yBmTHCTuQ&usqp=CAU',
    description: `Laptop Lenovo Procesador AMD 4gb Ram 500gb HDD modelo S145 - 14 Pulgadas`
  },
  {
    id: 3,
    name: 'Lenovo Yoga Slim 7',
    price: 6500323,
    image: 'https://files.lafm.com.co/assets/public/styles/i_a_750x375/public/2021-05/lenovo-yoga-7_0.jpg?_5CZNbHTHlej7StHU.rPJi4WtKPspKN_&itok=KTOtosae',
    description: `Procesador: Intel Core i7 10 generación
    Tarjeta Gráfica: integrada Intel Iris Plus
    Memoria RAM: 16 GB LPDDR4X
    Almacenamiento: 512 GB SSD`
  },
  {
    id: 3,
    name: 'ThinkPad X1 Carbon Gen 9',
    price: 7840022,
    image: 'https://s1.eestatic.com/2021/01/11/omicrono/hardware/550456629_169713586_1024x576.jpg',
    description: `Procesadores hasta Intel® Core™ i7 de 11va generación y Evo® opcional
    Chasis ultradelgado y ultraliviano, y una batería de mayor duración
    Impresionante pantalla de 14” 16:10, opcional táctil en algunos modelos`
  }
]

const wrapperProducts = document.getElementById('wrapper-products')

let productsHTML = ''

// Bucle
// for (let i = 0; i < products.length; i++) {
//   console.log('bucle: ',products[i])
// }

// Iteradores for of
for (let product of products) {
  productsHTML += `
  <div class="wrapper__product">
    <div class="wrapper__product-img">
      <img src="${product.image}" alt="${product.name}" class="wrapper__product-img-item">
    </div>
    <div class="wrapper__product-content">
      <h3 class="wrapper__product-title">${product.name}</h3>
      <p class="wrapper__product-text">
      ${product.description}
      </p>
      <div class="wrapper__product-btn">
      <span class="wrapper__product-btn-text">$ ${product.price}</span>
        <button class="wrapper__product-btn-item" data-id="${product.id}">
          <i class='bx bx-shopping-bag'></i>
          <span class="wrapper__product-btn-text">Add to Cart</span>
        </button>
      </div>
    </div>
    </div>
  `
}

wrapperProducts.insertAdjacentHTML('beforeend', productsHTML)

let cart = []

function find(id) {
  for (let product of products) {
    if (product.id === id) {
      return product
    }
  }
}

function addToCart(id) {
  const product = find(id)
  cart.push(product)
}

wrapperProducts.addEventListener('click', function (e) {
  if (e.target.closest('.wrapper__product-btn-item')) {
    const id = e.target.closest('.wrapper__product-btn-item').dataset.id
    addToCart(+id)
    renderCart()
  }
})

const wrapperCart = document.getElementById('wrapper-cart')

function renderCart() {
  let cartHTML = ''

  for (let product of cart) {
    cartHTML += `
    <div class="cart__item">
    <div class="cart__item-img">
    <img src="${product?.image}" alt="${product.name}" class="cart__item-img-item">
    </div>
    <div class="cart__item-content">
    <h3 class="cart__item-title">${product.name}</h3>
    <div class="cart__item-btn">
    <span class="cart__item-btn-text">$ ${product.price}</span>
    <button class="cart__item-btn-item" data-id="${product.id}">
    <i class='bx bx-x'></i>
    </button>
    </div>
    </div>
    </div>
    `
  }
  const cartTotal = document.getElementById('cart-total')

  wrapperCart.innerHTML = cartHTML.length > 0 ? cartHTML : '<p>No hay productos</p>'
  cartTotal.innerHTML = `$ ${sumTotal()}`
}

renderCart()

function sumTotal() {
  let sum = 0
  for (let product of cart) {
    sum += product.price
  }
  return sum
}

function removeFromCart (id) {
  let newArr = []
  for (let product of cart) {
    if(product.id !== id) {
      newArr.push(product)
    }
  }
  cart = newArr
}

wrapperCart.addEventListener('click', function (e) {
  if (e.target.closest('.cart__item-btn-item')) {
    const id = e.target.closest('.cart__item-btn-item').dataset.id
    removeFromCart(+id)
    renderCart()
  }
})

const checkout = document.getElementById('checkout')

checkout.addEventListener('click', function (e) {
  if(e.target.closest('.wrapper__sidebar-cart-btn-link')) {
    alert('Gracias por tu compra')
    cart = []
    renderCart()
  }
})