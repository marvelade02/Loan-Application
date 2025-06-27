const mother = []

function validateForm() {
    let amount = document.getElementById("amount");
    let rate = document.getElementById("rate");
    let years = document.getElementById("years");
    
    // Check if fields are empty

    if (!amount.value.trim() || !rate.value.trim() || !years.value.trim()) {
        displayMsg.style.display = 'block'
        setTimeout(() => {
            displayMsg.style.display = 'none'
        }, 2000);
        return false; // Prevent 
    }
    // Validate Loan Amount
    else if (Number(amount.value) < Number(amount.min) || Number(amount.value) > Number(amount.max)) {
        displayMsg.style.display = 'block'
       displayMsg.innerText = `You can only get a loan between $${amount.min} and $${amount.max}.`
       setTimeout(() => {
        displayMsg.style.display = 'none'
        }, 2000);
       
        return false;
    }
    else if (Number(rate.value) < Number(rate.min) || Number(rate.value) > Number(rate.max)) {
        displayMsg.style.display = 'block'
        displayMsg.innerText = `You can only get a interest rate of ${rate.min}%.`
        setTimeout(() => {
         displayMsg.style.display = 'none'
         }, 2000);

        return false;
    }
    // Validate Repayment Years
    else if (Number(years.value) < Number(years.min) || Number(years.value) > Number(years.max)) {
        displayMsg.style.display = 'block'
        displayMsg.innerText = `Repayment Years must be between ${years.min} and ${years.max} years.`
        setTimeout(() => {
         displayMsg.style.display = 'none'
         }, 2000);
        return false;
    }

    return true; // Allow calculation
}

function Calculate() {
    a = Number(amount.value);
    r = Number(rate.value);
    y = Number(years.value);

    totalInterest = (a * r * y)/100;
    totalPayment = a + totalInterest;
    monthlyPayment = totalPayment / (y * 12);

    document.getElementById("totalInterest").innerText = " $" + totalInterest.toFixed(2);

    document.getElementById("monthlyPayment").innerText = " $" + monthlyPayment.toFixed(2);

    document.getElementById("totalPayment").innerText = " $" + totalPayment.toFixed(2);

    document.getElementById("loanSummary").style.display = "none";
}

function calculateLoan() {
    if (!validateForm()) { 
        return; // Stop execution if validation fails
    }
    Calculate()
    document.getElementById("loanSummary").style.display = "block"; // Only show loan summary when valid
}

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop default form submission
    calculateLoan(); // Run loan calculations after validation
});

// Hide loan summary initially
document.getElementById("loanSummary").style.display = "none";