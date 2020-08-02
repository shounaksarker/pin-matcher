document.getElementById("pin-display").readOnly = true;
document.getElementById("lock-display").readOnly = true;

// pin- generating
document.getElementById('generate-btn').addEventListener('click', function(){
    let pinDigits = Math.random()*10000;
    let pinNumber = Math.round(pinDigits);
    if(pinNumber>1000){
        document.getElementById('pin-display').value = pinNumber;
    }  
})

// Number-pad

clickNumber(0);
clickNumber(1);
clickNumber(2);
clickNumber(3);
clickNumber(4);
clickNumber(5);
clickNumber(6);
clickNumber(7);
clickNumber(8);
clickNumber(9);

document.getElementById('dialPad-backspace').addEventListener('click',function(){
   clickDialPad('dlt');
})

document.getElementById('dialPad-clear').addEventListener('click',function(){
   clickDialPad('clear');
})


function clickNumber(num){
   document.getElementById('dialPad-'+num).addEventListener('click',function(){
      clickDialPad(num);
   })
}


// displaying number to locker.
function clickDialPad(number){
    let numberInput = document.getElementById('dialPad-' + number);
    if(number == 'dlt'){
        let display = document.getElementById('lock-display');
        let back = display.value.slice(0, -1);
        display.value = back;
    }
    else if(number == 'clear'){
        document.getElementById('lock-display').value = "";
    }
    else{
        let num = numberInput.innerText;
        let lockDisplay = document.getElementById('lock-display');
        lockDisplay.value += num;
    }    
}


// submition & matching
 document.getElementById('submit').addEventListener('click',function(){
     let pinNumber = document.getElementById('pin-display');
     let lockNumber = document.getElementById('lock-display');
   
      if (lockNumber.value == ""){
         displayCaution('nul', 'match', 'mismatch', true);
         tryLeft()
   }
      else if(lockNumber.value == pinNumber.value){
         displayCaution('match', 'mismatch', 'nul', true);
         window.location.href = ("secretDoor.html");
      }
      else{
         displayCaution('mismatch', 'match', 'nul', true);
         tryLeft()
      }
   })

 
 function displayCaution(fst,scnd,thrd, displayBlock){
    if(displayBlock = true){
    document.getElementById('pin-' + fst).style.display = 'block';
    }
    document.getElementById('pin-' + scnd).style.display = 'none';
    document.getElementById('pin-' + thrd).style.display = 'none';
 }
 
 function tryLeft(){
   let alertDigit = document.getElementById('alert-left').innerHTML;
   let alertInt = parseInt(alertDigit);
   let alertLeft = alertInt - 1;
   if( alertLeft > 0){
      document.getElementById('alert-left').innerHTML = alertLeft;
   }
   else{
      document.getElementById('submit').disabled = 'true';
      document.getElementById('alert').style.display = 'none';
      alert("চোরে সব চুরি কইরা নিয়া গেলো গো... 😱");
      document.getElementById('submit').style.backgroundColor = 'black'
   }

   
 }
       



               // ****** Submision & matching 
   //   if (lockNumber.value == ""){
   //      document.getElementById('pin-mismatch').style.display = 'none';
   //      document.getElementById('pin-match').style.display = 'none';
   //      document.getElementById('pin-null').style.display = 'block';
   //   }
   //   else if (pinNumber.value == lockNumber.value){
   //      document.getElementById('pin-match').style.display = 'block';
   //      document.getElementById('pin-mismatch').style.display = 'none';
   //      document.getElementById('pin-null').style.display = 'none';
   //  }
   //   else{
   //       document.getElementById('pin-match').style.display = 'none';
   //       document.getElementById('pin-mismatch').style.display = 'block';
   //       document.getElementById('pin-null').style.display = 'none';
   //    }
   //  })





                        // ******** dial pad *********
// document.getElementById('dialPad-1').addEventListener('click',function(){
//    clickDialPad(1);
// })

// document.getElementById('dialPad-2').addEventListener('click',function(){
//     clickDialPad(2);
//  })
 
//  document.getElementById('dialPad-3').addEventListener('click',function(){
//     clickDialPad(3);
//  })
 
//  document.getElementById('dialPad-4').addEventListener('click',function(){
//     clickDialPad(4);
//  })
 
//  document.getElementById('dialPad-5').addEventListener('click',function(){
//     clickDialPad(5);
//  })
 
//  document.getElementById('dialPad-6').addEventListener('click',function(){
//     clickDialPad(6);
//  })
 
//  document.getElementById('dialPad-7').addEventListener('click',function(){
//     clickDialPad(7);
//  })
 
//  document.getElementById('dialPad-8').addEventListener('click',function(){
//     clickDialPad(8);
//  })
 
//  document.getElementById('dialPad-9').addEventListener('click',function(){
//     clickDialPad(9);
//  })

//  document.getElementById('dialPad-0').addEventListener('click',function(){
//     clickDialPad('0');
//  })

//  document.getElementById('dialPad-backspace').addEventListener('click',function(){
//      clickDialPad('dlt');
//  })

//  document.getElementById('dialPad-clear').addEventListener('click',function(){
//     clickDialPad('clear');
// })
