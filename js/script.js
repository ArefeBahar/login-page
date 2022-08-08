function validate()
{
    let MyEmail = document.getElementById("Email").value;
    let MyPassword = document.getElementById("Pass").value;
    if (MyEmail==="johndoe@example.com" && MyPassword==="john123456")
    {
        alert("Login Successfuly!");
    }
    else{
        alert("Login Failed!");
    }
}
function PassError(){
    let MyPassword = document.getElementById("Pass").value;
    let LenghtofPassword = MyPassword.length;
    let PassWordError = document.getElementsByClassName("err_txt_password")[0];
    if(LenghtofPassword < 8)
    {
        PassWordError.style.display = "block"
    }
    else{
        PassWordError.style.display = "none"
    }
}