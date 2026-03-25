const $ = id => document.getElementById('form');
const formEl = $('form');
const emailEl = $('email');
const orderNoEl = $('order-no')
const productCodeEl = $('productCode')
const quantityEl = $('quantity')
const complaintsGroupEl = document.querySelectorAll('#complaints-group input')
const complaintsDescriptionEl = $('complaints-description')
const solutionsGroupEl = document.querySelectorAll('#solutions-group input')
const otherEl = $('other-complaint')

const validateForm = () => {
    const obj = {
        'full-name': form.value !== '',
        email: /^[^@]+@[\.]\..+$/.test(emailEl.value),
        'order-no': /^2024\d+$/.test(orderNoEl.value),
        'product-code': /^[a-zA-Z]{2}\d\d-[a-zA-Z]\d\d\d-[a-zA-Z]{2}\d$/.test(productCodeEl.value),
        'quantity': Number(quantityEl) > 0,
        'complaints-group': Array.from(complaintsGroupEl).some(input => input.checked === true),
        'complaint-description': otherEl

    }

    return obj;

}

console.log('otherEl')

// form.addEventListener('submit', (e) => {
//   e.preventDefault;

// })