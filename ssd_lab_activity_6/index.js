function submitForm() {
    if(ValidateEmail() === false) {
        alert("Email Not Valid");
        return ;
    }
    if(ValidateUserName() === false) {
        alert("User Name Not Valid");
        return ;
    }
    if(ValidatePassword() === false) {
        alert("Password Not Matches");
        return ;
    }
    let mname = document.forms["myForm"]["mname"].value;
    let email = document.forms["myForm"]["gemail"].value;
    let uname = document.forms["myForm"]["uname"].value;
    alert("Manager Name : " + mname + "\nEmail : " + email + "\nUserName : " +  uname);
}

function ValidateEmail() 
{
    let email = document.forms["myForm"]["gemail"].value;
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
    {   
        document.getElementById("gemailalert").innerText = "Invalid Email";
        return false;
    }
    else {
        document.getElementById("gemailalert").innerText = "";
        return true;
    }
}

function ValidateUserName() {
    
    let uname = document.forms["myForm"]["uname"].value;
    var i=0;
    var num = 0;
    var upper = 0;
    while (i <= uname.length){
        let char = uname.charAt(i);
        if (char >= '0' && char <= '9'){
            num = 1;
        }
        else if(char === char.toUpperCase()) {
            upper = 1;
        }
        i++;
    }
    // console.log(num, upper);
    if(num != 1 || upper != 1) {
        document.getElementById("unamealert").innerText = "Invalid Username";
        return false;
    }
    else {
        document.getElementById("unamealert").innerText = "";
        return true;
    }
}

function ValidatePassword() {
    
    let password = document.forms["myForm"]["spassword"].value;
    let cpassword = document.forms["myForm"]["cpassword"].value;
    
    if(password !== cpassword) {
        document.getElementById("passwordalert").innerText = "Password Not Matches";
        return false;
    }
    else {
        document.getElementById("passwordalert").innerText = "";
        return true;
    }
}

// Must have validation checks for at least one Uppercase and at least one Numeric character. For example ‘User1’.
// The validation must happen as the user types the value. Rather on every key stroke the check must happen.
// Show an error message ‘Invalid Username’ besides input field, if the field is invalid. Should disappear if field has valid entry.