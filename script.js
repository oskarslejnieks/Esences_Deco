
var MenuItems=document.getElementById("mySidenav");
  MenuItems.style.width="0px";
    function menutoggle(){
      if(MenuItems.style.width == "0px"){
          MenuItems.style.width = "100%";
      }
      else{
          MenuItems.style.width = "0px";
      }
} 
