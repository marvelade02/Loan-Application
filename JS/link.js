function validateSignUp() {
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const passWord = document.getElementById('password').value.trim();
    const displayMessage = document.getElementById('displayMessage');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(emailRegex.test(email)) {
    // Email is valid
}else {
    // Email is invalid
    displayMessage.style.display = 'block'
displayMessage.innerHTML = 'Please enter a valid email address';
setTimeout(() => {
    displayMessage.style.display = 'none' 
}, 2000);
return false;
}
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
if(passwordRegex.test(passWord)) {
    // Password is valid   
}else {
    // Password is invalid
    displayMessage.style.display = 'block'
    displayMessage.innerHTML = 'Password should include upper and lower case, numbers, symbol and at least 8 characters long';
    setTimeout(() => {
        displayMessage.style.display = 'none' 
    }, 2000);
return false;
}
    if (!firstname || !lastname || !email || !passWord) {
        displayMessage.style.display = 'block'
        displayMessage.innerHTML = 'Please fill in all fields';
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
    window.location.href = "index.html";
}