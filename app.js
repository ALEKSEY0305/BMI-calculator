const BMI_HEADS = document.querySelectorAll('.bmi-head');
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

CALC_BTN.addEventListener('click', performBMICalc);

//bmi calculation form toggle
BMI_HEADS.forEach(bmiHead => {
    bmiHead.addEventListener('click', () => {
        if(bmiHead.id === "bmi-usc-head"){
            removeActiveClass();
            bmiHead.classList.add('active-head');
            BMI_SI.classList.remove('show-bmi');
            BMI_USC.classList.add('show-bmi');
            activeForm = 'bmi-usc';
        }
        if(bmiHead.id === "bmi-si-head"){
            removeActiveClass();
            bmiHead.classList.add('active-head');
            BMI_USC.classList.remove('show-bmi');
            BMI_SI.classList.add('show-bmi');
            activeForm = 'bmi-si';
        }
    });
});

// remove active class from heads
function removeActiveClass(){
    BMI_HEADS.forEach(bmiHead => {
        bmiHead.classList.remove('active-head');
    });
}


//main bmi calculation
function performBMICalc(){
    let BMIInfo = getUserInput();
}

//get input values 
function getUserInput(){
    let status;
    //get input from us units
    if(activeForm === "bmi-usc"){
        let age = document.getElementById('age1').value,
        gender = document.querySelector('#bmi-usc input[name = "gender"]:checked').value,
        heightFeet = document.getElementById('feet').value,
        heightInches = documet.getElementById('inches').value,
        weightPounds = document.getElementById('pounds').value;

        console.log(age, gender,heightFeet, heightInches, weightPounds);
    }
}
