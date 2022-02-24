// first name validation code start

function fname_val() {
    var fnameCheck = document.getElementById("fnameCheck"); 
    var fname = document.getElementById("fname");
    var fnameValue = fname.value;
    var fnameDiv = document.getElementById("fnameDiv");
    (fnameValue == "") ? (fname.value = "this field is empty") : (fnameCheck.style.display = "inline");
    (fnameValue == "" || fnameValue == "this field is empty") ? (fnameCheck.style.display = "none") : (fnameCheck.style.display = "inline");
    (fnameValue == "" || fnameValue == "this field is empty") ? (fnameDiv.style.border = "1px solid red") : (fnameDiv.style.border = "1px solid green");
    (fnameValue == "" || fnameValue == "this field is empty") ? (fname.style.color = "red") : (fname.style.color = "black");
}

// function is made for closing the first name validation
function fname_val_close(){
    var fnameCheck = document.getElementById("fnameCheck");
    var fname = document.getElementById("fname");
    var fnameValue = fname.value;
    var fnameDiv = document.getElementById("fnameDiv");
    (fnameValue == "this field is empty")?(fname.value = ""):(fname.value = fnameValue);
    (fnameValue == "this field is empty")?(fname.style.color = "black"):(fname.style.color = "black");
    (fnameValue == "this field is empty")?(fnameDiv.style.border = "1px solid black"):(fnameDiv.style.border = "1px solid black");

}

// first name validation code end

// last name validation code start

function lname_val(){
    var lname = document.getElementById("lname");
    var lnameValue = lname.value;
    var lnameCheck = document.getElementById("lnameCheck");
    var lnameDiv = document.getElementById("lnameDiv");
    (lnameValue == "")?(lname.value = "this field is empty"):(lnameCheck.style.display = "inline");
    (lnameValue == "" || lnameValue == "this field is empty")?(lnameCheck.style.display = "none"):(lnameCheck.style.display = "inline");
    (lnameValue == "" || lnameValue == "this field is empty")?(lname.style.color = "red"):(lname.style.color = "black");
    (lnameValue == "" || lnameValue == "this field is empty")?(lnameDiv.style.border = "1px solid red"):(lnameDiv.style.border = "1px solid green");
}

// function is made for closing the first name validation
function lname_val_close(){
    var lname = document.getElementById("lname");
    var lnameValue = lname.value;
    var lnameCheck = document.getElementById("lnameCheck");
    var lnameDiv = document.getElementById("lnameDiv");
    (lnameValue == "this field is empty")?(lname.value = ""):(lname.value = lnameValue);
    (lnameValue == "this field is empty")?(lname.style.color = "black"):(lname.style.color = "black");
    (lnameValue == "this field is empty")?(lnameDiv.style.border = "1px solid black"):(lnameDiv.style.border = "1px solid black");
    
}

// last name validation code end

// mobile validation code start 


function mob_val(){
    var mob = document.getElementById("mob");
    var mobValue = mob.value;
    var mobValueLength = mobValue.length;
    var mobDiv = document.getElementById("mobDiv");
    (mobValueLength == 10) ? (mob.style.color = "red") : (mob.style.color = "red");
    (mobValueLength == 10) ? (mob.setAttribute("type","number")) : (mob.setAttribute("type","text"));
    (mobValueLength == 10) ? (mob.value = mobValue) : (mob.value = "Enter 10 Digits mobile Number");
    (mobValueLength == 10) ? (mobDiv.style.border = "1px solid red") : (mobDiv.style.border = "1px solid red");
    (mobValueLength == 10) ? (mobFirstCharVal()) : (mobDiv.style.border = "1px solid red");
    
}

// function works after mobile number digit 10 number but not an indian number
function mobFirstCharVal(){
    var mob = document.getElementById("mob");
    var mobValue = mob.value;
    var mobDiv = document.getElementById("mobDiv");
    var mobCheck = document.getElementById("mobCheck");
    (mobValue.charAt(0) == 9 || mobValue.charAt(0) == 8 || mobValue.charAt(0) == 7 ||  mobValue.charAt(0) == 6)?(mob.setAttribute("type","number")) : (mob.setAttribute("type","text"));
    (mobValue.charAt(0) == 9 || mobValue.charAt(0) == 8 || mobValue.charAt(0) == 7 ||  mobValue.charAt(0) == 6)?(mob.value = mobValue):(mob.value = "Enter valid mobile number");
    (mobValue.charAt(0) == 9 || mobValue.charAt(0) == 8 || mobValue.charAt(0) == 7 ||  mobValue.charAt(0) == 6)?(mob.style.color = "black"):(mob.style.color = "red");
    (mobValue.charAt(0) == 9 || mobValue.charAt(0) == 8 || mobValue.charAt(0) == 7 ||  mobValue.charAt(0) == 6)?(mobDiv.style.border = "1px solid green"):(mobDiv.style.border = "1px solid red");
    (mobValue.charAt(0) == 9 || mobValue.charAt(0) == 8 || mobValue.charAt(0) == 7 ||  mobValue.charAt(0) == 6)?(mobCheck.style.display = "inline"):(mobCheck.style.display = "none");

}

// function made for closing the mobile number validation
function mob_val_close(){
    var mob = document.getElementById("mob");
    var mobValue = mob.value;
    var mobValueLength = mobValue.length;
    var mobDiv = document.getElementById("mobDiv");
    var mobCheck = document.getElementById("mobCheck");
    mob.style.color = "black";
    mobDiv.style.border = "1px solid black";
    mob.value = "";
    mobCheck.style.display = "none"
}

// mobile validation code end


// username validation code start
// username value follows the first name and lastname value 
function uname_val(){
    var firstNameValue = document.getElementById("fname").value;
    var lastNameValue = document.getElementById("lname").value;
    var username = document.getElementById("username");
    var usernameCheck = document.getElementById("usernameCheck");
    username.setAttribute("value",firstNameValue+lastNameValue);
    username.setAttribute("disabled","disabled");
    usernameCheck.style.display = "inline";
}
// username validation code end


// submit button validation code start

function submit_val(){
    var fnameValue = document.getElementById("fname").value;
    var lnameValue = document.getElementById("lname").value;
    var mobValue = document.getElementById("mob").value;
    var reMobValue = document.getElementById("remobile").value;
    var emailValue = document.getElementById("email").value;
    var usernameValue = document.getElementById("username").value;
    var passwordValue = document.getElementById("password").value;
    var submit = document.getElementById("submit");
    ((fnameValue,lnameValue,mobValue,reMobValue,emailValue,usernameValue,passwordValue == "") || (fnameValue,lnameValue == "this field is empty") || (mobValue == "Enter 10 Digits mobile Number") || (mobValue == "Enter valid mobile number"))?(submit.disabled = true):(submit.disabled = false);
    ((fnameValue,lnameValue,mobValue,reMobValue,emailValue,usernameValue,passwordValue == "") || (fnameValue,lnameValue == "this field is empty") || (mobValue == "Enter 10 Digits mobile Number") || (mobValue == "Enter valid mobile number"))?(submit.disabled = true):(submit.style.backgroundColor = "blue");
    ((fnameValue,lnameValue,mobValue,reMobValue,emailValue,usernameValue,passwordValue == "") || (fnameValue,lnameValue == "this field is empty") || (mobValue == "Enter 10 Digits mobile Number") || (mobValue == "Enter valid mobile number"))?(submit.style.cursor = "not-allowed"):(submit.style.cursor = "pointer");
    
    
    
}

// submit button validation code end