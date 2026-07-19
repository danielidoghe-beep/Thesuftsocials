const menu=document.getElementById("sideMenu");

const btn=document.getElementById("menuBtn");

let open=false;

btn.onclick=()=>{

if(open){

menu.style.right="-280px";

open=false;

}else{

menu.style.right="0";

open=true;

}

};

const themeBtn=document.getElementById("themeBtn");

themeBtn.onclick=()=>{

document.body.classList.toggle("dark");

};
