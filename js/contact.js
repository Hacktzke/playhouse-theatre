const contactForm = document.querySelector("#contact-form");
const firstNameInput = document.querySelector("#f-name");
const lastNameInput = document.querySelector("#l-name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const ageSelect = document.querySelector("#age");
const messageInput = document.querySelector("#message");
const firstNameError = document.querySelector("#f-name-error");
const lastNameError = document.querySelector("#l-name-error");
const emailError = document.querySelector("#email-error");
const phoneError = document.querySelector("#phone-error");
const ageError = document.querySelector("#age-error");
const messageError = document.querySelector("#message-error");
const submitBtn = document.querySelector("#submit");
const submitError = document.querySelector("#submit-error");

let valid = true;

// FUNCTIONS FOR EACH INPUT BELOW

const checkFirstName = function() {
    let firstName = firstNameInput.value;
    let hasNum = /\d/.test(firstName);

    if (hasNum) {
        firstNameError.textContent = "Name cannot contain a number";
        firstNameInput.classList.add("error-input");
        valid = false;
    }
    else {
        if (firstName.length < 2) {
            firstNameError.textContent = "Must be at least 2 letters long";
            firstNameInput.classList.add("error-input");
            valid = false;
        }
        else {
            firstNameError.textContent = "";
            firstNameInput.classList.remove("error-input");
        }
    }    
}

const checkLastName = function() {
    let lastName = lastNameInput.value;
    let hasNum = /\d/.test(lastName);

    if (hasNum) {
        lastNameError.textContent = "Name cannot contain a number";
        lastNameInput.classList.add("error-input");
        valid = false;
    }
    else {
        if (lastName.length < 2) {
            lastNameError.textContent = "Must be at least 2 letters long";
            lastNameInput.classList.add("error-input");
            valid = false;
        }
        else {
            lastNameError.textContent = "";
            lastNameInput.classList.remove("error-input");
        }
    }
}

const checkEmail = function() {
    let email = emailInput.value;
    const emailRegExp = /^(\w+@[a-z\d]+?([a-z-\d_\.]*?)\.[a-z]{2,6})$/i; 
    if (email == "") {
        emailError.textContent = "Enter an email address";
        emailInput.classList.add("error-input");
        valid = false;
    }
    else if (email != "" && !emailRegExp.test(email)) {
        emailError.textContent = "Must be a valid email address";
        emailInput.classList.add("error-input");
        valid = false;
    }
    else {
        emailError.textContent = "";
        emailInput.classList.remove("error-input");
    }
}

const checkPhone = function() {
    let phoneNumber = phoneInput.value;
    let hasChar = /[a-zA-Z]/.test(phoneNumber);

    if (hasChar) {
        phoneError.textContent = "Number cannot contain letters";
        phoneInput.classList.add("error-input");
        valid = false;
    }
    else {
        if (phoneNumber.length < 9) {
            phoneError.textContent = "Enter a valid phone number";
            phoneInput.classList.add("error-input");
            valid = false;
        }
        else {
            phoneError.textContent = "";
            phoneInput.classList.remove("error-input");
        } 
    }
    
}

const checkAge = function() {
    let age = ageSelect.value;
    if (age == "") {
        ageError.textContent = "Select you age";
        valid = false;
        ageSelect.classList.add("error-input");
    }
    else {
        ageError.textContent = "";
        ageSelect.classList.remove("error-input");
    }
}

const checkMessage = function() {
    let message = messageInput.value;
    if (message == "") {
        messageError.textContent = "Please enter your comments";
        valid = false;
        messageInput.classList.add("error-input");
    }
    else {
        messageError.textContent = "";
        messageInput.classList.remove("error-input");
    }
}

// CHECK ALL INPUTS FUNCTION 

const checkForm = function() {
    checkFirstName();
    checkLastName();
    checkEmail();
    checkPhone();
    checkAge();
    checkMessage();
    return valid;
}

// FUNCTION BELOW CHECK TO SEE IF ALL FIELDS ARE CORRECT BEFORE SUBMITTING

contactForm.onsubmit = function(e) {
    valid = true;
    checkForm();
    if (!valid) {
        e.preventDefault();
        submitError.textContent = "Please fill in the form";
        setTimeout(() => {
            submitError.textContent = "";
        }, 3000);
    }
}

// EVENT LISTENERS THAT TRIGGER ERRORS INDEPENDENTLY

firstNameInput.addEventListener("change", checkFirstName);
lastNameInput.addEventListener("change", checkLastName);
emailInput.addEventListener("change", checkEmail);
phoneInput.addEventListener("change", checkPhone);
ageSelect.addEventListener("change", checkAge);
messageInput.addEventListener("change", checkMessage);
