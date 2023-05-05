function getCurrentDate(){

    let date = new Date();
    const day_name = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day_number = date.getDate();
    let day = day_name[date.getDay()];
    const month_name = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    let month = month_name[date.getMonth()];
    let year = date.getFullYear();

    return day + ", " + month + " "+ day_number + " "  + year;
}
        
function getCurrentTime(){
    let time = new Date();
    document.getElementById("time").innerHTML = time.toLocaleTimeString();
}

function isEmpty(){
    if(document.getElementById("").value.length == 0) {
    alert("empty")
}
}

function isEmpty() {
    // Check for input text
    var x = document.forms["myform"]["dog-or-cat"].value;
        if (x == "") {
            alert("Please specify the type of animal (Cat or Dog)");
        }

    // Check for radio buttons
    var radioButton1 = document.getElementsByName("breed");
    var indicator = 0;

    for (var i = 0; i < radioButton1.length; i++) {
         if (radioButton1[i].checked) {
            indicator++;
            break;
            }
        }

    if(indicator==0)
        alert("Please select the type of breed of your animal.");

    var radioButton2 = document.getElementsByName("gender");
    var indicator2 = 0;

    for (var i = 0; i < radioButton2.length; i++) {
         if (radioButton2[i].checked) {
            indicator2++
            break;
            }
        }
    
    if(indicator2==0)
        alert("Please select the gender of your animal.");

    // Check for dropdown 
    var option = document.getElementById("age");
    if(option.selectedIndex != 0){
    }
    else
        alert("Select at least one of the options.");

    // Check for checkboxes
    var checkboxes = document.getElementsByName("environment");
    var indicator3 = 0;

    for (var i = 0; i < checkboxes.length; i++) {
         if (checkboxes[i].checked) {
            indicator3++;
            break;
            }
        }
    
    if(indicator3==0)
    alert("You need to check at least one boxe!");
}

function isEmpty2() {

    // Check for input text
    var x = document.forms["mysecondform"]["fname"].value;
    if (x == "") {
            alert("Please enter your first name");
    }

    var y = document.forms["mysecondform"]["lname"].value;
    if (y == "") {
            alert("Please enter your last name");
     }

    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = document.getElementById("email").value;
 
    if(!pattern.test(email)) {
         alert("Enter a valid email")
    }

    var z = document.forms["mysecondform"]["dog-or-cat"].value;
    if (z== "") {
        alert("Please specify the type of animal (Cat or Dog)");
    }

    // Check for radio buttons
    var radioButton1 = document.getElementsByName("breed");
    var radioButton2 = document.getElementsByName("gender");

    var indicator = 0;
    
    for (var i = 0; i < radioButton1.length; i++) {
         if (radioButton1[i].checked) {
            indicator++;
            break;
            }
    }

    if (indicator == 0)
        alert("Please select the type of breed of your animal.");

    var indicator2 = 0;  
    for (var i = 0; i < radioButton2.length; i++) {
         if (radioButton2[i].checked) {
            indicator++;
            break;
            }
        }

    if(indicator2 == 0)
        alert("Please select the gender of your animal.");

    // Check for checkboxes
    var checkboxes = document.getElementsByName("environment");
    var indicator3 = 0;  
    for (var i = 0; i < checkboxes.length; i++) {
         if (checkboxes[i].checked) {
            indicator3++;
            break;
            }
        }
    
    if(indicator3 == 0)
        alert("You need to check at least one boxe!");
    

    // Check for textarea
    var i = document.forms["mysecondform"]["textarea"].value;
    if (i == "") {
            alert("Please fill in a description.");
    }





}