firstInput = document.getElementById("firstInput");
resultInput = document.getElementById("resultInput");
changeBtn = document.getElementById("button");

//EventListener
changeBtn.addEventListener("click",change);

// Change function 
function change(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://v6.exchangerate-api.com/v6/d82e33377c0590c246b3675a/latest/TRY");
  

    xhr.onload = function(){
        if(this.status === 200){
            if (document.getElementById("usd").checked){ 
   
                const response = JSON.parse(this.responseText);
    
                const rate = response.conversion_rates.USD;
    
                const amount = Number(firstInput.value);
    
               resultInput.value = amount*rate;
            }

            if (document.getElementById("eur").checked){ 
   
                const response = JSON.parse(this.responseText);
    
                const rate = response.conversion_rates.EUR;
    
                const amount = Number(firstInput.value);
    
               resultInput.value = amount*rate;
            }

            if (document.getElementById("gbp").checked){ 
   
                const response = JSON.parse(this.responseText);
    
                const rate = response.conversion_rates.GBP;
    
                const amount = Number(firstInput.value);
    
               resultInput.value = amount*rate;
            }

            if (document.getElementById("chf").checked){ 
   
                const response = JSON.parse(this.responseText);
    
                const rate = response.conversion_rates.CHF;
    
                const amount = Number(firstInput.value);
    
               resultInput.value = amount*rate;
            }
        }
    }
    xhr.send();
}