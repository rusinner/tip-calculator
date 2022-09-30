//declare variables
const sliders = document.querySelectorAll("input[type = 'range']");
const billInput = document.getElementById('bill');

//select both input type range
sliders.forEach(function(slider){
    slider.addEventListener('input',calculateTip);
});

//event listener to bill input
billInput.addEventListener('change',calculateTip);

//construct the tip function
function calculateTip(){
    //declare variables to inputs
 let bill = parseFloat(billInput.value);
 let tipPercent = document.getElementById('tip').value;
 let noOfPeople = document.getElementById('no-of-people').value;

 billInput.value = bill.toFixed(2);

 //calculate tip
 let totalTip = parseFloat((bill * (tipPercent / 100)).toFixed(2));
 let total = parseFloat((bill * totalTip).toFixed(2));

 let tipPerPerson = (totalTip / noOfPeople).toFixed(2);
 let totalPerPerson = (total / noOfPeople).toFixed(2);

}

