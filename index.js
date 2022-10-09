var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
    if (initialPrice.value === "") {
        showOutput("Please enter Initial Price","red");
        initialPrice.focus();
    } else if (stocksQuantity.value === "") {
        showOutput("Please enter Stock Quantity","red");
        stocksQuantity.focus();
    } else if (currentPrice.value === "") {
        showOutput("Please enter Current Price","red");
        currentPrice.focus();
    } else if (initialPrice.value <= 0 || stocksQuantity.value <= 0 || currentPrice.value <= 0){
        showOutput("Price and Quantity should be greater than zero.","red");
    } else {

        var ip = Number(initialPrice.value);
        var qty = Number(stocksQuantity.value);
        var curr = Number(currentPrice.value);
        
        calculateProfitAndLoss(ip, qty, curr);
    }
}

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss * 100) / (initial * quantity);
        showOutput(
            `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`, "red");
    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit * 100) / (initial * quantity);
        showOutput(
            `Hey, the profit is ${profit} and the percent is ${profitPercentage}%`,"green");
    } else {
        showOutput(`No pain no gain and no gain no pain`,"green");
    }
}

function showOutput(message, color) {
    outputBox.innerHTML = message;
    outputBox.style.color = color;
}