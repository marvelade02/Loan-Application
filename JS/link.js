function validateSignUp() {
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const passWord = document.getElementById('password').value.trim();
    const displayMessage = document.getElementById('displayMessage');

    if (!firstname || !lastname || !email || !passWord) {
        displayMessage.style.display = 'block'
        setTimeout(() => {
        displayMessage.style.display = 'none'
        }, 2000);
        return false; // Prevent 
    }
    window.location.href = 'request.html'
    return false;
}


var confirm = document.getElementById("confirm");
var loanBtn = document.getElementById("loanBtn");
var myForm = document.getElementById("myForm");
var amount = document.getElementById("amount");
var monthlyPayment = document.getElementById("monthlyPayment");
var years = document.getElementById("years");

loanBtn.addEventListener('click', () => {
    confirm.innerHTML = `<p>Your Loan Request of $${amount.value} is successful 🎉. You'll be paying the sum of $${monthlyPayment.toFixed(0)} for ${years.value * 12} months 🥰.</p> <button onclick="gotoHome()">Close</button>`
    myForm.style.display = "none";
    confirm.style.display = "flex";
})

function gotoHome() {
    window.location.href = "sign-up.html";
}