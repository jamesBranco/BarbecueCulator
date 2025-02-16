let inputAdults = document.getElementById("adults");
let inputChildren = document.getElementById("children");
let inputTime = document.getElementById("time");

let result = document.getElementById("result");

function calculate() {
    console.log("Calculating...");

    // Use || 0 to set default to 0 if the input is empty or invalid
    let adults = parseInt(inputAdults.value) || 0;
    let children = parseInt(inputChildren.value) || 0;
    let time = parseInt(inputTime.value) || 0;

    // Calculate total amounts
    let totalAmountBeef = beefPPerson(time) * adults + (beefPPerson(time) / 2 * children);
    let totalAmountBeer = beerPPerson(time) * adults; // Only adults consume beer
    let totalAmountBeverage = beveragePPerson(time) * (adults + children);

    // Convert beef to pounds (from grams)
    let totalPounds = ((totalAmountBeef / 1000) * 2.2).toFixed(2);

    // Determine singular/plural for beef
    let beefUnit = totalPounds <= 1 ? "pound" : "pounds";

    // Display results
    result.innerHTML = `<p>${totalPounds} ${beefUnit} of beef</p>`;
    result.innerHTML += `<p>${Math.ceil(totalAmountBeer / 355)} Cans of Beer</p>`;
    result.innerHTML += `<p>${Math.ceil(totalAmountBeverage / 1000)} Liters of Beverage</p>`;
}

// Function for meat per person
function beefPPerson(time) {
    return time >= 6 ? 650 : 400; // grams
}

// Function for beer per person
function beerPPerson(time) {
    return time >= 6 ? 2000 : 1200; // milliliters
}

// Function for beverage per person
function beveragePPerson(time) {
    return time >= 6 ? 1500 : 1000; // milliliters
}
