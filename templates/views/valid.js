var username=document.forms['form']['username'];
var password=document.forms['form']['password'];
var name_error=document.getElementById('name_error')
var pass_error=document.getElementById('pass_error')
username.addEventListener('textInput',username_verify);
password.addEventListener('textInput',password_verify);
function validated(){
    if(username.value.length < 6)
    {
        username.style.border="1px solid red";
        name_error.style.display="block";
        username.focus();
        return false;
    }
    if(password.value.length < 4)
    {
        password.style.border="1px solid red";
        pass_error.style.display="block";
        password.focus();
        return false;
    }
}
function username_verify()
{
    if(username.value.length >=6){
        username.style.border="1px solid silver";
        name_error.style.display="none";
        return true;
    }
}
function password_verify()
{
    if(password.value.length >=4){
        password.style.border="1px solid silver";
        pass_error.style.display="none";
        return true;
    }
}