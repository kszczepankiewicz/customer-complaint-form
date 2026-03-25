const $ = id => document.getElementById(id);
const formEl = $('form');

const fullNameEl = $('full-name')
const emailEl = $('email');
const orderNoEl = $('order-no')
const productCodeEl = $('product-code')
const quantityEl = $('quantity')

const complaintsGroupEl = document.querySelectorAll('#complaints-group input')
const otherCompliantEl = $('other-complaint')
const complaintDescriptionEl = $('complaint-description')

const solutionsGroupEl = document.querySelectorAll('#solutions-group input')
const otherSolutionEl = $('other-solution')
const solutionDescriptionEl = $('solution-description')

const validateForm = () => {
    const obj = {
        'full-name': fullNameEl.value !== '',
        email: /^[^@]+@[\.]\..+$/.test(emailEl.value),
        'order-no': /^2024\d+$/.test(orderNoEl.value),
        'product-code': /^[a-zA-Z]{2}\d\d-[a-zA-Z]\d\d\d-[a-zA-Z]{2}\d$/.test(productCodeEl.value),
        'quantity': Number(quantityEl) > 0,
        'complaints-group': Array.from(complaintsGroupEl).some(input => input.checked === true),
        'complaint-description': otherCompliantEl.checked ? (complaintDescriptionEl.value.length
            >= 20) : true,
        'solution-description': otherSolutionEl.checked ? (solutionDescriptionEl.value.length
            >= 20) : true,
    }
    return obj;
}

const isValid = obj => Object.values(obj).every(inp => inp);

// debugger;

form.addEventListener('submit', (e) => {
    e.preventDefault;
    isValid(validateForm());
})