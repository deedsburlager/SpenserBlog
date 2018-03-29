function myFunction(){
    var x = document.getElementById("myNav");
    if (x.className === "main_nav"){
        x.className += "responsive";
    }else{
        x.className = "main_nav"
    }
}