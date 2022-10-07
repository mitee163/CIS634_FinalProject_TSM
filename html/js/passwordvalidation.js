function verifyPassword(){
    var pw = document.getElementById("password").value;
    //ckeck empty password
    if (pw == ""){
        alert("**Fill the Password!");
        return false;
    }

    //minimum password length
    if (pw.length < 8){
        alert("Enter atleast 8 characters");
        return false;
    }
    else {
        alert("Password is correct");
    }
}