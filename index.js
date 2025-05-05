function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const amount = document.getElementById("amount").value.trim();
    const rate = document.getElementById("rate").value.trim();
    const years = document.getElementById("years").value.trim();
    // const check = document.getElementById("check");
    // const ageCheck = document.getElementById("age-check");
    
    if (!name || !email || !amount || !rate || !years) {
        alert("Please fill in all required fields!");
        return false; // Prevent calculation
    }else{
        window.location.href = 'aaaaa.html'
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

    document.getElementById("totalInterest").innerText = " " + totalInterest.toFixed(2);

    document.getElementById("monthlyPayment").innerText = " " + monthlyPayment.toFixed(2);

    document.getElementById("totalPayment").innerText = " " + totalPayment.toFixed(2);

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

