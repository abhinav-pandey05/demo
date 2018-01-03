// document.getElementById("RT").style.display = "none";

document.getElementById("RT").style.display = "none";
//IIFE
var Age = (function () 
{
    return   {
        
   
        getAge : function() 
        {

            var num = document.getElementById("numb").value;
            console.log('getAge INSIDE', num);
            if (num == "" || num == 0) {
                console.log("Please enter your age!!!");
                return;
            }
            else if (num <= 0 || num >= 110) {
                console.log("Enter a valid age ");
                return;
            }
            else{
            var yob = 2017 - num;
            document.getElementById("RT").style.display = "flex";
            document.getElementById("RT").innerHTML = "You were born in ---" + yob;
            // return yob;
            }
        },
        init : function() {
            
            document.getElementById("btn").onclick = this.getAge;
        
        }
    }
    
})();
Age.init();
