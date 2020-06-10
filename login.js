function validate(n,p){
    
    if((n=="admin") && (p==12345))
    {
        alert("successfully logged in");
        return true;
       
    }
    else{
        alert("Incorrect credentials ");
        location.href="login.html";
    }
    
}
function login(){
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;

   validate(name,password,moveto());
}
function moveto(){
    location.href="todo.html";
}