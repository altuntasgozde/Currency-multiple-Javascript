firstInput = document.getElementById("firstInput");
resultInput = document.getElementById("resultInput");
changeBtn = document.getElementById("button");

//EventListener
changeBtn.addEventListener("click",change);

// Change function 
function change(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://api.currencyapi.com/v3/latest?apikey=6eb298f0-5465-11ec-89a1-f78998a370de&currencies=EUR%2CUSD%2CGBP%2CCHF&base_currency=TRY");
  

    xhr.onload = function(){
        if(this.status === 200){
            if (document.getElementById("usd").checked){ 
   
                const response = JSON.parse(this.responseText);
    
                const rate = response.data.USD.value;
    
                const amount = Number(firstInput.value);
    
               resultInput.value = amount*rate;
            }

            if (document.getElementById("eur").checked){ 
   
                const response = JSON.parse(this.responseText);
    
                const rate = response.data.EUR.value;
    
                const amount = Number(firstInput.value);
    
               resultInput.value = amount*rate;
            }

            if (document.getElementById("gbp").checked){ 
   
                const response = JSON.parse(this.responseText);
    
                const rate = response.data.GBP.value;
    
                const amount = Number(firstInput.value);
    
               resultInput.value = amount*rate;
            }

            if (document.getElementById("chf").checked){ 
   
                const response = JSON.parse(this.responseText);
    
                const rate = response.data.CHF.value;
    
                const amount = Number(firstInput.value);
    
               resultInput.value = amount*rate;
            }
        }
    }
    xhr.send();
}