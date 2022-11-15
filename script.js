
let formhandler = document.getElementById("btn").addEventListener('click', function(event){
    event.preventDefault();
    var fullName = document.getElementById('fname')
    var mail = document.getElementById('email').value;
    var regx = /^([a-zA-Z0-9\._\-]+)@([a-zA-Z0-9])+.([a-z]+ )(.[a-z]+)?$/
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirm");
    console.log(fullName.value);
    console.log(password.value);
    console.log(confirmPassword.value);
    console.log(mail.value);

    if(fullName.value.length < 3) {
        var error1 = document.getElementById('error1')
        error1.style.display="flex"
        error1.textContent="less than 3"
    }
    
    if (!regx.test(mail.value)) {
        // alert("user you have provided a valid email address");
        console.log(email.value);
        var error = document.getElementById("error");
        error.style.display ="flex";
        error.textContent="email address is not valid";

    }

    if (password.value.length < 8) {
        var error2 = document.getElementById('error2');
        error2.style.display="flex";
        error2.textContent="password must be at least 8 characters";
    }

    if (confirmPassword.value !== "password") {
        var error3 = document.getElementById('error3');
        error3.style.display="flex";
        error3.textContent="password must match";
        
    }else{
        (confirmPassword.value !== "password") 
            var error3 = document.getElementById('error3');
            error3.style.display="flex";
            error3.textContent="correct password";
    }
})
