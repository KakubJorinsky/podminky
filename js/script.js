function Login(){
    const nickname = document.getElementById("nickname");
    const password = document.getElementById("password");
    const correct_password = document.getElementById("control_password");
    const output = document.getElementById("output");
    const code = document.getElementById("code")

    if((password.value == control_password.value) && (!isNaN(code.value))){
        output.innerHTML = "Login is true";
    }
    else{
        output.innerHTML = "Login is false";
    }

    if((nickname.value == "") || (password.value = "") || (correct_password.value == "") || (code.value == "")){
        output.innerHTML = "empty"
    }
}