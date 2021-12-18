let counteradd=document.getElementById('counteradd');
let countersub=document.getElementById('countersub');
counteradd.onclick=()=>{
let countA= parseInt(document.getElementById('productcount').innerText);
document.getElementById('productcount').innerText=countA+1;
           }
countersub.onclick = () => {
let countA = parseInt(document.getElementById('productcount').innerText);
if(countA==1){
return;
}else{
document.getElementById('productcount').innerText = countA - 1;
}
}

let menu = document.querySelectorAll('.menu');
let allcontents = document.getElementById('1a');
let change;
menu.forEach(g => {
g.onclick = () => {
let dataId = g.getAttribute('data-id');
let content = document.getElementById(dataId);
if (dataId != '1a') {
allcontents.style.display = 'none';
}
if (change) {
change.style.display = 'none';
}
content.style.display = 'block';
change = content;
}
});