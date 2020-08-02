document.getElementById('generate-btn').addEventListener('click', function(){
    let pinDigits = Math.random()*10000;
    let pinNumber = Math.round(pinDigits);
    if(pinNumber>1000){
        document.getElementById('pin-display').value = pinNumber;
    }  
})

document.getElementById('dialPad-1').addEventListener('click',function(){
   clickDialPad(1);
})

document.getElementById('dialPad-2').addEventListener('click',function(){
    clickDialPad(2);
 })
 
 document.getElementById('dialPad-3').addEventListener('click',function(){
    clickDialPad(3);
 })
 
 document.getElementById('dialPad-4').addEventListener('click',function(){
    clickDialPad(4);
 })
 
 document.getElementById('dialPad-5').addEventListener('click',function(){
    clickDialPad(5);
 })
 
 document.getElementById('dialPad-6').addEventListener('click',function(){
    clickDialPad(6);
 })
 
 document.getElementById('dialPad-7').addEventListener('click',function(){
    clickDialPad(7);
 })
 
 document.getElementById('dialPad-8').addEventListener('click',function(){
    clickDialPad(8);
 })
 
 document.getElementById('dialPad-9').addEventListener('click',function(){
    clickDialPad(9);
 })

 document.getElementById('dialPad-0').addEventListener('click',function(){
    clickDialPad(0);
 })
 
 
 
       

function clickDialPad(number){
    let numberInput = document.getElementById('dialPad-' + number);
    let num = numberInput.innerText;
    let lockDisplay = document.getElementById('lock-display');
    lockDisplay.value += num;
}


// function handleProductChange(product, isIncrease){
//     // product quantity increment/decrement
//     let productInput = document.getElementById(product + '-count');
//     let productCount = parseInt(productInput.value);
//     let productNewCount = productCount;
//     if (isIncrease == true){
//         productNewCount = productCount + 1;
//     }
//     if (isIncrease == false && productNewCount>0){
//        productNewCount = productCount - 1;
//     }
//     productInput.value = productNewCount;
