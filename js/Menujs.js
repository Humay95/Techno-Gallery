var Menubar=document.querySelector(".MenuBar");
var menu=document.querySelector(".menu");
var menuIcon=document.querySelector(".IconMenu");

Menubar.addEventListener("click",  function(){
menu.classList.remove("MenuMenu")

})
menuIcon.addEventListener("click",  function(){
    menu.classList.add("MenuMenu")
    
    })


var SearchInput=document.querySelector(".SearchInput");
var HeaderInput=document.querySelector(".HeaderInput");
var InputIcon=document.querySelector(".InputIcon");

SearchInput.addEventListener("click",  function(){
HeaderInput.classList.remove("InputInput")

})
InputIcon.addEventListener("click",  function(){
    HeaderInput.classList.add("InputInput")
})