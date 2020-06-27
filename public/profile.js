var link3=document.querySelector("#change");

var popup=document.querySelector("#popup");
link3.addEventListener("click",function(){
  popup.style.display="flex";

});
var close=document.querySelector("#close");
close.addEventListener("click",function(){
  popup.style.display="none";
});
$("#loginbutton").click(function(){
	alert("Your Password is changed successfully!!")
})