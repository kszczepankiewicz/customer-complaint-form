const $ = id => document.getElementById(id);
const formEl = $('form');

const fullName = $('full-name')
const email = $('email');
const orderNo = $('order-no')
const productCode = $('product-code')
const quantity = $('quantity')

const otherCompliant = $('other-complaint')
const complaintDescription = $('complaint-description')
const otherSolution = $('other-solution')
const solutionDescription = $('solution-description')

// Missing in DeepSeek
const complaintsGroup = $('complaints-group')
const complaintsGroupInputs = document.querySelectorAll('#complaints-group input')
const solutionsGroup = $('solutions-group')
const solutionsGroupInputs = document.querySelectorAll('#solutions-group input')

const validateForm = () => {
    const obj = {
        'full-name': fullName.value !== '',
        'email': /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value),
        'order-no': /^2024\d{6}$/.test(orderNo.value),
        'product-code': /^[a-zA-Z]{2}\d\d\-[a-zA-Z]\d\d\d\-[a-zA-Z]{2}\d$/.test(productCode.value),
        'quantity': Number(quantity.value) > 0 && quantity.value % 1 === 0,
        'complaints-group': Array.from(complaintsGroupInputs).some(input => input.checked === true),
        'complaint-description': otherCompliant.checked ? (complaintDescription.value.length
            >= 20) : complaintDescription.value === '',
        'solutions-group': Array.from(solutionsGroupInputs).some(input => input.checked === true),
        'solution-description': otherSolution.checked ? (solutionDescription.value.length
            >= 20) : solutionDescription.value === '',
    }
    return obj;
}

const isValid = obj => Object.values(obj).every(inp => inp);


form.addEventListener('submit', (e) => {
    e.preventDefault();
    isValid(validateForm());
})

fullName.addEventListener('change', (e) => e.target.style.borderColor = validateForm()['full-name'] ? 'green' : 'red')
email.addEventListener('change', (e) => e.target.style.borderColor = validateForm()['email'] ? 'green' : 'red')
orderNo.addEventListener('change', (e) => e.target.style.borderColor = validateForm()['order-no'] ? 'green' : 'red')
productCode.addEventListener('change', (e) => e.target.style.borderColor = validateForm()['product-code'] ? 'green' : 'red')
quantity.addEventListener('change', (e) => e.target.style.borderColor = validateForm()['quantity'] ? 'green' : 'red');

complaintDescription.addEventListener('change', (e) => e.target.style.borderColor = validateForm()['complaint-description'] ? 'green' : 'red');
solutionDescription.addEventListener('change', (e) => e.target.style.borderColor = validateForm()['solution-description'] ? 'green' : 'red');

complaintsGroup.addEventListener('change', (e) => complaintsGroup.style.borderColor = validateForm()['complaints-group'] ? 'green' : 'red');
solutionsGroup.addEventListener('change', (e) => solutionsGroup.style.borderColor = validateForm()['solutions-group'] ? 'green' : 'red'); 
