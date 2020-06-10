var xhttp;
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.responseText);
    var Jtodolist = response;
    var output = "";
    for(i=0;i<Jtodolist.length;i++){
      if(Jtodolist[i].completed==true)
      {
        output+="<input type='checkbox' checked class='box' >"
      }
      else
      {
        output+="<input type='checkbox' onchange='myfun()' name='chk'  class='box' >"  
      }
        output +="<div class='container'><ul>"
                 +"<li>"+"UserId :"+Jtodolist[i].userId+"</li>"
                 +"<li>"+"Id :"+Jtodolist[i].id+"</li>"
                 +"<li>"+"Title :"+Jtodolist[i].title+"</li>"
                 +"<li>"+"Completed :"+Jtodolist[i].completed+"</li>"
                 +"</ul></div>";
    }
    document.getElementById("content").innerHTML = output;
  }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
xhttp.send();
function myfun(){
  
  var a = document.querySelectorAll('input[name="chk"]:checked');
  console.log(a);
  
    var promise =new Promise(function(resolve,reject){
      
      if(a.length==5)
      {
        resolve("successfully completed five tasks");
      }
      else{
        reject("more to complete");
      }     
    });
    promise.then(function(s){
          alert(s);
    })
    .catch(function(e){
      console.log(e);
    })
   }