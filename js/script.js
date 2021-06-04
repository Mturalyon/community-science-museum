const contactForm = document.querySelector(".contact-form");

const nameInput = document.querySelector("#name");
const nameError = document.querySelector("#name-error");

const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

const subjectInput = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");

const messageInput = document.querySelector("#message");
const messageError = document.querySelector("#message-error");

function formValidation(event) {
    event.preventDefault();

    let nameConfirm;
    let emailConfirm;
    let subjectConfirm;
    let messageConfirm;

    if (checkValidation(nameInput.value, 2)) {
        nameError.style.display = "none";
        nameConfirm = true;
    } else {
        nameError.style.display = "block";
        nameConfirm = false;
    };

    if (checkValidation(subjectInput.value, 3)) {
        subjectError.style.display = "none";
        subjectConfirm = true;
    } else {
        subjectError.style.display = "block";
        subjectConfirm = false;
    };

    if (checkValidation(messageInput.value, 4)) {
        messageError.style.display = "none";
        messageConfirm = true;
    } else {
        messageError.style.display = "block";
        messageConfirm = false;
    };

    if (checkEmail(emailInput.value)) {
        emailError.style.display = "none";
        emailConfirm = true;
    } else {
        emailError.style.display = "block";
        emailConfirm = false;
    };

    if (nameConfirm & subjectConfirm & emailConfirm & messageConfirm) {
        contactForm.classList.add("complete-container");
        contactForm.innerHTML = `<div>
                                    <span class="fa-stack fa-5x">
                                        <i class="fas fa-circle fa-stack-1x check-b"></i>
                                        <i class="fas fa-check-circle fa-stack-1x fa-inverse check-a"></i>
                                    </span>
                                    <h1>Thank you!</h1>
                                    <p>We will shortly be back to you on:</p>
                                    <p><b>${emailInput.value}</b></p>
                                    <a href="../index.html" class="back-btn">DONE</a>
                                </div>`;
    };

};

function checkValidation(value, length) {
    if (value.trim().length > length) {
        return true;
    } else {
        return false;
    };
};

function checkEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
};

contactForm.addEventListener("submit", formValidation);

