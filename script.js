const intialPriceInput = document.querySelector('#initial-price-input');
const quantityInput = document.querySelector('#quantity-input');
const currentPriceInput = document.querySelector('#current-price-input');
const outputBox = document.querySelector('#output-box');
const submitBtn = document.querySelector('#submit-btn');


submitBtn.addEventListener('click', submitHandler);

function submitHandler() {
	var initialPrice = Number(intialPriceInput.value);
	var currentPrice = Number(currentPriceInput.value);
	var stocksQuantity = Number(quantityInput.value);

	calculateProfitOrLoss(initialPrice, stocksQuantity, currentPrice);
}


function calculateProfitOrLoss(initial, quantity, current) {

	if (initial > current) {
		let loss = (initial - current) * quantity;
		let lossPercentage = (loss / (initial * quantity)) * 100;
		outputBox.style.color = 'red';
		outputBox.innerHTML = `Oops!! Your loss is ${loss} and  percentage is ${lossPercentage}% :(`;
	} else if (initial < current) {
		let profit = (current - initial) * quantity;
		let profitPercentage = (profit / (initial * quantity)) * 100;
		outputBox.style.color = 'green';
		outputBox.innerHTML = `Hurray!! Your Profit is ${profit} and percentage is ${profitPercentage}%`;
	} else {
		outputBox.innerHTML = `No pain No gain and no gain no pain`;
	}
}