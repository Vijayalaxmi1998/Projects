let submitButton=document.querySelector("#submit1");
let billAmount=document.querySelector("#billAmount");
let discountPer=document.querySelector("#discount");
let result=document.querySelector("#result");

submitButton.addEventListener("click",()=>{
    let billAmount1=+billAmount.value;
    let discountPer1=+discountPer.value;
    let result1=billAmount1*discountPer1/100;
    console.log(result.innerHTML=result1);
})

document.getElementById('resetButton').addEventListener('click', function () {
    document.getElementById('billAmount').value = '';
    document.getElementById('discount').value = '';
    document.getElementById('result').innerText = '00.00';
});
