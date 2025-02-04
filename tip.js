let bill = document.querySelector(".num_money");
let numPeople = document.querySelector(".num_people");
let custom = document.getElementById("custom");
let tip = document.querySelector(".tip_amount");
let total = document.querySelector(".total_amount");
const reset = document.getElementById("reset");
const error = document.getElementById("error");

const buttons = document.querySelectorAll(".btn_value");

function validateInputs() {
    const billInput = Number(bill.value);
    const tipInput = Number(custom.value); 
    const pplInput = Number(numPeople.value); 

    if (isNaN(billInput) || isNaN(tipInput) || isNaN(pplInput) || billInput <= 0 || tipInput <= 0 || pplInput <= 0) {
        return false;
    }
    return true;
}


function tipCalculator() {
     reset.style.backgroundColor = "var(--six-color)"
     
     if (!validateInputs) {
          tip.textContent = '$0.00';
          total.textContent = '$0.00';
          return;
     }

     if ((numPeople.value.trim() == " " || numPeople.value == 0) && (custom.value.trim() != " " && custom.value != 0)){
          numPeople.style.border = "2px solid #df0101";
          error.style.display = "block";
          return; 
     } 
     

     if (numPeople.value.trim() == " " || numPeople.value == 0) {
          tip.textContent = '0.00';
          total.textContent = '0.00';
          return;
     }

     error.style.display = "none";
     numPeople.style.border = "2px solid var(--six-color)";
     let totaTip = (bill.value * ( custom.value / 100)) / numPeople.value;
     tip.textContent = totaTip.toFixed(2);

     let Total = (bill.value + bill.value * ( custom.value / 100)) / numPeople.value;
     total.textContent = Total.toFixed(2);

};

function resetor() {
     bill.value = "";
     numPeople.value = "";
     custom.value = ""
     tip.textContent = "0.00";
     total.textContent = "0.00";
     reset.style.backgroundColor = "var(--secondary-color)"
     error.style.display = "none";
     numPeople.style.border = "none";
};


buttons.forEach(element => {
     element.addEventListener("click", function () {
          let tipPercent = parseFloat(element.textContent)
          custom.value = tipPercent;
          tipCalculator();
     });
});

bill.addEventListener("input", tipCalculator);
custom.addEventListener("input", tipCalculator);
numPeople.addEventListener("input", tipCalculator);

reset.addEventListener("click", resetor);