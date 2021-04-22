console.log("This Is My calculator");
let screen=document.getElementById('screen');
let buttons=document.querySelectorAll('button');
let screenVal='';
for (const item of buttons) {
    console.log("The Button Is",item);
     item.addEventListener('click',(e)=>{
         buttonText=e.target.innerText;     
         console.log(buttonText);
        
         if(buttonText=='X')
         {
            buttonText='*';
            screenVal +=buttonText;
            screen.value=screenVal;
         }
         else if(buttonText=='C')
         {
             screenVal="";
             screen.value=screenVal;
         }
         else if(buttonText== '=')
         {
             screen.value=eval(screenVal);
         }
         else if(buttonText=='B')
         {
           let value= document.getElementById('screen').value;
           let buttonText=document.getElementById("screen").value = value.substr(0, value.length - 1);
     
               screenVal=buttonText;
         }
         else {
            screenVal += buttonText;
            screen.value = screenVal;
        }
        })

}

