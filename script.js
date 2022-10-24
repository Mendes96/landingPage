var page1 = document.querySelector(".home");
var page2 = document.querySelector(".about");
var page3 = document.querySelector(".projetos");
var page4 = document.querySelector(".contatos");
var btHome = document.querySelector(".bt-home");
p = document.createElement("p");
page1.appendChild(p)
p.innerHTML = "INICIO";


function pg1(){
  page1.style.transition =  "0.5s";
  page1.style.width = "70%";
  
  page2.style.transition =  "0.5s";
  page2.style.width = "0";
  
  page3.style.transition =  "0.5s";
  page3.style.width = "0px";
  
  page4.style.transition =  "0.5s";
  page4.style.width = "0px";
}

function pg2(){
  page2.style.transition =  "0.5s";
  page2.style.width = "70%";
  
  page1.style.transition =  "0.5s";
  page1.style.width = "0px";
  
  page3.style.transition =  "0.5s";
  page3.style.width = "0px";
  
  page4.style.transition =  "0.5s";
  page4.style.width = "0px";
}

function pg3(){
  page3.style.transition =  "0.5s";
  page3.style.width = "70%";
  
  page1.style.transition =  "0.5s";
  page1.style.width = "0px";
  
  page2.style.transition =  "0.5s";
  page2.style.width = "0px";
  
  page4.style.transition =  "0.5s";
  page4.style.width = "0px";
}

function pg4(){
  page4.style.transition =  "0.5s";
  page4.style.width = "70%";
  
  page1.style.transition =  "0.5s";
  page1.style.width = "0px";
  
  page2.style.transition =  "0.5s";
  page2.style.width = "0px";
  
  page3.style.transition =  "0.5s";
  page3.style.width = "0px";
}

btHome.addEventListener("click", function home(){
  pg1()
  //se a Pagina conter P, ele não cria um novo
  if(!page1.contains(p)){
    p = document.createElement("p");
    page1.appendChild(p)
    p.innerHTML = "INICIO";
  }else{}
})

function about(){
  pg2()
  if(page1.contains(p)){
    page1.removeChild(p);
  }
}

function projetos(){
  pg3()
  if(page1.contains(p)){
    page1.removeChild(p);
  }
}

function contatos(){
  pg4()
  if(page1.contains(p)){
    page1.removeChild(p);
  }
}