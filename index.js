function validate(){
    var username= document.getElementById('username').value;
    var email= document.getElementById('email').value;
    var password= document.getElementById('password').value;
    var cpassword= document.getElementById('c_password').value;

    checkUsername(username);
    checkEmail( email);
    checkPassword(password);
    checkCpassword(password,cpassword);
}

    function checkUsername(username)
    {
        if(username.length>=5){
            document.getElementById('username').classList.add('success');
            document.getElementById('username').classList.replace('error','success');
            document.getElementById('username_error').innerHTML='';

        }else{
            document.getElementById('username').classList.add('error');
            document.getElementById('username_error').innerText="Enter valid Username";
        }
    }
    function checkEmail( email)
    {
        if(email.length>=8 && email.includes('@gmail.com')){
            document.getElementById('email').classList.add('success');
            document.getElementById('email').classList.replace('error','success');
            document.getElementById('email_error').innerHTML='';

        }else{
            document.getElementById('email').classList.add('error');
            document.getElementById('email_error').innerText="Enter must include @gmail.com and 8 letters long";
        }
    }
    function checkPassword(password)
    {
        if(password.length>=7 && password.includes('.')){
            document.getElementById('password').classList.add('success');
            document.getElementById('password').classList.replace('error','success');
            document.getElementById('password_error').innerHTML='';

        }else{
            document.getElementById('password').classList.add('error');
            document.getElementById('password_error').innerText="Password must be 7 letters long and include '.' operator";
        }
    }
    
    
    function checkCpassword(password,cpassword){
        if(password==cpassword && password!=''){
            document.getElementById('c_password').classList.add('success');
            document.getElementById('c_password').classList.replace('error','success');
            document.getElementById('match_error').innerHTML='';
        }else{
            document.getElementById('c_password').classList.add('error');
            document.getElementById('match_error').innerText="Password not matched";
        }
    }
    
