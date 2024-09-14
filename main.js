function allClear() {
    document.getElementById("text").value = "";
}

function deletefunc() {
    let InputBoxValue = document.getElementById("text").value;
    InputBoxValue = InputBoxValue.substring(0, InputBoxValue.length - 1);
    document.getElementById("text").value = InputBoxValue;
}

function addOperator(operator) {
    let InputBoxValue = document.getElementById("text").value;
    let lastChar = InputBoxValue.charAt(InputBoxValue.length - 1);

    // Ensure the last character is not an operator before adding a new one
    if (!["%", "/", "*", "+", "-", "."].includes(lastChar)) {
        document.getElementById("text").value = InputBoxValue + operator;
    }
    adjustFontSize();
    
}

function addnumber(number) {
    let InputBoxValue = document.getElementById("text").value;
    document.getElementById("text").value = InputBoxValue + number;
     adjustFontSize() ;
}



function calculate() {
    let InputBoxValue = document.getElementById("text").value;

    try{
        // Evaluate the expression
        let result = eval(InputBoxValue);
        document.getElementById("text").value = result;
    } catch (error) {
        document.getElementById("text").value = "Invalid expression";
    }
}
function handleKeyPress(event) {
    const key = event.key;

    if (key >= '0' && key <= '9') {
      addnumber(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      addOperator(key);
    } else if (key === '.') {
      addOperator(key);
    } else if (key === 'Enter') {
      calculate();
    } else if (key === 'Backspace') {
      allClear();
    }else if(key==='Delete'){
        deletefunc();
    }
  }

  document.addEventListener('keydown', handleKeyPress);

  function adjustFontSize() {
    const input = document.getElementById('text');
    const originalFontSize = 70; // Original font size in em
    let fontSize = originalFontSize;
    
    // Reset font size to original
    input.style.fontSize = originalFontSize + 'px';

    // Check if the text overflows
    while (input.scrollWidth > input.clientWidth && fontSize > 0.5) {
      fontSize -= 0.1;
      input.style.fontSize = fontSize + 'px';
    }
    
  }

// function adding() {
//     let InputBoxValue_add = document.getElementById("text").value;

//     // Ensure it contains exactly one "+" and no other operators
//     if (InputBoxValue_add.indexOf("+") !== -1 && InputBoxValue_add.indexOf("-") === -1 &&
//         InputBoxValue_add.indexOf("*") === -1 && InputBoxValue_add.indexOf("/") === -1 &&
//         InputBoxValue_add.indexOf("%") === -1) {

//         let placeValues_add = InputBoxValue_add.split("+");

//         if (placeValues_add.length === 2) {
//             let num1 = parseFloat(placeValues_add[0].trim());
//             let num2 = parseFloat(placeValues_add[1].trim());
//             document.getElementById("text").value = num1 + num2;
//         } else {
//             document.getElementById("text").value = "Invalid expression";
//         }
//     } else {
//         document.getElementById("text").value = "Invalid operator";
//     }
// }

// function subtracting() {
//     let InputBoxValue_sub = document.getElementById("text").value;

//     // Ensure it contains exactly one "-" and no other operators
//     if (InputBoxValue_sub.indexOf("-") !== -1 && InputBoxValue_sub.indexOf("+") === -1 &&
//         InputBoxValue_sub.indexOf("*") === -1 && InputBoxValue_sub.indexOf("/") === -1 &&
//         InputBoxValue_sub.indexOf("%") === -1) {

//         let placeValues_sub = InputBoxValue_sub.split("-");

//         if (placeValues_sub.length === 2) {
//             let num1 = parseFloat(placeValues_sub[0].trim());
//             let num2 = parseFloat(placeValues_sub[1].trim());
//             document.getElementById("text").value = num1 - num2;
//         } else {
//             document.getElementById("text").value = "Invalid expression";
//         }
//     } else {
//         document.getElementById("text").value = "Invalid operator";
//     }
// }