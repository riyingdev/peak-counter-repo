const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const incBtn = document.getElementById('incBtn');
const dncBtn = document.getElementById('dncBtn');
const plusAll = document.getElementById('plusAll');
let result = document.getElementById('result');
let result2 = document.getElementById('result2');
let count = 0;

submitBtn.onclick = function () {
    let number1 = document.getElementById("numberX").value;
    let number2 = document.getElementById("numberY").value;
    number1 = Number(number1);
    number2 = Number(number2);
    let resultss = number1 + number2;
    result.textContent = resultss;
}
resetBtn.onclick = function () {
    document.getElementById("numberX").value = '';
    document.getElementById("numberY").value = '';
    result.textContent = '0';
    count = 0
    result2.textContent = count;
}
incBtn.onclick = function () {
    count+=1;
    result2.textContent = count;
}
dncBtn.onclick = function () {
    if (count>0) {
        count -= 1;
        result2.textContent = count;
    }
}
plusAll.onclick = function () {
    let resultValue = Number(result.textContent);
    let result2Value = Number(result2.textContent);

    // Add the values
    let addall = resultValue + result2Value;

    // Update the result and result2 text content
    result.textContent = '0';  // or keep the previous result value, depending on your requirement
    result2.textContent = '';
    result.textContent = addall;
}