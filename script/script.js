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


// remobile validation code start

function reMob_val(){
    var mobValue = document.getElementById("mob").value;
    var reMob = document.getElementById("remobile");
    var reMobValue = reMob.value;
    var reMobDiv = document.getElementById("reMobDiv");
    var reMobCheck = document.getElementById("reMobCheck");
    (reMobValue == "")?(reMob.setAttribute("type","text")):(reMob.setAttribute("type","number"));
    (reMobValue == "")?(reMob.value = "this field is empty"):reMobValue;
    (reMobValue == "")?(reMob.style.color = "red"):reMobValue;
    var check = (reMobValue == "")?(reMob.value = "this field is empty"):reMobValue;
    (check == mobValue)?(reMob.setAttribute("type","number")):(reMob.setAttribute("type","text"));
    (check == mobValue)?(reMob.value = reMobValue):(reMob.value = "Not match with mobile number");
    (reMobValue == "")?(reMob.value = "this field is empty"):reMobValue;
    (check == mobValue)?(reMobDiv.style.border = "1px solid green"):(reMobDiv.style.border = "1px solid red");
    (check == mobValue)?(reMob.style.color = "black"):(reMob.style.color = "red");
    (check == mobValue)?(reMobCheck.style.display = "inline"):(reMobCheck.style.display = "none");
}


// remobile validation close 
function reMob_val_close(){
    var reMob = document.getElementById("remobile");
    var reMobDiv = document.getElementById("reMobDiv");
    var reMobCheck = document.getElementById("reMobCheck");
    reMob.value = "";
    reMobDiv.style.border = "1px solid black";
    reMob.style.color = "black";
    reMobCheck.style.display = "none";
}

// remobile validation code end

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

// password validation code start 

function passwordHintEnable(){

    var passHint = document.getElementById("passHint");
    var password = document.getElementById("password");
    var passwordValue = password.value;
    ((passwordValue.charAt(0) == passwordValue.match(/[A-Z]/g))&&(passwordValue.match(/[a-z]/g)) && (passwordValue.match(/[0-9]/g)) && (passwordValue.match(/[~|`|!|@|#|$|%|^|&|*|(|_|-|+|=]/g)) && passwordValue.length >= 6)?(passHint.style.display = "none"):(passHint.style.display = "inline");
}

function pass_val(){
    var password = document.getElementById("password");
    var passwordUpper = document.getElementById("passwordUpper");
    var passwordLower = document.getElementById("passwordLower");
    var passwordNumber = document.getElementById("passwordNumber");
    var passwordAlphanumeric = document.getElementById("passwordAlphanumeric");
    var passHint = document.getElementById("passHint");
    var passwordValue = password.value;
    var FinalPassHintTag = document.getElementById("FinalPassHintTag");
    var smillyEmoji = document.getElementById("smillyEmogy");
    ((passwordValue.charAt(0) == passwordValue.match(/[A-Z]/g)))?(passwordUpper.style.display= "none"):(passwordUpper.style.display= "inline");
    (passwordValue.match(/[a-z]/g))?(passwordLower.style.display= "none"):(passwordLower.style.display= "inline");
    (passwordValue.match(/[0-9]/g))?(passwordNumber.style.display= "none"):(passwordNumber.style.display= "inline");
    (passwordValue.match(/[~|`|!|@|#|$|%|^|&|*|(|_|-|+|=]/g))?(passwordAlphanumeric.style.display= "none"):(passwordAlphanumeric.style.display= "inline");
    ((passwordValue.charAt(0) == passwordValue.match(/[A-Z]/g))&&(passwordValue.match(/[a-z]/g)) && (passwordValue.match(/[0-9]/g)) && (passwordValue.match(/[~|`|!|@|#|$|%|^|&|*|(|_|-|+|=]/g)))?(passHint.style.display = "none"):(passHint.style.display = "inline");
    ((passwordValue.charAt(0) == passwordValue.match(/[A-Z]/g))&&(passwordValue.match(/[a-z]/g)) && (passwordValue.match(/[0-9]/g)) && (passwordValue.match(/[~|`|!|@|#|$|%|^|&|*|(|_|-|+|=]/g)) && (passwordValue.length >= 6))?(FinalPassHintTag.innerHTML = "Strong Password"):(FinalPassHintTag.innerHTML = "Week Password");
    ((passwordValue.charAt(0) == passwordValue.match(/[A-Z]/g))&&(passwordValue.match(/[a-z]/g)) && (passwordValue.match(/[0-9]/g)) && (passwordValue.match(/[~|`|!|@|#|$|%|^|&|*|(|_|-|+|=]/g)) && (passwordValue.length >= 6))?(FinalPassHintTag.style.color = "green"):(FinalPassHintTag.style.color = "red");
    ((passwordValue.charAt(0) == passwordValue.match(/[A-Z]/g))&&(passwordValue.match(/[a-z]/g)) && (passwordValue.match(/[0-9]/g)) && (passwordValue.match(/[~|`|!|@|#|$|%|^|&|*|(|_|-|+|=]/g)) && (passwordValue.length >= 6))?(smillyEmoji.style.display = "inline"):(smillyEmoji.style.display = "none");

}


function pass_val_close(){
    var passHint = document.getElementById("passHint");
    passHint.style.display = "none";
}

// password validation code end



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