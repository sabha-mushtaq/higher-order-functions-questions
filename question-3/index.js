const items = {
    BURGER: 5,
    VEGPIZZA: 15,
    NONVEGPIZZA: 25,
    PASTA: 13,
    BIRYANI: 28,
    CANDIES: 3,
    TV: 300,
    CARPETS: 1200,
    CURTAINS: 800,
    PILLOW: 250,
    SOAP: 7,
    WATCH: 13,
    MIRROR: 20,
    CAR: 10000,
    BIKE: 70000,
    GUMS: 2,
    REFRIGERATOR: 850,
    PIPE: 30,
    SUNGLASSES: 15,
    BULB: 17,
};


const rupeesValues = Object.fromEntries(
    Object.entries(items).map(([key, value]) => [key, value * 80])
);


function updatePriceDisplay() {
    const itemName = inputBox.value.toUpperCase();
    const usdPrice = items[itemName];
    const rupeesPrice = rupeesValues[itemName];

    if (usdPrice !== undefined && rupeesPrice !== undefined) {
        usdDiv.textContent = `$${usdPrice}`;
        rupeesDiv.textContent = `₹${rupeesPrice}`;
    } else {
        usdDiv.textContent = 'Item not found';
        rupeesDiv.textContent = '';
    }
}

const inputBox = document.querySelector('input');
const usdDiv = document.querySelector('.USD');
const rupeesDiv = document.querySelector('.rupees');


inputBox.addEventListener('input', updatePriceDisplay);

console.log(rupeesValues);
 

