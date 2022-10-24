var page1 = document.querySelector(".page1");
var page2 = document.querySelector(".page2");
var page3 = document.querySelector(".page3");

function home(){
  page1.style.width = "100%";
  page1.style.transition = "0.5s";
  page1.style.opacity = "1";
  
  page2.style.width = "0px";
  page2.style.transition = "0.5s";
  page2.style.opacity = "0";
  
  page3.style.width = "0px";
  page3.style.transition = "0.5s";
  page3.style.opacity = "0";
  
}

function about(){
  page2.style.width = "100%";
  page2.style.transition = "0.5s";
  page2.style.opacity = "1";
  
  page1.style.width = "0"
  page1.style.opacity = "0";
  page1.style.transition = "0.5s";
  
  page3.style.width = "0"
  page3.style.opacity = "0";
  page3.style.transition = "0.5s";
  
}

function shop(){
  page3.style.width = "100%";
  page3.style.transition = "0.5s";
  page3.style.opacity = "1";
  
  page1.style.width = "0"
  page1.style.opacity = "0";
  page1.style.transition = "0.5s";
  
  page2.style.width = "0"
  page2.style.opacity = "0";
  page2.style.transition = "0.5s";
  
}
