document.getElementById("RT").style.display = "none";
//IIFE
var Age = (function () {
    return {
        dispYear: function () {
            var yob = Age.getAge();
            document.getElementById("RT").innerHTML = "You were born in ---  " + yob;
        },
        getAge: function () {
            document.getElementById("RT").style.display = "none";
            var num = document.getElementById("numb").value;
            if (num == "" || num == 0) {
                window.alert("Please enter your age!!!");
                return;
            } else if (num <= 0 || num >= 110) {
                window.alert("Enter a valid age ");
                return;
            } else {
                var currentYear = new Date().getFullYear();
                var yob = currentYear - num;
                document.getElementById("RT").style.display = "flex";

                return yob;
            }
        },
        init: function () {

            document.getElementById("ageform").onsubmit = function (e) {
                Age.dispYear();
                e.preventDefault();
            }
        }
    }

})();
Age.init();
