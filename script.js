const $ = id => document.getElementById(id);
const formEl = $('form');

const fullNameEl = $('full-name')
const emailEl = $('email');
const orderNoEl = $('order-no')
const productCodeEl = $('product-code')
const quantityEl = $('quantity')

const complaintsGroupEl = $('complaints-group')
const complaintsGroupInputEls = document.querySelectorAll('#complaints-group input')
const otherCompliantEl = $('other-complaint')
const complaintDescriptionEl = $('complaint-description')

const solutionsGroupEl = $('solutions-group')
const solutionsGroupInputEls = document.querySelectorAll('#solutions-group input')
const otherSolutionEl = $('other-solution')
const solutionDescriptionEl = $('solution-description')

const validateForm = () => {
    const obj = {
        'full-name': fullNameEl.value !== '',
        email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailEl.value),
        'order-no': /^2024\d{6}$/.test(orderNoEl.value),
        'product-code': /^[a-zA-Z]{2}\d\d\-[a-zA-Z]\d\d\d\-[a-zA-Z]{2}\d$/.test(productCodeEl.value),
        'quantity': Number(quantityEl.value) > 0 && quantityEl.value % 1 === 0,
        'complaints-group': Array.from(complaintsGroupInputEls).some(input => input.checked === true),
        'complaint-description': otherCompliantEl.checked ? (complaintDescriptionEl.value.length
            >= 20) : complaintDescriptionEl.value === '',
        'solutions-group': Array.from(solutionsGroupInputEls).some(input => input.checked === true),
        'solution-description': otherSolutionEl.checked ? (solutionDescriptionEl.value.length
            >= 20) : solutionDescriptionEl.value === '',
    }
    return obj;
}

const isValid = obj => Object.values(obj).every(inp => inp);


form.addEventListener('submit', (e) => {
    e.preventDefault;
    isValid(validateForm());
})

fullNameEl.addEventListener('change', (e) => e.target.style.borderColor = validateForm()['full-name'] ? 'green' : 'red')
emailEl.addEventListener('change', (e) => e.target.style.borderColor = validateForm()['email'] ? 'green' : 'red')
orderNoEl.addEventListener('change', (e) => e.target.style.borderColor = validateForm()['order-no'] ? 'green' : 'red')
productCodeEl.addEventListener('change', (e) => e.target.style.borderColor = validateForm()['product-code'] ? 'green' : 'red')
quantityEl.addEventListener('change', (e) => e.target.style.borderColor = validateForm()['quantity'] ? 'green' : 'red');

complaintDescriptionEl.addEventListener('change', (e) => e.target.style.borderColor = validateForm()['complaint-description'] ? 'green' : 'red');
solutionDescriptionEl.addEventListener('change', (e) => e.target.style.borderColor = validateForm()['solution-description'] ? 'green' : 'red');

complaintsGroupEl.addEventListener('change', (e) => complaintsGroupEl.style.borderColor = validateForm()['complaints-group'] ? 'green' : 'red');
solutionsGroupEl.addEventListener('change', (e) => solutionsGroupEl.style.borderColor = validateForm()['solutions-group'] ? 'green' : 'red'); 
