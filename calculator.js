let currentvalue = '';
let currentOperation = '';
let previousvalue = '';

function applynumber(number) {
    currentvalue += number;
    document.getElementById('output').value = `${previousvalue} ${currentOperation} ${currentvalue}`;
}

function applyoperator(operation) {
    if (currentvalue === '') return;
    if (previousvalue !== '') {
        calculateoutput(); 
    }
    currentOperation = operation;
    previousvalue = currentvalue;
    currentvalue= '';
    document.getElementById('output').value = `${previousvalue} ${currentOperation}`;
}

function calculateoutput() {
    if (previousvalue === '' || currentvalue === '') return;
    let result;
    let prev = parseFloat(previousvalue);
    let current = parseFloat(currentvalue);

    switch (currentOperation) 
    {
        case '+':
            result=prev + current;
            break;
        case '-':
            result=prev - current;
            break;
        case '*':
            result=prev * current;
            break;
        case '/':
            if (current === 0) 
                {
                alert("ERROR! Cannot divide by zero");
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentvalue= result.toString();
    currentOperation = '';
    previousvalue = '';
    document.getElementById('output').value = currentvalue;
}

function cleardisplay() {
    currentvalue = '';
    previousvalue = '';
    currentOperation = '';
    document.getElementById('output').value = '';
}