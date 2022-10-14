const BMIT_HEADS = document.querySelectorAll('.bmi-head');
const BMI_USC = document.getElementById('bmi-usc');
const BMI_SI = document.getElementById('bmi-si');
const CALC_BTN = document.getElementById('calc-btn');
const CLR_BTN = document.getElementById('clr-btn');
let activeForm;

// event listeners
window.addEventListener('DOMContentLoaded', () => {
    BMI_USC.classList.add('show-bmi');
    activeForm = 'bmi-usc';
});

//bmi calculation
