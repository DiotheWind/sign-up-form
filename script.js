const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const passwordCheckMessage = document.querySelector(".password-match-check");  

confirmPassword.onchange = () => {
    if(confirmPassword.value === password.value) {
        passwordCheckMessage.textContent = "Passwords matched"
        passwordCheckMessage.style.color = "green";
        password.setAttribute("style", "border: 1px solid green; box-shadow: 0px 0px 5px green;")
        confirmPassword.setAttribute("style", "border: 1px solid green; box-shadow: 0px 0px 5px green;")

    } else {
        passwordCheckMessage.textContent = "Passwords do not match!"
        passwordCheckMessage.style.color = "red";
        password.setAttribute("style", "border: 1px solid red; box-shadow: 0px 0px 5px red;")
        confirmPassword.setAttribute("style", "border: 1px solid red; box-shadow: 0px 0px 5px red;")
    }
}