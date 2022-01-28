// selectors
const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');
const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.size');
const productBtn = document.querySelector('.productBtn');
const closeBtn = document.querySelector('.closeBtn');
const paymentModal = document.querySelector('.paymentModal');

const products = [
  {
    id: 0,
    title: 'Air Force',
    price: 119,
    colors: [
      {
        code: 'black',
        img: './images/air.png',
      },
      {
        code: 'darkblue',
        img: './images/air2.png',
      },
    ],
  },
  {
    id: 1,
    title: 'Air Jordan',
    price: 149,
    colors: [
      {
        code: 'lightgray',
        img: './images/jordan.png',
      },
      {
        code: 'green',
        img: './images/jordan2.png',
      },
    ],
  },
  {
    id: 2,
    title: 'Blazer',
    price: 109,
    colors: [
      {
        code: 'lightgray',
        img: './images/blazer.png',
      },
      {
        code: 'green',
        img: './images/blazer2.png',
      },
    ],
  },
  {
    id: 3,
    title: 'Crater',
    price: 129,
    colors: [
      {
        code: 'black',
        img: './images/crater.png',
      },
      {
        code: 'lightgray',
        img: './images/crater2.png',
      },
    ],
  },
  {
    id: 4,
    title: 'Hippie',
    price: 99,
    colors: [
      {
        code: 'gray',
        img: './images/hippie.png',
      },
      {
        code: 'black',
        img: './images/hippie2.png',
      },
    ],
  },
];

let chosenProduct = products[0];

// functions
menuItems.forEach((item, index) => {
  // changing slider
  item.addEventListener('click', () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // changing choosen product
    chosenProduct = products[index];

    // change texts of current product
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = '$' + chosenProduct.price;
    currentProductImg.src = chosenProduct.colors[0].img;
    currentProductSizes.textContent = chosenProduct.size;

    // assinging colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = chosenProduct.colors[index].code;
    });
  });
});

// changing product image colors on colors click
currentProductColors.forEach((color, index) => {
  color.addEventListener('click', () => {
    currentProductImg.src = chosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener('click', () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = 'white';
      size.style.color = 'black';
    });
    size.style.backgroundColor = 'black';
    size.style.color = 'white';
  });
});

// opening modal
productBtn.addEventListener('click', () => {
  paymentModal.style.display = 'flex';
});

// closing modal
closeBtn.addEventListener('click', () => {
  paymentModal.style.display = 'none';
});
